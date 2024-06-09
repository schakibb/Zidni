"use client";
import React from "react";
import Lottie from "react-lottie";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { cn } from "../../../utils/cn";
const VisualisationComponent = ({ animationData, title, description }) => {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="my-2 w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Visualisation: {title}</CardTitle>
        </CardHeader>
        <CardDescription>
          <span className="dark:text-[#f3f7a1] text-[#6e7228] text-sm">
            Click on the animation to toggle it.
          </span>
        </CardDescription>
        <div
          className={cn(
            "overflow-hidden",
            "w-full",
            "h-full",
            "flex",
            "items-center",
            "justify-center",
            "cursor-pointer"
          )}
        >
          <Lottie options={defaultOptions} />
        </div>
      </Card>
    </div>
  );
};
export default VisualisationComponent;
