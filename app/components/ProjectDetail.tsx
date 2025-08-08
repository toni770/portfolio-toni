import React from "react";
import { project } from "../projectData";
import { AuxMono } from "../fonts";
import {
  ChevronRightIcon,
  XMarkIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const ProjectDetail = ({
  project,
  onClose,
}: {
  project: project;
  onClose: () => void;
}) => {
  const technologiesList = project.technologies.map((tech) => (
    <p key={tech}>{tech}</p>
  ));
  const technologiesListWithIcons = technologiesList.map((tech, index) => (
    <React.Fragment key={index}>
      {tech}
      {index < technologiesList.length - 1 && (
        <ChevronRightIcon className="w-5 h-5" />
      )}
    </React.Fragment>
  ));
  return (
    <div className=" text-black rounded-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[95%] z-10 flex flex-col bg-white">
      <div className="flex-1 relative bg-cover bg-center rounded-t-xl">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          objectFit="cover"
        />
        <div className="flex justify-end p-7 absolute top-0 right-0">
          <XMarkIcon className="w-15 h-15" onClick={onClose} />
        </div>
      </div>
      <div className="flex flex-col justify-between flex-2 ">
        <div className="p-7 pt-2 border-b border-darkGray">
          <div className="flex justify-between">
            <h1 className="text-[4em]">{project.name}</h1>
            {project.link && (
              <div className="flex gap-2 items-center">
                <LinkIcon className="w-5 h-5" />
                <a href={project.link} className="underline">
                  {project.link}
                </a>
              </div>
            )}
          </div>
          <p>{project.description}</p>
        </div>
        <div className="flex h-full ">
          <div className="flex-1 border-r border-darkGray w-full p-10">
            <p className="underline pb-5">Problema</p>
            <p>{project.problem}</p>
          </div>
          <div className="flex-1 p-10">
            <p className="underline pb-5">Solución</p>
            <p>{project.solution}</p>
          </div>
        </div>
        <div
          className={`border-t border-darkGray p-7 flex justify-around ${AuxMono.className} text-sm`}
        >
          {technologiesListWithIcons}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
