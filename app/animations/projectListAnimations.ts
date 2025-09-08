import { RefObject } from "react";
import gsap from "gsap";

export function scrollAnimation(
  containerRef: RefObject<HTMLDivElement | null>,
  scrollPos: RefObject<number>,
  isAnimating: RefObject<boolean>
) {
  gsap.to(containerRef.current, {
    scrollLeft: scrollPos.current,
    duration: 0.5,
    ease: "power3.out",
    onComplete: () => {
      isAnimating.current = false;
    },
  });
}
