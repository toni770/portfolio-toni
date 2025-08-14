"use client";
import Image from "next/image";
import SocialNetworks from "./components/SocialNetworks";
import Button from "./components/Button";
import ProjectList from "./components/ProjectList";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Footer from "./Footer";
import { project } from "./projectData";
import ProjectDetail from "./components/ProjectDetail";

export default function Home() {
  const [isProjects, setIsProjects] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const socialNetworksRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);
  const [selectedProject, setSelectedProject] = useState<project | null>(null);

  function handleClose() {
    setSelectedProject(null);
  }

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current
      .to(
        textRef.current,
        {
          opacity: 0,
          y: -100,
          duration: 1,
          ease: "power3.inOut",
          absolute: true,
        },
        0
      )
      .to(
        socialNetworksRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 1,
          ease: "power3.inOut",
          absolute: true,
        },
        0
      );

    if (window.matchMedia("(min-width: 768px)").matches) {
      console.log("md");
      // md
      tl.current
        .to(
          imageRef.current,
          {
            rotateY: -360,
            top: "10%",
            right: "10%",
            width: "15%",
            height: "30%",
            duration: 1,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          root.current,
          {
            height: "calc(100vh - 7rem)",
            duration: 1,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          buttonRef.current,
          {
            y: -300,
            duration: 1,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          projectsRef.current,
          {
            y: -420,
            duration: 1,
            ease: "power3.inOut",
          },
          0
        );
    } else {
      console.log("sm");
      // sm
      tl.current
        .to(
          imageRef.current,
          {
            height: 0,
            opacity: 0,
            rotateY: -360,
            y: -200,
            duration: 1,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          root.current,
          {
            height: "calc(100vh - 6rem)",
            duration: 1,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          buttonRef.current,
          {
            y: -420,
            duration: 1,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          projectsRef.current,
          {
            y: -520,
            duration: 1,
            ease: "power3.inOut",
          },
          0
        );
    }
  }, []);

  function GoToProjects() {
    console.log("Set Is Projects");
    if (!tl.current) console.log("No timeline");
    setIsProjects(true);
    tl.current?.play();
  }
  function GoBackHome() {
    console.log("Set Back Home");
    if (!tl.current) console.log("No timeline");
    setIsProjects(false);
    tl.current?.reverse();
  }
  return (
    <>
      <div
        ref={root}
        className="flex flex-col justify-between items-center md:items-start md:h-[calc(100vh-4rem)] md:min-h-[calc(100vh-7rem)] min-h-[calc(100vh-6rem)] h-[calc(100vh)] w-full px-7 py-7 pt-20 md:pt-0"
      >
        <div className="w-full h-[20%]">
          <div className="relative md:w-[70%] h-20 md:h-50 md:h-50 lg:h-70 ">
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
            className="md:pl-[3%] px-7 md:px-0  text-base md:gap-15 justify-between md:justify-start"
            linkClassName="border-r-0"
          />
        </div>

        <div
          ref={imageRef}
          className="relative md:absolute md:bottom-0 md:right-0 z-[1]  md:w-[50%] lg:w-[35%] md:h-[80%] h-100 w-100 bg-image:url('/LogoArmadilloGlow.png')"
        >
          <Image
            src="/LogoArmadilloGlow.png"
            alt="Armadillo logo"
            fill
            priority
            objectFit="contain"
          />
        </div>

        <div className="md:w-[50%] lg:w-[40%] flex flex-col items-center md:items-start">
          <Button
            text={isProjects ? "Volver" : "Ver proyectos"}
            className="border-white w-[250px]"
            onClick={() => (isProjects ? GoBackHome() : GoToProjects())}
            ref={buttonRef}
          />
          <p
            className="md:text-3xl pt-10 text-center md:text-left"
            ref={textRef}
          >
            Programación de app y webs | Full stack developer | Integraciones |
            IOS y Android | IA
          </p>
        </div>
      </div>
      {selectedProject && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-50"
          onClick={handleClose}
        >
          <ProjectDetail project={selectedProject} onClose={handleClose} />
        </div>
      )}
      <ProjectList
        ref={projectsRef}
        className="absolute w-full"
        onClick={setSelectedProject}
      />
    </>
  );
}
