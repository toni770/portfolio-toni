import gsap from "gsap";
import Flip from "gsap/Flip";

let tl: gsap.core.Timeline | null = null;

let _imageRef: React.RefObject<HTMLDivElement | null>;
let _projectsRef: React.RefObject<HTMLDivElement | null>;
let _firstPageRoot: React.RefObject<HTMLDivElement | null>;
let _root: React.RefObject<HTMLDivElement | null>;
let _textRef: React.RefObject<HTMLParagraphElement | null>;
let _socialNetworksRef: React.RefObject<HTMLDivElement | null>;

export function initAnimations(
  imageRef: React.RefObject<HTMLDivElement | null>,
  projectsRef: React.RefObject<HTMLDivElement | null>,
  firstPageRoot: React.RefObject<HTMLDivElement | null>,
  root: React.RefObject<HTMLDivElement | null>,
  textRef: React.RefObject<HTMLParagraphElement | null>,
  socialNetworksRef: React.RefObject<HTMLDivElement | null>
) {
  _imageRef = imageRef;
  _projectsRef = projectsRef;
  _firstPageRoot = firstPageRoot;
  _root = root;
  _textRef = textRef;
  _socialNetworksRef = socialNetworksRef;
  gsap.registerPlugin(Flip);
  gsappAnim();
}

// Animation for showing and hiding projects in Home.
export function showProjectsAnimation(show: boolean) {
  gsapFlipAnim(show);
  if (show) {
    tl?.play();
  } else {
    tl?.reverse();
  }
}

function gsappAnim() {
  tl = gsap.timeline({ paused: true });
  tl.to(
    _imageRef.current,
    {
      rotateY: -360,
      duration: 1,
      ease: "power3.inOut",
    },
    0
  );
}

function gsapFlipAnim(forward: boolean) {
  const state = Flip.getState([
    _imageRef.current,
    _projectsRef.current,
    ...Array.from(_firstPageRoot.current!.children),
  ]);

  if (forward) {
    _firstPageRoot.current?.classList.remove("justify-between");
    _firstPageRoot.current?.classList.add("justify-start");
    _firstPageRoot.current?.appendChild(_projectsRef.current!);

    _firstPageRoot.current?.classList.remove("md:h-[calc(100vh-4rem)]");
    _firstPageRoot.current?.classList.add("md:h-[calc(100vh-7rem)]");
    _firstPageRoot.current?.classList.remove("h-[calc(100vh)]");
    _firstPageRoot.current?.classList.add("h-[calc(100vh-6rem)]");

    _imageRef.current?.classList.remove("md:bottom-0");
    _imageRef.current?.classList.remove("md:h-[80%]");
    _imageRef.current?.classList.remove("lg:w-[35%]");
    _imageRef.current?.classList.remove("md:w-[50%]");
    _imageRef.current?.classList.add("md:h-70");
    _imageRef.current?.classList.add("md:w-[20%]");
    _imageRef.current?.classList.add("h-70");
    _imageRef.current?.classList.add("w-[20%]");
    _imageRef.current?.classList.add("top-0");
    _imageRef.current?.classList.remove("inset-0");
    _imageRef.current?.classList.remove("opacity-100");
    _imageRef.current?.classList.add("opacity-0");

    _textRef.current?.classList.add("h-0");
    _textRef.current?.classList.remove("opacity-100");
    _textRef.current?.classList.add("opacity-0");

    _socialNetworksRef.current?.classList.remove("opacity-100");
    _socialNetworksRef.current?.classList.add("opacity-0");
    _socialNetworksRef.current?.classList.add("pointer-events-none");
  } else {
    _firstPageRoot.current?.classList.remove("justify-start");
    _firstPageRoot.current?.classList.add("justify-between");

    _root.current?.appendChild(_projectsRef.current!);

    _firstPageRoot.current?.classList.add("md:h-[calc(100vh-4rem)]");
    _firstPageRoot.current?.classList.remove("md:h-[calc(100vh-7rem)]");
    _firstPageRoot.current?.classList.remove("h-[calc(100vh-6rem)]");
    _firstPageRoot.current?.classList.add("h-[calc(100vh)]");

    _imageRef.current?.classList.remove("md:h-70");
    _imageRef.current?.classList.remove("md:w-[20%]");
    _imageRef.current?.classList.add("md:h-[80%]");
    _imageRef.current?.classList.add("lg:w-[35%]");
    _imageRef.current?.classList.add("md:w-[50%]");
    _imageRef.current?.classList.add("md:bottom-0");
    _imageRef.current?.classList.remove("h-70");
    _imageRef.current?.classList.remove("w-[20%]");
    _imageRef.current?.classList.remove("top-0");
    _imageRef.current?.classList.add("inset-0");
    _imageRef.current?.classList.add("opacity-100");
    _imageRef.current?.classList.remove("opacity-0");

    _textRef.current?.classList.remove("h-0");

    _textRef.current?.classList.add("opacity-100");
    _textRef.current?.classList.remove("opacity-0");

    _socialNetworksRef.current?.classList.add("opacity-100");
    _socialNetworksRef.current?.classList.remove("opacity-0");
    _socialNetworksRef.current?.classList.remove("pointer-events-none");
  }

  Flip.from(state, {
    duration: 1,
    ease: "power3.inOut",
  });
}
