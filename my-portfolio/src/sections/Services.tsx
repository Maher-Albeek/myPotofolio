const Services = () => {
  return (
    
    <div className=" w-full min-h-screen  items-center justify-center bg-black/30  py-24" id="services" data-bg-section="services">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">Services</h2><br />
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">I offer a range of services to help you achieve your goals:</p>
        <ul className="text-gray-400 text-base  md:flex  gap-8 items-center justify-center mt-8">
            <li className="rounded-[30px] h-[350px] w-[250px] shadow-2xl/20 shadow-[#ff7b00] bg-[#212121] justify-center flex items-center">Web Development: Building responsive and modern websites.</li>
            <li className="rounded-[30px] h-[350px] w-[250px] shadow-2xl/20 shadow-[#ff7b00] bg-[#212121] justify-center flex items-center">UI/UX Design: Creating intuitive and engaging user interfaces.</li>
            <li className="rounded-[30px] h-[350px] w-[250px] shadow-2xl/20 shadow-[#ff7b00] bg-[#212121] justify-center flex items-center">SEO Optimization: Improving your website's visibility on search engines.</li>
            <li className="rounded-[30px] h-[350px] w-[250px] shadow-2xl/20 shadow-[#ff7b00] bg-[#212121] justify-center flex items-center">Content Creation: Crafting compelling content for your brand.</li>
        </ul>
    </div>
  );
}
export default Services;