import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "../../../data/featuresData";

const Features = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((feature) => (
          <SingleFeature key={feature.id} feature={feature} />
        ))}
      </div>
    </>
  );
};

export default Features;
