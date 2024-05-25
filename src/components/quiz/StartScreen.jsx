import React from "react";
import { Button } from "../ui/button";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="flex flex-col items-center text-center mt-10">
      <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-6 font-semibold">
        Welcome to The Quiz section!
      </h2>
      <h3 className="text-lg md:text-xl lg:text-xl font-semibold mb-9">
        {numQuestions} questions to test your knowledge!
      </h3>
      <Button onClick={() => dispatch({ type: "start" })}>Start Quiz</Button>
    </div>
  );
}

export default StartScreen;
