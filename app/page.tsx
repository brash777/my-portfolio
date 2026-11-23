import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";

// Orden de las secciones: el mismo de la guía del profe (structure-portfolio.vercel.app):
// Hero, Sobre mí, Proyectos, Referencias (Testimonios en la guía), Experiencia, Contactos,
// sección adicional (Skills) y footer. Todas comparten el mismo fondo (el de body en globals.css).
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Experience />
        <Contact />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
