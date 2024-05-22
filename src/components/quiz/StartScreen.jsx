import React from "react";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-6 font-semibold">
        Welcome to The React Quiz!
      </h2>
      <h3 className="text-lg md:text-xl lg:text-xl font-semibold mb-9">
        {numQuestions} questions to test your React mastery
      </h3>
      <button
        className="block font-inherit text-inherit text-base md:text-xl border-2 border-dark bg-dark hover:bg-darkest py-3 px-6 md:py-4 md:px-8 cursor-pointer rounded-full transition duration-300"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
