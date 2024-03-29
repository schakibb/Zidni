import React, { useEffect, useState, useRef } from "react";
import { cn } from "../../utils/cn";
import { brandsData } from "../../data/brandsData";
import SectionTitle from "../global/Common/SectionTitle";
export const Testimonials = ({
  type,
  items,
  direction = "left",
  speed = "medium",
  pauseOnHover = true,
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
        "scroller relative z-20 self-center overflow-hidden mask-image:linear-gradient(to right,transparent,white 20%,white 80%,transparent)",
        className
      )}
    >
      {type === "brand" && (
        <SectionTitle
          center={true}
          title={"Technologies"}
          paragraph={
            "Our platform is always up to date with the latest technology."
          }
        />
      )}
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:animation-play-state:paused"
        )}
      >
        {type === "brand" ? (
          <>
            {brandsData.map((brand) => (
              <li className="rounded-2xl px-8 py-6 " key={brand.id}>
                <img src={brand.image} alt={brand.alt} className="mx-12" />
              </li>
            ))}
          </>
        ) : (
          items.map((item) => (
            <li
              className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100% + 4px)] w-[calc(100% + 4px)]"
                ></div>
                <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
