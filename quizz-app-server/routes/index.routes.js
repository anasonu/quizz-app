const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const questionRoutes = require("./question.routes.js");
router.use("/question", questionRoutes);

const rankingRoutes = require("./ranking.routes.js");
router.use("/ranking", rankingRoutes);

module.exports = router;
