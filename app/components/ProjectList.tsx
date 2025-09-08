"use client";

import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  RefObject,
} from "react";
import { AuxMono } from "../fonts";
import projectData, { project } from "../projectData";
import Config from "../config";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";
import { scrollAnimation } from "../animations/projectListAnimations";

const allTags = projectData.flatMap((project) => project.tags);
const uniqueTags = ["Todos", ...new Set(allTags)];

const GAP = 20;

const ProjectList = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    onClick: (project: project) => void;
    scrollPos: RefObject<number>;
    containerRef: RefObject<HTMLDivElement | null>;
    showProjects: boolean;
    parentRef: RefObject<HTMLDivElement | null>;
  }
>(
  (
    { className, onClick, scrollPos, containerRef, showProjects, parentRef },
    ref
  ) => {
    const [currentFilter, setCurrentFilter] = useState<string>("Todos");
    const [filteredProjects, setFilteredProjects] =
      useState<project[]>(projectData);
    const cardRef = useRef<HTMLDivElement>(null); // reference for measuring card width
    const isAnimating = useRef(false);
    const leftButtonRef = useRef<HTMLDivElement>(null);
    const rightButtonRef = useRef<HTMLDivElement>(null);
    const leftMargin = useRef<number>(0);

    // Scroll until gets to the end or the start of the list. Then, it jumps to the other side of the list to infinite scroll.
    function handleScroll(left: boolean) {
      if (isAnimating.current || !containerRef.current || !cardRef.current)
        return;
      isAnimating.current = true;
      const cardWidth = cardRef.current.offsetWidth;
      const step = cardWidth + GAP;

      scrollPos.current = left
        ? scrollPos.current - step
        : scrollPos.current + step;

      const totalWidth = (containerRef.current.scrollWidth + GAP) / 2;

      // If scrollPos is less than leftMargin, it means we are at the end of the list. So, we jump to the start of the list.
      if (scrollPos.current < leftMargin.current) {
        scrollPos.current = totalWidth - step + leftMargin.current;
        containerRef.current.scrollLeft = totalWidth + leftMargin.current;
      }
      // If scrollPos is greater than totalWidth + leftMargin, it means we are at the start of the list. So, we jump to the end of the list.
      else if (scrollPos.current > totalWidth + leftMargin.current) {
        const firstPos = 0;
        scrollPos.current = firstPos + step + leftMargin.current;
        containerRef.current.scrollLeft = firstPos + leftMargin.current;
      }

      scrollAnimation(containerRef, scrollPos, isAnimating);
    }
    useEffect(() => {
      if (showProjects) caculateWidth();
    }, [showProjects]);

    useEffect(() => {
      const filtered = projectData.filter((project) => {
        return currentFilter === "Todos"
          ? true
          : project.tags.includes(currentFilter);
      });
      setFilteredProjects(filtered);
    }, [currentFilter]);

    useEffect(() => {
      const observer = new MutationObserver(() => {
        caculateWidth();
      });
      observer.observe(parentRef.current!, { childList: true });
    }, []);

    useEffect(() => {
      window.addEventListener("resize", caculateWidth);
      return () => {
        window.removeEventListener("resize", caculateWidth);
      };
    }, []);

    // Calculate width of the card to march number of cards that can fit in the screen.
    function caculateWidth() {
      const container = containerRef.current;
      if (
        !container ||
        !leftButtonRef.current ||
        !rightButtonRef.current ||
        !containerRef.current
      )
        return 72;

      let nElements = 3;

      if (window.matchMedia("(min-width: 1024px)").matches) nElements = 3;
      else if (window.matchMedia("(min-width: 768px)").matches) nElements = 2;
      else if (window.matchMedia("(min-width: 640px)").matches) nElements = 1;
      else nElements = 1;
      const clientWidth = container.clientWidth;

      // Calculate width to fit with buttons and gap.
      const width =
        (clientWidth -
          leftButtonRef.current?.offsetWidth -
          rightButtonRef.current?.offsetWidth +
          1 -
          GAP * (nElements + 1)) /
        nElements;

      setWidth(width);

      const newLeftMargin = width - leftButtonRef.current?.offsetWidth;

      // If didn't change, we fix scrollPos with new data. This happens when this function is called with no real resize.
      if (newLeftMargin === leftMargin.current) {
        const result = scrollPos.current - leftMargin.current;
        console.log("RESULT: ", result);

        scrollPos.current = result + newLeftMargin;
      } else {
        // If real resize, reset scrollPos, because other method fet buged for no reason.
        scrollPos.current = newLeftMargin;
      }

      containerRef.current.scrollLeft = scrollPos.current;
      leftMargin.current = newLeftMargin;
    }

    const [width, setWidth] = useState<number>(200);
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
            ref={leftButtonRef}
            className=" cursor-pointer rounded-r-xl z-15 absolute left-0 hover:bg-black/50 bg-black/25 transition-all duration-200 ease-in-out w-[61px] h-full flex items-center justify-center"
            onClick={() => handleScroll(true)}
          >
            <ChevronLeftIcon className="w-10 h-10 " />
          </div>
          <div
            ref={rightButtonRef}
            className=" border-xl rounded-l-xl cursor-pointer z-15 absolute right-0 hover:bg-black/50 bg-black/25 transition-all duration-200 ease-in-out w-[61px] h-full flex items-center justify-center"
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
                  width={width}
                />
              ))}

              {currentFilter === "Todos" &&
                filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    onClick={() => onClick(project)}
                    cardRef={cardRef}
                    width={width}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
ProjectList.displayName = "ProjectList";

export default ProjectList;
