import "./ProjectCard.css"
const services = [
  { title: " Frontend Development", discreption: "Building responsive and modern websites."},
  { title: "Backend Development", discreption: "Building robust and scalable server-side applications."},
  { title: "UI/UX Design", discreption: "Designing user-friendly interfaces and experiences."},
  { title: "REST API Integration", discreption: "Integrating RESTful APIs for seamless data exchange."},
];


const ProjectCard = () => {
    return ( 
        <>
        
            {services.map((service, index) => (
                 <li key={index} className=" h-28 w-full items-center justify-center">
                    <div className="container">
                        <div className="box">                     
                            <span className="title">{service.title}</span>
                            <div>
                                <span>{service.discreption}</span> 
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </>
    );
};
    
export default ProjectCard;