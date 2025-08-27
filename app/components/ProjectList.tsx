"use client";

import React, { useEffect, useState, useRef, forwardRef } from "react";
import { AuxMono } from "../fonts";
import projectData, { project } from "../projectData";
import Image from "next/image";
import Config from "../config";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";

const allTags = projectData.flatMap((project) => project.tags);
const uniqueTags = ["Todos", ...new Set(allTags)];

const GAP = 20;
const ProjectList = forwardRef<
  HTMLDivElement,
  { className?: string; onClick: (project: project) => void }
>(({ className, onClick }, ref) => {
  const [currentFilter, setCurrentFilter] = useState<string>("Todos");
  const [filteredProjects, setFilteredProjects] =
    useState<project[]>(projectData);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPos = useRef(0);
  const cardRef = useRef<HTMLDivElement>(null); // reference for measuring card width
  const isAnimating = useRef(false);

  function handleScroll(left: boolean) {
    console.log("Before: " + scrollPos.current);
    if (isAnimating.current || !containerRef.current || !cardRef.current)
      return;
    isAnimating.current = true;
    const cardWidth = cardRef.current.offsetWidth; // get real width in px
    const step = cardWidth + GAP;

    scrollPos.current = left
      ? scrollPos.current - step
      : scrollPos.current + step;

    const totalWidth = (containerRef.current.scrollWidth + GAP) / 2;

    if (scrollPos.current < 0) {
      scrollPos.current = totalWidth - step; // saltamos al "mismo card" en la segunda copia
      containerRef.current.scrollLeft = totalWidth; // salto instantáneo sin animación
    } else if (scrollPos.current > totalWidth) {
      scrollPos.current = 0 + step;
      containerRef.current.scrollLeft = 0; // salto instantáneo
    }
    console.log("After: " + scrollPos.current);

    gsap.to(containerRef.current, {
      scrollLeft: scrollPos.current,
      duration: 0.7,
      ease: "power3.out",
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }

  useEffect(() => {
    const filtered = projectData.filter((project) => {
      return currentFilter === "Todos"
        ? true
        : project.tags.includes(currentFilter);
    });
    setFilteredProjects(filtered);
  }, [currentFilter]);

  return (
    <div className={`md:pb-7 h-full flex flex-col  ${className}`} ref={ref}>
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

      <div className="relative w-full flex-1 flex relative">
        <div
          className=" cursor-pointer z-15 absolute left-0 hover:bg-black/50 bg-black/25 w-15 h-full flex items-center justify-center"
          onClick={() => handleScroll(true)}
        >
          <ChevronLeftIcon className="w-10 h-10 " />
        </div>
        <div
          className=" cursor-pointer z-15 absolute right-0 hover:bg-black/50 bg-black/25 w-15 h-full flex items-center justify-center"
          onClick={() => handleScroll(false)}
        >
          <ChevronRightIcon className="w-10 h-10" />
        </div>
        <div
          ref={containerRef}
          className="scrollBehavior-auto flex-1 overflow-x-hidden overflow-y-hidden whitespace-nowrap scrollbar-hide w-full"
        >
          <div className="inline-flex gap-5 h-full">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                onClick={() => onClick(project)}
                cardRef={cardRef}
              />
            ))}

            {currentFilter === "Todos" &&
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  onClick={() => onClick(project)}
                  cardRef={cardRef}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
});
ProjectList.displayName = "ProjectList";

const ProjectCard = ({
  project,
  onClick,
  cardRef,
}: {
  project: project;
  onClick: () => void;
  cardRef?: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      key={project.name}
      ref={cardRef}
      className={`relative rounded-xl w-[20rem] h-full transition-all duration-300 ease-in-out hover:w-[30rem] hover:shadow-lg hover:z-10 inline-block align-top`}
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
        {/* <h2 className={`text-white text-center ${className}`}>
          {project.name}
        </h2> */}
      </div>
    </div>
  );
};

export default ProjectList;
