"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonialsContent as content } from "@/data/testimonials";
import type { Testimonial } from "@/types";

/**
 * Carrusel con flechas. Por dentro es una fila con scroll horizontal y "scroll-snap"
 * (cada tarjeta encaja al soltar), así en celular también funciona deslizando con el dedo.
 */
export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [first, setFirst] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const total = testimonials.length;

  // recalcula qué tarjeta va primero y si ya llegamos al final cuando se hace scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const card = track.children[0] as HTMLElement | undefined;
      const step = card ? card.offsetWidth : 1;
      setFirst(Math.round(track.scrollLeft / step));
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 8);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function goTo(index: number) {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" });
  }

  const arrowClass =
    "sticker-sm grid size-12 place-items-center rounded-full bg-paper text-ink transition-transform duration-200 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-40";

  return (
    <div>
      <ul
        ref={trackRef}
        aria-label={content.title}
        className="relative -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 pt-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial, index) => (
          <li
            key={testimonial.id}
            aria-label={content.slideLabel.replace("{n}", String(index + 1)).replace("{total}", String(total))}
            className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-4">
        <button type="button" onClick={() => goTo(Math.max(first - 1, 0))} disabled={first === 0} className={arrowClass}>
          <Icon name="chevronLeft" className="size-6" />
          <span className="sr-only">{content.previous}</span>
        </button>
        <button type="button" onClick={() => goTo(Math.min(first + 1, total - 1))} disabled={atEnd} className={arrowClass}>
          <Icon name="chevronRight" className="size-6" />
          <span className="sr-only">{content.next}</span>
        </button>
        <p aria-live="polite" className="font-bold">
          {first + 1} / {total}
        </p>
      </div>
    </div>
  );
}
