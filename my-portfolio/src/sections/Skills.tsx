import { useEffect, useState } from "react";
import "./Skills.css";
import { WalletSkillCard, skillGroups } from "../components/SkillCard";

const Skills = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setActiveGroupIndex((current) => (current === index ? null : index));
  };

  const handleClose = () => {
    setActiveGroupIndex(null);
  };

  useEffect(() => {
    if (activeGroupIndex === null) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGroupIndex(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeGroupIndex]);

  return (
    <div className="w-full justify-start mt-10 skills-section-root">
    
      <p className="mt-2 text-gray-400 text-base md:text-lg leading-relaxed">
        Übersicht meiner technischen Fähigkeiten und Grundlagen.
      </p>

      <div className={`skills-title-grid mt-10 ${activeGroupIndex !== null ? "has-active" : ""}`}>
        {skillGroups.map((group, groupIndex) => (
          <WalletSkillCard
            key={group.title}
            group={group}
            groupIndex={groupIndex}
            isActive={activeGroupIndex === groupIndex}
            onSelect={handleSelect}
            onClose={handleClose}
          />
        ))}
      </div>

      
    </div>
  );
};

export default Skills;
