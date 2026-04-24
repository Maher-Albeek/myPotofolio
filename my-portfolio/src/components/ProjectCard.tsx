import "./ProjectCard.css";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import { FaAngular, FaJava, FaReact } from "react-icons/fa";
import {
  SiMysql,
  SiNextdotjs,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techIcons = {
  "next.js": SiNextdotjs,
  react: FaReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  mysql: SiMysql,
  "rest api": FiGlobe,
  java: FaJava,
  "spring boot": SiSpringboot,
  angular: FaAngular,
};

const normalizeTech = (value: string) => value.trim().toLowerCase();

type ProjectCardProps = {
  title: string;
  description: string;
  demoLink: string;
  stack: string;
  Image: string;
  githubLink?: string;
  previewMode?: "image" | "iframe";
};

const ProjectCard = ({
  title,
  description,
  demoLink,
  stack,
  Image,
  githubLink,
  previewMode = "image",
}: ProjectCardProps) => {
  const stackItems = stack
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <article className="card">
      <div className="card__content">
        <div className="card__body">
          <h3 className="card__title">{title}</h3>
          <p className="card__descr">{description}</p>

          <div className="card__stack" aria-label="Tech stack">
            {stackItems.map((item) => {
              const Icon = techIcons[normalizeTech(item) as keyof typeof techIcons];

              return (
                <span key={item} className="card__stack-icon" title={item} aria-label={item}>
                  {Icon ? <Icon /> : <span className="card__stack-fallback">{item.slice(0, 2).toUpperCase()}</span>}
                </span>
              );
            })}
          </div>
        </div>

        <div className="card__display">
          <div className="card__monitor-shell">
            <div className="card__frame">
              <div className="card__browser-bar" aria-hidden="true">
                <span className="card__dot card__dot--red" />
                <span className="card__dot card__dot--yellow" />
                <span className="card__dot card__dot--green" />
              </div>

              <div className="card__screen">
                {previewMode === "iframe" ? (
                  <iframe
                    className="card__media"
                    src={demoLink}
                    title={`${title} preview`}
                    loading="lazy"
                  />
                ) : (
                  <img className="card__media" src={Image} alt={`${title} preview`} loading="lazy" />
                )}

                <div className="card__overlay">
                  <a className="card__action" href={demoLink} target="_blank" rel="noreferrer">
                    <HiOutlinePlayCircle aria-hidden="true" />
                  </a>
                  {githubLink ? (
                    <a
                      className="card__action card__action--ghost"
                      href={githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="card__monitor-chin" aria-hidden="true" />
          </div>
          <div className="card__monitor-stand" aria-hidden="true" />
          <div className="card__monitor-base" aria-hidden="true" />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;