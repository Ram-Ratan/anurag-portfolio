import React from "react";
import iceBerg from "../assets/iceberg.mp4";
import Service from "./servicesItem/Service";
import './styles.css';
const Section2 = () => {
  return (
    <section className="flex bg-primary-0 h-fit py-28 w-[90%] mx-auto max-w-[1280px] bg-bg-image-1 bg-cover items-center justify-center flex-col gap-10">
      <div className="flex flex-col gap-4 text-center w-3/4">
        <p className="font-bold text-6xl text-primary">
          Tired of <span className="text-secondary">Agencies on D</span>
        </p>
        <p className="font-light text-3xl text-primary-500">
          My well{" "}
          <span className="font-extrabold text-primary">
            rounded perspective
          </span>{" "}
          on business metrics to{" "}
          <span className="font-extrabold text-primary">achieves growth</span>{" "}
          beyond the Ads dashboard
        </p>
      </div>
      <div className="relative w-full">
        <video autoPlay muted className="w-full">
          <source src={iceBerg} type="video/mp4" />
        </video>
        <div className="absolute top-12 left-1/3 animate-slide-in-from-left-1.5">
          <Service variant="primary" text="Avg CPC"/>
        </div>
        <div className="absolute top-24 left-1/3 animate-slide-in-from-left-2">
          <Service variant="primary" text="CPL"/>
        </div>
        <div className="absolute top-36 left-1/3 animate-slide-in-from-left-3.5">
          <Service variant="primary" text="ROAS"/>
        </div>
        <div className="absolute top-48 left-1/3 animate-slide-in-from-left-6">
          <Service variant="primary" text="CTR"/>
        </div>



        <div className="absolute top-[276px] left-1/3 animate-slide-in-from-left-8">
          <Service text="Content" variant="secondary"/>
        </div>
        <div className="absolute top-[324px] left-1/3 animate-slide-in-from-left-9">
          <Service text="New Profit" variant="secondary"/>
        </div>
        <div className="absolute top-[372px] left-1/3 animate-slide-in-from-left-10">
          <Service text="AOV" variant="secondary"/>
        </div>
        <div className="absolute top-[420px] left-1/3 animate-slide-in-from-left-11">
          <Service text="CRO" variant="secondary"/>
        </div>
        <div className="absolute top-[468px] left-1/3 animate-slide-in-from-left-12">
          <Service text="LTV" variant="secondary"/>
        </div>
        <div className="absolute top-[516px] left-1/3 animate-slide-in-from-left-13">
          <Service text="COGS" variant="secondary"/>
        </div>
        <div className="absolute top-[564px] left-1/3 animate-slide-in-from-left-14">
          <Service text="Cohort Analysis" variant="secondary"/>
        </div>
        
        
      </div>
    </section>
  );
};

export default Section2;
