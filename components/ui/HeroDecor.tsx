/**
 * Stickers sueltos de fondo del hero (decorativos, aria-hidden).
 * Con el scroll se mueven a distinta velocidad que el contenido (parallax en CSS, ver globals.css).
 */
export function HeroDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* estrella amarilla */}
      <svg viewBox="0 0 100 100" className="parallax-fast absolute top-28 right-[6%] size-16 rotate-12 sm:size-20 lg:top-24 lg:right-[44%]">
        <path
          d="M50 4 61 36l33-4-25 23 16 30-35-14-35 14 16-30L6 32l33 4Z"
          fill="var(--color-yellow)"
          stroke="var(--color-ink)"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>
      {/* llaves de código en sticker rojo */}
      <span className="parallax-slow sticker-sm absolute bottom-[12%] left-[46%] hidden -rotate-12 rounded-2xl bg-red px-3 py-1 font-mono text-2xl font-bold text-paper lg:block">
        {"{ }"}
      </span>
      {/* círculo violeta */}
      <span className="parallax-slow absolute top-[42%] -left-6 hidden size-20 rounded-full border-4 border-ink bg-violet sm:block" />
      {/* asterisco blanco */}
      <svg viewBox="0 0 40 40" className="parallax-fast absolute right-[3%] bottom-[30%] hidden size-12 lg:block">
        <path d="M20 4v32M6 12l28 16M34 12 6 28" stroke="var(--color-paper)" strokeWidth="6" strokeLinecap="round" />
      </svg>
    </div>
  );
}
