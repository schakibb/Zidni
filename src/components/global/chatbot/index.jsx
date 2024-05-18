"use state";
import React, { useState } from "react";
import Bot, { PresetQuestions } from "./Bot";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import { AnimatedTooltipPreview } from "./teamIcons";
import { ChevronDown, MessageCircle } from "lucide-react";
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  return (
    <motion.div
      layout
      animate={{
        bottom: isOpen ? 29 : 5,
      }}
      initial={{ bottom: 5 }}
      className="fixed bottom-5 right-5 z-[199] "
    >
      <motion.div
        className={cn(
          "size-16 border border-white shadow-2xl cursor-pointer flex items-center justify-center z-[100] bg-gray-800 fixed bottom-5 right-5",

          isOpen
            ? "w-[80dvw] sm:w-96 h-[80dvh] sm:h-[34rem] cursor-default rounded-lg bottom"
            : "rounded-full"
        )}
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
          }
          setIsDisplayed(false);
        }}
        layout
        animate={{
          borderRadius: isOpen ? 10 : 50,
        }}
        initial={{ borderRadius: 50 }}
        onAnimationComplete={() => {
          if (!isOpen) {
            setIsDisplayed(true);
          }
        }}
      >
        {isDisplayed && (
          <MessageCircle className="text-white h-[30px] w-[40px]" />
        )}
        {isOpen && (
          <motion.div className={`m-0 p-0 size-full rounded-xl`}>
            {/* <!-- Heading --> */}
            <div className=" flex flex-col space-y-1.5 bg-[#226EF2] rounded-lg py-4 shadow-xl">
              <AnimatedTooltipPreview />
              <p className="text-2xl decoration-4 self-center text-white dark:text-gray-50">
                Zidni Support Team
              </p>
              <p className="decoration-8 text-white leading-3 text-xs self-center">
                Got any questions? chat with us
              </p>
            </div>
            {isOpen && (
              <ChevronDown
                className="size-12 cursor-pointer text-white absolute bottom-1 right-3 rounded-full"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              />
            )}
            <div className="text-white mt-5 ml-3">
              <Bot />
              <PresetQuestions />
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Chatbot;
