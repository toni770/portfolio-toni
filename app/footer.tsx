import SocialNetworks from "./components/SocialNetworks";

export default function Footer({ className }: { className?: string }) {
  return (
    <div
      className={`text-base w-full flex flex-col md:flex-row md:px-7 justify-between items-center border-t border-darkGray text-darkGray h-[6rem] md:h-[3rem] ${className}`}
    >
      <div className="flex w-full md:hidden border-b">
        <p className="flex-1 text-center border-r py-3">{`© ${new Date().getFullYear()} Toni Martin`}</p>
        <p className="flex-1 text-center py-3 ">
          Diseño by{" "}
          <a
            href="https://abrilsecchi.com"
            target="_blank"
            className="underline"
          >
            Abril Secchi
          </a>
        </p>
      </div>
      <p className=" hidden md:block">{`© ${new Date().getFullYear()} Toni Martin`}</p>
      <SocialNetworks
        className="text-sm w-full md:w-auto md:gap-15"
        linkClassName="py-3 w-full flex-1 text-center"
      />
      <p className="hidden md:block">
        Diseño by{" "}
        <a href="https://abrilsecchi.com" target="_blank" className="underline">
          Abril Secchi
        </a>
      </p>
    </div>
  );
}
