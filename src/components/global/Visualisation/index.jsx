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
const VisualisationComponent = ({
  width = 600,
  height = 400,
  animationData,
  title,
  description,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="m-2">
      <Card>
        <CardHeader>
          <CardTitle>Visualisation: {title}</CardTitle>
        </CardHeader>
        <CardDescription>
          {description}
          <br />
          <span className="dark:text-[#f3f7a1] text-[#6e7228] text-sm">
            <br />
            Click on the animation to toggle it.
          </span>
        </CardDescription>
        <CardContent
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
        </CardContent>
      </Card>
    </div>
  );
};
export default VisualisationComponent;
