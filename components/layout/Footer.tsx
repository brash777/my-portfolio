import Image from "next/image";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Icon } from "@/components/ui/Icon";
import { TechBadge } from "@/components/ui/TechBadge";
import { footerContent as content } from "@/data/footer";
import { footerPalette } from "@/data/palettes";
import { navItems, site, socialLinks, ui } from "@/data/site";
import { paletteZone } from "@/lib/palette";

interface FooterProps {
  /** "" en la página principal, "/" en las demás */
  linkPrefix?: string;
}

/** Pie de página (fondo casi negro): frase, tecnologías, secciones, contacto y año automático */
export function Footer({ linkPrefix = "" }: FooterProps) {
  return (
    <footer
      {...paletteZone(footerPalette)}
      className="px-5 pt-20 pb-10 text-paper [--focus:var(--color-paper)] sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="max-w-3xl font-display text-5xl leading-[0.9] font-extrabold font-stretch-condensed sm:text-7xl">
          {content.phrase}
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl">{content.builtWithTitle}</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {content.builtWith.map((item) => (
                <li key={item.name}>
                  <TechBadge tech={item} size="sm" />
                </li>
              ))}
            </ul>
          </div>

          <nav aria-labelledby="footer-nav-title">
            <h2 id="footer-nav-title" className="text-2xl">
              {content.navTitle}
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`${linkPrefix}#${item.id}`} className="inline-block py-1.5 underline-offset-4 hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-2xl">{content.contactTitle}</h2>
            <ul className="mt-5 space-y-3">
              {site.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline">
                    <Icon name="mail" />
                    {email}
                  </a>
                </li>
              ))}
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline"
                  >
                    {link.icon && (
                      <Image src={link.icon} alt="" width={20} height={20} unoptimized className="size-5 invert" />
                    )}
                    {link.label}
                    <span className="sr-only"> {ui.opensNewTab}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t-2 border-paper/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            © <CurrentYear /> {content.madeBy}
          </p>
          <a
            href={`${linkPrefix}#hero`}
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border-2 border-paper px-4 py-2 text-sm font-bold"
          >
            <Icon name="arrowUp" className="size-4" />
            {content.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
