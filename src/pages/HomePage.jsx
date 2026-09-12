import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { navigateToSection } from "../lib/navigation";
import Hero from "../sections/Hero/Hero";
import Services from "../sections/Services/Services";
import Process from "../sections/Process/Process";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact/Contact";
import BuildIndexRail from "../components/BuildIndexRail/BuildIndexRail";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Supports arriving here from another route with a target section,
    // e.g. navigate("/", { state: { scrollTo: "projects" } }). No easing,
    // no visible scroll-in from the top — the section appears directly
    // once its element exists in the DOM.
    const target = location.state?.scrollTo;
    if (!target) return;
    const frame = requestAnimationFrame(() => navigateToSection(target));
    return () => cancelAnimationFrame(frame);
  }, [location.state]);

  return (
    <main>
      <BuildIndexRail />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
