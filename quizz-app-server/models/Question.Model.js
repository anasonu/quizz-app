const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    correctAnswer: {
        type: String,
        required: true,
    },
    incorrectAnswer: [{
        type: String,
        required: true,
    }],
})

const QuestionModel = model("question", questionSchema);
module.exports = QuestionModel;