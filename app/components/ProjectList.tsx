"use client";

import React, { useEffect, useState, useRef, forwardRef } from "react";
import { AuxMono } from "../fonts";
import projectData, { project } from "../projectData";
import Image from "next/image";
import Config from "../config";
import gsap from "gsap";

const allTags = projectData.flatMap((project) => project.tags);
const uniqueTags = ["Todos", ...new Set(allTags)];

const ProjectList = forwardRef<
  HTMLDivElement,
  { className?: string; onClick: (project: project) => void }
>(({ className, onClick }, ref) => {
  const [currentFilter, setCurrentFilter] = useState<string>("Todos");
  const [filteredProjects, setFilteredProjects] =
    useState<project[]>(projectData);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPos = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const contentWidth = container.scrollWidth / 2;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0 && e.deltaX === 0) return;
      e.preventDefault();

      scrollPos.current += e.deltaY * 2;

      // Salto al principio
      if (scrollPos.current >= contentWidth) {
        scrollPos.current -= e.deltaY * 2;

        gsap.killTweensOf(container); // ❗ mata la animación en curso
        scrollPos.current -= contentWidth;
        container.scrollLeft = scrollPos.current;
      }
      // Salto al final
      else if (scrollPos.current < 0) {
        scrollPos.current -= e.deltaY * 2;

        gsap.killTweensOf(container); // ❗ mata la animación en curso
        scrollPos.current += contentWidth;
        container.scrollLeft = scrollPos.current;
      }

      // Ahora sí, animación suave para el desplazamiento normal
      gsap.to(container, {
        scrollLeft: scrollPos.current,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const filtered = projectData.filter((project) => {
      return currentFilter === "Todos"
        ? true
        : project.tags.includes(currentFilter);
    });
    setFilteredProjects(filtered);
  }, [currentFilter]);

  return (
    <div className={`pb-7 ${className}`} ref={ref}>
      {Config.config.showProjectFilter && (
        <div
          className={`flex gap-5 ${AuxMono.className} text-base md:text-md text-darkGray justify-center md:justify-end p-7 pt-0 flex-wrap`}
        >
          {uniqueTags.map((tag) => (
            <p
              key={tag}
              className={`cursor-pointer hover:underline ${
                currentFilter === tag ? "text-white" : ""
              }`}
              onClick={() => setCurrentFilter(tag)}
            >
              {currentFilter === tag ? `[${tag}]` : tag}
            </p>
          ))}
        </div>
      )}
      <div
        ref={containerRef}
        className="scrollBehavior-auto h-80 overflow-x-hidden overflow-y-hidden whitespace-nowrap py-4  scrollbar-hide w-full"
      >
        <div className="inline-flex gap-5 h-full">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onClick={() => onClick(project)}
            />
          ))}
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onClick={() => onClick(project)}
              className="bg-black"
            />
          ))}
        </div>
      </div>
    </div>
  );
});
ProjectList.displayName = "ProjectList";

const ProjectCard = ({
  project,
  onClick,
  className,
}: {
  project: project;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div
      key={project.name}
      className={`relative rounded-xl w-[400px] h-full transition-all duration-300 ease-in-out hover:w-[350px] hover:shadow-lg hover:z-10 inline-block align-top`}
      onClick={onClick}
    >
      <Image
        className="rounded-xl"
        src={project.image}
        alt={project.name}
        fill
        priority
        objectFit="cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-in-out">
        <h2 className={`text-white text-center ${className}`}>
          {project.name}
        </h2>
      </div>
    </div>
  );
};

export default ProjectList;
