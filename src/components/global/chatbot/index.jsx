import { useState, useEffect } from "react";
import OpenButton from "./components/openButton";
import BodyContainer from "./components/bodyContainer";
import initQuestionAns from "../../../data/chatbot/qstAns.json";

const initQuestion = initQuestionAns.questions.map((qst) => qst.question);
const initResponse = initQuestionAns.questions.map((qst) => qst.answer);

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setquestions] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [responses, setResponses] = useState([]);

  useEffect(
    function () {
      const controller = new AbortController();
      const sendMessage = async () => {
        try {
          setLoading(true);
          const response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: questions[questions.length - 1] }),
            signal: controller.signal,
          });
          const data = await response.json();
          setResponses((prev) => [...prev, data.answer]);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      if (
        questions.length > 0 &&
        questions?.at(questions.length - 1).length > 0
      ) {
        sendMessage();
      }
      return function () {
        controller.abort();
      };
    },
    [questions]
  );
  const handleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const handlequestion = (message) => {
    if (message !== "" && message.length > 1) {
      setquestions((prev) => [...prev, message]);
    }
  };
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-2.5 h-[90%] max-w-[30dvw] justify-end  ">
      {isOpen && (
        <BodyContainer
          initResponse={initResponse}
          initQuestion={initQuestion}
          listQuestions={questions}
          listResponses={responses}
          isLoading={isLoading}
          setMessage={handlequestion}
        />
      )}
      <OpenButton isWaiting={isLoading} setIsOpen={handleOpen} />
    </div>
  );
}

export default Chatbot;
