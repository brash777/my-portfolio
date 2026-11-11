import { site, ui } from "@/data/site";

interface LogoProps {
  /** se usa en el menú móvil para cerrarlo al tocar el logo */
  onClick?: () => void;
}

/** Logo: sticker redondo con las iniciales + nombre. Lleva al inicio. */
export function Logo({ onClick }: LogoProps) {
  return (
    <a href="#hero" onClick={onClick} className="group flex items-center gap-2.5 rounded-full pr-2">
      <span
        aria-hidden="true"
        className="sticker-sm grid size-11 -rotate-6 place-items-center rounded-full bg-yellow font-display text-lg font-extrabold text-ink font-stretch-condensed transition-transform duration-200 group-hover:rotate-0"
      >
        {site.initials}
      </span>
      <span className="font-display text-xl leading-none font-extrabold font-stretch-condensed">
        {site.shortName}
      </span>
      <span className="sr-only">, {ui.homeLink}</span>
    </a>
  );
}
