// src/components/Options.js
import React from "react";
import "./Options.css";
import { Button } from "../../ui/button";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="flex flex-col gap-3 mb-7">
      {question.options.map((option, index) => (
        <Button
          variant="secondary"
          className={` ${index === answer ? "translate-x-8" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "bg-green-500"
                : "bg-red-500"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default Options;
