import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import profilePicture from "../assets/logo.svg";
import resumeFile from "../assets/CV.pdf";

import GlassSurface from './GlassSurface'



type MainNavKey = "home" | "about" | "skills" | "work" | "contact";

type LinkItem = {
  label: string;
  sectionId: string;
};

const mainNavItems: Array<{ key: MainNavKey; label: string; sectionId: string }> = [
  { key: "home", label: "Home", sectionId: "hero" },
  { key: "about", label: "About", sectionId: "about" },
  { key: "skills", label: "Skills", sectionId: "skills" },
  { key: "work", label: "Work", sectionId: "portfolio" },
  { key: "contact", label: "Contact", sectionId: "contact" },
];

const workItems: LinkItem[] = [
  { label: "Portfolio", sectionId: "portfolio" },
  { label: "Certificates", sectionId: "certificates" },
];

const aboutItems: LinkItem[] = [
  { label: "About", sectionId: "about" },
  { label: "Experience", sectionId: "experience" },
  { label: "Education", sectionId: "education" },
];

const sectionOrder = [
  "hero",
  "about",
  "experience",
  "education",
  "skills",
  "portfolio",
  "certificates",
  "contact",

];

const NAV_OFFSET = 88;
const RESUME_PATH = resumeFile;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopAboutOpen, setDesktopAboutOpen] = useState(false);
  const [desktopWorkOpen, setDesktopWorkOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hoveredMainItem, setHoveredMainItem] = useState<MainNavKey | null>(null);
  const [desktopHoverStyle, setDesktopHoverStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [activeSection, setActiveSection] = useState("hero");
  const desktopNavRef = useRef<HTMLUListElement | null>(null);
  const desktopMainItemRefs = useRef<Partial<Record<MainNavKey, HTMLButtonElement | null>>>({});
  const desktopAboutRef = useRef<HTMLLIElement | null>(null);
  const desktopWorkRef = useRef<HTMLLIElement | null>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const targetY = section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: targetY, behavior: "smooth" });

    setDesktopAboutOpen(false);
    setDesktopWorkOpen(false);
    setHoveredMainItem(null);
    setMobileOpen(false);
    setMobileAboutOpen(false);
    setMobileWorkOpen(false);
  };

  useEffect(() => {
    const updateDesktopHover = () => {
      const navEl = desktopNavRef.current;
      const targetKey = hoveredMainItem;

      if (!targetKey) {
        setDesktopHoverStyle((prev) => ({ ...prev, opacity: 0 }));
        return;
      }

      const targetButton = desktopMainItemRefs.current[targetKey];

      if (!navEl || !targetButton) {
        setDesktopHoverStyle((prev) => ({ ...prev, opacity: 0 }));
        return;
      }

      const navRect = navEl.getBoundingClientRect();
      const buttonRect = targetButton.getBoundingClientRect();

      setDesktopHoverStyle({
        left: buttonRect.left - navRect.left,
        width: buttonRect.width,
        opacity: 1,
      });
    };

    updateDesktopHover();
    window.addEventListener("resize", updateDesktopHover);

    return () => {
      window.removeEventListener("resize", updateDesktopHover);
    };
  }, [hoveredMainItem]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateIsDesktop = (event?: MediaQueryListEvent) => {
      setIsDesktop(event ? event.matches : mediaQuery.matches);
    };

    updateIsDesktop();
    mediaQuery.addEventListener("change", updateIsDesktop);

    return () => mediaQuery.removeEventListener("change", updateIsDesktop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Use hysteresis to avoid flicker near the threshold while scrolling.
      setIsScrolled((prev) => (prev ? window.scrollY > 24 : window.scrollY > 56));

      const currentPosition = window.scrollY + NAV_OFFSET + 24;
      let currentSection = sectionOrder[0];

      sectionOrder.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        if (section.offsetTop <= currentPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection((prev) => (prev === currentSection ? prev : currentSection));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!desktopAboutRef.current?.contains(event.target as Node)) {
        setDesktopAboutOpen(false);
      }
      if (!desktopWorkRef.current?.contains(event.target as Node)) {
        setDesktopWorkOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (

    
    <nav
      className="fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-300"
    >
  

    
      <div
        className="mx-auto flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8 md:justify-center"
      >
        {/* logo */}
        <motion.button
          type="button"
          onClick={() => scrollToSection("hero")}
          initial={false}
          animate={{
            x: isDesktop && isScrolled ? -260 : 0,
            opacity: isDesktop && isScrolled ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.75 }}
          className={`group flex items-center gap-3 overflow-hidden md:absolute md:left-4 lg:left-8 ${
            isScrolled ? "md:pointer-events-none" : ""
          }`}
          style={{ willChange: "transform, opacity" }}
          aria-label="Go to Home"
        >
          <img
            src={profilePicture}
            alt="Developer logo"
            className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          
        </motion.button>
        <GlassSurface 
          width={600} 
          height={"auto"}
          borderRadius={50}
          opacity={0.93}
          className="my-custom-class m-4 hidden md:block"

        > 
          <ul
            ref={desktopNavRef}
            className="relative hidden items-center gap-2 md:flex"
            onMouseLeave={() => setHoveredMainItem(null)}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 h-9 -translate-y-1/2 rounded-full bg-white/10 transition-[left,width,opacity] duration-300 ease-out"
              style={{ left: desktopHoverStyle.left, width: desktopHoverStyle.width, opacity: desktopHoverStyle.opacity }}
            />
            {mainNavItems.map((item) => {
              if (item.key === "about") {
                return (
                  <li key={item.key} ref={desktopAboutRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setDesktopAboutOpen((prev) => !prev)}
                      onMouseEnter={() => setHoveredMainItem(item.key)}
                      onFocus={() => setHoveredMainItem(item.key)}
                      ref={(el) => {
                        desktopMainItemRefs.current[item.key] = el;
                      }}
                      className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white"
                    >
                      About
                      <svg
                        className={`h-4 w-4 transition-transform duration-300 ${desktopAboutOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div
                      className={`absolute right-0 top-full mt-0 w-52 rounded-2xl border border-white/10 bg-slate-600/95 p-2 shadow-xl shadow-black/25 backdrop-blur-lg transition-all duration-200 ${
                        desktopAboutOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                    >
                      {aboutItems.map((aboutItem) => {
                        const isActive = activeSection === aboutItem.sectionId;
                        return (
                          <button
                            key={aboutItem.sectionId}
                            type="button"
                            onClick={() => scrollToSection(aboutItem.sectionId)}
                            className={`mb-1 flex w-full items-center rounded-xl px-3 py-2 text-left text-sm transition-colors duration-200 last:mb-0 ${
                              isActive
                                ? "bg-cyan-300/20 text-cyan-200"
                                : "text-slate-200 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {aboutItem.label}
                          </button>
                        );
                      })}
                    </div>
                  </li>
                );
              }

              if (item.key === "work") {
                return (
                  <li key={item.key} ref={desktopWorkRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setDesktopWorkOpen((prev) => !prev)}
                      onMouseEnter={() => setHoveredMainItem(item.key)}
                      onFocus={() => setHoveredMainItem(item.key)}
                      ref={(el) => {
                        desktopMainItemRefs.current[item.key] = el;
                      }}
                      className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white"
                    >
                      Work
                      <svg
                        className={`h-4 w-4 transition-transform duration-300 ${desktopWorkOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div
                      className={`absolute right-0 top-full mt-3 w-52 rounded-2xl border border-white/10 bg-slate-900/95 p-2 shadow-xl shadow-black/25 backdrop-blur-lg transition-all duration-200 ${
                        desktopWorkOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                    >
                      {workItems.map((workItem) => {
                        const isActive = activeSection === workItem.sectionId;
                        return (
                          <button
                            key={workItem.sectionId}
                            type="button"
                            onClick={() => scrollToSection(workItem.sectionId)}
                            className={`mb-1 flex w-full items-center rounded-xl px-3 py-2 text-left text-sm transition-colors duration-200 last:mb-0 ${
                              isActive
                                ? "bg-cyan-300/20 text-cyan-200"
                                : "text-slate-200 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {workItem.label}
                          </button>
                        );
                      })}
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.key}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.sectionId)}
                    onMouseEnter={() => setHoveredMainItem(item.key)}
                    onFocus={() => setHoveredMainItem(item.key)}
                    ref={(el) => {
                      desktopMainItemRefs.current[item.key] = el;
                    }}
                    className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </GlassSurface>
        <motion.a
          href={RESUME_PATH}
          download="maher_albeek_lebenslauf.pdf"
          aria-label="Resume"
          initial={false}
          animate={{
            x: isDesktop && isScrolled ? 260 : 0,
            opacity: isDesktop && isScrolled ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.75 }}
          className={`group hidden items-center gap-2 justify-center overflow-hidden rounded-full border border-orange-500/40 px-3 py-2.5 text-orange-100 hover:border-orange-400 hover:bg-orange-300/20 hover:text-white md:absolute md:right-4 md:inline-flex lg:right-8 ${
            isScrolled ? "md:pointer-events-none" : ""
          }`}
          style={{ willChange: "transform, opacity" }}
        >
          <svg className="h-5 w-5 text-orange-100 transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14" />
          </svg>
          <span className="text-sm font-semibold">Resume</span>
        </motion.a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/15 p-2 text-slate-100 transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-105 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-4 py-4">
          {mainNavItems.map((item) => {
            if (item.key === "about") {
              return (
                <div key={item.key} className="rounded-2xl border border-white/10 p-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setMobileAboutOpen((prev) => !prev)}
                  >
                    About
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${mobileAboutOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      mobileAboutOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-1 px-2 pb-1 pt-1">
                        {aboutItems.map((aboutItem) => {
                          const isActive = activeSection === aboutItem.sectionId;
                          return (
                            <button
                              key={aboutItem.sectionId}
                              type="button"
                              onClick={() => scrollToSection(aboutItem.sectionId)}
                              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                                isActive
                                  ? "bg-cyan-500/20 text-cyan-200"
                                  : "text-slate-300 hover:bg-white/10 hover:text-white"
                              }`}
                            >
                              {aboutItem.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (item.key === "work") {
              return (
                <div key={item.key} className="rounded-2xl border border-white/10 p-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setMobileWorkOpen((prev) => !prev)}
                  >
                    Work
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${mobileWorkOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      mobileWorkOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-1 px-2 pb-1 pt-1">
                        {workItems.map((workItem) => {
                          const isActive = activeSection === workItem.sectionId;
                          return (
                            <button
                              key={workItem.sectionId}
                              type="button"
                              onClick={() => scrollToSection(workItem.sectionId)}
                              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                                isActive
                                  ? "bg-cyan-500/20 text-cyan-200"
                                  : "text-slate-300 hover:bg-white/10 hover:text-white"
                              }`}
                            >
                              {workItem.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => scrollToSection(item.sectionId)}
                className="block w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </button>
            );
          })}
          {/* Resume */}
          <a
            href={RESUME_PATH}
            download="maher_albeek_lebenslauf.pdf"
            aria-label="Resume"
            className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-orange-300/40 px-3 py-2 text-sm font-semibold text-orange-100 transition-colors hover:bg-orange-300/20 hover:text-white"
            onClick={() => {
              setMobileOpen(false);
              setMobileAboutOpen(false);
              setMobileWorkOpen(false);
            }}
          >
            <svg className="h-5 w-5 text-orange-100 transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14" />
            </svg>
            <span>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;