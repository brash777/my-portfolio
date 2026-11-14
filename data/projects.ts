import fluxCover from "@/public/images/projects/flux-ia/project-flux-ia-cover.webp";
import fluxIcon from "@/public/images/projects/flux-ia/project-flux-ia-icon.webp";
import flux01 from "@/public/images/projects/flux-ia/project-flux-ia-01.webp";
import flux02 from "@/public/images/projects/flux-ia/project-flux-ia-02.webp";
import flux03 from "@/public/images/projects/flux-ia/project-flux-ia-03.webp";
import offgridLogo from "@/public/images/projects/offgrid/project-offgrid-logo.webp";
import { tech } from "@/data/tech";
import type { Project, ProjectsContent } from "@/types";

// Textos de la sección (borrador)
export const projectsContent: ProjectsContent = {
  title: "Proyectos",
  lead: "Las apps que estoy construyendo y los proyectos de clase que más me enseñaron.",
  featuredTitle: "Mis apps más grandes",
  moreTitle: "Todos mis proyectos",
  filterLabel: "Filtrar proyectos por tipo",
  allFilter: "Todos",
  categoryLabels: { class: "De clase", work: "Trabajo", freelance: "Freelance" },
  statusLabels: { live: "Publicado", completed: "Terminado", "in-progress": "En desarrollo" },
  viewDetails: "Ver el proyecto",
  repoButton: "Ver el código",
  demoButton: "Ver demo",
  builtWith: "Hecho con",
  emptyFilter: "Todavía no hay proyectos de este tipo. Mira todos con el filtro «Todos».",
  resultsLabel: "Mostrando {n} proyectos",
  repoLinkLabel: "Ver el código de {name} en GitHub",
  detail: {
    back: "Volver a proyectos",
    roleLabel: "Mi rol",
    yearLabel: "Año",
    categoryLabel: "Tipo",
    stackTitle: "Tecnologías",
    highlightsTitle: "Lo más importante",
    galleryTitle: "Capturas",
    otherProjectsTitle: "Otros proyectos",
    notFoundTitle: "Ese proyecto no existe",
  },
};

