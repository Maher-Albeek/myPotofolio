import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGit, faJava, faNodeJs, faPhp, faTailwindCss, faJs, faAngular, faReact, faPython, faHtml5, faWordpress, faBootstrap, faPostgresql, faMdb, faVuejs, faTypescript } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const SkillsData = [
    { name: 'JavaScript', icon: faJs },
    { name: 'Java', icon: faJava },
    { name: 'PHP', icon: faPhp },
    { name: 'Python', icon: faPython },
    { name: 'TypeScript', icon: faTypescript },
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'Tailwind CSS', icon: faTailwindCss },  
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'React', icon: faReact },
    { name: 'Vue', icon: faVuejs },
    { name: 'Angular', icon: faAngular },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'PostgreSQL', icon: faPostgresql },
    { name: 'MongoDB', icon: faMdb },
    { name: 'MySQL', icon: faDatabase },
    { name: 'Git', icon: faGit },
    { name: 'WordPress', icon: faWordpress },
    
    
    /* { name: 'REST APIs', icon: faApi }, */
    

];
const Skills = () => {
    return (
        <section id="skills" data-bg-section="skills" data-reveal className="flex  w-full items-center justify-end">
            <div className="w-full max-w-6xl text-center  bg-black/60 backdrop-blur-sm  py-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">Skills</h2>
                <p className="mt-2 text-gray-400 text-base md:text-lg leading-relaxed">Here are some of my skills:</p>
                <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {SkillsData.map((skill, index) => (
                        <li key={index} className=" h-28 w-full items-center justify-center">
                            <FontAwesomeIcon icon={skill.icon} className="text-5xl text-white" />
                            <h6 >{skill.name} </h6>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;