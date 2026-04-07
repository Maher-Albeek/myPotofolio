const About = () => {
  return (
    <section
      id="about"
      data-bg-section="about"
      className="w-full min-h-screen  flex items-end  bg-black/30 justify-end px-6 py-24 "
      
    >
      <div className="w-full grid grid-cols-6 gap-4 items-center ">

        {/* Text Column */}
        <div className="flex flex-col col-span-3 col-end-7">

          {/* Section Label */}
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Who I Am
          </span>

          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">
            About Me
          </h2>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-white/30" />

          {/* Bio Text */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Junior Softwareentwickler mit Fokus auf Webentwicklung und Backend-Systeme.
            Erfahrung in der Entwicklung von Webanwendungen mit PHP, MySQL und REST APIs sowie in der
            Verarbeitung und Integration von Daten.
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Grundkenntnisse in modernen Web-Technologien und
            Interesse an Frameworks wie Laravel und Vue.js.
            Strukturierte Arbeitsweise mit Fokus auf Performance, Code-Qualität und stabile Anwendungen.
          </p>

          {/* Quote */}
          <p className="text-white/40 text-sm md:text-base italic mt-2">
            "Every frame tells a story. Every line of code builds a world."
          </p>

        </div>

       

      </div>
      
    </section>
  );
};

export default About;