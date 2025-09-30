"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import ServiceList from "../components/ServiceList";
import AboutInfiniteText from "../components/AboutInfiniteText";
import AnimatedBackground from "../components/AnimatedBackground";
import {
  mobileBgAnimation,
  mobileBgAnimationRevert,
} from "../animations/aboutAnimations";
import { texts } from "../texts";
import { highlightText } from "../utils";

// About page.
const About = () => {
  const imageBgRef = useRef<HTMLImageElement>(null);
  const secondPartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    mobileBgAnimation(imageBgRef, secondPartRef);
    return () => mobileBgAnimationRevert();
  }, []);

  return (
    <div className="flex flex-col justify-between w-full ">
      <div className="flex flex-col justify-end items-center pt-7 flex-1 min-h-[calc(100vh)] md:min-h-[calc(100vh-4rem)] px-7 py-7">
        <AnimatedBackground />
        <div className="absolute top-0 mt-20 md:mt-30 z-[-1] rounded-xl w-[70%] md:w-[60%] lg:w-100 h-[60%] md:h-[70%] overflow-hidden ">
          <Image
            src="/fotoAbout.jpg"
            alt="Toni"
            fill
            priority
            className="object-cover"
            sizes="80vw"
          />
        </div>
        <h1 className="text-4xl md:text-5xl w-[80%] md:w-[50%] text-center mb-10 md:mb-15">
          {highlightText(texts.about.title)}
        </h1>
        <ArrowDownIcon className="w-9 h-9 mb-5" />
        <p>{texts.about.subtitle}</p>
      </div>
      <div className="flex flex-col items-center flex-1 md:min-h-[calc(100vh-3rem)]  min-h-[calc(100vh-6rem)]">
        <AboutInfiniteText />
        <div
          ref={secondPartRef}
          className="relative md:flex-1 flex items-end  md:bg-[url('/BgSphere.png')] bg-contain bg-center md:bg-bottom bg-no-repeat md:bg-cover"
        >
          <Image
            ref={imageBgRef}
            src="/bgCircle.png"
            alt="bgCircle"
            width={500}
            height={500}
            className={`md:hidden object-cover rounded-xl fixed top-[30%] z-[-10] left-1/2 -translate-x-1/2`}
          />
          <ServiceList />
        </div>
      </div>
    </div>
  );
};

export default About;
