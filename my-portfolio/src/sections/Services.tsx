import Cards from "../components/ProjectCard";

const Services = () => {
  return (
    <section id="services" data-bg-section="services" data-reveal className="flex w-full items-center justify-end ">
    <div className="w-full max-w-6xl md:ml-auto text-center bg-black/60 backdrop-blur-sm py-16">
    <div className="absolute inset-0 bg-black/30" />
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">Services</h2><br />
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">I offer a range of services to help you achieve your goals:</p>
        <ul className=" mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <Cards />
        </ul>
    </div>
    
    </section>
  );
}
export default Services;  