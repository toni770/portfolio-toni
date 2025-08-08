"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { KeplerStd } from "./fonts";

const Links = [
  { name: "Proyectos", href: "/" },
  { name: "¿Quién soy?", href: "/about" },
  { name: "Contacto", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed md:static w-full flex p-4 px-7 justify-end md:justify-between items-center md:border-b border-darkGray text-darkGray h-16">
      {Links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={
            `hidden md:block  ` +
            (pathname === link.href ? "text-white underline" : "")
          }
        >
          {link.name}
        </Link>
      ))}
      <Bars2Icon
        className="md:hidden w-10 h-10 text-white cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className="flex flex-col md:hidden text-white text-6xl justify-center items-center w-screen h-screen fixed top-0 left-0 bg-black z-50">
          <XMarkIcon
            className="w-12 h-12 text-white cursor-pointer absolute top-10 right-10"
            onClick={() => setIsOpen(false)}
          />
          {Links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={
                `py-5  ` +
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
