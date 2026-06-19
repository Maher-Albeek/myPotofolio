import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import resumeFileDE from "../assets/CV_de.pdf";
import resumeFileEN from "../assets/CV_en.pdf"; // Assuming an English CV file exists
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
const RESUME_EN_PATH = resumeFileEN; // Define the path for the English CV

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
        {/* Desktop Resume Buttons */}
        <div className="hidden md:flex md:absolute md:right-4 lg:right-8 items-center gap-2">
          <motion.a
            href={RESUME_DE_PATH}
            download="maher_albeek_lebenslauf.pdf"
            aria-label="German Resume"
            initial={false}
            transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.75 }}
            className={`group inline-flex items-center gap-2 justify-center overflow-hidden rounded-full border border-orange-500/40 px-3 py-2.5 text-orange-100 hover:border-orange-400 hover:bg-orange-300/20 hover:text-white`}
            style={{ willChange: "transform, opacity" }}
          >
            <svg className="h-5 w-5 text-orange-100 transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14" />
            </svg>
            <span className="text-sm font-semibold">DE CV</span>
          </motion.a>
          <motion.a
            href={RESUME_EN_PATH}
            download="maher_albeek_resume.pdf"
            aria-label="English Resume"
            initial={false}
            transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.75 }}
            className={`group inline-flex items-center gap-2 justify-center overflow-hidden rounded-full border border-blue-500/40 px-3 py-2.5 text-blue-100 hover:border-blue-400 hover:bg-blue-300/20 hover:text-white`}
            style={{ willChange: "transform, opacity" }}
          >
            <svg className="h-5 w-5 text-blue-100 transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14" />
            </svg>
            <span className="text-sm font-semibold">EN CV</span>
          </motion.a>
        </div>

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
          {/* Resume */}
          <a
            href={RESUME_DE_PATH}
            download="maher_albeek_lebenslauf.pdf"
            aria-label="Resume"
            className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-orange-300/40 px-3 py-2 text-sm font-semibold text-orange-100 transition-colors hover:bg-orange-300/20 hover:text-white"
            onClick={() => {
              setMobileOpen(false);
            }}
          >
            <svg className="h-5 w-5 text-orange-100 transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14" />
            </svg>
            <span>Resume</span>
          </a>
          <a
            href={RESUME_EN_PATH}
            download="maher_albeek_resume.pdf"
            aria-label="English Resume"
            className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-300/40 px-3 py-2 text-sm font-semibold text-blue-100 transition-colors hover:bg-blue-300/20 hover:text-white"
            onClick={() => {
              setMobileOpen(false);
            }}
          >
            <svg className="h-5 w-5 text-blue-100 transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14" />
            </svg>
            <span>EN CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;