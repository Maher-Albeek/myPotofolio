const Contact = () => {
    return (
        <section id="contact" data-scroll-section data-bg-section="contact" data-reveal className="flex  w-full items-center justify-end">
            <div className=" w-full max-w-6xl text-center  bg-black/60 backdrop-blur-sm  py-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">Contact</h2><br />
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">Get in touch with me:</p>
                <ul className="text-gray-400 text-base md:text-lg leading-relaxed">
                    <li>Email: example@example.com</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/example">example</a></li>
                    <li>GitHub: <a href="https://github.com/example">example</a></li>
                </ul>
            </div>
            
            
        </section>
    );
};

export default Contact;