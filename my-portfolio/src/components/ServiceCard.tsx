import "./ServiceCard.css"
import { useEffect } from "react";
import type { CSSProperties } from "react";
const services = [
  { title: " Frontend Development", discreption: "Entwicklung moderner, performanter Benutzeroberflächen mit React, Next.js, TypeScript und Tailwind CSS."},
  { title: "Full-Stack Development", discreption: "Umsetzung kompletter Webprojekte – von der Datenbankstruktur bis zum fertigen Interface."},
  { title: "UI/UX Web Design", discreption: "GUmsetzung von UI/UX-Konzepten mit Fokus auf Benutzerfreundlichkeit, Responsiveness und sauberem Code."},
  { title: "REST API Integration", discreption: "Anbindung und Entwicklung von REST-APIs, Datenintegration und CRUD-Anwendungen mit MySQL."},
];

const seededRandom = (seed: number) => {
    const value = Math.sin(seed * 999.91) * 10000;
    return value - Math.floor(value);
};

const getMotionStyle = (index: number): CSSProperties => {
    const seed = index + 1;
    const blobDuration = (24 + seededRandom(seed + 0.71) * 10).toFixed(2);
    const blobScaleMin = (0.72 + seededRandom(seed + 0.44) * 0.18).toFixed(3);
    const blobOffset = Math.round((seededRandom(seed + 0.23) * 14) - 7);

    return {
        "--card-index": index,
        "--parallax-y": "0px",
        "--parallax-x": "0px",
        "--blob-duration": `${blobDuration}s`,
        "--blob-scale-min": blobScaleMin,
        "--blob-offset": `${blobOffset}px`,
    } as CSSProperties;
};


const ServiceCard = () => {
    useEffect(() => {
        const items = Array.from(
            document.querySelectorAll<HTMLLIElement>(".service-parallax-item")
        );

        if (!items.length) {
            return;
        }

        let rafPending = false;

        const updateParallax = () => {
            const viewportCenter = window.innerHeight / 2;

            items.forEach((item) => {
                if (!item.classList.contains("is-visible")) {
                    return;
                }

                const rect = item.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const distance = (cardCenter - viewportCenter) / window.innerHeight;

                const clampedDistance = Math.max(-0.8, Math.min(0.8, distance));
                const yOffset = -clampedDistance * 28;
                const direction = item.classList.contains("from-left") ? 1 : -1;
                const xOffset = -clampedDistance * 16 * direction;

                item.style.setProperty("--parallax-y", `${yOffset.toFixed(2)}px`);
                item.style.setProperty("--parallax-x", `${xOffset.toFixed(2)}px`);
            });

            rafPending = false;
        };

        const requestParallaxUpdate = () => {
            if (rafPending) {
                return;
            }

            rafPending = true;
            window.requestAnimationFrame(updateParallax);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        requestParallaxUpdate();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        items.forEach((item) => observer.observe(item));

        window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
        window.addEventListener("resize", requestParallaxUpdate);
        requestParallaxUpdate();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", requestParallaxUpdate);
            window.removeEventListener("resize", requestParallaxUpdate);
        };
    }, []);

    return ( 
        <>
        
            {services.map((service, index) => (
                 <li
                    key={index}
                    className={`service-parallax-item w-full items-center justify-center ${index < 2 ? "from-left" : "from-right"}`}
                    style={getMotionStyle(index)}
                >
                    <div className="service-solid-container">
                        <div className="service-solid-card">
                            <p className="service-solid-title">{service.title}</p>
                            <p className="service-solid-accent">Web Solution</p>
                            <p className="service-solid-desc">{service.discreption}</p>
                        </div>
                    </div>
                </li>
            ))}
        </>
    );
};
    
export default ServiceCard;