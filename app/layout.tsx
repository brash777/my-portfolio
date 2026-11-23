import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/siteUrl";
import "./globals.css";

// Mona Sans (la letra de GitHub) para todo. Con el eje "wdth" los títulos se ven anchos y los textos normales.
const mona = Mona_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-mona",
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
    <html lang="es" className={`${mona.variable} antialiased`}>
      <body>
        {/* sin JavaScript no hay animaciones al hacer scroll: se muestra todo de una */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;animation:none!important}"}</style>
        </noscript>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
