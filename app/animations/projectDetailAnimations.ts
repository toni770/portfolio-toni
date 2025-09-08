import gsap from "gsap";

let _sliderRef: React.RefObject<HTMLDivElement | null>;
let leftScroll: number = 0;

// Infinite slider in projectDetail animation.
export function infiniteSliderAnimation(
  sliderRef: React.RefObject<HTMLDivElement | null>
) {
  _sliderRef = sliderRef;
  requestAnimationFrame(animation);
}

const animation = () => {
  if (_sliderRef.current) {
    const totalWidth = _sliderRef.current.scrollWidth / 2;

    if (leftScroll > totalWidth) {
      leftScroll = 0;
      _sliderRef.current.scrollLeft = 0;
    } else {
      leftScroll += 0.5;
    }

    gsap.set(_sliderRef.current, { scrollLeft: leftScroll });
    requestAnimationFrame(animation);
  }
};
