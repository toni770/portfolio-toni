import Image from "next/image";
import { AuxMono } from "./fonts";
import Config from "./config";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-4rem)] w-full px-7 py-7">
      <div>
        <Image
          src="/LogoToniWhite.svg"
          alt="Toni logo"
          width={1300}
          height={100}
          priority
        />
        <div
          className={`flex gap-15 pl-15 pt-10 text-sm text-darkGray ${AuxMono.className}`}
        >
          <a href={Config.url.github} target="_blank">
            Github
          </a>
          <a href={Config.url.linkedin} target="_blank">
            Linkedin
          </a>
          <a href={Config.url.gmail} target="_blank">
            Gmail
          </a>
        </div>
      </div>

      <div className="w-[40%]">
        <button className="border border-white p-2 px-15 rounded-4xl bg-black">
          Ver proyectos
        </button>
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
  );
}
