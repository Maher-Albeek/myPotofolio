import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Title from "./sections/Tiltle";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Certificates from "./sections/Certificates";
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

  useEffect(() => {
    const titleTargets = document.querySelectorAll<HTMLElement>("[data-section-title]");
    if (!titleTargets.length) return;
    let rafId = 0;
    let targetScrollY = window.scrollY;
    let easedScrollY = targetScrollY;

    const getProgress = (virtualTop: number, viewportHeight: number) => {
      const start = viewportHeight * 0.9;
      const end = viewportHeight * 0.3;
      const normalized = (start - virtualTop) / (start - end);
      return Math.min(Math.max(normalized, 0), 1);
    };

    const updateTitles = () => {
      const viewportHeight = window.innerHeight || 1;

      titleTargets.forEach((target) => {
        const absoluteTop = target.getBoundingClientRect().top + window.scrollY;
        const virtualTop = absoluteTop - easedScrollY;
        const progress = getProgress(virtualTop, viewportHeight);
        const scale = 1 + (1 - progress) * 2;
        const opacity = 0.35 + progress * 0.65;
        const yOffset = (1 - progress) * 28;

        target.style.setProperty("--section-title-scale", scale.toFixed(3));
        target.style.setProperty("--section-title-opacity", opacity.toFixed(3));
        target.style.setProperty("--section-title-y", `${yOffset.toFixed(2)}px`);
      });
    };

    const animate = () => {
      const delta = targetScrollY - easedScrollY;
      easedScrollY += delta * 0.12;

      if (Math.abs(delta) < 0.05) {
        easedScrollY = targetScrollY;
      }

      updateTitles();
      rafId = window.requestAnimationFrame(animate);
    };

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    const onResize = () => {
      targetScrollY = window.scrollY;
      easedScrollY = targetScrollY;
      updateTitles();
    };

    titleTargets.forEach((target) => {
      target.style.setProperty("--section-title-scale", "3");
      target.style.setProperty("--section-title-opacity", "0.35");
      target.style.setProperty("--section-title-y", "28px");
    });

    updateTitles();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      titleTargets.forEach((target) => {
        target.style.removeProperty("--section-title-scale");
        target.style.removeProperty("--section-title-opacity");
        target.style.removeProperty("--section-title-y");
      });
    };
  }, []);

  const sections = () => {
    return [
      /* { id: "hero", label: "Home" }, */
      { id: "services", bgColor: "--bg-hell", label: <Services /> },
      { id: "about", bgColor: "--bg", label: <About /> },
      { id: "experience", bgColor: "--bg-hell", label: <Experience /> },
      { id: "education", bgColor: "--bg", label: <Education /> },
      { id: "skills", bgColor: "--bg-hell", label: <Skills /> },
      { id: "portfolio", bgColor: "--bg", label: <Portfolio /> },
      { id: "certificates", bgColor: "--bg-hell", label: <Certificates /> },
      { id: "contact", bgColor: "--bg", label: <Contact /> },
    ];
  }


  return (
    <>
      <Navbar />
      

      <Hero />

      <main>
      
       {sections ().map((section) => (
        <div key={section.id}>
          <Title title={section.id} />
          <section
            key={section.id}
            className="post-hero-step "
            /* style={{ background: `var(${section.bgColor})` }} */
          >
            <div
            id={section.id}
            data-scroll-section
            data-bg-section={section.id}
            data-reveal className="post-hero-panel">
              {section.label}
            </div>
          </section>
        </div>
       ))}
      </main>

      <Footer />
    </>
  );
}

export default App;
