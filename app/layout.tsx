import type { Metadata } from "next";
import { Oswald, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import IubendaScripts from "@/components/IubendaScripts";
import CursorGlow from "@/components/effects/CursorGlow";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import ScrollProgress from "@/components/effects/ScrollProgress";

const oswald = Oswald({
  variable: "--font-anton",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrea Lanzone | Consulenza Strategica e Decisionale",
  description: "Se vuoi qualcuno che decide quando la situazione è complessa, ti servo io. Consulenza strategica per imprenditori e aziende.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${oswald.variable} ${archivo.variable} ${jetbrainsMono.variable} antialiased bg-black text-white font-sans`}
      >
        <IubendaScripts />
        <ScrollProgress />
        <CursorGlow />
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
