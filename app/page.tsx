import Image from "next/image";
import SocialNetworks from "./components/SocialNetworks";
import Button from "./components/Button";
import ProjectList from "./components/ProjectList";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between items-center md:items-start md:min-h-[calc(100vh-4rem)] min-h-[calc(100vh)] w-full px-7 py-7 pt-20 md:pt-0">
        <div>
          <Image
            src="/LogoToniWhite.svg"
            alt="Toni logo"
            width={1300}
            height={100}
            priority
          />
          <SocialNetworks
            className="md:pl-15 px-7 md:px-0 pt-10 text-base md:gap-15 justify-between md:justify-start"
            linkClassName="border-r-0"
          />
        </div>

        <div className="relative md:absolute md:bottom-0 md:right-0  md:w-[50%] lg:w-[35%] md:h-[80%] h-100 w-100 bg-image:url('/LogoArmadilloGlow.png')">
          <Image
            src="/LogoArmadilloGlow.png"
            alt="Armadillo logo"
            fill
            priority
            objectFit="contain"
          />
        </div>

        <div className="md:w-[50%] lg:w-[40%] flex flex-col items-center md:items-start">
          <Button text="Ver proyectos" className="border-white w-[250px]" />
          <p className="md:text-3xl pt-10 text-center md:text-left">
            Programación de app y webs | Full stack developer | Integraciones |
            IOS y Android | IA
          </p>
        </div>
      </div>
      <div className="flex-1">
        <ProjectList />
      </div>
    </>
  );
}
