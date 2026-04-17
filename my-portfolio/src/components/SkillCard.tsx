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
import "./SkillCard.css";

type StyleWithVars = CSSProperties & Record<`--${string}`, string | number>;

export type SkillItem = {
	name: string;
	level: number;
};

export type SkillGroup = {
	title: string;
	skills: SkillItem[];
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

export const skillGroups: SkillGroup[] = [
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

export const walletThemes = [
	"245 96% 67%",
	"149 52% 48%",
	"32 96% 58%",
	"201 89% 55%",
	"352 86% 63%",
	"266 77% 62%",
];

type WalletSkillCardProps = {
	group: SkillGroup;
	groupIndex: number;
	isActive: boolean;
	onSelect: (index: number) => void;
};

export const WalletSkillCard = ({ group, groupIndex, isActive, onSelect }: WalletSkillCardProps) => (
	<button
		type="button"
		className={`skills-wallet__card ${isActive ? "is-active" : ""}`}
		onClick={() => onSelect(groupIndex)}
		aria-pressed={isActive}
		aria-controls="skills-detail-panel"
		style={{
			"--card-index": groupIndex,
			"--card-hue": walletThemes[groupIndex % walletThemes.length],
		} as StyleWithVars}
	>
		<div className="skills-wallet__card-top">
			<span className="skills-wallet__badge">Kategorie</span>
			<span className="skills-wallet__chip" aria-hidden="true" />
		</div>
		<span className="skills-wallet__card-name">{group.title}</span>
		<span className="skills-wallet__card-meta">{group.skills.length} Skills</span>
	</button>
);

type SkillDetailCardProps = {
	skill: SkillItem;
	skillIndex: number;
	isInView: boolean;
};

export const SkillDetailCard = ({ skill, skillIndex, isInView }: SkillDetailCardProps) => {
	const SkillIcon = getSkillIcon(skill.name);
	const fillStyle: CSSProperties = {
		width: isInView ? `${skill.level}%` : "0%",
		transitionDelay: `${Math.min(skillIndex * 55, 500)}ms`,
	};

	return (
		<article className="skills-detail__card">
			<div className="skills-detail__card-top">
				<span className="skills-detail__skill-name">
					<SkillIcon className="skills-wallet__icon" aria-hidden="true" />
					{skill.name}
				</span>
				<span className="skills-detail__level">{skill.level}%</span>
			</div>
			<div className="skill-bar skill-bar--detail">
				<span className="skill-bar__fill" style={fillStyle} />
			</div>
		</article>
	);
};
