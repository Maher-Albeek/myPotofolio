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

    const x1 = Math.round((seededRandom(seed + 0.11) * 44) - 34);
    const y1 = Math.round((seededRandom(seed + 0.21) * 44) - 30);
    const x2 = Math.round((seededRandom(seed + 0.31) * 50) - 40);
    const y2 = Math.round((seededRandom(seed + 0.41) * 50) - 22);
    const x3 = Math.round((seededRandom(seed + 0.51) * 42) - 18);
    const y3 = Math.round((seededRandom(seed + 0.61) * 52) - 24);

    const duration = (4.3 + seededRandom(seed + 0.71) * 2.6).toFixed(2);
    const delay = (-seededRandom(seed + 0.81) * 3.5).toFixed(2);
    const cursorScale = (0.78 + seededRandom(seed + 0.91) * 0.44).toFixed(3);

    return {
        "--card-index": index,
        "--parallax-y": "0px",
        "--parallax-x": "0px",
        "--cursor-x": "0px",
        "--cursor-y": "0px",
        "--cursor-scale": cursorScale,
        "--tilt-x": "0deg",
        "--tilt-y": "0deg",
        "--orb-x1": `${x1}px`,
        "--orb-y1": `${y1}px`,
        "--orb-x2": `${x2}px`,
        "--orb-y2": `${y2}px`,
        "--orb-x3": `${x3}px`,
        "--orb-y3": `${y3}px`,
        "--orb-duration": `${duration}s`,
        "--orb-delay": `${delay}s`,
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
        let cursorNormX = 0;
        let cursorNormY = 0;
        let pointerX = window.innerWidth / 2;
        let pointerY = window.innerHeight / 2;
        let hasPointer = false;

        const updateParallax = () => {
            const viewportCenter = window.innerHeight / 2;
            const cursorMaxX = 14;
            const cursorMaxY = 10;
            const maxTiltX = 8;
            const maxTiltY = 10;

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
                const rawScale = Number.parseFloat(item.style.getPropertyValue("--cursor-scale"));
                const cursorScale = Number.isFinite(rawScale) ? rawScale : 1;
                const cursorX = cursorNormX * cursorMaxX * cursorScale;
                const cursorY = cursorNormY * cursorMaxY * cursorScale;

                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const normalizedTiltX = hasPointer
                    ? Math.max(-1, Math.min(1, (pointerX - centerX) / (rect.width / 2 || 1)))
                    : 0;
                const normalizedTiltY = hasPointer
                    ? Math.max(-1, Math.min(1, (pointerY - centerY) / (rect.height / 2 || 1)))
                    : 0;
                const tiltY = normalizedTiltX * maxTiltY * cursorScale;
                const tiltX = -normalizedTiltY * maxTiltX * cursorScale;

                item.style.setProperty("--parallax-y", `${yOffset.toFixed(2)}px`);
                item.style.setProperty("--parallax-x", `${xOffset.toFixed(2)}px`);
                item.style.setProperty("--cursor-x", `${cursorX.toFixed(2)}px`);
                item.style.setProperty("--cursor-y", `${cursorY.toFixed(2)}px`);
                item.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
                item.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
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

        const handlePointerMove = (event: PointerEvent) => {
            hasPointer = true;
            pointerX = event.clientX;
            pointerY = event.clientY;
            const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
            const normalizedY = (event.clientY / window.innerHeight) * 2 - 1;

            cursorNormX = Math.max(-1, Math.min(1, normalizedX));
            cursorNormY = Math.max(-1, Math.min(1, normalizedY));
            requestParallaxUpdate();
        };

        const resetPointerInfluence = () => {
            hasPointer = false;
            cursorNormX = 0;
            cursorNormY = 0;
            requestParallaxUpdate();
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
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        window.addEventListener("pointerleave", resetPointerInfluence);
        requestParallaxUpdate();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", requestParallaxUpdate);
            window.removeEventListener("resize", requestParallaxUpdate);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerleave", resetPointerInfluence);
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
                    <div className="container tilted-card-figure">
                        <div className="box tilted-card-inner">
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