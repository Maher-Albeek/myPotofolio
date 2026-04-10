const Contact = () => {
    return (
        <section id="contact" data-bg-section="contact" className="w-full min-h-screen  items-center justify-center bg-black/30 px-6 py-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">Contact</h2><br />
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">Get in touch with me:</p>
            <ul className="text-gray-400 text-base md:text-lg leading-relaxed">
                <li>Email: example@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/example">example</a></li>
                <li>GitHub: <a href="https://github.com/example">example</a></li>
            </ul>
            <div className="scroll-container scroll-y">
                <div className="scroll-content grid square-grid">
                    <div className="scroll-section padded">
                    <div className="large centered row">
                        <div className="label">scroll down</div>
                    </div>
                    </div>
                    <div className="scroll-section padded">
                    <div className="large row">
                        <div className="square"></div>
                    </div>
                    </div>
                    <div className="scroll-section">
                    </div>
                </div>
                </div>
        </section>
    );
};

export default Contact;