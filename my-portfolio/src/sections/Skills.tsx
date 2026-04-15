const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 86 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5/CSS3", level: 94 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", level: 89 },
      { name: "MySQL", level: 84 },
      { name: "REST APIs", level: 91 },
      { name: "Laravel (basics)", level: 68 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 88 },
      { name: "Linux", level: 84 },
      { name: "VS Code", level: 93 },
      { name: "WordPress", level: 82 },
      { name: "Adobe", level: 72 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="w-full max-w-5xl">
      <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">
        Skills
      </h2>
      <p className="mt-2 text-gray-400 text-base md:text-lg leading-relaxed">
        Here are some of my skills:
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="info-card text-left">
            <span className="info-card__eyebrow">{group.title}</span>
            <div className="mt-6 space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-sm uppercase tracking-[0.2em] text-white/85">
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <span className="skill-bar__fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Skills;
