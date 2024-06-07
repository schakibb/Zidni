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
        <CardContent>
          <Lottie options={defaultOptions} height={height} width={width} />
        </CardContent>
      </Card>
    </div>
  );
};
export default VisualisationComponent;
