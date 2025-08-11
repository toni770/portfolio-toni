import type { Metadata } from "next";
import "./globals.css";
import { hostGrotesk } from "./fonts";
import NavLinks from "./nav-links";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Toni Martin",
  description: "Toni Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hostGrotesk.className} antialiased flex flex-col min-h-screen text-base`}
      >
        <NavLinks />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
