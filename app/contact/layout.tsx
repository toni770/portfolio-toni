import type { Metadata } from "next";
import "../globals.css";
import ReCaptchaProvider from "../components/ReCaptchaProvider";

export const metadata: Metadata = {
  title: "Toni Martin",
  description: "Toni Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReCaptchaProvider>{children}</ReCaptchaProvider>;
}
