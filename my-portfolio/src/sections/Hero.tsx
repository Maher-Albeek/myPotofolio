import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="heroimg absolute inset-0 bg-contain bg-no-repeat bg-left md:bg-position-[200px] "
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

        {/* Right-side Neon Glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-55%] top-1/2 h-[56vw] w-[56vw] 
          `min-h-280px` `min-w-280px` -translate-y-1/2 rounded-full bg-orange-500 blur-3xl"/></div>
          

          {/* Content */}
          <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6">

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-widest uppercase">
              Maher Albeek
            </h1>

            {/* Divider */}
            <div className="w-20 h-0.5 bg-white/50" />

              {/* Typing Animation - Job Title */}
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl text-gray-300 tracking-widest uppercase font-light"
              />

              {/* CTA Button */}
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-70}
                className="mt-4 px-8 py-3 border border-white text-white text-sm 
                uppercase tracking-widest cursor-pointer hover:bg-white 
                hover:text-gray-900 transition-all duration-300"
              >
                View My Work
              </Link>

              {/* Scroll Down Arrow */}
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="absolute bottom-10 cursor-pointer animate-bounce"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white/70 hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
            </svg>
          </Link>

        </div>
    </section>
  );
};

export default Hero;