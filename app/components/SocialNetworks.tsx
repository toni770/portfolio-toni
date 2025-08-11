import Config from "../config";
import { AuxMono } from "../fonts";

const socialNetworks = [
  { name: "Github", url: Config.url.github },
  { name: "Linkedin", url: Config.url.linkedin },
  { name: "Gmail", url: Config.url.gmail },
];
const SocialNetworks = ({
  className,
  linkClassName,
}: {
  className?: string;
  linkClassName?: string;
}) => {
  return (
    <div
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
};

export default SocialNetworks;
