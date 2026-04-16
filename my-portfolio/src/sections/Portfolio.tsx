import "./Portfolio.css";

const projects = [
  {
    title: "Fotografie Website",
    stack: "Next.js, React, TypeScript, Tailwind, MySQL, REST API",
    description:
      "Full-stack photography site with Admin-CMS, CRUD APIs, Auth, AVIF pipeline",
    demoLink: "https://example.com/fotografie-website",
  },
  {
    title: "Booking System",
    stack: "Java, Spring Boot, MySQL, Angular",
    description:
      "Vehicle booking system with REST API, DTOs, JPA, transaction locking",
    demoLink: "https://example.com/booking-system",
  },
  {
    title: "Cyber Physical System",
    stack: "Python, Raspberry Pi, Arduino",
    description: "Embedded system for hardware-software integration",
    demoLink: "https://example.com/cyber-physical-system",
  },
  {
    title: "Cyber Physical System",
    stack: "Python, Raspberry Pi, Arduino",
    description: "Embedded system for hardware-software integration",
    demoLink: "https://example.com/cyber-physical-system-2",
  },
];

const Portfolio = () => {
  return (
    <div className="w-full max-w-6xl">
      <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">
        Portfolio
      </h2>
      <p className="text-gray-400 text-base md:text-lg leading-relaxed">
        Here are some of my projects:
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={`${project.title}-${index}`} className="info-card project-card text-left">
            <span className="info-card__eyebrow">Project</span>
            <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-white/55">
              {project.stack}
            </p>
            <p className="mt-6 text-gray-300 leading-relaxed">{project.description}</p>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center rounded-md border border-cyan-300/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200 transition hover:border-cyan-200 hover:text-white"
            >
              View Demo
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
