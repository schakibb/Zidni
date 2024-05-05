"use client";
import React from "react";
import * as storageUnits from "../../../../../data/visualisation/sfsd/storageUnits.json";
import Lottie, { LottiePlayer, Controls } from "lottie-react";
const page = () => {
  return (
    <>
      <LottiePlayer src={storageUnits}>
        <Controls
          visible={true}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </LottiePlayer>
    </>
  );
};

export default page;
