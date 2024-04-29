import React, { useEffect, useState, useRef } from "react";
import { cn } from "../../utils/cn";
import { brandsData } from "../../data/brandsData";
import SectionTitle from "../global/Common/SectionTitle";
import Image from "next/image";
export const Testimonials = ({
  type,
  items,
  direction = "left",
  speed = "medium",
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        case "slower":
          duration = "150s";
          break;
        default:
          duration = "80s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 self-center overflow-hidden mask-image:linear-gradient(to right,transparent,white 20%,white 80%,transparent) mb-3",
        className
      )}
    >
      <SectionTitle
        center={true}
        title={type === "brand" ? "Technologies" : "Testimonials"}
        paragraph={
          type === "brand"
            ? "Our platform is always up to date with the latest technology."
            : "Experts Applaud Innovation, Testimonials Highlighting Enthusiastic Endorsements for Our Innovative Ideas."
        }
      />
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap mb-3",
          start && "animate-scroll",
          "hover:animation-play-state:paused"
        )}
      >
        {type === "brand" ? (
          <>
            {brandsData.map((brand) => (
              <li className="rounded-2xl px-8 py-6 " key={brand.id}>
                <Image
                  width={50}
                  height={50}
                  src={brand.image}
                  alt={brand.alt}
                  className="mx-12"
                />
              </li>
            ))}
          </>
        ) : (
          items.map((item) => (
            <li
              className="bg-blue-100 dark:bg-[#0f1115] h-[250px] w-[300px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[400px] mx-3"
              key={item.name}
            >
              <blockquote>
                <div className="mt-3 mb-7">
                  <p className="font-bold dark:text-white text-black sm:text-xl">
                    {item.quote}
                  </p>
                </div>
                <footer className="mt-4 text-sm font-medium text-blue-500 sm:mt-6">
                  {item.name}, {item.title}
                </footer>
              </blockquote>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
