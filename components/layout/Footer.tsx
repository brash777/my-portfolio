import Image from "next/image";
import type { CSSProperties } from "react";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { footerContent as content } from "@/data/footer";
import { services } from "@/data/services";
import { navItems, site, socialLinks, ui } from "@/data/site";

interface FooterProps {
  /** "" en la página principal, "/" en las demás */
  linkPrefix?: string;
}

/**
 * Pie de página limpio: logo, frase y redes; enlaces; especialidades; contacto.
 * Abajo: © con el año automático, créditos (con qué está hecho) y "Volver arriba".
 */
export function Footer({ linkPrefix = "" }: FooterProps) {
  return (
    <footer className="border-t border-line bg-night/60 px-5 pt-16 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div data-reveal="left" className="lg:col-span-4">
            <Logo href={`${linkPrefix}#hero`} />
            <p className="mt-5 max-w-xs text-sm text-muted">{content.bio}</p>
            <ul className="mt-6 flex gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass grid size-11 place-items-center rounded-xl transition duration-200 hover:-translate-y-0.5 hover:border-blue-soft/40"
                  >
                    {link.icon && <Image src={link.icon} alt="" width={20} height={20} unoptimized className="icon-light size-5" />}
                    <span className="sr-only">
                      {link.label} {ui.opensNewTab}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav data-reveal="up" aria-labelledby="footer-nav-title" className="lg:col-span-2">
            <h2 id="footer-nav-title" className="text-sm font-semibold text-white">
              {content.navTitle}
            </h2>
            <ul className="mt-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`${linkPrefix}#${item.id}`} className="inline-block py-1 text-sm text-muted hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div data-reveal="up" style={{ "--reveal-delay": "100ms" } as CSSProperties} className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-white">{content.specialtiesTitle}</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.title} className="text-sm text-muted">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal="up" style={{ "--reveal-delay": "200ms" } as CSSProperties} className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-white">{content.contactTitle}</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {site.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="inline-flex items-center gap-2 break-all hover:text-white">
                    <Icon name="mail" className="size-4 text-blue-soft" />
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Icon name="pin" className="size-4 text-blue-soft" />
                {site.location}
              </li>
              <li>
                <a href={site.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                  <Icon name="code" className="size-4 text-blue-soft" />
                  github.com/{site.githubUser}
                  <span className="sr-only"> {ui.opensNewTab}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {content.madeBy}. {content.credits}
          </p>
          <a
            href={`${linkPrefix}#hero`}
            className="glass inline-flex min-h-11 w-fit items-center gap-2 rounded-full px-4 py-2 font-semibold text-white hover:border-blue-soft/40"
          >
            <Icon name="arrowUp" className="size-4" />
            {content.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
