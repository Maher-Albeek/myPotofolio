import "./About.css";

const About = () => {
  return (
    <>
      <div className="absolute inset-0" aria-hidden="true" />
        <div className="mr-2">
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">Who I Am</span>
          <p className="font-bold text-6xl text-white/90 group-hover:text-white">About Me</p>
        </div>
        
       
          <div className="about  cursor-pointer">
            <div className="about-image-wrap flex-wrap float-left">
                <img className="about-image w-auto h-auto" src="./public/images/1.png" alt="Profile Picture" />
                <div className="about-image-content">
                  Birthday: 17.04.1992 <br />
                  Location: Gelsenkirchen, Germany
                </div>
            </div>
            <p className="about-description ">
              Junior Softwareentwickler mit Fokus auf Webentwicklung und Backend-Systeme.
              Erfahrung in der Entwicklung von Webanwendungen mit PHP, MySQL und REST APIs sowie in der
              Verarbeitung und Integration von Daten. Grundkenntnisse in modernen Web-Technologien und
              Interesse an Frameworks wie Laravel und Vue.js.
            </p>
          </div>
        
     
    </>
  );
};

export default About;