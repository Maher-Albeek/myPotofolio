import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import "./Hero.css";

const LANGUAGES = [
  { name: "Arabisch", level: "Muttersprache" },
  { name: "Kurdisch", level: "Muttersprache" },
  { name: "Deutsch", level: "Fließend" },
  { name: "Englisch", level: "Fließend" },
  { name: "Türkisch", level: "Fließend" },
];

const HERO_STATS = [
  { label: "Projekte", value: 39 },
  { label: "Skills", value: 35 },
  { label: "Jahre Erfahrung", value: 2 },
];

import React from "react";

const ScrollIndicator: React.FC = () => {
  return (
    <div className="w-[34px] h-[55px] flex items-center justify-center">
      <div className="w-[3px] h-[20px] px-[10px] py-[10px] border-2 border-white rounded-[25px] opacity-75 box-content flex justify-center">
        <div className="w-[3px] h-[10px] bg-white rounded-[25%] animate-scroll" />
      </div>
    </div>
  );
};



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
            <div className="hero-name-wrap">
              
              <h1
                className="hero-name text-white flex flex-col items-center gap-4 justify-end"
              >
                <span>Maher</span>
                <span>Albeek</span>
              </h1>
            </div>
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

          <div className="md:hidden absolute bottom-46 left-1/2 -translate-x-1/2 z-20 w-[min(92vw,420px)]">
            <div className="flex items-center justify-center gap-2 text-white/90">
              {HERO_STATS.map((stat, index) => (
                <div
                  key={`mobile-${stat.label}`}
                  className="border border-white/20 bg-black/20 backdrop-blur-sm rounded-full w-24 h-24 p-2 flex flex-col items-center justify-center text-center"
                >
                  <span className="block text-lg font-semibold text-white leading-none">
                    + {counts[index]}
                  </span>
                  <span className="block mt-1 text-[10px] uppercase tracking-[0.15em] text-white/75 leading-tight px-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20">
            <ScrollIndicator />
          </div>

          {/* Languages Marquee */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[min(480px,90vw)]">
          <div className="hero-languages-marquee-wrap overflow-hidden w-full">
            <div className="hero-languages-marquee flex items-center gap-10">
              {[...LANGUAGES, ...LANGUAGES].map((lang, i) => (
                <div key={i} className="flex items-center gap-10 shrink-0">
                  <div className="text-center">
                    <span className="block text-white/90 text-xs sm:text-sm font-medium tracking-widest uppercase whitespace-nowrap">
                      {lang.name}
                    </span>
                    <span className="block text-white/45 text-[10px] sm:text-xs tracking-[0.15em] uppercase mt-0.5 whitespace-nowrap">
                      {lang.level}
                    </span>
                  </div>
                  <span className="w-px h-6 bg-white/20" />
                </div>
              ))}
            </div>
          </div>
          </div>

      </section>
    </>
  );
};

export default Hero;