import React, { useState } from "react";
import "./styles.css";

const serviceArray: string[] = [
  "Google Ads",
  "Bing Ads",
  "Youtube Ads",
  "Shopping Ads",
  "Display Ads",
  "Keyword Research",
  "Campaign Management",
  "Retargeting Campaigns",
  "Ads & Copy Optimization",
  "Bid Strategy",
  "Lead Generation",
  "Competitor Analysis",
  "Rapid Experimentation",
  "PPC reporting",
  "Audience Research",
  "PPC landing page optimizations",
  "Meta Ads",
];

const Section3 = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (activeCard !== index) {
      setActiveCard(index);
    }
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left; // X coordinate relative to the element
    const y = e.clientY - rect.top;  // Y coordinate relative to the element

    setBgPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <section
      id="section3"
      className="flex bg-primary-0 h-fit pt-10 md:pt-32 w-[90%] mx-auto max-w-[1280px] flex-col gap-5 md:gap-10 justify-center items-center"
    >
      <div className="flex flex-col w-full md:w-3/4 gap-4 px-4">
        <p className="font-semibold text-primary text-2xl md:text-6xl text-center">
          Our <span className="text-secondary">PPC & SEM </span> Tactics
        </p>
      </div>
      <div className="w-1/2 sm:w-1/6 h-0.5 bg-secondary"></div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {serviceArray?.map((service, ind) => {
          return (
            <div
              key={ind}
              className="flex items-center justify-center w-36 sm:w-72 h-16 sm:h-48 px-1 md:px-3 rounded-br-[30px] sm:rounded-br-[42px] border-[1.5px] border-[#2E2E2E] relative"
              style={{
                background:
                  "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
              }}
              onMouseMove={(e) => handleMouseMove(e, ind)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-primary font-semibold text-xs sm:text-2xl text-center">
                {service}
              </span>
              {activeCard === ind && (
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-100"
                  style={{
                    background: `radial-gradient(circle 160px at ${bgPosition.x}px ${bgPosition.y}px, rgba(160, 58, 255, 0.5), transparent 50%)`,
                  }}
                ></div>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full md:w-3/4 pt-12 pb-20 md:pb-48 sm:pb-96">
        <p className="font-black text-secondary text-2xl sm:text-6xl text-center">
          Tools <span className="font-light text-primary">which I use to </span>{" "}
          generate results
        </p>
      </div>
    </section>
  );
};

export default Section3;
