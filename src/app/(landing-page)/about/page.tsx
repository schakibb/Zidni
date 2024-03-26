import React from "react";
import AboutSectionTwo from "../../../components/global/About/AboutSectionTwo";
import Breadcrumb from "../../../components/global/Common/Breadcrumb";

export const metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
