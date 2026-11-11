import type { Metadata } from "next";
import { Hubot_Sans, JetBrains_Mono, Mona_Sans } from "next/font/google";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/siteUrl";
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
  preload: false, // no se precarga: así no le quita velocidad a la foto del hero
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    locale: "es_CO",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
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
