import { site, ui } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** "#hero" en la página principal, "/#hero" en las demás */
  href?: string;
  /** se usa en el menú móvil para cerrarlo al tocar el logo */
  onClick?: () => void;
  /** en el menú fijo, entre 1024 y 1279 px el nombre no cabe junto a los enlaces: queda solo para lectores de pantalla */
  compactOnLaptop?: boolean;
}

/** Logo: las iniciales en un cuadro azul + el nombre. Lleva al inicio. */
export function Logo({ href = "#hero", onClick, compactOnLaptop = false }: LogoProps) {
  return (
    <a href={href} onClick={onClick} className="flex items-center gap-3 rounded-xl">
      <span
        aria-hidden="true"
        className="grid size-10 place-items-center rounded-xl bg-linear-to-br from-blue to-[#1a2f99] text-sm font-bold tracking-tight text-white shadow-glow [font-stretch:112%]"
      >
        {site.initials}
      </span>
      <span className={cn("text-lg font-semibold whitespace-nowrap text-white [font-stretch:112%]", compactOnLaptop && "lg:max-xl:sr-only")}>
        {site.shortName}
      </span>
      <span className="sr-only">, {ui.homeLink}</span>
    </a>
  );
}
