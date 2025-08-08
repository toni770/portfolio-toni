import Config from "../config";
import { AuxMono } from "../fonts";

const socialNetworks = [
  { name: "Github", url: Config.url.github },
  { name: "Linkedin", url: Config.url.linkedin },
  { name: "Gmail", url: Config.url.gmail },
];
const SocialNetworks = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex gap-15 text-md text-darkGray ${AuxMono.className} ${className}`}
    >
      {socialNetworks.map((socialNetwork) => (
        <a
          key={socialNetwork.name}
          href={socialNetwork.url}
          target="_blank"
          className="cursor-pointer hover:underline"
        >
          {socialNetwork.name}
        </a>
      ))}
    </div>
  );
};

export default SocialNetworks;
