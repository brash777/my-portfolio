"use client";

import { useRef, useState } from "react";
import { CvButton } from "@/components/ui/CvButton";
import { Logo } from "@/components/ui/Logo";
import { navItems, socialLinks, ui } from "@/data/site";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types";

interface MobileMenuProps {
  activeId: SectionId | null;
}

/**
 * Menú móvil a pantalla completa (solo por debajo de 1024 px).
 * Usa <dialog> nativo con showModal(): el navegador ya cierra con Esc,
 * deja el foco del teclado dentro del menú y lo devuelve al botón al cerrar.
 */
export function MobileMenu({ activeId }: MobileMenuProps) {
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
        className="sticker-sm grid size-11 place-items-center rounded-xl bg-yellow text-ink lg:hidden"
      >
        <span className="sr-only">{ui.openMenu}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M4 6h16M4 12h11M4 18h16" />
        </svg>
      </button>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        aria-label={ui.mobileNav}
        onClose={() => setIsOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-blue p-0 text-paper transition-[opacity,translate] duration-300 ease-slap [--focus:var(--color-paper)] starting:open:-translate-y-6 starting:open:opacity-0 lg:hidden"
      >
        <div className="flex min-h-full flex-col px-5 pt-5 pb-8 sm:px-8">
          <div className="flex items-center justify-between gap-3">
            <Logo onClick={closeMenu} />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              className="sticker-sm grid size-11 place-items-center rounded-xl bg-paper text-ink"
            >
              <span className="sr-only">{ui.closeMenu}</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
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
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "inline-block rounded-2xl px-3 py-1.5 font-display text-5xl leading-none font-extrabold font-stretch-condensed sm:text-6xl",
                        isActive && "sticker-sm -rotate-2 bg-yellow text-ink",
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
                className="rounded-full border-2 border-paper px-4 py-2 text-sm font-semibold"
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
