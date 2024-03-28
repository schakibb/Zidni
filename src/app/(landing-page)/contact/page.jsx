import Breadcrumb from "../../../components/global/Common/Breadcrumb";
import Contact from "../../../components/global/Contact";

export const metadata = {
  title: "Zidni Elearning Platform ",
  description: "Contact Page for Our platform",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
