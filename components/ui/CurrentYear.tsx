"use client";

import { useSyncExternalStore } from "react";

// el año no cambia mientras la página está abierta, así que no hay nada que escuchar
const subscribe = () => () => {};

/**
 * Año actual, calculado en el navegador de quien visita (new Date().getFullYear()).
 * Así nunca queda desactualizado aunque la página se haya generado el año anterior.
 * En el servidor no se calcula (devuelve null) porque la página se genera al hacer el build.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <>{year}</>;
}
