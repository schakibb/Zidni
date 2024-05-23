import { Fragment } from "react";
import { Message } from "./message";
import PropTypes from "prop-types";
import Link from "next/link";
import { buttonVariants } from "../../../ui/button";

Body.propTypes = {
  initQuestion: PropTypes.array,
  initResponse: PropTypes.array,
  isLoading: PropTypes.bool,
  listQst: PropTypes.array,
  listRes: PropTypes.array,
};

function Body({ initQuestion, initResponse, isLoading, listQst, listRes }) {
  const listInit = [];
  initQuestion.map((qst, index) => {
    listInit.push({
      qst,
      res: initResponse[index],
    });
  });

  const list = [];
  listQst.map((qst, index) => {
    list.push({ qst, res: listRes.length > index ? listRes[index] : "" });
  });

  return (
    <div className="flex bg-[#2c3240] justify-start flex-col space-y-5 overflow-y-auto w-full h-4/6 p-1.5">
      {listInit.map((msg, index) => {
        return (
          <Fragment key={index}>
            <Message isAns={false}>{msg.qst}</Message>
            {msg.res && <Message isAns={true}>{msg.res}</Message>}
          </Fragment>
        );
      })}
      {list.length === 0 && (
        <>
          <p className="flex justify-center items-center h-1/7 text-center text-[14px] text-[#A3A3A3]">
            This AI chatbot will help you discover the functionalities of the
            plateform and answer on you questions! For more information contact
            us{" "}
          </p>
          <Link
            href={"mailto::zidni.mailcon@gmail.com"}
            className={buttonVariants({ variant: "link" })}
          >
            zidni.mailcon@gmail.com
          </Link>
        </>
      )}
      {list.map((msg, index) => (
        <Fragment key={index}>
          <Message isAns={false}>{msg.qst}</Message>
          {msg.res && <Message isAns={true}>{msg.res}</Message>}
        </Fragment>
      ))}
      {isLoading && <Message isAns={true}>...</Message>}
    </div>
  );
}

export default Body;
