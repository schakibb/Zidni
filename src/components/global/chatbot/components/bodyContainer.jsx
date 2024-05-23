/* eslint-disable react/prop-types */
import { useState } from "react";
import Body from "./body";
import { AnimatedTooltipPreview } from "../teamIcons";
import Link from "next/link";
import { buttonVariants } from "../../../ui/button";

function BodyContainer({
  initQuestion,
  initResponse,
  listQuestions,
  listResponses,
  isLoading,
  setMessage,
}) {
  const [questionInput, setQuestionInput] = useState("");
  console.log(initResponse);
  return (
    <div className="flex justify-center items-center flex-col rounded-lg h-4/5 w-full border border-[#A3A3A3] rounded-[10px] ">
      <div className="flex flex-col justify-center items-center w-full h-[20%] bg-gradient-to-br from-[#0754fa] to-[#4b82fa] rounded-t-lg font-bold text-2xl py-4 ">
        <AnimatedTooltipPreview />
        <h3>Chatbot</h3>
        <span className="flex justify-center items-center h-5 text-center text-[14px] text-[#3a4763]">
          For more information contact us{" "}
        </span>

        <Link
          href={"mailto::zidni.mailcon@gmail.com"}
          className={buttonVariants({ variant: "link" })}
        >
          zidni.mailcon@gmail.com
        </Link>
      </div>
      <Body
        initResponse={initResponse}
        initQuestion={initQuestion}
        isLoading={isLoading}
        listQst={listQuestions}
        listRes={listResponses}
      />
      <div className="flex items-center bg-gradient-to-br from-[#0754fa] to-[#4b82fa] w-full h-1/6 p-1.5 space-x-2.5 rounded-b-lg">
        <textarea
          className="flex-1 h-3/5 border-0 rounded-md p-1 bg-[#fdfdfd] text-gray-900 bg-blue-100 resize-none outline-none flex justify-center overflow-y-auto"
          type="text"
          placeholder="Ask something ..."
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
        />
        <button
          onClick={() => {
            setMessage(questionInput);
            setQuestionInput("");
          }}
          disabled={isLoading}
          className="scale-130 p-2"
        >
          <img
            src="./chatbot/send.svg"
            alt="send"
            className="transform scale-150"
          />
        </button>
      </div>
    </div>
  );
}

export default BodyContainer;
