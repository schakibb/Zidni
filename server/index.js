// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Quiz = require("./models/Quiz");

require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(() => console.log("connect"));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes
app.get("/quizzes", async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/quizzes", async (req, res) => {
  const quiz = new Quiz({
    name: req.body.name,
    description: req.body.description,
  });
  try {
    const newItem = await Quiz.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/items/:id", getQuiz, (req, res) => {
  res.json(res.item);
});

app.delete("/quizzes/:id", getQuiz, async (req, res) => {
  try {
    await res.quiz.remove();
    res.json({ message: "Quiz deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get item by ID
async function getQuiz(req, res, next) {
  let quiz;
  try {
    quiz = await Quiz.findById(req.params.id);
    if (quiz == null) {
      return res.status(404).json({ message: "Quiz not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.quiz = quiz;
  next();
}

// i didn't specify the port yet
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
