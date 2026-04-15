import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  FaAngular,
  FaBootstrap,
  FaBug,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaExchangeAlt,
  FaFileCode,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaLaravel,
  FaLinux,
  FaNodeJs,
  FaPalette,
  FaPhp,
  FaProjectDiagram,
  FaPython,
  FaReact,
  FaRobot,
  FaTasks,
  FaTools,
  FaUserCheck,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiSharp,
  SiGithubcopilot,
  SiJquery,
  SiJson,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiXampp,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

type SkillItem = {
  name: string;
  level: number;
};

const skillIconMap: Record<string, IconType> = {
  Java: FaJava,
  JavaScript: FaJs,
  PHP: FaPhp,
  "Python (Grundkenntnisse)": FaPython,
  "C# (Grundkenntnisse)": SiSharp,
  "C++ (Grundkenntnisse)": SiCplusplus,
  "REST APIs": FaExchangeAlt,
  MySQL: SiMysql,
  "CRUD Anwendungen": FaDatabase,
  "API Integration": FaNodeJs,
  OOP: FaProjectDiagram,
  "Laravel (Grundkenntnisse)": FaLaravel,
  "MVC (Grundkenntnisse)": FaFileCode,
  React: FaReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  HTML5: FaCode,
  CSS3: FaCss3Alt,
  AJAX: FaExchangeAlt,
  "Responsive Webdesign": FaPalette,
  Bootstrap: FaBootstrap,
  "Angular (Grundkenntnisse)": FaAngular,
  "Vue.js (Grundkenntnisse)": FaVuejs,
  "jQuery (Grundkenntnisse)": SiJquery,
  Git: FaGitAlt,
  GitHub: FaGithub,
  "CI/CD": FaTasks,
  Linux: FaLinux,
  "VS Code": VscVscode,
  XAMPP: SiXampp,
  WordPress: FaWordpress,
  JSON: SiJson,
  "CSV/XML Datenverarbeitung": FaDatabase,
  "Reporting & Datenvisualisierung": FaTools,
  Adobe: FaPalette,
  "Client-Server-Architektur": FaProjectDiagram,
  Versionskontrolle: FaGitAlt,
  "Agile Zusammenarbeit": FaUserCheck,
  Debugging: FaBug,
  "Unit Testing": FaTasks,
  "Software Testing (Grundlagen)": FaTasks,
  "Moderne UI/UX Konzepte": FaPalette,
  "GitHub Copilot": SiGithubcopilot,
  ChatGPT: FaRobot,
};

const getSkillIcon = (skillName: string): IconType => skillIconMap[skillName] ?? FaCode;

const skillGroups = [
  {
    title: "Programmiersprachen",
    skills: [
      { name: "Java", level: 82 },
      { name: "JavaScript", level: 90 },
      { name: "PHP", level: 89 },
      { name: "Python (Grundkenntnisse)", level: 58 },
      { name: "C# (Grundkenntnisse)", level: 54 },
      { name: "C++ (Grundkenntnisse)", level: 52 },
    ],
  },
  {
    title: "Backend & Datenbanken",
    skills: [
      { name: "REST APIs", level: 91 },
      { name: "MySQL", level: 84 },
      { name: "CRUD Anwendungen", level: 86 },
      { name: "API Integration", level: 88 },
      { name: "OOP", level: 87 },
      { name: "Laravel (Grundkenntnisse)", level: 68 },
      { name: "MVC (Grundkenntnisse)", level: 62 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 86 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5", level: 94 },
      { name: "CSS3", level: 93 },
      { name: "AJAX", level: 80 },
      { name: "Responsive Webdesign", level: 90 },
      { name: "Bootstrap", level: 82 },
      { name: "Angular (Grundkenntnisse)", level: 56 },
      { name: "Vue.js (Grundkenntnisse)", level: 55 },
      { name: "jQuery (Grundkenntnisse)", level: 63 },
    ],
  },
  {
    title: "Tools & Technologien",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "CI/CD", level: 76 },
      { name: "Linux", level: 84 },
      { name: "VS Code", level: 93 },
      { name: "XAMPP", level: 79 },
      { name: "WordPress", level: 82 },
      { name: "JSON", level: 90 },
      { name: "CSV/XML Datenverarbeitung", level: 74 },
      { name: "Reporting & Datenvisualisierung", level: 70 },
      { name: "Adobe", level: 72 },
    ],
  },
  {
    title: "Entwicklungskonzepte",
    skills: [
      { name: "Client-Server-Architektur", level: 84 },
      { name: "Versionskontrolle", level: 89 },
      { name: "Agile Zusammenarbeit", level: 83 },
      { name: "Debugging", level: 90 },
      { name: "Unit Testing", level: 76 },
      { name: "Software Testing (Grundlagen)", level: 69 },
      { name: "Moderne UI/UX Konzepte", level: 86 },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "GitHub Copilot", level: 90 },
      { name: "ChatGPT", level: 91 },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-5xl">
      <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">
        Technische Kompetenzen
      </h2>
      <p className="mt-2 text-gray-400 text-base md:text-lg leading-relaxed">
        Ubersicht meiner technischen Fahigkeiten und Grundlagen.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <article key={group.title} className="info-card text-left">
            <span className="info-card__eyebrow">{group.title}</span>
            <div className="mt-6 space-y-4">
              {group.skills.map((skill: SkillItem, skillIndex) => {
                const SkillIcon = getSkillIcon(skill.name);
                const animationDelay = `${Math.min(groupIndex * 140 + skillIndex * 60, 1200)}ms`;
                const fillStyle: CSSProperties = {
                  width: isInView ? `${skill.level}%` : "0%",
                  transitionDelay: animationDelay,
                };

                return (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/85">
                      <SkillIcon className="text-base text-cyan-300" aria-hidden="true" />
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <span className="skill-bar__fill" style={fillStyle} />
                  </div>
                </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Skills;
