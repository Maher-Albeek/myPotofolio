import "./ServiceCard.css"
const services = [
  { title: " Frontend Development", discreption: "Entwicklung moderner, performanter Benutzeroberflächen mit React, Next.js, TypeScript und Tailwind CSS."},
  { title: "Full-Stack Development", discreption: "Umsetzung kompletter Webprojekte – von der Datenbankstruktur bis zum fertigen Interface."},
  { title: "UI/UX Web Design", discreption: "GUmsetzung von UI/UX-Konzepten mit Fokus auf Benutzerfreundlichkeit, Responsiveness und sauberem Code."},
  { title: "REST API Integration", discreption: "Anbindung und Entwicklung von REST-APIs, Datenintegration und CRUD-Anwendungen mit MySQL."},
];


const ServiceCard = () => {
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
    
export default ServiceCard;