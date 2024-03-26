"use client";
import Footer from "../components/global/Footer/index";
import Header from "../components/global/Header";
import AboutSectionTwo from "../components/global/About/AboutSectionTwo";
import ScrollUp from "../components/global/Common/ScrollUp";
import Contact from "../components/global/Contact";
import Hero from "../components/global/Hero";
import { Testimonials } from "../components/ui/testimonials";
import { quotes } from "../data/quotes";
import Features from "../components/global/Features";
import Chatbot from "../components/global/Chatbot/index";
// import Video from "../components/global/Video";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      <Testimonials
        direction="left"
        speed="fast"
        pauseOnHover={false}
        type="brand"
      />
      <AboutSectionTwo />
      <Testimonials
        items={quotes}
        speed="slow"
        pauseOnHover={true}
        type="testimonials"
        direction="right"
      />

      <Contact />
      <Chatbot />
      <Footer />
    </>
  );
}
