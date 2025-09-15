"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { KeplerStd } from "./fonts";

const Links = [
  { name: "Proyectos", href: "/" },
  { name: "¿Quién soy?", href: "/about/" },
  { name: "Contacto", href: "/contact/" },
];

// Links used in Header.Both Mobile and Desktop format.
export default function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed md:static pointer-events-none w-full flex px-7 justify-end md:justify-between items-center md:border-b border-darkGray text-darkGray h-[4rem] ${className}`}
    >
      {Links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={
            `pointer-events-auto hidden md:block  ` +
            (pathname === link.href ? "text-white underline" : "")
          }
        >
          {link.name}
        </Link>
      ))}
      <Bars2Icon
        className="md:hidden w-10 h-10 text-white cursor-pointer pointer-events-auto"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className="flex pointer-events-auto flex-col md:hidden text-white text-6xl justify-center items-center w-screen h-screen fixed top-0 left-0 bg-black ">
          <XMarkIcon
            className="w-12 h-12 text-white cursor-pointer absolute top-10 right-10"
            onClick={() => setIsOpen(false)}
          />
          {Links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={
                `py-5 pointer-events-auto ` +
                (pathname === link.href
                  ? `text-white underline ${KeplerStd.className}`
                  : "")
              }
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
