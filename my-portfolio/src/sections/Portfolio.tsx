
const Portfolio = () => {
    return (
        <section id="portfolio" data-scroll-section data-bg-section="portfolio" data-reveal className="flex  w-full items-center justify-end">
            <div className=" w-full max-w-6xl text-center  bg-black/60 backdrop-blur-sm  py-16">

                <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">Portfolio</h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">Here are some of my projects:</p>
                <ul className="text-gray-400 text-base md:text-lg leading-relaxed">
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                    <li>Project 4</li>
                </ul>
            </div>
        </section>
    );
};

export default Portfolio;