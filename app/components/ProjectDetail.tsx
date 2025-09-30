import React from "react";
import { project } from "../projectData";
import { XMarkIcon, LinkIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { InfiniteProjectTech } from "./InfiniteProjectTech";
import Image from "next/image";
import { texts } from "../texts";

// Project modal to show project details.
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
        e.stopPropagation();
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
      <div className="flex flex-col justify-between h-[95%] overflow-y-auto">
        <div className="p-7 pt-2 border-b border-darkGray ">
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
        <div
          className={`flex h-full flex-col ${
            project.gif && project.gif.platform === "mobile" && "md:flex-row"
          }`}
        >
          <div className="flex-1 md:border-r border-darkGray w-full p-10 flex flex-col justify-around">
            <div className="pb-5">
              <p className="underline pb-5">
                {texts.home.projectDetail.problem}
              </p>
              <p>{project.problem}</p>
            </div>
            <div>
              <p className="underline pb-5">
                {texts.home.projectDetail.solution}
              </p>
              <p>{project.solution}</p>
            </div>
          </div>
          <div className="block flex-1 p-10 px-2 h-full">
            {project.gif && (
              <div
                className={`relative w-full ${
                  project.gif.platform === "mobile"
                    ? "h-[500px] md:h-full"
                    : "h-[250px] md:h-[500px]"
                } `}
              >
                <Image
                  src={project.gif.url}
                  alt={project.gif.platform}
                  fill
                  priority
                  className="w-full h-full object-contain"
                  sizes="50vw"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <InfiniteProjectTech technologies={project.technologies} />
    </div>
  );
};

export default ProjectDetail;
