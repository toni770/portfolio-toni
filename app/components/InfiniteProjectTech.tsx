import React, { useEffect, useRef, useState } from "react";
import { AuxMono } from "../fonts";
import { infiniteSliderAnimation } from "../animations/infiniteSliderAnimations";

// Infinite Slider for project detail tech used.
export const InfiniteProjectTech = ({
  technologies,
}: {
  technologies: string[] | undefined;
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const mesureRef = useRef<HTMLDivElement>(null);

  const technologiesList = technologies?.map((tech) => (
    <p key={tech}>{tech}</p>
  ));
  const [isOverflowing, setIsOverflowing] = useState(false);

  const technologiesListWithIcons = technologiesList?.map((tech, index) => (
    <React.Fragment key={index}>
      {tech}
      {(isOverflowing || index < technologiesList.length - 1) && (
        <p className="px-3">{">"}</p>
      )}
    </React.Fragment>
  ));

  useEffect(() => {
    infiniteSliderAnimation(sliderRef);
    const el = mesureRef.current;
    if (!el) return;

    const checkOverflow = () => {
      const hasOverflow = el.scrollWidth > el.clientWidth;
      setIsOverflowing(hasOverflow);
    };

    checkOverflow();

    // Optional: re-check on resize
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

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
