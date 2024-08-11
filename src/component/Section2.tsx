import React, { useState } from "react";
import iceBerg from "../assets/iceberg.mp4";
import Service from "./servicesItem/Service";
import "./styles.css";

const Section2 = () => {
  const [showServices, setShowServices] = useState(false);

  const handleVideoEnd = () => {
    setShowServices(true); // Show services after video ends
  };
  return (
    <section
      id="section2"
      className="flex bg-primary-0 py-10 md:py-28 w-[90%] mx-auto max-w-[1280px] items-center justify-center flex-col gap-10"
    >
      <div className="flex flex-col gap-4 text-center w-full md:w-3/4 px-4">
        <p className="font-bold text-2xl md:text-6xl text-primary">
          Tired of Agencies, <span className="text-secondary">Talking about ROAS while ROI Suffers?</span>
        </p>
        <p className="font-light text-sm md:text-3xl text-primary-500">
          My well{" "}
          <span className="font-extrabold text-primary">
            rounded perspective
          </span>{" "}
          on business metrics{" "}
          <span className="font-extrabold text-primary">achieve growth</span>{" "}
          beyond the Ads dashboard
        </p>
      </div>
      <div className="relative w-full">
        <video autoPlay muted className="w-full h-auto" onEnded={handleVideoEnd}>
          <source src={iceBerg} type="video/mp4" />
        </video>
        {showServices && (
          <>
            <div className="absolute top-[11%] lg:top-12 left-1/4 sm:left-1/3 animate-slide-in-from-left-1.5">
              <Service variant="primary" text="Avg CPC" />
            </div>
            <div className="absolute top-[19%] lg:top-24 left-1/4 sm:left-1/3 animate-slide-in-from-left-2">
              <Service variant="primary" text="CPL" />
            </div>
            <div className="absolute top-[27%] lg:top-36 left-1/4 sm:left-1/3 animate-slide-in-from-left-3.5">
              <Service variant="primary" text="ROAS" />
            </div>
            <div className="absolute top-[35%] lg:top-48 left-1/4 sm:left-1/3 animate-slide-in-from-left-6">
              <Service variant="primary" text="CTR" />
            </div>
            <div className="absolute top-[45%] lg:top-[276px] left-1/4 sm:left-1/3 animate-slide-in-from-left-8">
              <Service text="Content" variant="secondary" />
            </div>
            <div className="absolute top-[53%] lg:top-[324px] left-1/4 sm:left-1/3 animate-slide-in-from-left-9">
              <Service text="New Profit" variant="secondary" />
            </div>
            <div className="absolute top-[61%] lg:top-[372px] left-1/4 sm:left-1/3 animate-slide-in-from-left-10">
              <Service text="AOV" variant="secondary" />
            </div>
            <div className="absolute top-[69%] lg:top-[420px] left-1/4 sm:left-1/3 animate-slide-in-from-left-11">
              <Service text="CRO" variant="secondary" />
            </div>
            <div className="absolute top-[77%] lg:top-[468px] left-1/4 sm:left-1/3 animate-slide-in-from-left-12">
              <Service text="LTV" variant="secondary" />
            </div>
            <div className="absolute top-[85%] lg:top-[516px] left-1/4 sm:left-1/3 animate-slide-in-from-left-13">
              <Service text="COGS" variant="secondary" />
            </div>
            <div className="absolute top-[93%] lg:top-[564px] left-1/4 sm:left-1/3 animate-slide-in-from-left-14">
              <Service text="Cohort Analysis" variant="secondary" />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Section2;
