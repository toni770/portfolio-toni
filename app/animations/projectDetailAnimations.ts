import { RefObject } from "react";
import gsap from "gsap";

export function popUpAnimation(
  containerRef: RefObject<HTMLDivElement | null>,
  bgRef: RefObject<HTMLDivElement | null>,
  show: boolean
) {
  if (show) {
    gsap.to(containerRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(bgRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      onComplete: () => {
        bgRef.current?.classList.remove("pointer-events-none");
      },
    });
  } else {
    gsap.to(containerRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(bgRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      onComplete: () => {
        bgRef.current?.classList.add("pointer-events-none");
      },
    });
  }
}
