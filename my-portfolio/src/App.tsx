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
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!revealTargets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const ratio = entry.intersectionRatio;

          target.style.setProperty("--reveal-ratio", ratio.toFixed(2));
          target.dataset.revealState = entry.isIntersecting ? "in" : "out";
        });
      },
      {
        root: null,
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
      }
    );

    revealTargets.forEach((target) => {
      target.dataset.revealState = "out";
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
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