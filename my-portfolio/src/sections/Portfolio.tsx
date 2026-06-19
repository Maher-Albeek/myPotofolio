import "./Portfolio.css";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import fotografiePage from "../assets/fotografie.png";
import barbershopPage from "../assets/barbershop.png";
import bookingsystemPage from "../assets/bookingsystem.png";
import hausGartenPage from "../assets/hausGartenPage.png";


const projects = [
  {
    title: "Fotografie Website",
    stack: "Next.js, React, TypeScript, Tailwind, MySQL, REST API",
    description:
      "Full-stack photography site with Admin-CMS, CRUD APIs, Auth, AVIF pipeline",
    demoLink: "https://fotografie.maher-albeek.com/",
    githubLink: "https://github.com/Maher-Albeek/Photograpy-Website",
    Image: fotografiePage,
  },
  {
    title: "Auto Booking System",
    stack: "Java, Spring Boot, MySQL, Angular",
    description:
      "Vehicle booking system with REST API, DTOs, JPA, transaction locking",
    githubLink: "https://github.com/Maher-Albeek/booking-system",
    Image: bookingsystemPage,
  },
  {
    title: "Barbershop-Booking-Website",
    stack: "React, TypeScript, Tailwind, REST API",
    description:
      "Admin dashboard with reusable UI components, analytics widgets, and role-based views",
    githubLink: "https://github.com/Maher-Albeek/Barbershop-Booking-Website-Template",
    Image: barbershopPage,
  },
  {
    title: "Abdullah Haus & Garten Service",
    stack: "Vue 3, TypeScript, Tailwind, Pinia, MySQL, Netlify Functions",
    description:
      "Business website for a home and garden service with editable website content, gallery uploads, admin dashboard, authentication, and database-backed content management",
    demoLink: "https://fastidious-froyo-8f1e71.netlify.app/",
    Image: hausGartenPage,
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-500/50  text-slate-200 transition hover:border-slate-300"
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-500/50 text-slate-200 transition hover:border-slate-300"
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
