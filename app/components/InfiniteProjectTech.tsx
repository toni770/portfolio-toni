import React, { useEffect, useRef, useState } from "react";
import { AuxMono } from "../fonts";
import gsap from "gsap";

export const InfiniteProjectTech = ({
  technologies,
}: {
  technologies: string[];
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const mesureRef = useRef<HTMLDivElement>(null);

  const technologiesList = technologies.map((tech) => <p key={tech}>{tech}</p>);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const technologiesListWithIcons = technologiesList.map((tech, index) => (
    <React.Fragment key={index}>
      {tech}
      {(isOverflowing || index < technologiesList.length - 1) && (
        <p className="px-3">{">"}</p>
      )}
    </React.Fragment>
  ));

  useEffect(() => {
    requestAnimationFrame(animation);
    const el = mesureRef.current;
    if (!el) return;

    const checkOverflow = () => {
      console.log("RESIZE");
      const hasOverflow = el.scrollWidth > el.clientWidth;
      setIsOverflowing(hasOverflow);
    };

    checkOverflow();

    // Optional: re-check on resize
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const leftScroll = useRef(0);
  const animation = () => {
    if (sliderRef.current) {
      const totalWidth = sliderRef.current.scrollWidth / 2;

      if (leftScroll.current > totalWidth) {
        leftScroll.current = 0;
        sliderRef.current.scrollLeft = 0;
      } else {
        leftScroll.current += 0.5;
      }

      gsap.set(sliderRef.current, { scrollLeft: leftScroll.current });
      requestAnimationFrame(animation);
    }
  };
  return (
    <>
      <div
        ref={sliderRef}
        className={`${
          isOverflowing ? "block" : "hidden"
        } overflow-x-hidden whitespace-nowrap border-t border-darkGray py-7 flex justify-around ${
          AuxMono.className
        } text-sm`}
      >
        {technologiesListWithIcons}
        {technologiesListWithIcons}
      </div>
      <div
        ref={mesureRef}
        className={`${
          isOverflowing ? "hidden" : "block"
        } overflow-x-hidden whitespace-nowrap border-t border-darkGray py-7 px-3 flex justify-around ${
          AuxMono.className
        } text-sm`}
      >
        {technologiesListWithIcons}
      </div>
    </>
  );
};
