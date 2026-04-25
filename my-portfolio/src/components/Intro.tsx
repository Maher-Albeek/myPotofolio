import { useEffect, useState } from "react";

type IntroProps = {
  onFinish: () => void;
  name?: string;
  title?: string;
  durationMs?: number;
  fadeDurationMs?: number;
  showSkip?: boolean;
};

function Intro({
  onFinish,
  name = "Maher Albeek",
  title = "Software Developer",
  durationMs = 3000,
  fadeDurationMs = 700,
  showSkip = true,
}: IntroProps) {
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
        "fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden",
        "bg-gradient-to-b from-slate-950 via-zinc-900 to-black",
        "transition-opacity ease-in-out",
        isExiting ? "opacity-0" : "opacity-100",
      ].join(" ")}
      style={{ transitionDuration: `${fadeDurationMs}ms` }}
      aria-live="polite"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute -right-12 bottom-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse [animation-delay:250ms]" />
        <div className="absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-400/15 blur-3xl animate-pulse [animation-delay:500ms]" />
      </div>

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
            "mt-4 text-3xl font-light tracking-[0.06em] text-zinc-100 sm:text-5xl",
            "transition-all duration-1000 ease-out [transition-delay:120ms]",
            isTextVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          ].join(" ")}
        >
          {name}
        </h1>

        <p
          className={[
            "mt-3 text-sm tracking-[0.18em] text-zinc-400 sm:text-base",
            "transition-all duration-1000 ease-out [transition-delay:200ms]",
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
