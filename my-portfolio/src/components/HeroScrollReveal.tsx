import { useEffect, useMemo, useRef, useState } from "react";

type HeroScrollRevealProps = {
	text: string;
	accentClassName?: string;
	hiddenClassName?: string;
	className?: string;
};

const HeroScrollReveal = ({
	text,
	accentClassName = "text-gray-900",
	hiddenClassName = "text-gray-700/0",
	className = "text-gray-400 text-base md:text-lg leading-relaxed",
}: HeroScrollRevealProps) => {
	const words = useMemo<string[]>(() => text.trim().split(/\s+/), [text]);
	const sectionRef = useRef<HTMLElement | null>(null);
	const [revealedWords, setRevealedWords] = useState<number>(0);

	useEffect(() => {
		const onScroll = (): void => {
			const section = sectionRef.current;
			if (!section) return;

			const rect = section.getBoundingClientRect();
			const sectionTop = window.scrollY + rect.top;
			const sectionHeight = section.offsetHeight;
			const viewportHeight = window.innerHeight;

			const start = sectionTop - viewportHeight * 0.8;
			const end = sectionTop + sectionHeight - viewportHeight * 0.2;
			const total = Math.max(end - start, 1);
			const rawProgress = (window.scrollY - start) / total;
			const progress = Math.min(Math.max(rawProgress, 0), 1);

			const nextCount = Math.round(progress * words.length);
			setRevealedWords((prev) => (prev === nextCount ? prev : nextCount));
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, [words.length]);

	return (
		<section ref={sectionRef} className="relative z-10">
			<p className={className}>
				{words.map((word: string, index: number) => (
					<span
						key={`${word}-${index}`}
						className={`${index < revealedWords ? accentClassName : hiddenClassName} transition-colors duration-300`}
					>
						{word}{" "}
					</span>
				))}
			</p>
		</section>
	);
};

export default HeroScrollReveal;
