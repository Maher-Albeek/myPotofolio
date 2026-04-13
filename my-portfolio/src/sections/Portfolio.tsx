import Cards from '../components/ProjectCard';

const projects = [
    {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.',
        previewLink: '#',
        codeLink: '#'
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.',
        previewLink: '#',
        codeLink: '#'
    },
    {
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.',
        previewLink: '#',
        codeLink: '#'
    },
    {
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.',
        previewLink: '#',
        codeLink: '#'
    }
];


const Portfolio = () => {
    return (
        <>
            <div>

                <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">Portfolio</h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">Here are some of my projects:</p>
                <ul className="flex flex-col-reverse md:flex-row gap-10 mt-10">

                    {projects.map((project, index) => (
                        <Cards key={index} {...project} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Portfolio;