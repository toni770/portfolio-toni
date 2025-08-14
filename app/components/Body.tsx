"use client";
import React from "react";
import { hostGrotesk } from "../fonts";
import { usePathname } from "next/navigation";
import NavLinks from "../nav-links";
import Footer from "../Footer";

const Body = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <body
      className={`${
        hostGrotesk.className
      } antialiased flex flex-col min-h-screen text-base  ${
        pathname === "/" ? "overflow-hidden" : ""
      }`}
    >
      <NavLinks className="z-[2]" />
      <main className="flex-1 z-[1] md:z-[3]">{children}</main>
      <Footer />
    </body>
  );
};

export default Body;
