import Footer from "../components/global/Footer/index";
import Header from "../components/global/Header";
import AboutSectionOne from "../components/global/About/AboutSectionOne";
import AboutSectionTwo from "../components/global/About/AboutSectionTwo";
import Blog from "../components/global/Blog";
import Brands from "../components/global/Brands";
import ScrollUp from "../components/global/Common/ScrollUp";
import Contact from "../components/global/Contact";
import Features from "../components/global/Features";
import Hero from "../components/global/Hero";
import Testimonials from "../components/global/Testimonials";
// import Video from "../components/global/Video";

export const metadata = {
  title: "Zidni elearning platform",
  description: "description",
};

export default function Home() {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
