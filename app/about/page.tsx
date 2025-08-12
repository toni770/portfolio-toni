import React from "react";
import Image from "next/image";
import { KeplerStd } from "../fonts";
import { ArrowDownIcon, ChartPieIcon } from "@heroicons/react/24/solid";
import ServiceList from "../components/ServiceList";
import AboutInfiniteText from "../components/AboutInfiniteText";

const About = () => {
  return (
    <div className="flex flex-col justify-between w-full ">
      <div className="flex flex-col justify-end items-center pt-7 flex-1 min-h-[calc(100vh)] md:min-h-[calc(100vh-4rem)] px-7 py-7">
        <div className="absolute top-0 mt-20 md:mt-30 z-[-1] rounded-xl w-[70%] h-[60%] md:h-[70%] ">
          <Image
            src="/foto.jpeg"
            alt="Toni"
            fill
            priority
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-5xl w-[80%] md:w-[50%] text-center mb-10 md:mb-15">
          Im a creative
          <span className={`${KeplerStd.className}`}> freelance</span> helping
          startups with the design,
          <span className={`${KeplerStd.className}`}> development</span>, and
          maintenance of high-end
          <span className={`${KeplerStd.className}`}> webflow</span> websites.
        </h1>
        <ArrowDownIcon className="w-9 h-9 mb-5" />
        <p>Que puedo hacer por ti?</p>
      </div>
      <div className="flex flex-col items-center flex-1 min-h-[calc(100vh-3rem)]">
        <AboutInfiniteText />
        <div className="flex-1 flex items-end bg-[url('/bgCircle.png')] md:bg-[url('/bgSphere.png')] bg-contain bg-center md:bg-bottom bg-no-repeat md:bg-cover">
          <ServiceList />
        </div>
      </div>
    </div>
  );
};

export default About;
