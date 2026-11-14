import Image from "next/image";
import { ChameleonBackground } from "@/components/ui/ChameleonBackground";
import { HobbyCard } from "@/components/ui/HobbyCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/data/about";
import { hobbies } from "@/data/hobbies";
import { sectionPalettes } from "@/data/palettes";
import { profileImages, site, socialLinks, ui } from "@/data/site";
import { displayUrl } from "@/lib/utils";

// giro de cada sticker de hobby, para que se vean "pegados a mano"
const tilts = ["-rotate-2", "rotate-1", "-rotate-1"];

/** Enlaces con la URL visible como texto (lo pidió el profe): CV, LinkedIn y GitHub */
function AboutLinks() {
  return (
    <ul className="mt-5 grid gap-4 sm:grid-cols-2">
      <li>
        {site.cvUrl ? (
          <a
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-sm flex h-full flex-col rounded-2xl bg-paper px-4 py-3 text-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="font-bold">{ui.cvLabel}</span>
            <span className="text-sm break-all underline decoration-2 underline-offset-2">
              {displayUrl(site.cvUrl)}
            </span>
            <span className="sr-only"> {ui.opensNewTab}</span>
          </a>
        ) : (
          <p className="flex h-full flex-col rounded-2xl border-3 border-dashed border-paper px-4 py-3">
            <span className="font-bold">{ui.cvLabel}</span>
            <span className="text-sm">{ui.cvPendingDetail}</span>
          </p>
        )}
      </li>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-sm flex h-full items-center gap-3 rounded-2xl bg-paper px-4 py-3 text-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            {link.icon && <Image src={link.icon} alt="" width={24} height={24} unoptimized className="size-6" />}
            <span className="flex min-w-0 flex-col">
              <span className="font-bold">{link.label}</span>
              <span className="text-sm break-all underline decoration-2 underline-offset-2">
                {displayUrl(link.href)}
              </span>
            </span>
            <span className="sr-only"> {ui.opensNewTab}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Acerca de mí (fondo atardecer): texto, avatar, datos, enlaces y hobbies */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative px-5 py-24 text-paper [--focus:var(--color-paper)] sm:px-8 lg:py-32"
    >
      <ChameleonBackground palette={sectionPalettes.about} />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="about-title" className="text-title">
              {about.title}
              {/* el nombre va en amarillo: da 4:1 o más aun donde brilla el fondo (es texto grande, pide 3:1) */}
              <span className="mt-1 block text-yellow">{site.fullName}</span>
            </h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-6 max-w-2xl text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            <h3 className="mt-12 text-3xl">{about.linksTitle}</h3>
            <AboutLinks />
          </div>

          <div className="lg:order-first lg:col-span-5">
            <Reveal variant="slap">
              <div className="sticker relative mx-auto size-56 rotate-3 overflow-hidden rounded-full sm:size-64 lg:mx-0">
                <Image
                  src={profileImages.avatar.src}
                  alt={profileImages.avatar.alt}
                  fill
                  placeholder="blur"
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <dl className="mt-10 space-y-5">
              {about.facts.map((fact) => (
                // cada grupo es un div con su <dt> y su <dd> directos (así lo exige HTML)
                <div key={fact.label} className="relative min-h-11 pl-14">
                  <dt className="text-sm font-semibold">
                    <span className="absolute top-0 left-0 grid size-11 place-items-center rounded-full border-2 border-ink bg-paper text-ink">
                      <Icon name={fact.icon} />
                    </span>
                    {fact.label}
                  </dt>
                  <dd className="text-lg leading-snug font-bold">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-5xl sm:text-6xl">{about.hobbiesTitle}</h3>
          <p className="mt-3 text-lg">{about.hobbiesLead}</p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {hobbies.map((hobby, index) => (
              <li key={hobby.id}>
                {/* los hobbies se "pegan" uno tras otro */}
                <Reveal variant="slap" delay={index * 140} className="h-full">
                  <HobbyCard hobby={hobby} className={tilts[index % tilts.length]} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
