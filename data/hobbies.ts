import type { Hobby } from "@/types";

// Hobbies de "Algo más que developer" (borrador)
export const hobbies: Hobby[] = [
  {
    id: "games",
    title: "Videojuegos",
    description: "Los que más juego:",
    items: ["Fortnite", "Call of Duty", "Free Fire", "GTA"],
    icons: ["gamepad"],
    accent: "violet",
  },
  {
    id: "music-drawing",
    title: "Música y dibujo",
    description: "Me gusta la música, dibujar y bailar.",
    items: ["Música", "Dibujo", "Baile"],
    icons: ["pencil", "music", "spotify"],
    accent: "red",
    // TODO (opcional): enlace a tu perfil o playlist de Spotify
    // link: { label: "Mi Spotify", href: "https://open.spotify.com/..." },
  },
  {
    id: "sports",
    title: "Deportes",
    description: "Me gusta hacer deporte:",
    items: ["Fútbol", "Boxeo", "Voleibol", "Baloncesto", "y más"],
    icons: ["ball", "glove"],
    accent: "blue",
  },
];
