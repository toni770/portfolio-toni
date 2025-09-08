import { forwardRef } from "react";
import Config from "../config";
import { AuxMono } from "../fonts";

const socialNetworks = [
  { name: "Github", url: Config.url.github },
  { name: "Linkedin", url: Config.url.linkedin },
  { name: "Gmail", url: Config.url.gmail },
];

// List of Social Networks.
const SocialNetworks = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    linkClassName?: string;
  }
>(({ className, linkClassName }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex text-md text-darkGray ${AuxMono.className} ${className}`}
    >
      {socialNetworks.map((socialNetwork, index) => (
        <a
          key={socialNetwork.name}
          href={socialNetwork.url}
          target="_blank"
          className={`cursor-pointer hover:underline ${linkClassName} ${
            index < socialNetworks.length - 1 ? "border-r" : ""
          } md:border-r-0`}
        >
          {socialNetwork.name}
        </a>
      ))}
    </div>
  );
});
SocialNetworks.displayName = "SocialNetworks";

export default SocialNetworks;
