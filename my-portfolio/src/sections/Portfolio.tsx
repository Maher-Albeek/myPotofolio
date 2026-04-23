import "./Portfolio.css";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import fotografiePage from "../assets/fotografie.png";


const projects = [
  {
    title: "Fotografie Website",
    stack: "Next.js, React, TypeScript, Tailwind, MySQL, REST API",
    description:
      "Full-stack photography site with Admin-CMS, CRUD APIs, Auth, AVIF pipeline",
    demoLink: "https://www.maher-albeek.com/",
    Image: fotografiePage,
  },
  {
    title: "Booking System",
    stack: "Java, Spring Boot, MySQL, Angular",
    description:
      "Vehicle booking system with REST API, DTOs, JPA, transaction locking",
    demoLink: "https://example.com/booking-system",
    Image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Design System Dashboard",
    stack: "React, TypeScript, Tailwind, REST API",
    description:
      "Admin dashboard with reusable UI components, analytics widgets, and role-based views",
    demoLink: "https://example.com/design-dashboard",
    Image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  },
];

const Portfolio = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projectCount = projects.length;
  const activeProject = projects[activeProjectIndex];

  const showPreviousProject = () => {
    setActiveProjectIndex((prev) => (prev - 1 + projectCount) % projectCount);
  };

  const showNextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % projectCount);
  };

  return (
    <div className="w-full max-w-6xl">
      <p className="text-gray-400 text-base md:text-lg leading-relaxed">
        Here are some of my projects:
      </p>

      <div className="mt-10 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={showPreviousProject}
          aria-label="Show previous project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-500/50 bg-slate-900/70 text-slate-200 transition hover:border-slate-300 hover:bg-slate-800"
        >
          <span aria-hidden="true">&#8592;</span>
        </button>

        <span className="text-sm text-slate-300">
          {activeProjectIndex + 1} / {projectCount}
        </span>

        <button
          type="button"
          onClick={showNextProject}
          aria-label="Show next project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-500/50 bg-slate-900/70 text-slate-200 transition hover:border-slate-300 hover:bg-slate-800"
        >
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>

      <div className="mt-8">
        <ProjectCard key={`${activeProject.title}-${activeProjectIndex}`} {...activeProject} />
      </div>
    </div>
  );
};

export default Portfolio;
