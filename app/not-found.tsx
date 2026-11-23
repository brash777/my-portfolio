import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Icon } from "@/components/ui/Icon";
import { notFoundContent as content } from "@/data/not-found";
import { buttonPrimary, buttonSecondary } from "@/lib/styles";

export const metadata: Metadata = { title: content.tabTitle };

/**
 * Página 404: sale en cualquier dirección que no existe (por ejemplo /hola o /projects/xyz).
 * Usa el menú y el pie de siempre; el "404" grande va en una tarjeta de vidrio.
 */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <section aria-labelledby="not-found-title" className="px-5 pt-36 pb-28 sm:px-8 lg:pt-44 lg:pb-36">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
            <div className="lg:order-last lg:col-span-5">
              <p
                aria-hidden="true"
                className="glass mx-auto w-fit rounded-panel px-10 py-6 text-[clamp(5.5rem,3rem+10vw,10rem)] leading-none font-bold text-white [font-stretch:112%] [text-shadow:0_0_60px_rgb(47_91_255/0.8)]"
              >
                {content.code}
              </p>
            </div>
            <div className="lg:col-span-7">
              <h1 id="not-found-title" className="text-hero">
                {content.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted">{content.lead}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/" className={buttonPrimary}>
                  <Icon name="chevronLeft" className="size-4" />
                  {content.homeButton}
                </Link>
                <Link href="/#projects" className={buttonSecondary}>
                  {content.projectsButton}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer linkPrefix="/" />
    </>
  );
}
