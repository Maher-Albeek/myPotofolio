import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import "./Skills.css";
import { SkillDetailCard, WalletSkillCard, skillGroups, walletThemes } from "../components/SkillCard";

type StyleWithVars = CSSProperties & Record<`--${string}`, string | number>;

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeGroupIndex, setActiveGroupIndex] = useState<number | null>(null);

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

  const activeGroup = activeGroupIndex !== null ? skillGroups[activeGroupIndex] : null;

  return (
    <div ref={sectionRef} className="w-full justify-start mt-10 skills-section-root">
      <h2
        data-section-title
        className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest"
      >
        Skills
      </h2>
      <p className="mt-2 text-gray-400 text-base md:text-lg leading-relaxed">
        Übersicht meiner technischen Fähigkeiten und Grundlagen.
      </p>

      <div className="skills-wallet-grid mt-10">
        <article
          className={`skills-wallet ${isInView ? "is-in-view" : ""}`}
          style={{
            "--wallet-hue": walletThemes[0],
            "--wallet-delay": "0ms",
          } as StyleWithVars}
        >
          <div className="skills-wallet__back" aria-hidden="true" />
          <div className="skills-wallet__stack">
            {skillGroups.map((group, groupIndex) => (
              <WalletSkillCard
                key={group.title}
                group={group}
                groupIndex={groupIndex}
                isActive={activeGroupIndex === groupIndex}
                onSelect={setActiveGroupIndex}
              />
            ))}
          </div>
          <div className="skills-wallet__pocket">
            <span className="skills-wallet__title">Skills Wallet</span>
            <span className="skills-wallet__count">Klicke eine Karte</span>
          </div>
        </article>
      </div>

      {activeGroup ? (
        <div id="skills-detail-panel" className="skills-detail mt-8" aria-live="polite">
          <div className="skills-detail__header">
            <h3 className="skills-detail__title">{activeGroup.title}</h3>
            <span className="skills-detail__count">{activeGroup.skills.length} Skills</span>
          </div>

          <div className="skills-detail__grid">
            {activeGroup.skills.map((skill, skillIndex) => (
              <SkillDetailCard
                key={skill.name}
                skill={skill}
                skillIndex={skillIndex}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Skills;
