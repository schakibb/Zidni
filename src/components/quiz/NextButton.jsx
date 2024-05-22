import React from "react";

function NextButton({ dispatch, answer, index, numQuestions, status }) {
  if (answer === null) return null;

  const colorDarkest = "#2D3748"; // Adjusted for better readability
  const colorDark = "#718096"; // Adjusted for better readability

  return (
    <div className="float-right">
      {index < numQuestions - 1 && (
        <button
          className={`inline-block font-semibold text-base sm:text-lg md:text-xl border-2 border-${colorDark} bg-${colorDark} px-4 py-1 md:px-6 md:py-2 rounded-full transition duration-500 hover:bg-${colorDarkest}`}
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
      {index === numQuestions - 1 && (
        <button
          className={`inline-block font-semibold text-base sm:text-base md:text-lg border-2 border-${colorDark} bg-${colorDark} px-4 py-1 md:px-6 md:py-2 rounded-full transition duration-500 hover:bg-${colorDarkest}`}
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      )}
    </div>
  );
}

export default NextButton;
