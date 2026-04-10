
const Skills = () => {
    return (
        <section id="skills" data-bg-section="skills" className="w-full min-h-screen  items-center justify-center bg-black/30 px-6 py-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">Skills</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">Here are some of my skills:</p>
            <ul className="text-gray-400 text-base md:text-lg leading-relaxed">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Node.js</li>
            </ul>
        </section>
    );
};

export default Skills;