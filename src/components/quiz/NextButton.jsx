import React from "react";
import { cn } from "../../utils/cn";
import { buttonVariants } from "../ui/button";

function NextButton({ dispatch, answer, index, numQuestions, status }) {
  if (answer === null) return null;
  return (
    <div className="float-right">
      {index < numQuestions - 1 && (
        <button
          className={cn(
            "text-base md:text-lg mb-10 py-1 lg:py-2 px-4 md:px-6 rounded-lg ",
            buttonVariants({ variant: "outline" })
          )}
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
      {index === numQuestions - 1 && (
        <button
          className={cn(
            "text-base md:text-lg mb-10 py-1 lg:py-2 px-4 md:px-6 rounded-lg ",
            buttonVariants({ variant: "outline" })
          )}
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      )}
    </div>
  );
}

export default NextButton;
