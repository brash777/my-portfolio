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
  stack: string[];
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
  opensNewTab: string;
  homeLink: string;
  sectionPending: string;
}
