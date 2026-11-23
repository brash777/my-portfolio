"use client";

import { useRef, useState } from "react";
import { CvButton } from "@/components/ui/CvButton";
import { Logo } from "@/components/ui/Logo";
import { navItems, socialLinks, ui } from "@/data/site";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types";

interface MobileMenuProps {
  activeId: SectionId | null;
  /** "" en la página principal, "/" en las demás (para volver a la sección) */
  linkPrefix: string;
}

/**
 * Menú móvil a pantalla completa (solo por debajo de 1024 px).
 * Usa <dialog> nativo con showModal(): el navegador ya cierra con Esc,
 * deja el foco del teclado dentro del menú y lo devuelve al botón al cerrar.
 */
export function MobileMenu({ activeId, linkPrefix }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    dialogRef.current?.showModal();
    closeButtonRef.current?.focus(); // el foco empieza en "Cerrar menú"
    setIsOpen(true);
  }

  function closeMenu() {
    dialogRef.current?.close(); // dispara onClose, que actualiza el estado
  }

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="glass grid size-11 place-items-center rounded-xl text-white lg:hidden"
      >
        <span className="sr-only">{ui.openMenu}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        aria-label={ui.mobileNav}
        onClose={() => setIsOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-night/95 p-0 text-text backdrop-blur-xl transition-[opacity,translate] duration-300 ease-out starting:open:-translate-y-4 starting:open:opacity-0 lg:hidden"
      >
        <div className="flex min-h-full flex-col px-5 pt-4 pb-8 sm:px-8">
          <div className="flex items-center justify-between gap-3">
            <Logo href={`${linkPrefix}#hero`} onClick={closeMenu} />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              className="glass grid size-11 place-items-center rounded-xl text-white"
            >
              <span className="sr-only">{ui.closeMenu}</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label={ui.mobileNav} className="mt-10 flex-1">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <li key={item.id}>
                    <a
                      href={`${linkPrefix}#${item.id}`}
                      onClick={closeMenu}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-3xl font-semibold [font-stretch:112%] sm:text-4xl",
                        isActive ? "text-white before:size-2 before:rounded-full before:bg-blue-soft" : "text-muted",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CvButton />
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex min-h-11 items-center rounded-full px-5 py-2 text-sm font-semibold"
              >
                {link.label}
                <span className="sr-only"> {ui.opensNewTab}</span>
              </a>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
