"use client";
import React, { forwardRef, useEffect } from "react";
import { KeplerStd } from "../fonts";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { texts } from "../texts";
import { infiniteTextAnimation } from "../animations/aboutAnimations";

// Infinite text slider appearing in About page.
const AboutInfiniteText = () => {
  const firstText = useRef<HTMLDivElement>(null);
  const secondText = useRef<HTMLDivElement>(null);
  const thirdText = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    infiniteTextAnimation(slider, firstText, secondText, thirdText);
  }, []);

  return (
    <div className="border-y border-darkGray w-full overflow-hidden h-[9rem] sticky top-0 bg-black z-[10]">
      <div
        ref={slider}
        className={`${KeplerStd.className} flex items-center gap-5 whitespace-nowrap relative `}
      >
        <InfiniteText text={texts.about.infiniteText} ref={firstText} />
        <InfiniteText text={texts.about.infiniteText} ref={secondText} />
        <InfiniteText text={texts.about.infiniteText} ref={thirdText} />
      </div>
    </div>
  );
};

// Text + Icon in Infinite Text Slider
const InfiniteText = forwardRef<
  HTMLDivElement,
  {
    text: string;
    className?: string;
  }
>(({ text, className }, ref) => {
  return (
    <div className={`flex gap-5 items-center ${className}`} ref={ref}>
      <CodeBracketIcon className="w-15 h-15" />
      <h2 className="text-[6rem]">{text}</h2>
    </div>
  );
});
InfiniteText.displayName = "InfiniteText";

export default AboutInfiniteText;
