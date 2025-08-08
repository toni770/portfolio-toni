"use client";

import React, { useEffect, useState } from "react";
import { AuxMono } from "../fonts";
import projectData, { project } from "../projectData";
import ProjectDetail from "./ProjectDetail";
import Image from "next/image";
import Config from "../config";

const allTags = projectData.flatMap((project) => project.tags);
const uniqueTags = ["Todos", ...new Set(allTags)];
const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState<project | null>(null);
  const [currentFilter, setCurrentFilter] = useState<string>("Todos");
  const [filteredProjects, setFilteredProjects] =
    useState<project[]>(projectData);

  useEffect(() => {
    const filtered = projectData.filter((project) => {
      return currentFilter === "Todos"
        ? true
        : project.tags.includes(currentFilter);
    });
    setFilteredProjects(filtered);
  }, [currentFilter]);

  function handleClose() {
    setSelectedProject(null);
  }
  return (
    <div className="pb-7">
      {Config.config.showProjectFilter && (
        <div
          className={`flex gap-5 ${AuxMono.className} text-md text-darkGray justify-end p-7`}
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
      <div className="h-80 flex gap-5 px-7">
        {filteredProjects.map((project) => (
          <div
            key={project.name}
            className={`relative bg-white rounded-xl w-[15%] h-full transition-all duration-300 ease-in-out hover:w-[30%] hover:scale-105 hover:shadow-lg hover:z-10`}
            onClick={() => setSelectedProject(project)}
          >
            <Image
              className="rounded-xl"
              src={project.image}
              alt={project.name}
              fill
              priority
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      {selectedProject && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]  z-50"
          onClick={handleClose}
        >
          <ProjectDetail project={selectedProject} onClose={handleClose} />
        </div>
      )}
    </div>
  );
};

export default ProjectList;
