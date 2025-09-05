import React from "react";
import { project } from "../projectData";
import { XMarkIcon, LinkIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { InfiniteProjectTech } from "./InfiniteProjectTech";

const ProjectDetail = ({
  project,
  onClose,
}: {
  project: project;
  onClose: () => void;
}) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation(); // bloquea el click en el padre
        console.log("Child clicked");
      }}
      className=" text-black rounded-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[70%] w-[90%] h-[95%] z-30 flex flex-col bg-white"
    >
      <div className="relative  rounded-t-xl h-[5%] ">
        <div
          onClick={onClose}
          className="flex justify-end p-3 absolute top-0 right-0 cursor-pointer"
        >
          <XMarkIcon className="w-[3rem] h-[3rem]" />
        </div>
      </div>
      <div className="flex flex-col justify-between h-[95%]">
        <div className="p-7 pt-2 border-b border-darkGray">
          <div className="flex flex-wrap flex-col md:flex-row justify-between">
            <div>
              <h1 className="text-6xl md:text-7xl  pb-2">{project.name}</h1>

              <p>{project.description}</p>
            </div>
            <div className="flex justify-end flex-col">
              {project.links?.map((link, index) => (
                <div key={index} className="flex gap-2 items-center ">
                  {link.type === "reward" ? (
                    <TrophyIcon className="w-5 h-5" />
                  ) : (
                    <LinkIcon className="w-5 h-5" />
                  )}
                  <a href={link.url} className="underline" target="_blank">
                    {link.name ? link.name : link.url}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col md:flex-row overflow-y-auto">
          <div className="flex-1 md:border-r border-darkGray w-full pb-0 p-10">
            <p className="underline pb-5">Problema</p>
            <p>{project.problem}</p>
          </div>
          <div className="flex-1 p-10">
            <p className="underline pb-5">Solución</p>
            <p>{project.solution}</p>
          </div>
        </div>
        <InfiniteProjectTech technologies={project.technologies} />
      </div>
    </div>
  );
};

export default ProjectDetail;
