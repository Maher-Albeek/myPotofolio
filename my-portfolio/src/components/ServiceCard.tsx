import type { IconType } from "react-icons";
import { FaCode, FaLayerGroup, FaPaintBrush, FaPlug } from "react-icons/fa";

type ServiceItem = {
    id: number;
    title: string;
    description: string;
    icon: IconType;
    BgColor?: string;
    hoverBgColor?: string;
};

const services: ServiceItem[] = [
    {
        id: 1,
        title: "Frontend Development",
        description:
            "Entwicklung moderner, performanter Benutzeroberflächen mit React, Next.js, TypeScript und Tailwind CSS.",
        icon: FaCode,
        BgColor: "bg-orange-600/60",
        hoverBgColor: "bg-orange-500/70",
    },
    {
        id: 2,
        title: "Full-Stack Development",
        description:
            "Umsetzung kompletter Webprojekte - von der Datenbankstruktur bis zum fertigen Interface.",
        icon: FaLayerGroup,
        BgColor: "bg-white/10",
        hoverBgColor: "bg-white/15",
    },
    {
        id: 3,
        title: "UI/UX Web Design",
        description:
            "Umsetzung von UI/UX-Konzepten mit Fokus auf Benutzerfreundlichkeit, Responsiveness und sauberem Code.",
        icon: FaPaintBrush,
        BgColor: "bg-white/10",
        hoverBgColor: "bg-white/15",
    },
    {
        id: 4,
        title: "REST API Integration",
        description:
            "Anbindung und Entwicklung von REST-APIs, Datenintegration und CRUD-Anwendungen mit MySQL.",
        icon: FaPlug,
        BgColor: "bg-white/10",
        hoverBgColor: "bg-white/15",
    },
];

const ServiceCard = () => {
    return (
        <>
            {services.map((service) => {
                const Icon = service.icon;

                return (
                    <div
                        key={service.id}
                        className={`service-card w-full rounded-2xl md:w-75 md:h-75 h-full cursor-pointer py-8 px-6 ${service.BgColor} backdrop-blur-lg border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col items-start gap-3 transition-all duration-300 group ${service.hoverBgColor ? `hover:${service.hoverBgColor}` : "hover:bg-white/15"} hover:border-white/35`}
                    >
                        <Icon className="text-5xl h-12 w-12 text-white/85 group-hover:text-white" />

                        <p className="font-bold text-2xl text-white/90 group-hover:text-white">
                            {service.title}
                        </p>
                        <p className="text-white/70 text-sm">{service.description}</p>
                        
                    </div>
                );
            })}
        </>
    );
};

export default ServiceCard;