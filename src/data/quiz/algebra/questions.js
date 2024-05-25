export const quizzesAlgebra = [
  {
    question: "What is the commutative field considered in this document?",
    answers: ["K", "R", "R or C", "Z"],
    correctAnswer: 2,
    points: 10,
  },
  {
    question: "A linear system is said to be homogeneous if:",
    answers: [
      "All the constants on the right-hand side are zero",
      "All the constants on the right-hand side are non-zero",
      "The system has no solution",
      "The system has an infinite number of solutions",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question: "If a linear system has at least one solution, it is said to be:",
    answers: ["Incompatible", "Compatible", "Homogeneous", "Cramer"],
    correctAnswer: 1,
    points: 10,
  },
  {
    question: "The rank of a linear system is defined as:",
    answers: [
      "The rank of the coefficient matrix",
      "The rank of the constant matrix",
      "The rank of the augmented matrix",
      "The number of equations",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question:
      "In the vector form of a linear system, the columns of the coefficient matrix represent:",
    answers: [
      "The variables",
      "The coefficients",
      "The column vectors",
      "The constants",
    ],
    correctAnswer: 2,
    points: 10,
  },
  {
    question: "A Cramer system is a linear system:",
    answers: [
      "Whose coefficient matrix is invertible",
      "Whose coefficient matrix is singular",
      "Whose column vectors are linearly dependent",
      "Whose column vectors are orthogonal",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question: "For a Cramer system, the unique solution is given by:",
    answers: ["X = A^(-1) * B", "X = A * B", "X = B * A^(-1)", "X = B / A"],
    correctAnswer: 0,
    points: 10,
  },
  {
    question: "In a general linear system, the principal equations are:",
    answers: [
      "The equations whose coefficients are non-zero",
      "The first equations up to the rank of the system",
      "The equations whose constants are non-zero",
      "The last equations",
    ],
    correctAnswer: 1,
    points: 10,
  },
  {
    question: "In a general linear system, the principal unknowns are:",
    answers: [
      "The unknowns whose coefficients are non-zero",
      "The first unknowns up to the rank of the system",
      "The unknowns whose constants are non-zero",
      "The last unknowns",
    ],
    correctAnswer: 1,
    points: 10,
  },
  {
    question: "The principal matrix of a general linear system is:",
    answers: [
      "The coefficient matrix",
      "The constant matrix",
      "The submatrix of order equal to the rank with a non-zero determinant",
      "The augmented matrix",
    ],
    correctAnswer: 2,
    points: 10,
  },
  {
    question:
      "According to the Rouché-Fontené theorem, a necessary condition for the compatibility of a linear system is that:",
    answers: [
      "All the bordered determinants of the principal determinant are zero",
      "All the bordered determinants of the principal determinant are non-zero",
      "The principal determinant is non-zero",
      "The principal determinant is zero",
    ],
    correctAnswer: 1,
    points: 10,
  },
  {
    question:
      "In a compatible general linear system, the principal unknowns are determined:",
    answers: [
      "In terms of the non-principal unknowns by a Cramer system",
      "Independently of the non-principal unknowns",
      "Arbitrarily",
      "By solving the matrix equation AX = B",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question:
      "If a linear system of n equations with m unknowns has a rank r, then:",
    answers: ["r = m", "r = n", "r ≤ min(m, n)", "r ≥ max(m, n)"],
    correctAnswer: 2,
    points: 10,
  },
  {
    question:
      "In Cramer's rule for a system of n equations with n unknowns, the denominator is:",
    answers: [
      "The determinant of the coefficient matrix",
      "The determinant of the constant matrix",
      "The determinant of the augmented matrix",
      "The product of the determinants of the coefficient and constant matrices",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question: "If a linear system is incompatible, this means that:",
    answers: [
      "It has no solution",
      "It has a unique solution",
      "It has an infinite number of solutions",
      "It has at least one solution",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question:
      "The matrix of a linear map f: E → F relative to the bases B of E and C of F is denoted by:",
    answers: ["M(f)", "M(f, B, C)", "M(B, C)", "M(B, f, C)"],
    correctAnswer: 1,
    points: 10,
  },
  {
    question: "If E = F and B = C, the matrix of f is denoted by:",
    answers: ["M(f, B, C)", "M(f, B)", "M(B, f)", "M(f, C)"],
    correctAnswer: 1,
    points: 10,
  },
  {
    question:
      "Let f be the identity map on a vector space E of dimension n, and B a basis of E. Then M(f, B) is equal to:",
    answers: [
      "0",
      "I_n",
      "The column matrix of the coordinates of f in B",
      "The row matrix of the coordinates of f in B",
    ],
    correctAnswer: 1,
    points: 10,
  },
  {
    question: "The map M_{B,C} defined from L(E, F) to M_{n,m}(K) is a:",
    answers: [
      "Vector space isomorphism",
      "Unitary ring isomorphism",
      "Vector space homomorphism",
      "Unitary ring homomorphism",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question: "If E = F, the map M_B defined from End(E) to M_n(K) is a:",
    answers: [
      "Vector space isomorphism",
      "Unitary ring isomorphism",
      "Vector space homomorphism",
      "Unitary ring homomorphism",
    ],
    correctAnswer: 1,
    points: 10,
  },
  {
    question: "The rank of a matrix A is defined as:",
    answers: [
      "The rank of A considered as a linear map",
      "The rank of the set of column vectors of A",
      "The rank of the set of row vectors of A",
      "The dimension of the vector space spanned by the column vectors of A",
    ],
    correctAnswer: 1,
    points: 10,
  },
  {
    question: "If A is an invertible matrix, then:",
    answers: [
      "The column vectors of A are linearly independent",
      "The row vectors of A are linearly independent",
      "The rank of A is equal to its size",
      "All of the above",
    ],
    correctAnswer: 3,
    points: 10,
  },
  {
    question: "Let A be an invertible matrix. Then A^(-1) is equal to:",
    answers: [
      "M(f^(-1), B, C) where f is the linear map associated with A",
      "M(f^(-1), C, B) where f is the linear map associated with A",
      "M(f, B, C)^(-1) where f is the linear map associated with A",
      "None of the above",
    ],
    correctAnswer: 1,
    points: 10,
  },
  {
    question:
      "The transition matrix P_{B B'} from a basis B to a basis B' of a vector space E is defined by:",
    answers: [
      "P_{B B'} = M(Id_E, B, B')",
      "P_{B B'} = M(Id_E, B', B)",
      " (P_{B B'})^(-1) = M(Id_E, B', B)",
      "All of the above",
    ],
    correctAnswer: 3,
    points: 10,
  },
  {
    question:
      "Let x be a vector of E, B and B' two bases of E, X and X' the column matrices of the coordinates of x in B and B' respectively. Then:",
    answers: [
      "X' = P_{B B'} X",
      "X' = (P_{B B'})^(-1) X",
      "X = P_{B B'} X'",
      "X = (P_{B B'})^(-1) X'",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question:
      "Let f be a linear map from E to F, B and B' bases of E, C and C' bases of F. If A = M(f, B, C) and A' = M(f, B', C'), then:",
    answers: [
      "A' = A",
      "A' = P^(-1) A Q where P = P_{B B'} and Q = P_{C C'}",
      "A' = P A Q^(-1) where P = P_{B B'} and Q = P_{C C'}",
      "A' = Q A P where P = P_{B B'} and Q = P_{C C'}",
    ],
    correctAnswer: 1,
    points: 10,
  },
  {
    question:
      "Two matrices A and A' of size (n, m) are said to be equivalent if there exist invertible matrices P of order m and Q of order n such that:",
    answers: [
      "A' = P^(-1) A Q",
      "A' = P A Q^(-1)",
      "A' = Q^(-1) A P",
      "A' = Q A P^(-1)",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question:
      "Two square matrices A and A' of order n are said to be similar if there exists an invertible matrix P of order n such that:",
    answers: [
      "A' = P^(-1) A P",
      "A' = P A P^(-1)",
      "A' = P^(-1) A",
      "A' = A P^(-1)",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question: "If two square matrices A and A' are similar, then:",
    answers: [
      "They represent the same linear map in different bases",
      "They represent different linear maps in the same basis",
      "They are invertible",
      "They have the same rank",
    ],
    correctAnswer: 0,
    points: 10,
  },
  {
    question: "If two matrices A and A' are equivalent, then:",
    answers: [
      "They represent the same linear map",
      "They represent different linear maps between spaces of different dimensions",
      "They represent different linear maps between spaces of the same dimensions",
      "None of the above is correct",
    ],
    correctAnswer: 1,
    points: 10,
  },
];
