import ServiceCards from "../components/ServiceCard";

const Services = () => {
  return (
    < >
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest">Services</h2><br />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">I offer a range of services to help you achieve your goals:</p>
          <ul className=" mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <ServiceCards />
          </ul>
        </div>
    </>
     
  );
}
export default Services;  