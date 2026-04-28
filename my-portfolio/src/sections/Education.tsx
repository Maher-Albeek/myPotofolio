import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./Timeline.css";

import Shuffle from "../components/Shuffle";



const education = [

  {
    period: "Feb.2023 – Nov.2025",
    title: `IT-Anwendungs-
            entwickler`,
    company: "Damago GmbH, Essen",
    description: "Umschulung "
  },
  {
    period: "Jan.2021 – Apr.2022 ",
    title: "B2-Telc",
    company: "VHS, Gelsenkirchen",
    description: "deutsche Sprache"
  },
  {
    period: "Jul.2017 – Apr.2018 ",
    title: "Mechatronik",
    company: "Universität BTU, Cottbus",
    description: "Vorbereitungskurs für Ingenieurwissenschaften"
  },
  {
    period: "Jun.2016 – Mar.2017",
    title: "B1-Telc",
    company: " SBH, Cottbus",
    description: "deutsche Sprache"
  },
  {
    period: "Oct.2011 – Aug.2012",
    title: "Elektrotechnik",
    company: " Universität Aleppo (Syrien)",
    description: "Bachelorstudium (nicht abgeschlossen)"
  },
  {
    period: "Sep.2007 – May.2011",
    title: "Elektrotechnik",
    company: " | Al-Hasakeh (Syrien)",
    description: "Fachabitur "
  },

];

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const activeEducation = education[activeIndex];
  const shuffleDirection = slideDirection === "next" ? "right" : "left";

  const goToPrevious = () => {
    setSlideDirection("prev");
    setActiveIndex((current) =>
      current === 0 ? education.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setSlideDirection("next");
    setActiveIndex((current) =>
      current === education.length - 1 ? 0 : current + 1,
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
            aria-label="Show previous education"
          >
            <FaChevronUp aria-hidden="true" focusable="false" />
          </button>

        

          <button
            type="button"
            className="timeline-slider__arrow timeline-slider__arrow--next"
            onClick={goToNext}
            aria-label="Show next education"
          >
            <FaChevronDown aria-hidden="true" focusable="false" />
          </button>

          <div className="timeline-slider__pagination " aria-label="Education years">
            {education.map((edu, index) => {
              const year = getYearLabel(edu.period);

              return (
                <button
                  key={`${edu.period}-${edu.title}`}
                  type="button"
                  className={`timeline-slider__bullet${index === activeIndex ? " is-active" : ""}`}
                  onClick={() => {
                    setSlideDirection(index >= activeIndex ? "next" : "prev");
                    setActiveIndex(index);
                  }}
                  aria-label={`Show education from ${year}`}
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
                text={getYearLabel(activeEducation.period)}
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
                text={activeEducation.period}
                tag="span"
                className="info-card__eyebrow "
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
                text={activeEducation.title}
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
              <br />
              <Shuffle
                key={`company-${activeIndex}-${slideDirection}`}
                text={activeEducation.company}
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
                text={activeEducation.description}
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

export default Education;
