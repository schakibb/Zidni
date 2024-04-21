"use client";
import AboutSectionTwo from "../components/global/About/AboutSectionTwo";
import Contact from "../components/global/Contact";
import Hero from "../components/global/Hero";
import { Testimonials } from "../components/ui/testimonials";
import { quotes } from "../data/quotes";
import Features from "../components/global/Features";
import Chatbot from "../components/global/chatbot/index";
// import Video from "../components/global/Video";
export default function Home() {
  return (
    <>
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
        speed="slower"
        pauseOnHover={true}
        type="testimonials"
        direction="right"
      />

      <Contact />
      <Chatbot />
    </>
  );
}
