"use client";
import Image from "next/image";
import SocialNetworks from "./components/SocialNetworks";
import Button from "./components/Button";
import ProjectList from "./components/ProjectList";
import { useEffect, useRef, useState } from "react";
import { project } from "./projectData";
import ProjectDetail from "./components/ProjectDetail";
import { texts } from "./texts";
import {
  initAnimations,
  showProjectsAnimation,
} from "./animations/homeAnimations";
import { useLayout } from "./useHeader";
import { popUpAnimation } from "./animations/projectDetailAnimations";

// Home Page.
export default function Home() {
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const socialNetworksRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const firstPageRoot = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<project | null>(null);
  const scrollPos = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showProjects, setShowProjects] = useState(false);
  const { setHideHeader, setFooterInFront } = useLayout();

  const popUpContainerRef = useRef<HTMLDivElement>(null);
  const popUpBgRef = useRef<HTMLDivElement>(null);

  function handleClose() {
    setSelectedProject(null);
    setHideHeader(false);
    setFooterInFront(true);
    popUpAnimation(popUpContainerRef, popUpBgRef, false);
  }

  function handleOpen(project: project) {
    setSelectedProject(project);
    setHideHeader(true);
    setFooterInFront(false);
    popUpAnimation(popUpContainerRef, popUpBgRef, true);
  }

  useEffect(() => {
    initAnimations(
      imageRef,
      projectsRef,
      firstPageRoot,
      root,
      textRef,
      socialNetworksRef
    );
  }, []);

  function GoToProjects() {
    setShowProjects(true);
    showProjectsAnimation(true);
  }
  function GoBackHome() {
    setShowProjects(false);
    showProjectsAnimation(false);
  }

  return (
    <div ref={root} className="w-full">
      <div
        ref={firstPageRoot}
        className="flex flex-col justify-between items-center md:items-start transition-all duration-1000 ease-in-out md:h-[calc(100vh-4rem)] md:min-h-[calc(100vh-7rem)] min-h-[calc(100vh-6rem)] h-[calc(100vh)] w-full py-7 pt-20 md:pt-0"
      >
        <div className="w-full px-7">
          <div className="relative md:w-[70%] h-30 md:h-50 md:h-50 lg:h-70 ">
            <Image
              src="/LogoToniWhite.svg"
              alt="Toni logo"
              fill
              priority
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <SocialNetworks
            ref={socialNetworksRef}
            className="opacity-100 transition-opacity duration-1000 ease-in-out md:pl-[3%] px-7 md:px-0  text-base md:gap-15 justify-between md:justify-start"
            linkClassName="border-r-0"
          />
        </div>

        <div
          ref={imageRef}
          className="w-full pointer-events-none opacity-100 md:opacity-100 transition-opacity duration-1000 ease-in-out absolute inset-0 m-auto md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 md:bottom-0 md:right-0 z-[1]  md:w-[50%] lg:w-[35%] md:h-[80%] h-[40%] w-100 bg-image:url('/LogoArmadilloGlow.png')"
        >
          <Image
            src="/LogoArmadilloGlow.png"
            alt="Armadillo logo"
            fill
            priority
            className="object-contain"
            sizes="80vw"
          />
        </div>

        <div className="px-7 md:w-[50%] lg:w-[40%] flex flex-col items-center md:items-start">
          <Button
            text={showProjects ? texts.home.buttonBack : texts.home.button}
            className="w-[250px]"
            onClick={() => (showProjects ? GoBackHome() : GoToProjects())}
            ref={buttonRef}
          />
          <p
            className="opacity-100 transition-opacity duration-1000 ease-in-out z-[-1] md:text-3xl pt-10 text-center md:text-left"
            ref={textRef}
          >
            {texts.home.subtitle}
          </p>
        </div>
        {/* {selectedProject && ( */}
        <div
          ref={popUpBgRef}
          className=" opacity-0 fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-[20] pointer-events-none"
          onClick={handleClose}
        >
          <ProjectDetail
            ref={popUpContainerRef}
            project={selectedProject}
            onClose={handleClose}
          />
        </div>
        {/* )} */}
      </div>

      <ProjectList
        ref={projectsRef}
        className="w-full h-0"
        onClick={handleOpen}
        scrollPos={scrollPos}
        containerRef={containerRef}
        showProjects={showProjects}
        parentRef={firstPageRoot}
      />
    </div>
  );
}
