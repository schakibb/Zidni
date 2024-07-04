import { quizzesAlgebra } from "./algebra/questions";
import { quizzesSfsd } from "./sfsd/questions";
import { quizzesGraph } from "./thg/questions";

export const quizzes = [
  { name: "algebra", quizzes: quizzesAlgebra },
  {
    name: "sfsd",
    quizzes: quizzesSfsd,
  },
  {
    name: "thg",
    quizzes: quizzesGraph,
  },
];
