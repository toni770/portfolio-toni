import SocialNetworks from "./components/SocialNetworks";

export default function Footer() {
  return (
    <div className=" w-full flex p-2 px-7 justify-between items-center border-t border-darkGray text-darkGray h-12">
      <p>{`© ${new Date().getFullYear()} Toni Martin`}</p>
      <SocialNetworks className="text-sm" />
      <p>
        Diseño by{" "}
        <a href="https://abrilsecchi.com" target="_blank" className="underline">
          Abril Secchi
        </a>
      </p>
    </div>
  );
}
