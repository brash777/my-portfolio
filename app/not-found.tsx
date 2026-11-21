import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ChameleonBackground } from "@/components/ui/ChameleonBackground";
import { Icon } from "@/components/ui/Icon";
import { notFoundContent as content } from "@/data/not-found";
import { sectionPalettes } from "@/data/palettes";

export const metadata: Metadata = { title: content.tabTitle };

/**
 * Página 404: sale en cualquier dirección que no existe (por ejemplo /hola o /projects/xyz).
 * Usa el menú, el fondo azul del Inicio y el footer de siempre; lo único llamativo es
 * el sticker "404" torcido y con la esquina doblada, como si se estuviera despegando.
 */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <section
          aria-labelledby="not-found-title"
          className="relative px-5 pt-32 pb-24 text-paper [--focus:var(--color-paper)] sm:px-8 lg:pt-44 lg:pb-36"
        >
          <ChameleonBackground palette={sectionPalettes.hero} />
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12">
            {/* en celular el sticker va arriba; en computador, a la derecha del texto */}
            {/* más espacio a la derecha (pr) para que la esquina doblada no tape el último 4 */}
            <div className="lg:order-last lg:col-span-5 lg:col-start-8">
              <div className="relative mx-auto w-fit -rotate-3 animate-slap-in">
                <p
                  aria-hidden="true"
                  className="sticker dog-ear rounded-sticker bg-paper pt-7 pr-14 pb-6 pl-6 font-display text-[clamp(6.25rem,3.5rem+12vw,11.5rem)] leading-[0.8] font-extrabold text-ink font-stretch-condensed sm:pr-20 sm:pl-12"
                >
                  {content.code}
                </p>
                {/* la esquina doblada, igual a la de la foto del hero (aquí solo es dibujo) */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 56 56"
                  className="absolute right-0 bottom-0 size-14 drop-shadow-[3px_3px_0_var(--color-ink)]"
                >
                  <path d="M2 2 H54 L2 54 Z" strokeLinejoin="round" strokeWidth="3" className="fill-yellow stroke-ink" />
                </svg>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h1 id="not-found-title" className="text-display">
                {content.title}
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-relaxed">{content.lead}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="sticker-sm inline-flex min-h-11 items-center gap-2 rounded-full bg-yellow px-5 py-2.5 font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Icon name="chevronLeft" />
                  {content.homeButton}
                </Link>
                <Link
                  href="/#projects"
                  className="sticker-sm inline-flex min-h-11 items-center rounded-full bg-paper px-5 py-2.5 font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5"
                >
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
