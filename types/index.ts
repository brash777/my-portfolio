import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/ui/Icon";

/** id de cada sección de la página (se usa en el menú y en el scroll-spy) */
export type SectionId =
  | "hero"
  | "about"
  | "projects"
  | "references"
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
  /** semestre actual de la carrera */
  semester: string;
  /** año en que empezó la carrera */
  studyStart: string;
  /** idiomas que habla, con su nivel */
  languages: string;
  githubUser: string;
  githubUrl: string;
  linkedinUrl: string;
  /** CV: "/cv.pdf" si es el archivo de public/, o una URL externa (por ejemplo Google Drive); null = "CV en camino" */
  cvUrl: string | null;
  /** nombre con el que se guarda el PDF al descargarlo */
  cvFileName: string;
  emails: string[];
  /** estado de relación (lo pidió el profe); null = no se muestra */
  relationship: string | null;
  meta: {
    title: string;
    description: string;
  };
}

/** Skills: además de las tecnologías, muestra los servicios ("Qué puedo hacer") */
export interface SkillsContent extends SectionIntro {
  servicesTitle: string;
  stackTitle: string;
}

export interface Service {
  title: string;
  description: string;
  icon: IconName;
}

/** un dato corto del hero: un número grande y lo que significa */
export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroContent {
  /** línea pequeña sobre el saludo */
  kicker: string;
  greeting: string;
  description: string;
  projectsButton: string;
  stats: HeroStat[];
  /** texto sobre la foto del inicio */
  photoCaption: string;
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
  opensNewTab: string;
  homeLink: string;
}

/* ---------- Acerca de mí ---------- */

export interface AboutFact {
  label: string;
  value: string;
  icon: IconName;
}

/** un área en la que me enfoco, con las tecnologías que uso en ella */
export interface AboutFocus {
  title: string;
  icon: IconName;
  techs: string;
}

export interface AboutContent extends SectionIntro {
  paragraphs: string[];
  /** insignia sobre la foto */
  badge: { title: string; text: string };
  facts: AboutFact[];
  /** "Fuera del código": intereses */
  outside: { title: string; text: string };
  languages: { title: string; items: { name: string; level: string }[] };
  focusTitle: string;
  focus: AboutFocus[];
  projectsButton: string;
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
  /** captura principal (portada) */
  cover?: SiteImage;
  /** logo o ícono de la app, si no hay capturas */
  logo?: SiteImage;
  /** ícono de la app (ruta en public/): es la cara de su tarjeta en Proyectos */
  icon: string;
  gallery: SiteImage[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface ProjectsContent extends SectionIntro {
  categoryLabels: Record<ProjectCategory, string>;
  statusLabels: Record<ProjectStatus, string>;
  viewDetails: string;
  repoButton: string;
  demoButton: string;
  builtWith: string;
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

/** Referencias (en la guía del profe se llaman Testimonios) */
export interface TestimonialsContent extends SectionIntro {
  exampleLabel: string;
}

/* ---------- Experiencia ---------- */

export type ExperienceKind = "education" | "freelance" | "project";
/** la guía del profe divide la experiencia en dos partes: académica y laboral */
export type ExperienceArea = "academic" | "work";
export type ExperienceStatus = "current" | "in-progress" | "completed";

export interface ExperienceItem {
  id: string;
  area: ExperienceArea;
  kind: ExperienceKind;
  title: string;
  place: string;
  description: string;
  status: ExperienceStatus;
  /** fechas de inicio y fin (por ejemplo "2024 – actualidad") */
  period: string;
  stack?: Tech[];
  link?: { label: string; href: string };
}

export interface ExperienceContent extends SectionIntro {
  areas: Record<ExperienceArea, { title: string; lead: string }>;
  kindLabels: Record<ExperienceKind, string>;
  statusLabels: Record<ExperienceStatus, string>;
}

/* ---------- Contacto ---------- */

export interface ContactContent extends SectionIntro {
  locationLabel: string;
  emailLabel: string;
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
  items: Tech[];
}

/* ---------- Footer ---------- */

export interface FooterContent {
  /** frase corta debajo del logo */
  bio: string;
  navTitle: string;
  specialtiesTitle: string;
  contactTitle: string;
  madeBy: string;
  /** créditos: con qué está hecho (lo pide la guía del profe) */
  credits: string;
  backToTop: string;
}

/* ---------- Página 404 ---------- */

export interface NotFoundContent {
  /** título de la pestaña del navegador */
  tabTitle: string;
  /** el número grande */
  code: string;
  title: string;
  lead: string;
  homeButton: string;
  projectsButton: string;
}
