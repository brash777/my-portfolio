import Image from "next/image";
import Link from "next/link";
import { CvButton } from "@/components/ui/CvButton";
import { Icon } from "@/components/ui/Icon";
import { hero } from "@/data/hero";
import { getProject } from "@/data/projects";
import { profileImages, site } from "@/data/site";
import { buttonSecondary } from "@/lib/styles";

/** Tarjeta de vidrio de la derecha: la app más fuerte (Flux IA) con su pantalla */
function FeaturedCard() {
  const project = getProject(hero.featured.slug);
  if (!project?.cover) return null;

  return (
    <div className="glass relative mx-auto w-full max-w-sm overflow-hidden rounded-panel p-6 sm:p-7">
      {/* brillo azul detrás del celular */}
      <div aria-hidden="true" className="absolute inset-x-0 top-10 mx-auto size-72 rounded-full bg-blue/35 blur-3xl" />
      <div className="relative flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-blue-soft">{hero.featured.label}</p>
        {project.logo && <Image src={project.logo.src} alt="" sizes="40px" className="size-10 rounded-xl" />}
      </div>
      {/* el celular se corta abajo: así siempre se ve el inicio de la pantalla */}
      <div className="relative mx-auto mt-5 h-72 w-48 overflow-hidden rounded-t-[1.75rem] border border-b-0 border-line sm:h-80 sm:w-52">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          placeholder="blur"
          preload
          sizes="208px"
          className="h-auto w-full"
        />
      </div>
      <div className="relative -mx-6 -mb-6 border-t border-line bg-night/70 px-6 py-5 backdrop-blur sm:-mx-7 sm:-mb-7 sm:px-7">
        <p className="text-xl font-semibold text-white [font-stretch:112%]">{project.name}</p>
        <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-semibold text-blue-soft hover:text-white"
        >
          {hero.featured.linkLabel}
          <Icon name="arrowUpRight" className="size-4" />
        </Link>
      </div>
    </div>
  );
}

/** Inicio: saludo con foto, rol, frase, botones (Descargar CV y Ver mis proyectos), datos y la app destacada */
export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="px-5 pt-32 pb-20 sm:px-8 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12">
        <div className="animate-rise-in lg:col-span-7">
          <div className="flex items-center gap-4">
            <Image
              src={profileImages.avatar.src}
              alt={profileImages.avatar.alt}
              placeholder="blur"
              sizes="64px"
              className="size-16 rounded-full border border-line object-cover ring-4 ring-blue/25"
            />
            <p className="font-medium text-muted">{hero.kicker}</p>
          </div>

          <h1 id="hero-title" className="mt-8">
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

        <div className="animate-rise-in [animation-delay:150ms] lg:col-span-5">
          <FeaturedCard />
        </div>
      </div>
    </section>
  );
}
