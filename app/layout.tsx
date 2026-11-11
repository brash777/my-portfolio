import type { Metadata } from "next";
import { Hubot_Sans, JetBrains_Mono, Mona_Sans } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

// Hubot Sans: títulos (se usa angosta con el eje de ancho "wdth")
const hubot = Hubot_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-hubot",
});

// Mona Sans: textos
const mona = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
});

// JetBrains Mono: solo el panel tipo editor de código del hero
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${hubot.variable} ${mona.variable} ${jetbrains.variable} antialiased`}>
      <body>
        {/* sin JavaScript no hay animaciones de entrada: se muestra todo de una */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
