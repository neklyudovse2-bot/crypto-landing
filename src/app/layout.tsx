import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clario Track — Crypto Portfolio Tracker",
  description:
    "A private crypto journal for traders who want to stay organized — no accounts, no cloud, no noise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0A0A0F] antialiased">{children}</body>
    </html>
  );
}
