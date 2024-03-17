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

const quizzes = [
  {
    question:
      "What is the space complexity of a breadth-first search (BFS) algorithm on an unweighted graph?",
    answers: ["O(n)", "O(log n)", "O(n^2)", "O(n + m)", "O(n * log n)"],
    correctAnswer: 0,
    category: "Algorithm & Complexity",
  },
  {
    question:
      "Which of the following data structures is typically used to implement priority queues?",
    answers: ["Stack", "Queue", "Heap", "Linked List", "Array"],
    correctAnswer: 2,
    category: "Algorithm & Complexity",
  },
  {
    question:
      "What is the time complexity of a binary search on a sorted array?",
    answers: ["O(n)", "O(log n)", "O(n^2)", "O(n * log n)", "O(1)"],
    correctAnswer: 1,
    category: "Algorithm & Complexity",
  },
  {
    question:
      "Which of the following is not a common graph traversal algorithm?",
    answers: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Dijkstra's Algorithm",
      "A* Search Algorithm",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: 2,
    category: "Algorithm & Complexity",
  },
  {
    question: "What is the purpose of the Bellman-Ford algorithm?",
    answers: [
      "Finding the shortest path in a weighted graph",
      "Finding the strongly connected components in a graph",
      "Detecting cycles in a graph",
      "Finding the maximum flow in a flow network",
      "Finding the minimum spanning tree in a graph",
    ],
    correctAnswer: 0,
    category: "Algorithm & Complexity",
  },
  {
    question: "What is the worst-case time complexity of merge sort?",
    answers: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)", "O(n!)"],
    correctAnswer: 1,
    category: "Algorithm & Complexity",
  },
  {
    question:
      "Which of the following is not a type of graph traversal algorithm?",
    answers: [
      "Depth-First Search",
      "Breadth-First Search",
      "In-Order Traversal",
      "Pre-Order Traversal",
      "Post-Order Traversal",
    ],
    correctAnswer: 2,
    category: "Algorithm & Complexity",
  },
  {
    question: "What is the main purpose of the greedy algorithm?",
    answers: [
      "To find the best solution at each step without considering the global view",
      "To find the global optimum by considering all possible solutions",
      "To find the solution using recursive backtracking",
      "To find the solution using dynamic programming",
      "To find the solution by random sampling",
    ],
    correctAnswer: 0,
    category: "Algorithm & Complexity",
  },
  {
    question:
      "What is the main advantage of a hash table over other data structures?",
    answers: [
      "Constant time complexity for all operations",
      "Preserves the order of elements",
      "Allows for efficient sorting",
      "Has a fixed size",
      "Allows for efficient element removal",
    ],
    correctAnswer: 0,
    category: "Algorithm & Complexity",
  },
];
const dff = async () => {
  try {
    for (const quiz of quizzes) {
      const newQuiz = new Quiz(quiz);
      await newQuiz.save();
    }
    console.log("Quizzes added successfully.");
  } catch (err) {
    console.error("Error adding quizzes:", err.message);
  }
};

// dff();
