import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ChameleonBackground } from "@/components/ui/ChameleonBackground";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { sectionPalettes } from "@/data/palettes";

// Orden de las secciones. Para mover una (por ejemplo Skills), basta con mover su línea.
export default function Home() {
  return (
    <>
      {/* fondo fijo que cambia de color según la sección que se ve */}
      <ChameleonBackground initial={sectionPalettes.hero} />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <SectionDivider from="blue" to="yellow" />
        <About />
        <SectionDivider from="yellow" to="paper" />
        <Projects />
        <SectionDivider from="paper" to="red" />
        <Testimonials />
        <SectionDivider from="red" to="blue" />
        <Experience />
        <SectionDivider from="blue" to="yellow" />
        <Contact />
        <SectionDivider from="yellow" to="paper" />
        <Skills />
      </main>
      <SectionDivider from="paper" to="ink" />
      <Footer />
    </>
  );
}
