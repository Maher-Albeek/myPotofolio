
const Portfolio = () => {
    return (
        <section id="portfolio" data-bg-section="portfolio" className="w-full min-h-screen  items-center justify-center bg-black/30 px-6 py-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">Portfolio</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">Here are some of my projects:</p>
            <ul className="text-gray-400 text-base md:text-lg leading-relaxed">
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
                <li>Project 4</li>
            </ul>
        </section>
    );
};

export default Portfolio;