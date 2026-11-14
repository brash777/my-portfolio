import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ChameleonBackground } from "@/components/ui/ChameleonBackground";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { sectionPalettes } from "@/data/palettes";

// Orden de las secciones. Para mover una (por ejemplo Skills), basta con mover su línea.
// Ya no hay bordes entre secciones: el fondo camaleón pasa de un color al otro.
export default function Home() {
  return (
    <>
      {/* fondo fijo que cambia de color según la sección que se ve */}
      <ChameleonBackground initial={sectionPalettes.hero} />
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
