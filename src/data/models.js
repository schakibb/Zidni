// Importing mongoose library
const mongoose = require("mongoose");

// Schema for Students
const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

// Schema for Lessons
const lessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Schema for Modules
const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Schema for Enrollments (Many-to-Many relationship between Students and Lessons)
const enrollmentSchema = new mongoose.Schema({
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  lessonID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
    required: true,
  },
  enrolmentDate: {
    type: Date,
    required: true,
  },
});

// Schema for Quizzes
const quizSchema = new mongoose.Schema({
  quizNumber: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer1: {
    type: String,
    required: true,
  },
  answer2: {
    type: String,
    required: true,
  },
  answer3: {
    type: String,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  dateRecorded: {
    type: Date,
    required: true,
  },
  lessonID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
    required: true,
  },
});

// Schema for Quiz Scores (One-to-Many relationship between Quizzes and Students)
const quizScoreSchema = new mongoose.Schema({
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  quizNumber: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

// Schema for Attendance (Many-to-Many relationship between Students and Lessons)
const attendanceSchema = new mongoose.Schema({
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  lessonID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
    required: true,
  },
  attendanceStartTime: {
    type: Date,
    required: true,
  },
  attendanceEndTime: {
    type: Date,
    required: true,
  },
});

// Creating Mongoose models
const Student = mongoose.model("Student", studentSchema);
const Lesson = mongoose.model("Lesson", lessonSchema);
const Module = mongoose.model("Module", moduleSchema);
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
const Quiz = mongoose.model("Quiz", quizSchema);
const QuizScore = mongoose.model("QuizScore", quizScoreSchema);
const Attendance = mongoose.model("Attendance", attendanceSchema);

// Exporting the models
module.exports = {
  Student,
  Lesson,
  Module,
  Enrollment,
  Quiz,
  QuizScore,
  Attendance,
};
