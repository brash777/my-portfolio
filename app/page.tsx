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
// Hero, Acerca de mí, Proyectos, Testimonios, Experiencia, Contactos, sección adicional (Skills) y footer.
// Cada sección pinta su propio fondo de color (ChameleonBackground) y se mezcla con la anterior.
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
