import React from "react";
import { Button } from "../ui/button";

export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="flex flex-col gap-4 mb-7">
      {question?.answers.map((opt, index) => (
        <Button
          variant="secondary"
          className={`text-wrap !h-fit ${
            index === answer ? "translate-x-8 !opacity-90" : "!opacity-40"
          } ${
            hasAnswered && index === question.correctAnswer
              ? "bg-green-500 !opacity-90"
              : ""
          }
          ${hasAnswered && index !== question.correctAnswer && "bg-red-500"}
          
          `}
          key={index}
          disabled={hasAnswered}
          onClick={() => {
            if (!hasAnswered) {
              dispatch({ type: "newAnswer", payload: index });
            }
          }}
        >
          {opt}
        </Button>
      ))}
    </div>
  );
}
