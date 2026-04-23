import ServiceCards from "../components/ServiceCard";
import "./Services.css";

const Services = () => {
  return (
    < >
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="relative z-10">
         <br />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">I offer a range of services to help you achieve your goals:</p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-max md:ml-auto">
            <ServiceCards />
          </ul>
        </div>
    </>
     
  );
}
export default Services;  