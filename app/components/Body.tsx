"use client";
import React, { useState } from "react";
import { hostGrotesk } from "../fonts";
import { usePathname } from "next/navigation";
import NavLinks from "../nav-links";
import Footer from "../Footer";
import { LayoutProvider } from "../useHeader";
import ReCaptchaProvider from "./ReCaptchaProvider";

const Body = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [hideHeader, setHideHeader] = useState(false);
  const [footerInFront, setFooterInFront] = useState(true);

  return (
    <body
      suppressHydrationWarning
      className={`${
        hostGrotesk.className
      } antialiased flex flex-col min-h-screen text-base w-full  ${
        pathname === "/" ? "md:overflow-hidden" : ""
      }`}
    >
      {!hideHeader && <NavLinks className="z-[2]" />}
      <ReCaptchaProvider>
        <LayoutProvider
          hideHeader={hideHeader}
          setHideHeader={setHideHeader}
          footerInFront={footerInFront}
          setFooterInFront={setFooterInFront}
        >
          {" "}
          <main className="flex-1 z-[1] md:z-[3]">{children}</main>
        </LayoutProvider>
      </ReCaptchaProvider>
      <Footer className={footerInFront ? "z-[2]" : "z-[0]"} />
    </body>
  );
};

export default Body;
