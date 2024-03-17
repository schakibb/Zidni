const mongoose = require("mongoose");

// Define Schema
const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: [
    {
      type: String,
      required: true,
    },
  ],
  correctAnswer: {
    type: Number,
    required: true,
    min: 0,
    max: 4,
  },
  category: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
