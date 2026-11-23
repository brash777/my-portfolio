import Image from "next/image";
import type { CSSProperties } from "react";
import { CvButton } from "@/components/ui/CvButton";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/data/about";
import { profileImages } from "@/data/site";
import { buttonSecondary } from "@/lib/styles";

/**
 * Sobre mí: foto grande con una insignia (semestre) a la izquierda; a la derecha la presentación,
 * datos rápidos, "Fuera del código", "Idiomas", las tecnologías que manejo y los botones.
 */
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div data-reveal="left" className="relative mx-auto max-w-sm lg:sticky lg:top-28">
            <div className="glass overflow-hidden rounded-panel p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={profileImages.hero.src}
                  alt={profileImages.hero.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 640px) 384px, calc(100vw - 40px)"
                  className="object-cover object-[46%_30%]"
                />
              </div>
            </div>
            {/* insignia de vidrio esmerilado sobre la esquina de la foto */}
            <div className="glass-blur absolute -bottom-6 left-4 rounded-card border border-line px-5 py-3.5 sm:-right-6 sm:left-auto">
              <p className="text-xl font-bold text-white [font-stretch:112%]">{about.badge.title}</p>
              <p className="text-sm text-muted">{about.badge.text}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div data-reveal="up">
            <SectionHeading id="about-title" lead={about.lead}>
              {about.title}
            </SectionHeading>
          </div>

          <div data-reveal="up">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* datos rápidos que pide la guía (ubicación, universidad y desde cuándo estudio) */}
          <ul data-reveal="up" className="mt-8 grid gap-4 sm:grid-cols-3">
            {about.facts.map((fact) => (
              <li key={fact.label} className="flex items-start gap-3 text-sm">
                <span aria-hidden="true" className="glass grid size-10 shrink-0 place-items-center rounded-xl text-blue-soft">
                  <Icon name={fact.icon} />
                </span>
                <span>
                  <span className="block text-muted">{fact.label}</span>
                  <span className="font-semibold text-white">{fact.value}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div data-reveal="up" className="glass rounded-card p-6">
              <h3 className="flex items-center gap-2.5 text-lg">
                <Icon name="heart" className="text-blue-soft" />
                {about.outside.title}
              </h3>
              <p className="mt-3 text-muted">{about.outside.text}</p>
            </div>
            <div data-reveal="up" style={{ "--reveal-delay": "100ms" } as CSSProperties} className="glass rounded-card p-6">
              <h3 className="flex items-center gap-2.5 text-lg">
                <Icon name="language" className="text-blue-soft" />
                {about.languages.title}
              </h3>
              <ul className="mt-3 space-y-2 text-muted">
                {about.languages.items.map((item) => (
                  <li key={item.name}>
                    <span className="font-semibold text-white">{item.name}:</span> {item.level}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 data-reveal="up" className="mt-12 text-2xl">
            {about.focusTitle}
          </h3>
          <ul className="mt-5 grid gap-5 sm:grid-cols-3">
            {about.focus.map((item, index) => (
              <li
                key={item.title}
                data-reveal="up"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
                className="glass rounded-card p-5"
              >
                <Icon name={item.icon} className="size-6 text-blue-soft" />
                <p className="mt-3 font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.techs}</p>
              </li>
            ))}
          </ul>

          <div data-reveal="up" className="mt-10 flex flex-wrap gap-3">
            <CvButton />
            <a href="#projects" className={buttonSecondary}>
              {about.projectsButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
