import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import resumeFileDE from "../assets/CV_de.pdf";
import resumeFileEN from "../assets/CV_en.pdf";
import GlassSurface from './GlassSurface'


const mainNavItems = [
  { key: "home", label: "Home", sectionId: "hero" },
  { key: "about", label: "About", sectionId: "about" },
  { key: "experience", label: "Experience", sectionId: "experience" },
  { key: "education", label: "Education", sectionId: "education" },
  { key: "skills", label: "Skills", sectionId: "skills" },
  { key: "work", label: "Work", sectionId: "portfolio" },
  { key: "certificates", label: "Certificates", sectionId: "certificates" },
  { key: "contact", label: "Contact", sectionId: "contact" },
];


const NAV_OFFSET = 88;
const RESUME_DE_PATH = resumeFileDE;
const RESUME_EN_PATH = resumeFileEN;

const resumeVersions = [
  {
    label: "Deutsch",
    href: RESUME_DE_PATH,
    filename: "maher_albeek_lebenslauf.pdf",
  },
  {
    label: "English",
    href: RESUME_EN_PATH,
    filename: "maher_albeek_resume.pdf",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
 
  const [hoveredMainItem, setHoveredMainItem] = useState<string | null>(null);
  const [desktopHoverStyle, setDesktopHoverStyle] = useState({ left: 0, width: 0, opacity: 0 });
 
  const desktopNavRef = useRef<HTMLUListElement | null>(null);
  const desktopMainItemRefs = useRef<Partial<Record<string, HTMLButtonElement | null>>>({});
 
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const targetY = section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: targetY, behavior: "smooth" });

  
    setHoveredMainItem(null);
    setMobileOpen(false);
   
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


  return (

    
    <nav
      className="fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-300"
    >
  

    
      <div
        className="mx-auto flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8 md:justify-center"
      >
     
        <GlassSurface 
          width={900} 
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
        {/* Desktop Resume Dropdown */}
        <motion.details
          initial={false}
          className="group absolute right-4 hidden md:block lg:right-8"
        >
          <summary className="flex cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-orange-500/40 px-3 py-2.5 text-orange-100 transition-colors hover:border-orange-400 hover:bg-orange-300/20 hover:text-white [&::-webkit-details-marker]:hidden">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14" />
            </svg>
            <span className="text-sm font-semibold">CV</span>
            <svg className="h-4 w-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 min-w-44 overflow-hidden rounded-2xl border border-white/15 bg-slate-950/95 p-1.5 shadow-xl backdrop-blur-xl">
            {resumeVersions.map((version) => (
              <a
                key={version.label}
                href={version.href}
                download={version.filename}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {version.label}
              </a>
            ))}
          </div>
        </motion.details>

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
          {/* Mobile Resume Dropdown */}
          <details className="group mt-2">
            <summary className="flex w-full cursor-pointer list-none items-center justify-center gap-2 rounded-xl border border-orange-300/40 px-3 py-2 text-sm font-semibold text-orange-100 transition-colors hover:bg-orange-300/20 hover:text-white [&::-webkit-details-marker]:hidden">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14" />
              </svg>
              <span>Download CV</span>
              <svg className="h-4 w-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="mt-1.5 grid grid-cols-2 gap-1.5">
              {resumeVersions.map((version) => (
                <a
                  key={version.label}
                  href={version.href}
                  download={version.filename}
                  className="rounded-xl bg-white/5 px-3 py-2 text-center text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {version.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
