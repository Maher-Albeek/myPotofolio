import "./About.css";
import profilePicture from "../assets/U.png";
import HeroScrollReveal from "../components/HeroScrollReveal";
const About = () => {
   const introText =
    `Ich bin Maher — Softwareentwickler mit einem breiten Interesse an der Welt der Programmierung und einem besonderen Fokus auf Webentwicklung.
Was mich antreibt, ist nicht nur das Schreiben von Code — es ist das Gefühl, wenn eine Idee langsam zur funktionierenden Anwendung wird. Ich genieße jeden Teil des Prozesses: wenn eine Benutzeroberfläche genau so aussieht, wie ich sie mir vorgestellt habe, wenn ein hartnäckiger Bug endlich gelöst ist, und wenn ich etwas komplett von Grund auf aufbaue. Diese drei Momente zusammen machen für mich gute Entwicklungsarbeit aus.
Mein Hintergrund ist vielseitig — bevor ich in die Softwareentwicklung eingestiegen bin, habe ich jahrelang als Fotograf gearbeitet. Diese Erfahrung hat meine Denkweise nachhaltig geprägt: Ich betrachte digitale Produkte nicht nur technisch, sondern auch visuell. Struktur, Ästhetik und klare Benutzerführung sind für mich keine nachträglichen Gedanken — sie gehören von Anfang an zum Entwicklungsprozess.
Ich interessiere mich für Softwareentwicklung in einem breiten Sinne: von Webapplikationen über Backend-Systeme bis hin zu eingebetteten Systemen — wie mein Projekt mit Raspberry Pi und Arduino zeigt. Mein Schwerpunkt liegt auf dem Web, weil es der Bereich ist, in dem Technik und visuelle Gestaltung am stärksten zusammenkommen.
Nach meiner abgeschlossenen Umschulung zum Fachinformatiker für Anwendungsentwicklung (IHK, 2025) arbeite ich heute mit React, TypeScript, Next.js und PHP. Ich denke strukturiert, arbeite sauber und lege großen Wert auf wartbaren, durchdachten Code.
Mein Ziel ist es, an großen, bedeutsamen Projekten mitzuwirken — und eines Tages eigene Ideen als vollständige Produkte umzusetzen.`;
  return (
    <>
      <div className="about-layout">
        <div className=" bg-fuchsia-50 about inset-0" aria-hidden="true" >
            <div className="mr-2 mt-2">
              <span className="text-xl uppercase tracking-[0.3em] text-gray-900/60">Who I Am</span>
            </div>
          
            <div className=" flex justify-center cursor-pointer ">
              <HeroScrollReveal text={introText} className="about-description" />
            </div>

        </div>
        <div className="about-image-wrap bg-fuchsia-50 rounded-3xl  ">
          <img className="about-image " src={profilePicture} alt="Profile Picture" />          
        </div>
      </div>
    </>
  );
};

export default About;