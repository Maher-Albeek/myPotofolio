import "./Education.css";

const educationItems = [
  {
    period: "02.2023 - 11.2025",
    title: "Fachinformatiker fur Anwendungsentwicklung",
    institution: "Damago GmbH, Essen",
  },
  {
    period: "01.2021 - 04.2022",
    title: "B2 Deutsche Sprache",
    institution: "VHS, Gelsenkirchen",
  },
  {
    period: "07.2017 - 04.2018",
    title: "Mechatronik Vorbereitung",
    institution: "Universitat BTU, Cottbus",
  },
  {
    period: "06.2016 - 03.2017",
    title: "B1 Deutsche Sprache",
    institution: "SBH, Cottbus",
  },
  {
    period: "10.2011 - 08.2012",
    title: "Bachelorstudium Elektrotechnik",
    institution: "Universitat Aleppo, Syrien",
  },
  {
    period: "09.2007 - 05.2011",
    title: "Fachabitur Elektrotechnik",
    institution: "Al-Hasakeh, Syrien",
  },
];

const Education = () => {
  return (
    <div className="w-full max-w-5xl">
      <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">
        Bildungsweg
      </h2>
      <div className="timeline mt-10">
        {educationItems.map((item) => (
          <article
            key={`${item.period}-${item.title}`}
            data-reveal
            className="timeline__item info-card text-left"
          >
            <span className="info-card__eyebrow">{item.period}</span>
            <h3 className="mt-3 text-xl md:text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">
              {item.institution}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Education;
