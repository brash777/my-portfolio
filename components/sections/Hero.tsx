import Image from "next/image";
import { CodePanel } from "@/components/ui/CodePanel";
import { CvButton } from "@/components/ui/CvButton";
import { FlipCard } from "@/components/ui/FlipCard";
import { TechBadge } from "@/components/ui/TechBadge";
import { hero } from "@/data/hero";
import { services } from "@/data/services";
import { profileImages, site, ui } from "@/data/site";

// giro de cada sticker del stack, para que se vean "pegados a mano"
const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "rotate-1", "-rotate-2"];

/** Reverso de la tarjeta: CV resumido */
function CvSummary() {
  const { cv } = hero;
  return (
    <div className="flex h-full flex-col gap-3 bg-yellow px-4 pt-9 pb-14 text-ink [--focus:var(--color-ink)] sm:gap-4 sm:px-6 sm:pt-10 sm:pb-16">
      <h2 className="text-3xl leading-none sm:text-4xl">{cv.title}</h2>

      <div>
        <h3 className="text-lg leading-tight sm:text-xl">{cv.whoTitle}</h3>
        <p className="mt-1 text-sm leading-snug">{cv.who}</p>
      </div>

      <div>
        <h3 className="text-lg leading-tight sm:text-xl">{cv.doTitle}</h3>
        <p className="mt-1 text-sm leading-snug">{cv.do}</p>
      </div>

      <div>
        <h3 className="text-lg leading-tight sm:text-xl">{cv.servicesTitle}</h3>
        <ul className="mt-1.5 flex flex-wrap gap-1.5">
          {services.map((service) => (
            <li key={service.title} className="rounded-full border-2 border-ink px-2.5 py-0.5 text-xs font-semibold">
              {service.title}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg leading-tight sm:text-xl">{cv.experienceTitle}</h3>
        <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-snug">
          {cv.experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
        <CvButton />
        <a
          href={site.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-ink px-3 py-2 text-sm font-bold"
        >
          {cv.moreButton}
          <span className="sr-only"> {ui.opensNewTab}</span>
        </a>
      </div>
      {site.cvUrl && (
        <p className="text-xs break-all">
          {cv.cvLinkLabel} {site.cvUrl}
        </p>
      )}
    </div>
  );
}

/** Inicio (azul): saludo, intro, botones, panel de código, foto flip y stack */
export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-blue px-5 pt-32 pb-24 text-paper [--focus:var(--color-paper)] sm:px-8 lg:pt-40"
    >
      {/* en celular el orden es: intro, foto y panel de código; en computador la foto va a la derecha */}
      <div className="mx-auto grid max-w-6xl items-center gap-x-12 gap-y-14 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:row-start-1">
          <p className="text-lg font-semibold">{hero.kicker}</p>
          <h1 id="hero-title" className="mt-4">
            <span className="block text-title">{hero.greeting}</span>
            <span className="-ml-1 block text-hero">{site.name}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed">{hero.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CvButton />
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sticker-sm inline-flex items-center rounded-full bg-paper px-4 py-2 font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5"
            >
              {hero.githubButton}
              <span className="sr-only"> {ui.opensNewTab}</span>
            </a>
          </div>

        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
          <div className="relative mx-auto max-w-sm">
            <p className="sticker-sm absolute -top-5 -left-3 z-10 -rotate-6 rounded-full bg-red px-4 py-1.5 font-display text-xl font-extrabold text-paper font-stretch-condensed">
              {site.role}
            </p>
            <FlipCard
              toBackLabel={hero.flip.toBack}
              toFrontLabel={hero.flip.toFront}
              front={
                // size-full: llena la tarjeta aunque el reverso la haga más alta que 3:4
                <div className="relative aspect-[3/4] size-full">
                  <Image
                    src={profileImages.hero.src}
                    alt={profileImages.hero.alt}
                    fill
                    preload
                    placeholder="blur"
                    sizes="(min-width: 640px) 384px, calc(100vw - 40px)"
                    className="object-cover object-[46%_30%]"
                  />
                </div>
              }
              back={<CvSummary />}
            />
          </div>

          <p className="mx-auto mt-6 max-w-sm text-sm">{hero.flip.hint}</p>

          <ul aria-label={hero.stackLabel} className="mx-auto mt-6 flex max-w-sm flex-wrap gap-3">
            {hero.stack.map((tech, index) => (
              <li key={tech}>
                <TechBadge name={tech} className={tilts[index % tilts.length]} />
              </li>
            ))}
          </ul>
        </div>

        <CodePanel
          fileName={hero.code.fileName}
          variable={hero.code.variable}
          fields={hero.code.fields}
          className="w-full max-w-lg -rotate-1 self-start lg:col-span-7 lg:row-start-2"
        />
      </div>
    </section>
  );
}
