"use client";
import Image from "next/image";
import SocialNetworks from "./components/SocialNetworks";
import Button from "./components/Button";
import ProjectList from "./components/ProjectList";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import { project } from "./projectData";
import ProjectDetail from "./components/ProjectDetail";

export default function Home() {
  const [isProjects, setIsProjects] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const socialNetworksRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const firstPageRoot = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);
  const root = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<project | null>(null);

  function handleClose() {
    setSelectedProject(null);
  }

  function gsappAnim() {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(
      imageRef.current,
      {
        rotateY: -360,
        duration: 1,
        ease: "power3.inOut",
      },
      0
    );
  }

  useEffect(() => {
    gsap.registerPlugin(Flip);
    gsappAnim();
  }, []);

  function GoToProjects() {
    gsapFlipAnim(true);
    setIsProjects(true);
    tl.current?.play();
  }
  function GoBackHome() {
    gsapFlipAnim(false);
    setIsProjects(false);
    tl.current?.reverse();
  }

  function gsapFlipAnim(forward: boolean) {
    const state = Flip.getState([
      imageRef.current,
      projectsRef.current,
      ...Array.from(firstPageRoot.current!.children),
    ]);

    if (forward) {
      firstPageRoot.current?.classList.remove("justify-between");
      firstPageRoot.current?.classList.add("justify-start");
      firstPageRoot.current?.appendChild(projectsRef.current!);
      firstPageRoot.current?.classList.remove("md:h-[calc(100vh-4rem)]");
      firstPageRoot.current?.classList.add("md:h-[calc(100vh-7rem)]");
      firstPageRoot.current?.classList.remove("h-[calc(100vh)]");
      firstPageRoot.current?.classList.add("h-[calc(100vh-6rem)]");

      imageRef.current?.classList.remove("md:bottom-0");
      imageRef.current?.classList.remove("md:h-[80%]");
      imageRef.current?.classList.remove("lg:w-[35%]");
      imageRef.current?.classList.remove("md:w-[50%]");
      imageRef.current?.classList.add("md:h-70");
      imageRef.current?.classList.add("md:w-[20%]");
      imageRef.current?.classList.add("h-70");
      imageRef.current?.classList.add("w-[20%]");
      imageRef.current?.classList.add("top-0");
      imageRef.current?.classList.remove("inset-0");
      imageRef.current?.classList.remove("opacity-100");
      imageRef.current?.classList.add("opacity-0");

      textRef.current?.classList.add("h-0");
      textRef.current?.classList.remove("opacity-100");
      textRef.current?.classList.add("opacity-0");

      socialNetworksRef.current?.classList.remove("opacity-100");
      socialNetworksRef.current?.classList.add("opacity-0");
      socialNetworksRef.current?.classList.add("pointer-events-none");
    } else {
      firstPageRoot.current?.classList.remove("justify-start");
      firstPageRoot.current?.classList.add("justify-between");

      root.current?.appendChild(projectsRef.current!);

      firstPageRoot.current?.classList.add("md:h-[calc(100vh-4rem)]");
      firstPageRoot.current?.classList.remove("md:h-[calc(100vh-7rem)]");
      firstPageRoot.current?.classList.remove("h-[calc(100vh-6rem)]");
      firstPageRoot.current?.classList.add("h-[calc(100vh)]");

      imageRef.current?.classList.remove("md:h-70");
      imageRef.current?.classList.remove("md:w-[20%]");
      imageRef.current?.classList.add("md:h-[80%]");
      imageRef.current?.classList.add("lg:w-[35%]");
      imageRef.current?.classList.add("md:w-[50%]");
      imageRef.current?.classList.add("md:bottom-0");
      imageRef.current?.classList.remove("h-70");
      imageRef.current?.classList.remove("w-[20%]");
      imageRef.current?.classList.remove("top-0");
      imageRef.current?.classList.add("inset-0");
      imageRef.current?.classList.add("opacity-100");
      imageRef.current?.classList.remove("opacity-0");

      textRef.current?.classList.remove("h-0");

      textRef.current?.classList.add("opacity-100");
      textRef.current?.classList.remove("opacity-0");

      socialNetworksRef.current?.classList.add("opacity-100");
      socialNetworksRef.current?.classList.remove("opacity-0");
      socialNetworksRef.current?.classList.remove("pointer-events-none");
    }
    Flip.from(state, {
      duration: 1,
      ease: "power3.inOut",
    });
  }

  return (
    <div ref={root}>
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
              objectFit="contain"
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
          className="pointer-events-none opacity-100 md:opacity-100 transition-opacity duration-1000 ease-in-out absolute inset-0 m-auto md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 md:bottom-0 md:right-0 z-[1]  md:w-[50%] lg:w-[35%] md:h-[80%] h-[40%] w-100 bg-image:url('/LogoArmadilloGlow.png')"
        >
          <Image
            src="/LogoArmadilloGlow.png"
            alt="Armadillo logo"
            fill
            priority
            objectFit="contain"
          />
        </div>

        <div className="px-7 md:w-[50%] lg:w-[40%] flex flex-col items-center md:items-start">
          <Button
            text={isProjects ? "Volver" : "Ver proyectos"}
            className="border-white w-[250px]"
            onClick={() => (isProjects ? GoBackHome() : GoToProjects())}
            ref={buttonRef}
          />
          <p
            className="opacity-100 transition-opacity duration-1000 ease-in-out z-[-1] md:text-3xl pt-10 text-center md:text-left"
            ref={textRef}
          >
            Programación de app y webs | Full stack developer | Integraciones |
            IOS y Android | IA
          </p>
        </div>
        {selectedProject && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-50"
            onClick={handleClose}
          >
            <ProjectDetail project={selectedProject} onClose={handleClose} />
          </div>
        )}
      </div>

      <ProjectList
        ref={projectsRef}
        className="w-full"
        onClick={setSelectedProject}
      />
    </div>
  );
}
