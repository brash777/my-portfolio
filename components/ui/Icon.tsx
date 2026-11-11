import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/*
  Íconos genéricos dibujados a mano para este portafolio (SVG propios, 24×24).
  Usan currentColor, así toman el color del texto donde estén.
  Los íconos de marcas (Java, Spotify…) NO van aquí: están en public/images/icons/.
*/
const paths = {
  gamepad: (
    <>
      <path d="M6.5 8h11a4.5 4.5 0 0 1 4.4 5.4l-.6 2.8a2.6 2.6 0 0 1-4.6 1L15 15H9l-1.7 2.2a2.6 2.6 0 0 1-4.6-1l-.6-2.8A4.5 4.5 0 0 1 6.5 8Z" />
      <path d="M7.5 10.5v3M6 12h3" />
      <circle cx="16" cy="11" r=".6" />
      <circle cx="17.8" cy="13" r=".6" />
    </>
  ),
  pencil: (
    <>
      <path d="m4 20 1-4.5L15.5 5a2.1 2.1 0 0 1 3 3L8 18.5 4 20Z" />
      <path d="m13.5 7 3 3" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5.5l11-2.5v12.5" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="15.5" r="3" />
    </>
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m12 7.5 3.8 2.8-1.5 4.4H9.7l-1.5-4.4L12 7.5Z" />
      <path d="M12 7.5V3.2M15.8 10.3l4-1.5M14.3 14.7l2.5 3.6M9.7 14.7l-2.5 3.6M8.2 10.3l-4-1.5" />
    </>
  ),
  glove: (
    <>
      <path d="M8 11V7.5A4.5 4.5 0 0 1 12.5 3h1A4.5 4.5 0 0 1 18 7.5V13a5 5 0 0 1-5 5h-2a3 3 0 0 1-3-3v-1" />
      <path d="M8 11a2.5 2.5 0 0 0 0 5" />
      <path d="M9 18v3h7v-3M12 8h3" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  book: (
    <>
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15H7.5A2.5 2.5 0 0 0 5 20.5v-15Z" />
      <path d="M5 20.5A2.5 2.5 0 0 1 7.5 18H19v3H7.5" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-9.2-9.4A5 5 0 0 1 12 6.7a5 5 0 0 1 9.2 3.9C19.5 15.4 12 20 12 20Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  sparkle: <path d="M12 3c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7ZM18.5 15.5c.2 1.5.9 2.2 2.5 2.5-1.6.3-2.3 1-2.5 2.5-.3-1.5-1-2.2-2.5-2.5 1.5-.3 2.2-1 2.5-2.5Z" />,
  external: (
    <>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" />
    </>
  ),
  chevronLeft: <path d="m15 5-7 7 7 7" />,
  chevronRight: <path d="m9 5 7 7-7 7" />,
  // comillas rellenas (”): círculo + colita, sin trazo
  quote: (
    <g fill="currentColor" stroke="none">
      <circle cx="7" cy="9.5" r="3" />
      <path d="M10 9.5c0 4.2-2.1 6.9-5.3 8l-.7-1.5c2-.9 3.2-2.6 3.3-4.9Z" />
      <circle cx="16.5" cy="9.5" r="3" />
      <path d="M19.5 9.5c0 4.2-2.1 6.9-5.3 8l-.7-1.5c2-.9 3.2-2.6 3.3-4.9Z" />
    </g>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  flag: <path d="M5 21V4h11l-2 4 2 4H5" />,
  arrowUp: <path d="M12 20V5M5.5 11.5 12 5l6.5 6.5" />,
  code: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

interface IconProps {
  name: IconName;
  className?: string;
}

/** Ícono decorativo: siempre va junto a un texto que dice lo mismo (aria-hidden) */
export function Icon({ name, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5 shrink-0", className)}
    >
      {paths[name]}
    </svg>
  );
}
