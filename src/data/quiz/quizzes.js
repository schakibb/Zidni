import { quizzesAlgebra } from "./algebra/questions";
import { quizzesSfsd } from "./sfsd/questions";

export const quizzes = [
  { name: "algebra", quizzes: quizzesAlgebra },
  {
    name: "sfsd",
    quizzes: quizzesSfsd,
  },
];
