import type { Metadata } from "next";
import "./globals.css";
import Body from "./components/Body";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: "Toni Martin",
    template: "%s | Toni Martin",
  },
  description: "Toni Martin Programador Freelance",
  keywords: [
    "Toni Martin",
    "Programador",
    "Freelance",
    "Portfolio",
    "Freelance",
  ],
  authors: [{ name: "Toni Martin" }],
  openGraph: {
    title: "Toni Martin",
    description: "Toni Martin Programador Freelance",
    type: "website",
    locale: "es-ES",
    siteName: "Toni Martin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="ToniMartinDev" />
      </head>

      <GoogleAnalytics gaId="G-TZM93WRJXK" />
      <Body>{children}</Body>
    </html>
  );
}
