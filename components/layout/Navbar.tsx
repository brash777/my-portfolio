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
 * Menú siempre visible: barra de vidrio esmerilado fija arriba, de lado a lado.
 * Desde 1024 px muestra los enlaces; en pantallas menores, el botón del menú móvil.
 * La sección activa se marca con texto blanco y una raya azul debajo (no solo color) y aria-current.
 */
export function Navbar() {
  const activeId = useScrollSpy(sectionIds);
  // en /projects/... los enlaces deben volver a la página principal
  const linkPrefix = usePathname() === "/" ? "" : "/";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-blue focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        {ui.skipToContent}
      </a>

      <header className="glass-blur fixed inset-x-0 top-0 z-50 border-b border-line">
        <nav aria-label={ui.mainNav} className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Logo href={`${linkPrefix}#hero`} compactOnLaptop />

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <li key={item.id}>
                  <a
                    href={`${linkPrefix}#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block px-3 py-2 text-[0.95rem] font-medium whitespace-nowrap transition-colors duration-200 hover:text-white",
                      "after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-soft after:transition-transform after:duration-300",
                      isActive ? "text-white after:scale-x-100" : "text-muted after:scale-x-0",
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
              <CvButton className="min-h-10 px-5 py-2 text-sm" />
            </div>
            <MobileMenu activeId={activeId} linkPrefix={linkPrefix} />
          </div>
        </nav>
      </header>
    </>
  );
}
