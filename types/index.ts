import type { StaticImageData } from "next/image";

/** id de cada sección de la página (se usa en el menú y en el scroll-spy) */
export type SectionId =
  | "hero"
  | "about"
  | "projects"
  | "testimonials"
  | "experience"
  | "contact"
  | "skills";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** ícono de marca en public/images/icons/ */
  icon?: string;
}

/** tecnología con su ícono (ruta en public/images/icons/); sin ícono se muestra solo el nombre */
export interface Tech {
  name: string;
  icon?: string;
}

/** colores de la paleta que puede usar una tarjeta o proyecto */
export type Accent = "blue" | "red" | "yellow" | "violet";

/** título y texto corto de una sección */
export interface SectionIntro {
  title: string;
  lead: string;
}

/** imagen local con su texto alternativo en español */
export interface SiteImage {
  src: StaticImageData;
  alt: string;
}

export interface SiteInfo {
  name: string;
  /** nombre que se ve en el logo */
  shortName: string;
  initials: string;
  fullName: string;
  role: string;
  location: string;
  university: string;
  career: string;
  githubUser: string;
  githubUrl: string;
  linkedinUrl: string;
  /** URL pública del CV en Google Drive; null mientras no exista */
  cvUrl: string | null;
  emails: string[];
  /** estado de relación (lo pidió el profe); null = no se muestra */
  relationship: string | null;
  meta: {
    title: string;
    description: string;
  };
}

export interface Service {
  title: string;
  description: string;
}

/** una línea del panel tipo editor de código del hero */
export interface CodeField {
  key: string;
  value: string | boolean | string[];
}

export interface HeroContent {
  /** línea pequeña sobre el saludo */
  kicker: string;
  greeting: string;
  description: string;
  githubButton: string;
  /** tecnologías que se muestran como stickers */
  stackLabel: string;
  stack: Tech[];
  code: {
    fileName: string;
    variable: string;
    fields: CodeField[];
  };
  flip: {
    hint: string;
    toBack: string;
    toFront: string;
  };
  /** reverso de la tarjeta: CV resumido */
  cv: {
    title: string;
    whoTitle: string;
    who: string;
    doTitle: string;
    do: string;
    servicesTitle: string;
    experienceTitle: string;
    experience: string[];
    moreButton: string;
    cvLinkLabel: string;
  };
}

/** textos cortos de la interfaz (botones, etiquetas de accesibilidad) */
export interface UiText {
  skipToContent: string;
  mainNav: string;
  mobileNav: string;
  openMenu: string;
  closeMenu: string;
  cvButton: string;
  cvPending: string;
  cvLabel: string;
  cvPendingDetail: string;
  opensNewTab: string;
  homeLink: string;
  sectionPending: string;
}

/* ---------- Acerca de mí ---------- */

export type HobbyIcon = "gamepad" | "pencil" | "music" | "spotify" | "ball" | "glove";

export interface Hobby {
  id: string;
  title: string;
  description: string;
  items: string[];
  icons: HobbyIcon[];
  accent: Accent;
  /** enlace opcional (por ejemplo, el perfil de Spotify) */
  link?: { label: string; href: string };
}

export interface AboutFact {
  label: string;
  value: string;
  icon: "pin" | "book" | "heart";
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  facts: AboutFact[];
  linksTitle: string;
  hobbiesTitle: string;
  hobbiesLead: string;
}

/* ---------- Proyectos ---------- */

export type ProjectCategory = "class" | "work" | "freelance";
export type ProjectStatus = "live" | "completed" | "in-progress";

export interface Project {
  slug: string;
  name: string;
  /** frase corta para la tarjeta */
  tagline: string;
  /** párrafos de la página de detalle */
  description: string[];
  highlights: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  stack: Tech[];
  role: string;
  year: number;
  accent: Accent;
  /** captura principal (portada) */
  cover?: SiteImage;
  /** logo o ícono de la app, si no hay capturas */
  logo?: SiteImage;
  gallery: SiteImage[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface ProjectsContent extends SectionIntro {
  featuredTitle: string;
  moreTitle: string;
  filterLabel: string;
  allFilter: string;
  categoryLabels: Record<ProjectCategory, string>;
  statusLabels: Record<ProjectStatus, string>;
  viewDetails: string;
  repoButton: string;
  demoButton: string;
  builtWith: string;
  emptyFilter: string;
  /** "{n}" se reemplaza por la cantidad de proyectos que se están mostrando */
  resultsLabel: string;
  /** "{name}" se reemplaza por el nombre del proyecto */
  repoLinkLabel: string;
  detail: {
    back: string;
    roleLabel: string;
    yearLabel: string;
    categoryLabel: string;
    stackTitle: string;
    highlightsTitle: string;
    galleryTitle: string;
    otherProjectsTitle: string;
    notFoundTitle: string;
  };
}

/* ---------- Testimonios ---------- */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  /** true = ejemplo; se marca visible y hay que cambiarlo antes de publicar */
  isExample: boolean;
}

export interface TestimonialsContent extends SectionIntro {
  exampleLabel: string;
  previous: string;
  next: string;
  /** "{n}" y "{total}" se reemplazan por el número de la tarjeta */
  slideLabel: string;
}

/* ---------- Experiencia ---------- */

export type ExperienceKind = "education" | "freelance" | "project" | "course";
export type ExperienceStatus = "current" | "in-progress" | "planned" | "completed";

export interface ExperienceItem {
  id: string;
  kind: ExperienceKind;
  title: string;
  place: string;
  description: string;
  status: ExperienceStatus;
  /** fechas reales; vacío mientras no estén confirmadas */
  period?: string;
  stack?: Tech[];
  link?: { label: string; href: string };
}

export interface ExperienceContent extends SectionIntro {
  kindLabels: Record<ExperienceKind, string>;
  statusLabels: Record<ExperienceStatus, string>;
}

/* ---------- Contacto ---------- */

export interface ContactContent extends SectionIntro {
  linksTitle: string;
  form: {
    title: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submit: string;
    sending: string;
    errors: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageShort: string;
    };
    success: string;
    sendError: string;
    notConnected: string;
  };
  /** URL del servicio que recibe el formulario (por ejemplo Formspree); null = aún no conectado */
  formEndpoint: string | null;
}

/* ---------- Skills ---------- */

export type SkillCategory = "backend" | "frontend" | "tools" | "ai";

export interface SkillGroup {
  id: SkillCategory;
  title: string;
  description: string;
  accent: Accent;
  items: Tech[];
}

/* ---------- Footer ---------- */

export interface FooterContent {
  phrase: string;
  builtWithTitle: string;
  builtWith: Tech[];
  navTitle: string;
  contactTitle: string;
  madeBy: string;
  backToTop: string;
}
