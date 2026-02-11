import type { Metadata } from "next";
import { Anton, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import IubendaScripts from "@/components/IubendaScripts";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
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
        className={`${anton.variable} ${archivo.variable} ${jetbrainsMono.variable} antialiased bg-black text-white font-sans`}
      >
        <IubendaScripts />
        {children}
      </body>
    </html>
  );
}
