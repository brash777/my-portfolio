import Image from "next/image";
import { CvButton } from "@/components/ui/CvButton";
import { Icon } from "@/components/ui/Icon";
import { hero } from "@/data/hero";
import { profileImages, site } from "@/data/site";
import { buttonSecondary } from "@/lib/styles";

/**
 * Inicio: saludo, nombre grande, rol, frase, botones (Descargar CV y Ver mis proyectos) y datos;
 * a la derecha, la foto en un marco de vidrio. Entra al cargar la página (solo CSS, sin esperar al scroll).
 */
export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="overflow-x-clip px-5 pt-32 pb-20 sm:px-8 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12">
        <div className="animate-rise-in lg:col-span-7">
          <p className="font-medium text-muted">{hero.kicker}</p>

          <h1 id="hero-title" className="mt-6">
            <span className="block text-2xl font-medium text-muted sm:text-3xl">{hero.greeting}</span>
            <span className="mt-2 block text-hero">{site.shortName}</span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-blue-soft sm:text-2xl">{site.role} junior</p>
          <p className="mt-5 max-w-xl text-lg text-muted">{hero.description}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <CvButton />
            <a href="#projects" className={buttonSecondary}>
              {hero.projectsButton}
            </a>
          </div>

          {/* cada dato es un div con su <dt> y su <dd>; visualmente el número va arriba */}
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="order-first text-3xl font-bold text-white [font-stretch:112%]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-slide-in-right [animation-delay:150ms] lg:col-span-5">
          <figure className="relative mx-auto max-w-sm">
            {/* brillo azul detrás de la foto */}
            <div aria-hidden="true" className="absolute inset-8 -z-10 rounded-full bg-blue/40 blur-3xl" />
            <div className="glass rounded-panel p-2">
              <Image
                src={profileImages.portrait.src}
                alt={profileImages.portrait.alt}
                placeholder="blur"
                preload
                sizes="(min-width: 640px) 384px, calc(100vw - 40px)"
                className="aspect-[4/5] h-auto w-full rounded-[1.35rem] object-cover"
              />
            </div>
            <figcaption className="glass-blur absolute -bottom-5 left-4 flex items-center gap-2.5 rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-white">
              <Icon name="code" className="size-4 text-blue-soft" />
              {hero.photoCaption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
