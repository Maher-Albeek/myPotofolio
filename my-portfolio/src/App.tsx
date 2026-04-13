import "./App.css";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  const activeSectionIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const lastTriggerTimeRef = useRef(0);
  const scrollAnimationRef = useRef<ReturnType<typeof animate> | null>(null);

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
    const SECTION_SELECTOR = "[data-scroll-section]";
    const SCROLL_COOLDOWN_MS = 650;

    const desktopMediaQuery = window.matchMedia("(min-width: 1025px)");
    if (!desktopMediaQuery.matches) {
      return;
    }

    const getSections = () =>
      Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));

    const getClosestSectionIndex = (sections: HTMLElement[]) => {
      const probeY = window.scrollY + window.innerHeight * 0.35;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const distance = Math.abs(section.offsetTop - probeY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    const scrollToSection = (targetIndex: number) => {
      const sections = getSections();
      if (!sections.length) return;

      const clampedIndex = Math.min(Math.max(targetIndex, 0), sections.length - 1);
      const target = sections[clampedIndex];
      if (!target) return;

      isAnimatingRef.current = true;
      activeSectionIndexRef.current = clampedIndex;
      lastTriggerTimeRef.current = Date.now();

      const startY = window.scrollY;
      const targetY = target.offsetTop;

      if (Math.abs(targetY - startY) < 1) {
        isAnimatingRef.current = false;
        return;
      }

      scrollAnimationRef.current?.cancel();

      const scrollState = { y: startY };
      scrollAnimationRef.current = animate(scrollState, {
        y: targetY,
        duration: 800,
        ease: "inOutCirc",
        onUpdate: () => {
          window.scrollTo({ top: scrollState.y, behavior: "auto" });
        },
        onComplete: () => {
          window.scrollTo({ top: targetY, behavior: "auto" });
          isAnimatingRef.current = false;
        },
      });
    };

    const attemptMove = (direction: 1 | -1) => {
      const now = Date.now();
      if (isAnimatingRef.current || now - lastTriggerTimeRef.current < SCROLL_COOLDOWN_MS) {
        return;
      }

      const sections = getSections();
      if (!sections.length) return;

      const currentIndex = getClosestSectionIndex(sections);
      activeSectionIndexRef.current = currentIndex;

      const nextIndex = Math.min(
        Math.max(activeSectionIndexRef.current + direction, 0),
        sections.length - 1
      );

      if (nextIndex === activeSectionIndexRef.current) return;
      scrollToSection(nextIndex);
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 8) return;
      event.preventDefault();
      attemptMove(event.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const targetElement = event.target as HTMLElement | null;
      const tag = targetElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || targetElement?.isContentEditable) {
        return;
      }

      const sections = getSections();
      if (!sections.length) return;

      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        attemptMove(1);
      }

      if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        attemptMove(-1);
      }

      if (event.key === "Home") {
        event.preventDefault();
        scrollToSection(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        scrollToSection(sections.length - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      scrollAnimationRef.current?.cancel();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Hero />

      <div className="fixed-linear-bg" aria-hidden="true">
        <span className="fixed-linear-glow" />
        <span className="fixed-radial-glow" />
      </div>

      <main>
        <section
          id="services"
          data-scroll-section
          data-bg-section="services"
          data-reveal
          className="post-hero-step"
        >
          <div className="post-hero-panel">
            <Services />
          </div>
        </section>

        <section
          id="about"
          data-scroll-section
          data-bg-section="about"
          data-reveal
          className="post-hero-step"
        >
          <div className="post-hero-panel">
            <About />
          </div>
        </section>

        <section
          id="skills"
          data-scroll-section
          data-bg-section="skills"
          data-reveal
          className="post-hero-step"
        >
          <div className="post-hero-panel">
            <Skills />
          </div>
        </section>

        <section
          id="portfolio"
          data-scroll-section
          data-bg-section="portfolio"
          data-reveal
          className="post-hero-step"
        >
          <div className="post-hero-panel">
            <Portfolio />
          </div>
        </section>

        <section
          id="contact"
          data-scroll-section
          data-bg-section="contact"
          data-reveal
          className="post-hero-step"
        >
          <div className="post-hero-panel">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;