import "./Experience.css";

const experiences = [
  {
    period: "05.2024 - 11.2024",
    title: "Praktikum - Softwareentwicklung (Web / API)",
    company: "Abakus Projektmanagement GmbH, Herne",
    details: [
      "Design und Entwicklung einer REST-API zur Kundendatenverwaltung (CRUD)",
      "Aufbau und Integration einer MySQL-Datenbank und API-Strukturen",
      "Umsetzung des IHK-Abschlussprojekts im Unternehmensumfeld",
    ],
  },
  {
    period: "2019 - 2024",
    title: "Fotograf",
    company: "Studio Photogramm, Gelsenkirchen",
  },
  {
    period: "2012 - 2018",
    title: "Weitere Tatigkeiten",
    company: "Lager, Schneiderei, Fotostudio",
  },
];

const Experience = () => {
  return (
    <div className="w-full max-w-5xl">
      <h2
        data-section-title
        className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest"
      >
        Berufserfahrung
      </h2>
      <div className="timeline mt-10">
        {experiences.map((experience) => (
          <article
            key={`${experience.period}-${experience.title}`}
            data-reveal
            className="timeline__item info-card text-left"
          >
            <span className="info-card__eyebrow">{experience.period}</span>
            <h3 className="mt-3 text-xl md:text-2xl font-semibold text-white">
              {experience.title}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">
              {experience.company}
            </p>
            {experience.details ? (
              <ul className="mt-5 space-y-3 text-gray-300 leading-relaxed">
                {experience.details.map((detail) => (
                  <li key={detail} className="timeline__detail">
                    {detail}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Experience;
