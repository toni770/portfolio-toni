import { Host_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
});

export const KeplerStd = localFont({
  src: "../public/KeplerStdItalic.otf",
});

export const AuxMono = localFont({
  src: "../public/AuxMono.otf",
});
