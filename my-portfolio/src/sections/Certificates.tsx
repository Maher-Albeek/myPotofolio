import "./Certificates.css";

const certificates = [
  { title: "IHK Abschluss", detail: "Anwendungsentwicklung", year: "2025" },
  { title: "LPIC-1", detail: "Linux", year: "2024" },
  { title: "API Basics 4", detail: "Build a Personal Dashboard", year: "2025" },
  { title: "Telc B2 Deutsch", detail: "", year: "2022" },
];

const Certificates = () => {
  return (
    <div className="w-full max-w-5xl">
     
      <p className="mt-2 text-gray-400 text-base md:text-lg leading-relaxed">
        Qualifications and completed certifications.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {certificates.map((certificate) => (
          <article key={`${certificate.title}-${certificate.year}`} className="info-card text-left">
            <span className="info-card__eyebrow">Certificate</span>
            <h3 className="mt-3 text-xl font-semibold text-white">{certificate.title}</h3>
            <p className="mt-2 text-gray-300">
              {certificate.detail ? `${certificate.detail} | ${certificate.year}` : certificate.year}
            </p>
          </article>
        ))}
      </div>
    </div>
  );  
};

export default Certificates;
