import Config from "./config";
import { AuxMono } from "./fonts";

export default function Footer() {
  return (
    <div className=" w-full flex p-2 px-7 justify-between items-center border-t border-darkGray text-darkGray h-12">
      <p>© 2025 Toni Martin</p>
      <div className={`flex gap-15 text-sm text-darkGray ${AuxMono.className}`}>
        <a href={Config.url.github} target="_blank">
          Github
        </a>
        <a href={Config.url.linkedin} target="_blank">
          Linkedin
        </a>
        <a href={`mailto:${Config.url.gmail}`}>Gmail</a>
      </div>
      <p>
        Diseño by{" "}
        <a href="https://abrilsecchi.com" target="_blank" className="underline">
          Abril Secchi
        </a>
      </p>
    </div>
  );
}
