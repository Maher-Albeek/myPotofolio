import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import "./Hero.css";

const HERO_STATS = [
  { label: "Projekte", value: 40 },
  { label: "Techniken", value: 15 },
  { label: "Jahre Erfahrung", value: 2 },
];



const Hero = () => {
  const [counts, setCounts] = useState<number[]>(() => HERO_STATS.map(() => 0));

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setCounts(HERO_STATS.map((stat) => stat.value));
      return;
    }

    const durationMs = 1600;
    const start = performance.now();
    let animationFrame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(HERO_STATS.map((stat) => Math.round(stat.value * easedProgress)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
    

      <section
        id="hero"
        data-scroll-section
        data-bg-section="hero"
        data-reveal
        className="relative w-full h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        {/* Content */}
          <div className="relative z-10 text-center w-full max-w-4xl flex flex-col items-center gap-5 sm:gap-6 pt-16 pb-20 sm:pt-8 sm:pb-16">

            {/* Name */}
            <h1
              className="hero-name text-white flex flex-col items-center gap-4 justify-end"
            >
              <span>Maher</span>
              <span>Albeek</span>
            </h1>

            {/* Divider */}
            <div className="w-20 h-0.5 bg-white/50" />

            {/* Typing Animation - Job Title */}
            <TypeAnimation
              sequence={[
                "Full-Stack Web Projects",
                2000,
                "Frontend Developer",
                2000,
                " REST API Integration",
                2000,
                "UI/UX Web Design",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-sm sm:text-lg md:text-2xl text-gray-300 tracking-[0.2em] sm:tracking-widest uppercase font-light px-2"
            />

            {/* CTA Button */}
           {/*  <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              className="mt-3 sm:mt-4 px-6 sm:px-8 py-3 border border-white text-white text-xs sm:text-sm 
              uppercase tracking-widest cursor-pointer hover:bg-white 
              hover:text-gray-900 transition-all duration-300"
            >
              Start
            </Link> */}

            {/* Scroll Down Arrow */}
           {/*  <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="absolute bottom-5 sm:bottom-8 cursor-pointer animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white/70 hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"/>
              </svg>
            </Link> */}

          </div>

          <div className="hidden md:grid grid-cols-1 gap-4 text-white/90 absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20">
            {HERO_STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="hero-stat-orbit border border-white/20 bg-black/20 backdrop-blur-sm rounded-full w-32 h-32 p-3 flex flex-col items-center justify-center text-center"
              >
                <span className="block text-2xl font-semibold text-white leading-none">
                  + {counts[index]}
                </span>
                <span className="block mt-1 text-xs uppercase tracking-[0.2em] text-white/75">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

      </section>
    </>
  );};


export default Hero;