"use client";
import React, { useState } from "react";
import { hostGrotesk } from "../fonts";
import { usePathname } from "next/navigation";
import NavLinks from "../nav-links";
import Footer from "../Footer";
import { HeaderProvider } from "../useHeader";

const Body = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [hideHeader, setHideHeader] = useState(false);
  return (
    <body
      suppressHydrationWarning
      className={`${
        hostGrotesk.className
      } antialiased flex flex-col min-h-screen text-base w-full  ${
        pathname === "/" ? "overflow-hidden" : ""
      }`}
    >
      {!hideHeader && <NavLinks className="z-[2]" />}
      <HeaderProvider hideHeader={hideHeader} setHideHeader={setHideHeader}>
        {" "}
        <main className="flex-1 z-[1] md:z-[3]">{children}</main>
      </HeaderProvider>
      <Footer />
    </body>
  );
};

export default Body;
