
const Services = () => {
  return (
    <section id="Services" data-bg-section="Services" className="flex  w-full items-center justify-center px-80">
    <div className=" w-full max-w-6xl text-center  bg-black/60 backdrop-blur-sm  py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">Services</h2><br />
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">I offer a range of services to help you achieve your goals:</p>
        <ul className="text-gray-400 text-base  md:flex  gap-8 items-center justify-center mt-auto">
            <li className="rounded-[30px] h-87.5 w-62.5 shadow-2xl/20 shadow-[#ff7b00] bg-[#212121] justify-center flex items-center">Web Development: Building responsive and modern websites.</li>
            <li className="rounded-[30px] h-87.5 w-62.5 shadow-2xl/20 shadow-[#ff7b00] bg-[#212121] justify-center flex items-center">UI/UX Design: Creating intuitive and engaging user interfaces.</li>
            <li className="rounded-[30px] h-87.5 w-62.5 shadow-2xl/20 shadow-[#ff7b00] bg-[#212121] justify-center flex items-center">SEO Optimization: Improving your website's visibility on search engines.</li>
        </ul>
    </div>
    </section>
  );
}
export default Services;  