import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let ctx: gsap.Context;
// Scale and opacity of Background image behind service list in Mobile View
export function mobileBgAnimation(
  imageBgRef: React.RefObject<HTMLImageElement | null>,
  secondPartRef: React.RefObject<HTMLDivElement | null>
) {
  gsap.registerPlugin(ScrollTrigger);
  ctx = gsap.context(() => {
    gsap.from(imageBgRef.current, {
      opacity: 0,
      scale: 0.5,
      ease: "power2.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: secondPartRef.current,
        start: "top 70%",
        end: "top 20%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  });
}

export function mobileBgAnimationRevert() {
  if (ctx) ctx.revert();
}

// Infinite Text Animation variables
let xPercent = 0;
let direction = -1;

let _slider: React.RefObject<HTMLDivElement | null>;
let _firstText: React.RefObject<HTMLDivElement | null>;
let _secondText: React.RefObject<HTMLDivElement | null>;
let _thirdText: React.RefObject<HTMLDivElement | null>;

// Infinite Text Animation between about and service list.
export function infiniteTextAnimation(
  slider: React.RefObject<HTMLDivElement | null>,
  firstText: React.RefObject<HTMLDivElement | null>,
  secondText: React.RefObject<HTMLDivElement | null>,
  thirdText: React.RefObject<HTMLDivElement | null>
) {
  _slider = slider;
  _firstText = firstText;
  _secondText = secondText;
  _thirdText = thirdText;
  gsap.registerPlugin(ScrollTrigger);
  requestAnimationFrame(animation);

  gsap.to(_slider.current, {
    scrollTrigger: {
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight,
      scrub: 0.25,
      onUpdate: (e) => (direction = e.direction * -1),
    },
    x: "-=300px",
  });
}

const animation = () => {
  if (_firstText.current) {
    if (xPercent < -102) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(_firstText.current, { xPercent: xPercent });
    gsap.set(_secondText.current, { xPercent: xPercent });
    gsap.set(_thirdText.current, { xPercent: xPercent });
    xPercent += direction * 0.1;
    requestAnimationFrame(animation);
  }
};
