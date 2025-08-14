import type { Metadata } from "next";
import "./globals.css";
import Body from "./components/Body";

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
      <Body>{children}</Body>
    </html>
  );
}
