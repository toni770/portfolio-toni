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

  const checkOverflow = () => {
    const el = mesureRef.current;
    if (!el) return;

    const hasOverflow = el.scrollWidth > el.clientWidth;
    console.log(el.scrollWidth, el.clientWidth);
    console.log(hasOverflow);
    setIsOverflowing(hasOverflow);
  };

  useEffect(() => {
    infiniteSliderAnimation(sliderRef);

    checkOverflow();

    // Optional: re-check on resize
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  useEffect(() => {
    checkOverflow();
  }, [technologies]);

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
