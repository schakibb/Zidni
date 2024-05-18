"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
const Bot = () => {
  return (
    <motion.div>
      <div className="flex items-center gap-2">
        <span>
          <Sparkles />
        </span>
        <h1>Zidni's assistant</h1>
      </div>
      <p className="mt-1 ml-8 text-sm ">
        Welcome to Zidni 👋, happy to have ou here.
      </p>
    </motion.div>
  );
};
export const PresetQuestions = () => {
  return (
    <motion.div>
      <div className=""></div>
    </motion.div>
  );
};

export default Bot;
