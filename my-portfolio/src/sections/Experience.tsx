import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./Timeline.css";

import Shuffle from "../components/Shuffle";



const experiences = [

  {
    period: "May.2024 - Nov.2024",
    title: "Praktikum",
    company: "Abakus Projektmanagement GmbH, Herne",
    description: "Softwareentwicklung (Web / API)"
  },
  {
    period: "Apr.2019 – Oct.2024",
    title: "Fotograf",
    company: "Studio Photogramm, Gelsenkirchen",
    description: "Fotografie, Bildbearbeitung, Kundenbetreuung"
  },
  {
    period: "Oct.2018 - Feb.2019",
    title: "Lager",
    company: "Verschiedne Logstik Diesntleister, Gelsenkirchen",
    description: "Wareneingang, Kommissionierung, Versandvorbereitung"
  },
  {
    period: "May.2013 – Aug.2015",
    title: "Fotograf",
    company: "Selbstständig: Fotostudio, Istanbul",
    description: "Fotografie, Bildbearbeitung, Kundenbetreuung"
  },
  {
    period: "Mar.2012 – Aug.2015",
    title: "Schneiderei",
    company: "Damen Bekleidung, Istanbul",
    description: "Schneiderei, Kundenbetreuung"
  },

];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const activeExperience = experiences[activeIndex];
  const shuffleDirection = slideDirection === "next" ? "right" : "left";

  const goToPrevious = () => {
    setSlideDirection("prev");
    setActiveIndex((current) =>
      current === 0 ? experiences.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setSlideDirection("next");
    setActiveIndex((current) =>
      current === experiences.length - 1 ? 0 : current + 1,
    );
  };

  const getYearLabel = (period: string) => {
    const yearMatch = period.match(/\b(19|20)\d{2}\b/g);
    return yearMatch ? yearMatch[yearMatch.length - 1] : period;
  };

  return (
    <div >
      <div data-reveal>
        <div className="timeline-slider__viewport info-card">

          <button
            type="button"
            className="timeline-slider__arrow timeline-slider__arrow--prev"
            onClick={goToPrevious}
            aria-label="Show previous experience"
          >
            <FaChevronUp aria-hidden="true" focusable="false" />
          </button>

        

          <button
            type="button"
            className="timeline-slider__arrow timeline-slider__arrow--next"
            onClick={goToNext}
            aria-label="Show next experience"
          >
            <FaChevronDown aria-hidden="true" focusable="false" />
          </button>

          <div className="timeline-slider__pagination " aria-label="Experience years">
            {experiences.map((experience, index) => {
              const year = getYearLabel(experience.period);

              return (
                <button
                  key={`${experience.period}-${experience.title}`}
                  type="button"
                  className={`timeline-slider__bullet${index === activeIndex ? " is-active" : ""}`}
                  onClick={() => {
                    setSlideDirection(index >= activeIndex ? "next" : "prev");
                    setActiveIndex(index);
                  }}
                  aria-label={`Show experience from ${year}`}
                  aria-pressed={index === activeIndex}
                >
                  {year}
                </button>
              );
            })}
          </div>
          
            <article
              key={`${activeIndex}-${slideDirection}`}
              className={`timeline-slider__slide text-left is-${slideDirection}`}
            >
            <div className="timeline-slider__content  ">
              <Shuffle
                key={`year-${activeIndex}-${slideDirection}`}
                text={getYearLabel(activeExperience.period)}
                tag="span"
                className="timeline-year "
                textAlign="end"
                shuffleDirection={shuffleDirection}
                duration={0.55}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power2.inOut"
                stagger={0.02}
                threshold={0}
                rootMargin="0px"
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
              />
              <Shuffle
                key={`period-${activeIndex}-${slideDirection}`}
                text={activeExperience.period}
                tag="span"
                className="info-card__eyebrow  "
                textAlign="end"
                shuffleDirection={shuffleDirection}
                duration={0.42}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power2.inOut"
                stagger={0.012}
                threshold={0}
                rootMargin="0px"
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
              />
              <br />
              <Shuffle
                key={`title-${activeIndex}-${slideDirection}`}
                text={activeExperience.title}
                tag="h3"
                className="timeline-title mt-3 mb-3 text-3xl md:text-5xl font-semibold text-white"
                shuffleDirection={shuffleDirection}
                duration={0.6}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power2.inOut"
                stagger={0.02}
                threshold={0}
                rootMargin="0px"
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
              />
              <Shuffle
                key={`company-${activeIndex}-${slideDirection}`}
                text={activeExperience.company}
                tag="p"
                className="timeline-subtitle mt-6 text-sm tracking-[0.18em] text-white/60"
                shuffleDirection={shuffleDirection}
                duration={0.5}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power2.inOut"
                stagger={0.015}
                threshold={0}
                rootMargin="0px"
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
              />
              <br />
              <Shuffle
                key={`description-${activeIndex}-${slideDirection}`}
                text={activeExperience.description}
                tag="span"                
                className="timeline-text mt-3 text-sm text-white/80"
                shuffleDirection={shuffleDirection}
                duration={0.52}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power2.inOut"
                stagger={0.014}
                threshold={0}
                rootMargin="0px"
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
              />
                
            </div>
          </article>
          
        </div>
       
      </div>
      
    </div> 
    
  );
};

export default Experience;
