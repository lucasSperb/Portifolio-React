import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

export default function App() {
  // useScrollReveal();

  useEffect(() => {
    const handleHighlight = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      const sectionId = customEvent.detail;

      const section = document.getElementById(sectionId);

      if (!section) return;

      section.classList.remove("section-highlight");

      void section.offsetWidth;

      section.classList.add("section-highlight");

      const timeout = window.setTimeout(() => {
        section.classList.remove("section-highlight");
      }, 1200);

      return () => window.clearTimeout(timeout);
    };

    window.addEventListener("section-highlight", handleHighlight);

    return () => {
      window.removeEventListener("section-highlight", handleHighlight);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}