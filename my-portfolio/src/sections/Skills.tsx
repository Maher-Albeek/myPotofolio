import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGit, faJava, faNodeJs, faPhp, faTailwindCss, faJs, faAngular, faReact, faPython, faHtml5, faWordpress, faBootstrap, faPostgresql, faMdb, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const SkillsData = [
    { name: 'JavaScript', icon: faJs },
    { name: 'TypeScript', icon: faNodeJs },
    { name: 'Java', icon: faJava },
    { name: 'PHP', icon: faPhp },
    { name: 'Python', icon: faPython },
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Tailwind CSS', icon: faTailwindCss },  
    { name: 'React', icon: faReact },
    { name: 'Vue', icon: faVuejs },
    { name: 'Angular', icon: faAngular },
    { name: 'WordPress', icon: faWordpress },
    { name: 'Database', icon: faDatabase },
    { name: 'PostgreSQL', icon: faPostgresql },
    { name: 'MongoDB', icon: faMdb },
    { name: 'Git', icon: faGit },
    
    
    /* { name: 'REST APIs', icon: faApi }, */
    

];
const Skills = () => {
    return (
        <section id="skills" data-bg-section="skills" className="flex  w-full items-center justify-center px-80">
            <div className="w-full max-w-6xl text-center  bg-black/60 backdrop-blur-sm  py-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">Skills</h2>
                <p className="mt-2 text-gray-400 text-base md:text-lg leading-relaxed">Here are some of my skills:</p>
                <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {SkillsData.map((skill, index) => (
                        <li key={index} className="flex h-28 w-full items-center justify-center">
                            <FontAwesomeIcon icon={skill.icon} className="text-5xl text-white" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;