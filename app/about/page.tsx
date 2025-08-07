import React from "react";
import Image from "next/image";
import { KeplerStd } from "../fonts";
import {
  ArrowDownIcon,
  ChartPieIcon,
  PuzzlePieceIcon,
  GlobeAltIcon,
  UsersIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";
import ServiceCard from "../components/ServiceCard";

const About = () => {
  return (
    <div className="flex flex-col justify-between  w-full ">
      <div className="flex flex-col justify-end items-center pt-7 flex-1 min-h-[calc(100vh-4rem)] px-7 py-7">
        <div className="absolute top-0 mt-30 z-[-1] rounded-xl overflow-hidden">
          <Image
            src="/foto.jpeg"
            alt="Toni"
            width={350}
            height={350}
            priority
            className="object-cover"
          />
        </div>
        <h1 className="text-[2em] w-[40%] text-center mb-15">
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
      <div className="flex flex-col justify-between items-center flex-1 min-h-[calc(100vh-3rem)]">
        <div className="border-y border-darkGray w-full">
          <div className={`${KeplerStd.className} flex items-center gap-5`}>
            <ChartPieIcon className="w-15 h-15" />
            <h2 className="text-[4em]">Soluciones personalizadas</h2>
            <ChartPieIcon className="w-15 h-15" />
            <h2 className="text-[4em]">Soluciones personalizadas</h2>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center p-7 pb-20">
          <ServiceCard
            title="App"
            subtitle="IOS/Android"
            description="Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas"
            icon={<RectangleGroupIcon className="w-15 h-15" />}
          />
          <ServiceCard
            title="Desarrollo"
            subtitle="Web"
            description="Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas"
            icon={<GlobeAltIcon className="w-15 h-15" />}
          />
          <ServiceCard
            title="Integraciones"
            subtitle="a medida"
            description="Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas"
            icon={<PuzzlePieceIcon className="w-15 h-15" />}
          />
          <ServiceCard
            title="Inteligencia"
            subtitle="Artificial"
            description="Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas"
            icon={<UsersIcon className="w-15 h-15" />}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
