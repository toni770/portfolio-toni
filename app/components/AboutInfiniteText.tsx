"use client";
import React, { forwardRef, useEffect } from "react";
import { KeplerStd } from "../fonts";
import { ChartPieIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutInfiniteText = () => {
  const firstText = useRef<HTMLDivElement>(null);
  const secondText = useRef<HTMLDivElement>(null);
  const thirdText = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent < -102) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });
    xPercent += direction * 0.1;
    requestAnimationFrame(animation);
  };
  return (
    <div className="border-y border-darkGray w-full overflow-hidden ">
      <div
        ref={slider}
        className={`${KeplerStd.className} flex items-center gap-5 whitespace-nowrap relative `}
      >
        <InfiniteText text="Soluciones personalizadas" ref={firstText} />
        <InfiniteText text="Soluciones personalizadas" ref={secondText} />
        <InfiniteText text="Soluciones personalizadas" ref={thirdText} />
      </div>
    </div>
  );
};

const InfiniteText = forwardRef<
  HTMLDivElement,
  {
    text: string;
    className?: string;
  }
>(({ text, className }, ref) => {
  return (
    <div className={`flex gap-5 items-center ${className}`} ref={ref}>
      <ChartPieIcon className="w-15 h-15" />
      <h2 className="text-[6rem]">{text}</h2>
    </div>
  );
});
InfiniteText.displayName = "InfiniteText";

export default AboutInfiniteText;
