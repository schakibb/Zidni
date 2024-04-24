import { HoverEffect } from "../../ui/featuresCard";

import SectionTitle from "../Common/SectionTitle";
import { featuresData, mobileFeaturesData } from "../../../data/featuresData";

const Features = () => {
  return (
    <>
      <SectionTitle
        center={true}
        title={"Main Features"}
        paragraph={
          "We revolutionize learning with interactive lessons, personalized paths, rich content, progress tracking, and collaborative tools."
        }
      />
      <HoverEffect
        className={"-mt-24 mb-8 hidden sm:grid"}
        items={featuresData}
      />
      <HoverEffect
        className={"-mt-24 mx-5 mb-8 p-0 sm:hidden"}
        items={mobileFeaturesData}
      />
    </>
  );
};

export default Features;
