const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gray-950 flex items-center justify-center px-6 py-24"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text Column */}
        <div className="flex flex-col items-start text-left gap-8">

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

        {/* Image Column */}
        <div className="flex items-center justify-center">
          <div className="w-72 h-96 md:w-80 md:h-[480px] rounded-2xl overflow-hidden border border-white/10 bg-gray-800 flex items-center justify-center">
            {/* Replace src with your actual image path */}
            <span className="text-gray-600 text-sm">Your Photo</span>
          </div>
        </div>

      </div>
      
    </section>
  );
};

export default About;