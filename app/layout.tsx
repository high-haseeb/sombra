import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sombra Labs",
  description: "made by high-haseeb",
};

const turret = localFont({ src: [
  { path: "./../public/fonts/TurretRoad-Regular.ttf", style: "normal", weight: '400' },
  { path: "./../public/fonts/TurretRoad-Bold.ttf", style: "normal", weight: '700' },
] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={turret.className}>{children}</body>
    </html>
  );
}
