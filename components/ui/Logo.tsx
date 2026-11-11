import { site, ui } from "@/data/site";

interface LogoProps {
  /** "#hero" en la página principal, "/#hero" en las demás */
  href?: string;
  /** se usa en el menú móvil para cerrarlo al tocar el logo */
  onClick?: () => void;
}

/** Logo: sticker redondo con las iniciales + nombre. Lleva al inicio. */
export function Logo({ href = "#hero", onClick }: LogoProps) {
  return (
    <a href={href} onClick={onClick} className="group flex items-center gap-2.5 rounded-full pr-2">
      <span
        aria-hidden="true"
        className="sticker-sm grid size-11 -rotate-6 place-items-center rounded-full bg-yellow font-display text-lg font-extrabold text-ink font-stretch-condensed transition-transform duration-200 group-hover:rotate-0"
      >
        {site.initials}
      </span>
      {/* entre 1024 y 1279 px no cabe junto al menú: queda solo para lectores de pantalla */}
      <span className="font-display text-xl leading-none font-extrabold whitespace-nowrap font-stretch-condensed lg:max-xl:sr-only">
        {site.shortName}
      </span>
      <span className="sr-only">, {ui.homeLink}</span>
    </a>
  );
}
