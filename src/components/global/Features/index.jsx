import { HoverEffect } from "../../ui/featuresCard";

import SectionTitle from "../Common/SectionTitle";
import featuresData from "../../../data/featuresData";

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
      <HoverEffect className={"-mt-24"} items={featuresData} />
    </>
  );
};

export default Features;
