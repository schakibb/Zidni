import React from "react";
import { Button } from "../ui/button";

export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  console.log("correct", question?.correctAnswer);
  return (
    <div className="flex flex-col gap-3 mb-7">
      {question?.answers.map((opt, index) => (
        <Button
          variant="secondary"
          className={` ${index === answer ? "translate-x-8" : ""} ${
            hasAnswered
              ? index === question.correctAnswer
                ? "bg-green-500"
                : index === answer
                ? "bg-red-500"
                : ""
              : ""
          }`}
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