/*
  Mis proyectos. Para agregar uno nuevo:
  1. Deja sus imágenes en public/images/projects/<slug>/ (WebP, máximo 120 KB).
  2. Agrega un objeto a esta lista. Su página de detalle se crea sola en /projects/<slug>.
  Los textos son borrador, sacados de los README de cada repositorio.
*/
export const projects: Project[] = [
  {
    slug: "flux-ia",
    name: "Flux IA",
    tagline: "App de finanzas personales con un asistente de IA que responde con tus movimientos reales.",
    description: [
      "Flux IA es una app de finanzas personales. Registras tus ingresos y gastos, ves a dónde va tu dinero en reportes y le preguntas al asistente cosas como «¿en qué gasté más este mes?». El asistente responde con tus movimientos reales, calculados en el servidor.",
      "Está pensada para quien compra por impulso: la IA ayuda antes de gastar, no solo después. Funciona en el navegador, se puede instalar como PWA y también tiene versión para Android.",
    ],
    highlights: [
      "Registrar escribiendo normal: con «gasolina 20 mil» la IA llena el movimiento y tú lo revisas.",
      "Tope diario que propone la IA según lo que gastas, sin contar los gastos fijos.",
      "«¿Me lo compro?»: el chat compara el precio con tus cifras reales antes de decidir.",
      "Toda cifra se calcula en el backend con Java y Spring Boot; la IA nunca inventa números.",
    ],
    category: "freelance",
    status: "in-progress",
    featured: true,
    stack: [tech.java, tech.springBoot, tech.postgresql, tech.supabase, tech.flyway, tech.jwt, tech.groq, tech.html, tech.css, tech.javascript, tech.gsap, tech.pwa],
    role: "Proyecto propio: backend, frontend y diseño",
    year: 2026,
    accent: "violet",
    // los colores reales de Flux IA (su fondo "aurora": base casi negra y brillos violeta, magenta e índigo)
    palette: {
      base: "#0A0614",
      glows: ["rgb(109 43 239 / 0.55)", "rgb(178 59 255 / 0.35)", "rgb(42 26 168 / 0.45)"],
    },
    cover: { src: fluxCover, alt: "Pantalla de inicio de Flux IA con saldo total, ingresos, gastos y movimientos recientes (datos de prueba)" },
    logo: { src: fluxIcon, alt: "Ícono de Flux IA: dos tarjetas de vidrio sobre fondo morado" },
    gallery: [
      { src: flux01, alt: "Pantalla de movimientos de Flux IA con buscador, filtros y la lista de ingresos y gastos (datos de prueba)" },
      { src: flux02, alt: "Pantalla de reportes de Flux IA con ingresos, gastos, tasa de ahorro y un gráfico de gasto por categoría (datos de prueba)" },
      { src: flux03, alt: "Chat de Flux IA: el asistente saluda y sugiere preguntas como «¿En qué gasté más este mes?»" },
    ],
    repoUrl: "https://github.com/brash777/Flux-IA",
  },
  {
    slug: "flowstore",
    name: "FlowStore",
    tagline: "Tienda de ropa de escritorio con avatar 3D y una IA estilista. Su marca es OFFGRID.",
    description: [
      "FlowStore es una tienda de ropa de escritorio con look de videojuego. Subes una foto, la app arma un avatar 3D estilizado y puedes probarle prendas del catálogo antes de comprar.",
      "La compra va de punta a punta (carrito, pedido, stock y pago simulado) y una IA hace de estilista usando solo productos reales de la base de datos. Es un proyecto universitario que desarrollo yo solo.",
    ],
    highlights: [
      "Probador virtual: equipar y quitar prendas por partes del cuerpo.",
      "Compra completa: carrito, pedido, stock y pago simulado.",
      "IA estilista que recomienda solo productos que existen en el catálogo.",
      "Cuentas con roles de cliente y administrador, protegidas con JWT.",
    ],
    category: "class",
    status: "in-progress",
    featured: true,
    stack: [tech.java, tech.springBoot, tech.postgresql, tech.supabase, tech.flyway, tech.jwt, tech.electron, tech.react, tech.vite, tech.typescript],
    role: "Proyecto universitario individual: backend y app de escritorio",
    year: 2026,
    accent: "red",
    // los colores de la marca OFFGRID: negro tinta, rojo y un brillo verde lima
    palette: {
      base: "#0C0B0A",
      glows: ["rgb(212 35 27 / 0.55)", "rgb(212 255 58 / 0.18)", "rgb(61 8 6 / 0.8)"],
    },
    logo: { src: offgridLogo, alt: "Logo de OFFGRID, la marca de FlowStore" },
    gallery: [],
    repoUrl: "https://github.com/brash777/offgrid",
  },
  {
    slug: "music-player-system",
    name: "Music Player System",
    tagline: "Reproductor de música full stack donde la playlist es una lista doblemente enlazada.",
    description: [
      "Aplicación full stack de reproductor de música: un backend en Node.js con TypeScript y Express, y un frontend en React con TypeScript.",
      "La playlist se guarda en una lista doblemente enlazada, así se puede ir a la canción siguiente o a la anterior. La API permite agregar canciones en una posición y eliminarlas.",
    ],
    highlights: [
      "API REST para agregar, eliminar y recorrer canciones.",
      "Lista doblemente enlazada para la playlist (siguiente y anterior).",
      "Frontend en React conectado a la API.",
    ],
    category: "class",
    status: "completed",
    featured: false,
    stack: [tech.typescript, tech.nodejs, tech.express, tech.react],
    role: "Proyecto de clase",
    year: 2026,
    accent: "blue",
    gallery: [],
    repoUrl: "https://github.com/brash777/music-player-system",
  },
  {
    slug: "choose-seats",
    name: "Choose Seats",
    tagline: "Interfaz para elegir asientos de un vuelo, pensada para computador y para celular.",
    description: [
      "Interfaz de selección de asientos para vuelos, construida con React, Vite y Tailwind CSS.",
      "En computador muestra el mapa de asientos con una tarjeta 3D al lado; en celular simula un teléfono con un panel que se desliza desde abajo.",
    ],
    highlights: [
      "Mapa de asientos Business y Standard por secciones.",
      "Dos diseños: computador (desde 860 px) y celular.",
      "Fuselaje del avión dibujado en SVG que resalta la sección elegida.",
    ],
    category: "class",
    status: "completed",
    featured: false,
    stack: [tech.react, tech.vite, tech.tailwind, tech.javascript],
    role: "Proyecto de clase",
    year: 2026,
    accent: "yellow",
    gallery: [],
    repoUrl: "https://github.com/brash777/choose-seats",
  },
  {
    slug: "clinica-backend",
    name: "Clínica Backend",
    tagline: "Backend de gestión médica organizado con el patrón de diseño Facade.",
    description: [
      "Proyecto de la asignatura Patrones de Software. Una clase fachada (ClinicaFacade) es la única puerta de entrada a los servicios de pacientes, agenda e historia clínica.",
      "Así el controlador REST no conoce los detalles internos, y cambiar un servicio no obliga a tocar el resto.",
    ],
    highlights: [
      "Patrón Facade como único punto de entrada.",
      "API REST con Spring Boot y Java 17.",
      "Servicios separados para pacientes, agenda e historia clínica.",
    ],
    category: "class",
    status: "completed",
    featured: false,
    stack: [tech.java, tech.springBoot],
    role: "Proyecto de clase",
    year: 2026,
    accent: "blue",
    gallery: [],
    repoUrl: "https://github.com/brash777/CLINICA-BACKEND",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
