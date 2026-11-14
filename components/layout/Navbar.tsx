"use client";

import { usePathname } from "next/navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { CvButton } from "@/components/ui/CvButton";
import { Logo } from "@/components/ui/Logo";
import { navItems, ui } from "@/data/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

// constante fuera del componente para que useScrollSpy no se reinicie en cada render
const sectionIds = navItems.map((item) => item.id);

/**
 * Menú siempre visible: barra-sticker fija arriba.
 * Desde 1024 px muestra los enlaces; en pantallas menores, el botón del menú móvil.
 * La sección activa se marca con fondo negro (forma + color) y aria-current.
 */
export function Navbar() {
  const activeId = useScrollSpy(sectionIds);
  // en /projects/... los enlaces deben volver a la página principal
  const linkPrefix = usePathname() === "/" ? "" : "/";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:border-3 focus:border-ink focus:bg-yellow focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        {ui.skipToContent}
      </a>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          aria-label={ui.mainNav}
          className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-sticker border-3 border-ink bg-paper p-2 text-ink shadow-hard [--focus:var(--color-ink)] lg:pr-3"
        >
          <Logo href={`${linkPrefix}#hero`} />

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <li key={item.id}>
                  <a
                    href={`${linkPrefix}#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "block rounded-full border-2 px-3 py-1.5 text-[0.95rem] font-semibold whitespace-nowrap transition-transform duration-200 hover:-translate-y-0.5 lg:max-xl:px-2.5",
                      isActive ? "border-ink bg-ink text-paper" : "border-transparent hover:border-ink",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            {/* el envoltorio oculta el botón en celular; en el menú móvil sí aparece */}
            <div className="hidden sm:block">
              <CvButton />
            </div>
            <MobileMenu activeId={activeId} linkPrefix={linkPrefix} />
          </div>
        </nav>
      </header>
    </>
  );
}
