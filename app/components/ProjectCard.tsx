import { useState } from "react";
import Image from "next/image";
import { project } from "../projectData";

const ProjectCard = ({
  project,
  onClick,
  cardRef,
  width,
}: {
  project: project;
  onClick: () => void;
  cardRef?: React.RefObject<HTMLDivElement | null>;
  width: number;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={project.name}
      ref={cardRef}
      style={{
        width: hover ? `${width + 100}px` : `${width}px`,
        transition: "width 0.2s ease-in-out",
      }}
      className={`relative rounded-xl  h-full transition-all duration-300 ease-in-out md:hover:w-[30rem] hover:shadow-lg hover:z-10 inline-block align-top ${
        hover ? "w-[30rem]" : ""
      }`}
      onClick={onClick}
    >
      <Image
        className="rounded-xl object-cover"
        src={project.image}
        alt={project.name}
        fill
        priority
        sizes="(max-width: 768px) 50vw, 100vw"
      />
      <div className="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-in-out"></div>
    </div>
  );
};

export default ProjectCard;
