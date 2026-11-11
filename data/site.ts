import aboutAvatar from "@/public/images/about/about-avatar.webp";
import heroProfile from "@/public/images/profile/hero-profile.webp";
import type { NavItem, SectionId, SiteImage, SiteInfo, SocialLink, UiText } from "@/types";

// Datos personales. Lo marcado TODO está pendiente de confirmar.
export const site: SiteInfo = {
  name: "Johan",
  shortName: "Johan Mosquera",
  initials: "JM",
  fullName: "Johan Stib Mosquera Montilla",
  role: "Full Stack Developer",
  location: "Pasto, Colombia",
  university: "Universidad Cooperativa de Colombia",
  career: "Ingeniería de Software",
  githubUser: "brash777",
  githubUrl: "https://github.com/brash777",
  linkedinUrl: "https://www.linkedin.com/in/joan-stib-mosquera-montilla-30b370449/",
  cvUrl: null, // TODO: URL pública del CV en Google Drive ("cualquier persona con el enlace puede ver")
  emails: [], // TODO: confirmar qué correo mostrar (dijo "el de GitHub")
  meta: {
    // borrador
    title: "Johan Mosquera | Full Stack Developer junior",
    description:
      "Portafolio de Johan Mosquera, estudiante de desarrollo de software en Pasto. Aquí muestro las apps que construyo, como Flux IA y FlowStore.",
  },
};

// Redes (se usan en el menú móvil, Contacto y Footer)
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: site.githubUrl },
  { label: "LinkedIn", href: site.linkedinUrl },
];

// Fotos de perfil con su texto alternativo (borrador)
export const profileImages: { hero: SiteImage; avatar: SiteImage } = {
  hero: {
    src: heroProfile,
    alt: "Johan con gorra negra y gafas, sentado frente a su portátil en una sala de estudio",
  },
  avatar: {
    src: aboutAvatar,
    alt: "Retrato de Johan con gorra negra y gafas",
  },
};

// Menú: el orden es el mismo de las secciones en app/page.tsx
export const navItems: NavItem[] = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "testimonials", label: "Testimonios" },
  { id: "experience", label: "Experiencia" },
  { id: "contact", label: "Contacto" },
  { id: "skills", label: "Skills" },
];

/** nombre de una sección tal como aparece en el menú */
export function navLabel(id: SectionId): string {
  return navItems.find((item) => item.id === id)?.label ?? id;
}

// Textos cortos de la interfaz (borrador, revisar con ux-copy)
export const ui: UiText = {
  skipToContent: "Saltar al contenido",
  mainNav: "Navegación principal",
  mobileNav: "Menú del sitio",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  cvButton: "Ver CV",
  cvPending: "CV en camino",
  opensNewTab: "(se abre en otra pestaña)",
  homeLink: "Ir al inicio",
  sectionPending: "Sección en construcción",
};
