const router = require("express").Router();
const QuestionModel = require("../models/Question.Model.js");

// GET "/api/question" => Get random question
router.get("/", async (_, res, next) => {
  try {
    const question = await QuestionModel.aggregate([{$sample: { size: 3 }}]);
    res.json(question);
  } catch (error) {
    next(error);
  }
});

// POST "/api/question/new" => Create new question
router.post("/new", async (req, res, next) => {
  const { title, correctAnswer, incorrectAnswer } = req.body;

  try {
    const newQuestion = await QuestionModel.create({
      title,
      correctAnswer,
      incorrectAnswer,
    });
    res.json(newQuestion);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
