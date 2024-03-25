"use client";
import React from "react";
import { AnimatedTooltip } from "../../ui/animated-tooltip";
const people = [
  {
    id: 2,
    name: "Baslimane Lokmane Elhakim",
    designation: "Software Engineer",
    image: "/team/lokmane.jpg",
  },
  {
    id: 1,
    name: "Haris Bel. Turki",
    designation: "Machine Learning Enthusiast",
    image: "/team/haris.jpeg",
  },
];
export const AnimatedTooltipPreview = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
};
