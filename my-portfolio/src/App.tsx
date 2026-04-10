import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";




function App() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-bg-section]");
    if (!sections.length) return;

    const body = document.body;
    const sectionToImageVar: Record<string, string> = {
      hero: "var(--bg-image-hero)",
      services: "var(--bg-image-services)",
      about: "var(--bg-image-about)",
      skills: "var(--bg-image-skills)",
      portfolio: "var(--bg-image-portfolio)",
      contact: "var(--bg-image-contact)",
    };

    let activeLayer: "a" | "b" = "a";
    let activeSection = sections[0].dataset.bgSection ?? "hero";
    const initialImage = sectionToImageVar[activeSection] ?? sectionToImageVar.hero;

    body.style.setProperty("--bg-image-a", initialImage);
    body.style.setProperty("--bg-image-b", initialImage);
    body.dataset.bgLayer = activeLayer;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) return;

        const active = visibleEntries[0].target as HTMLElement;
        const bgSection = active.dataset.bgSection;
        if (!bgSection || bgSection === activeSection) {
          return;
        }

        const nextImage = sectionToImageVar[bgSection] ?? sectionToImageVar.hero;
        if (activeLayer === "a") {
          body.style.setProperty("--bg-image-b", nextImage);
          body.dataset.bgLayer = "b";
          activeLayer = "b";
        } else {
          body.style.setProperty("--bg-image-a", nextImage);
          body.dataset.bgLayer = "a";
          activeLayer = "a";
        }

        activeSection = bgSection;
      },
      {
        root: null,
        threshold: [0.35, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      delete body.dataset.bgLayer;
      body.style.removeProperty("--bg-image-a");
      body.style.removeProperty("--bg-image-b");
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero  />
      <Services />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  );
}

export default App;