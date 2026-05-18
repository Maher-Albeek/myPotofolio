import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { getSkillIcon, skillGroups } from "./SkillCard";
import "./Intro.css";

type IntroProps = {
  onFinish: () => void;
  name?: string;
  title?: string;
  durationMs?: number;
  fadeDurationMs?: number;
  showSkip?: boolean;
};

type IntroSkillIcon = {
  name: string;
  top: string;
  left: string;
  flightX: string;
  flightY: string;
  baseScale: number;
  duration: string;
  delay: string;
};

type SkillFlightStyle = CSSProperties & Record<`--${string}`, string | number>;

const seededRandom = (seed: number) => {
  const value = Math.sin(seed * 999.91) * 10000;
  return value - Math.floor(value);
};

const allSkillNames = Array.from(
  new Set(skillGroups.flatMap((group) => group.skills.map((skill) => skill.name)))
);

const introSkillIcons: IntroSkillIcon[] = allSkillNames.map((name, index) => {
  const seed = index + 1;
  const left = 8 + seededRandom(seed + 0.13) * 84;
  const top = 10 + seededRandom(seed + 0.29) * 78;
  const flightX = (left - 50) * (0.9 + seededRandom(seed + 0.47) * 0.85);
  const flightY = (top - 50) * (0.85 + seededRandom(seed + 0.61) * 0.75);
  const baseScale = 0.8 + seededRandom(seed + 0.73) * 0.9;
  const duration = 3.2 + seededRandom(seed + 0.89) * 1.4;
  const delay = -seededRandom(seed + 0.97) * duration;

  return {
    name,
    top: `${top.toFixed(2)}%`,
    left: `${left.toFixed(2)}%`,
    flightX: `${flightX.toFixed(2)}vw`,
    flightY: `${flightY.toFixed(2)}vh`,
    baseScale,
    duration: `${duration.toFixed(2)}s`,
    delay: `${delay.toFixed(2)}s`,
  };
});

function Intro({
  onFinish,
  name = "Maher Albeek",
  title = "Software Developer",
  durationMs = 3000,
  fadeDurationMs = 700,
  showSkip = true,
}: IntroProps) {
  const codeColumns = [
    `const profile = {\n  name: \"Maher\",\n  role: \"Software Developer\",\n};\n\nfunction build() {\n  return portfolio.render(profile);\n}`,
    `import React from \"react\";\n\nexport const ship = async () => {\n  const result = await ci.deploy();\n  return result.ok;\n};\n\nship();`,
    `type Skill = \"React\" | \"TS\" | \"Node\";\n\nconst stack: Skill[] = [\n  \"React\",\n  \"TS\",\n  \"Node\",\n];\n\nstack.forEach(console.log);`,
    `SELECT project, status\nFROM work_log\nWHERE year = 2026\nORDER BY created_at DESC;\n\n// shipping features daily`,
  ];

  const [isExiting, setIsExiting] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const textTimer = window.setTimeout(() => {
      setIsTextVisible(true);
    }, 80);

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, durationMs);

    const finishTimer = window.setTimeout(() => {
      onFinish();
    }, durationMs + fadeDurationMs);

    return () => {
      window.clearTimeout(textTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
    };
  }, [durationMs, fadeDurationMs, onFinish]);

  const handleSkip = () => {
    setIsExiting(true);
    window.setTimeout(onFinish, fadeDurationMs);
  };

  return (
    <div
      className={[
        "fixed inset-0 z-9999 flex items-center justify-center overflow-hidden",
        "bg-linear-to-b from-slate-950 via-zinc-900 to-black",
        "transition-opacity ease-in-out",
        isExiting ? "opacity-0" : "opacity-100",
      ].join(" ")}
      style={{ transitionDuration: `${fadeDurationMs}ms` }}
      aria-live="polite"
    >
      <div className="intro-code-bg" aria-hidden="true">
        <div className="intro-code-scan" />
        {codeColumns.map((snippet, idx) => (
          <pre
            key={idx}
            className="intro-code-column"
            style={{
              left: `${idx * 24 + 6}%`,
              animationDelay: `${idx * -3}s`,
              animationDuration: `${16 + idx * 2}s`,
            }}
          >
            {snippet}
          </pre>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute -right-12 bottom-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse [animation-delay:250ms]" />
        <div className="absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-400/15 blur-3xl animate-pulse [animation-delay:500ms]" />
      </div>

      <ul className="intro-skill-cloud" aria-label="Core skills">
        {introSkillIcons.map((icon) => {
          const Icon = getSkillIcon(icon.name);

          return (
            <li
              key={icon.name}
              className="intro-skill-cloud__item"
              style={
                {
                  top: icon.top,
                  left: icon.left,
                  "--flight-x": icon.flightX,
                  "--flight-y": icon.flightY,
                  "--base-scale": icon.baseScale,
                  "--duration": icon.duration,
                  "--delay": icon.delay,
                } as SkillFlightStyle
              }
            >
              <Icon className="intro-skill-cloud__icon" aria-label={icon.name} />
            </li>
          );
        })}
      </ul>

      {showSkip && (
        <button
          type="button"
          onClick={handleSkip}
          className="absolute right-6 top-6 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs tracking-[0.2em] text-zinc-200/90 backdrop-blur-sm transition-colors hover:bg-white/10"
        >
          SKIP
        </button>
      )}

      <div className="relative px-6 text-center">
        <p
          className={[
            "text-xs uppercase tracking-[0.3em] text-zinc-400 transition-all duration-1000 ease-out",
            isTextVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
        >
          Developer Portfolio
        </p>

        <h1
          className={[
            "intro-name-title mt-4 text-3xl font-light tracking-[0.06em] text-zinc-100 sm:text-5xl",
            "transition-all duration-1000 ease-out delay-120",
            isTextVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          ].join(" ")}
        >
          {name}
        </h1>

        <p
          className={[
            "mt-3 text-sm tracking-[0.18em] text-zinc-400 sm:text-base",
            "transition-all duration-1000 ease-out delay-200",
            isTextVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
          ].join(" ")}
        >
          {title}
        </p>

      </div>
    </div>
  );
}

export default Intro;
