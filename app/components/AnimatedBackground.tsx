"use client";
import React, { useEffect, useRef } from "react";

// Animated background gradient in about page
const AnimatedBackground: React.FC = () => {
  const interBubbleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble!.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    function handleMouseMove(event: MouseEvent) {
      tgX = event.clientX;
      tgY = event.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient-bg w-full h-full md:h-[calc(100vh-4rem)] min-h-[calc(100vh)] absolute z-[-2] overflow-hidden top-0 md:top-[4rem] left-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fixed top-0 left-0 w-0 h-0"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive" ref={interBubbleRef}></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
