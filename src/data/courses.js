export const courses = [
  {
    id: 42,
    title: "Analyse",
    description: "Introduction to calculus and mathematical analysis.",
    content:
      "Analyse course covers topics such as limits, derivatives, integrals, and their applications in various fields including physics, engineering, and economics. Emphasis is placed on understanding fundamental concepts and problem-solving techniques.",
    path: "/courses/analyse",
    next: "/courses/algebre",
  },
  {
    id: 4,
    title: "Algebre",
    description: "Fundamental concepts of algebra and linear equations.",
    content:
      "Algebre course introduces students to basic algebraic structures, including groups, rings, and fields. Topics include solving linear equations, matrices, determinants, and vector spaces. Applications in cryptography, coding theory, and computer science are explored.",
    path: "/courses/algebre",
    next: "/courses/oop",
  },
  {
    id: 22,
    title: "OOP",
    description: "Fundamentals of Object-Oriented Programming paradigms.",
    content:
      "OOP course provides a comprehensive introduction to object-oriented programming principles and practices. Topics covered include classes, objects, inheritance, polymorphism, encapsulation, and abstraction. Students learn to design and implement object-oriented solutions to real-world problems.",
    path: "/courses/oop",
    next: "/courses/os",
  },
  {
    id: 11,
    title: "Operating System",
    description: "Introduction to operating system concepts and structures.",
    content:
      "Operating System course explores the fundamental concepts and structures of modern operating systems. Topics include process management, memory management, file systems, and concurrency. Students gain hands-on experience through programming assignments and system administration tasks.",
    path: "/courses/os",
    next: "/courses/archi",
  },
  {
    id: 10,
    title: "Computer architecture",
    description:
      "Understanding the architecture and organization of computers.",
    content:
      "Computer architecture course examines the principles and design of computer systems at the hardware-software interface. Topics include instruction set architecture, processor design, memory hierarchy, input/output systems, and parallel architectures. Emphasis is placed on understanding the underlying principles and trade-offs in computer system design.",
    path: "/courses/archi",
    next: "/courses/completed_path",
  },
];
