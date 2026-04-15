const About = () => {
  return (
      <div >

        {/* Text Column */}
        <div className="flex flex-col col-span-3 col-end-7">

          {/* Section Label */}
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Who I Am
          </span>

          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest py-4">
            About Me
          </h2>

          {/* Divider */}
          <div className="w-16 h-0.5 mx-auto bg-white/30 " />

            {/* Bio Text */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed " style={{ padding: '22px' }}>
              Junior Softwareentwickler mit Fokus auf Webentwicklung und Backend-Systeme.
              Erfahrung in der Entwicklung von Webanwendungen mit PHP, MySQL und REST APIs sowie in der
              Verarbeitung und Integration von Daten. Grundkenntnisse in modernen Web-Technologien und
              Interesse an Frameworks wie Laravel und Vue.js.
              Strukturierte Arbeitsweise mit Fokus auf Performance, Code-Qualität und stabile Anwendungen.
            </p>

            
          </div>

       

      </div>
      
  );
};

export default About;