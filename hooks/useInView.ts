"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Avisa cuando un elemento entra en pantalla (IntersectionObserver).
 * Con once = true deja de observar después de la primera vez.
 */
export function useInView<T extends Element>(once = true) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      // se activa cuando el elemento ya subió un poco desde el borde inferior
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  return { ref, inView };
}
