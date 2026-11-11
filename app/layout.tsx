import type { Metadata } from "next";
import { Hubot_Sans, JetBrains_Mono, Mona_Sans } from "next/font/google";
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
  title: "Portafolio",
  description: "Portafolio personal",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${hubot.variable} ${mona.variable} ${jetbrains.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
