"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { name: "Inicio", href: "/" },
  { name: "Quién soy", href: "/about" },
  { name: "Contacto", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className=" w-full flex p-4 px-7 justify-between items-center border-b border-darkGray text-darkGray h-16">
      {Links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={pathname === link.href ? "text-white underline" : ""}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
