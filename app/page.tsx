import Image from "next/image";
import SocialNetworks from "./components/SocialNetworks";
import Button from "./components/Button";
import ProjectList from "./components/ProjectList";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-[calc(100vh-4rem)] w-full px-7 py-7">
        <div>
          <Image
            src="/LogoToniWhite.svg"
            alt="Toni logo"
            width={1300}
            height={100}
            priority
          />
          <SocialNetworks className="pl-15 pt-10" />
        </div>

        <div className="w-[40%]">
          <Button text="Ver proyectos" className="border-white " />
          <p className="text-[30px] pt-10">
            Programación de app y webs | Full stack developer | Integraciones |
            IOS y Android | IA
          </p>
        </div>

        <div className="absolute bottom-0 right-0 z-[-1] w-[35%] h-[80%]">
          <Image
            src="/LogoArmadilloGlow.png"
            alt="Armadillo logo"
            fill
            priority
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex-1">
        <ProjectList />
      </div>
    </>
  );
}
