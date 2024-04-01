// Importing mongoose library
import mongoose from "mongoose";

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
  matricule: {
    type: Number,
    required: true,
  },
});

const courseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  chapters: [
    {
      chapterId: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      chapterDescription: {
        type: String,
        required: true,
      },
    },
  ],
  path: {
    type: String,
    required: true,
  },
  next: {
    type: String,
    required: true,
  },
});
const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
});

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

const quizSchema = new mongoose.Schema({
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
  lesson: {
    type: String,
    required: true,
  },
});

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

export const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
export const Course =
  mongoose.models.Course || mongoose.model("Course", courseSchema);
export const Module =
  mongoose.models.Module || mongoose.model("Module", moduleSchema);
export const Enrollment =
  mongoose.models.Enrollment || mongoose.model("Enrollment", enrollmentSchema);
export const Quiz = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);
export const QuizScore =
  mongoose.models.QuizScore || mongoose.model("QuizScore", quizScoreSchema);
export const Attendance =
  mongoose.models.Attendance || mongoose.model("Attendance", attendanceSchema);
