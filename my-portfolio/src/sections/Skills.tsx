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
    const cards = Array.from(document.querySelectorAll<HTMLButtonElement>(".skills-title-card"));

    if (!cards.length) {
      return;
    }

    let rafPending = false;
    let cursorNormX = 0;
    let cursorNormY = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let hasPointer = false;

    const updateParallax = () => {
      const cursorMaxX = 12;
      const cursorMaxY = 10;
      const maxTiltX = 8;
      const maxTiltY = 10;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const rawScale = Number.parseFloat(card.style.getPropertyValue("--cursor-scale"));
        const cursorScale = Number.isFinite(rawScale) ? rawScale : 1;

        const cursorX = cursorNormX * cursorMaxX * cursorScale;
        const cursorY = cursorNormY * cursorMaxY * cursorScale;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const normalizedTiltX = hasPointer
          ? Math.max(-1, Math.min(1, (pointerX - centerX) / (rect.width / 2 || 1)))
          : 0;
        const normalizedTiltY = hasPointer
          ? Math.max(-1, Math.min(1, (pointerY - centerY) / (rect.height / 2 || 1)))
          : 0;

        const tiltY = normalizedTiltX * maxTiltY * cursorScale;
        const tiltX = -normalizedTiltY * maxTiltX * cursorScale;

        card.style.setProperty("--cursor-x", `${cursorX.toFixed(2)}px`);
        card.style.setProperty("--cursor-y", `${cursorY.toFixed(2)}px`);
        card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
      });

      rafPending = false;
    };

    const requestParallaxUpdate = () => {
      if (rafPending) {
        return;
      }

      rafPending = true;
      window.requestAnimationFrame(updateParallax);
    };

    const handlePointerMove = (event: PointerEvent) => {
      hasPointer = true;
      pointerX = event.clientX;
      pointerY = event.clientY;

      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (event.clientY / window.innerHeight) * 2 - 1;

      cursorNormX = Math.max(-1, Math.min(1, normalizedX));
      cursorNormY = Math.max(-1, Math.min(1, normalizedY));
      requestParallaxUpdate();
    };

    const resetPointerInfluence = () => {
      hasPointer = false;
      cursorNormX = 0;
      cursorNormY = 0;
      requestParallaxUpdate();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", resetPointerInfluence);
    window.addEventListener("resize", requestParallaxUpdate);
    requestParallaxUpdate();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", resetPointerInfluence);
      window.removeEventListener("resize", requestParallaxUpdate);
    };
  }, []);

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
