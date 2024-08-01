import React from "react";
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
  "PPC landing page oprimizations",
  "Meta Ads",
];

const Section3 = () => {
  return (
    <section className="flex bg-primary-0  h-fit pt-32 pb-60 w-[90%] mx-auto max-w-[1280px] flex-col gap-10 justify-center items-center">
      <div className="flex flex-col w-3/4 gap-4">
        <p className="font-semibold text-primary text-6xl text-center">
          Our <span className="text-secondary">PPC & SEM </span> Tactics
        </p>
        <p className="font-light text-primary text-3xl text-center">
          My well{" "}
          <span className="font-extrabold text-primary">
            rounded perspective
          </span>{" "}
          on business metrics to{" "}
          <span className="font-extrabold text-primary">achieves growth </span>
          beyond the Ads dashboard
        </p>
      </div>
      <div className="w-1/6 h-0.5 bg-secondary"></div>
      <div className="flex flex-wrap justify-center gap-6">
        {serviceArray?.map((service, ind) => {
          return (
            <div
              key={ind}
              className="flex items-center justify-center w-72 h-48 px-3 rounded-br-[42px] border-[1.5px] border-[#2E2E2E] relative"
              style={{
                background:
                  "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
              }}
            >
              <span className="text-primary font-semibold text-2xl">
                {service}
              </span>
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle 160px at 72px 72px, rgba(160, 58, 255, 0.5), transparent 50%)",
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="w-3/4 pt-12 pb-96">
        <p className="font-black text-secondary text-6xl text-center">
          Tools <span className="font-light text-primary">which I use to </span>{" "}
          generate results
        </p>
      </div>

      <div className="flex w-full h-full relative">
        <div className="relative w-full overflow-hidden h-[100px] transform -rotate-6 bg-[#1D1F21]">
          <div className="flex h-full items-center absolute w-full animate-slide">
            {Array(20)
              .fill(1)
              .map((a, i) => {
                return (
                  <div
                    key={i}
                    className="text-primary text-2xl font-black px-10"
                  >
                    Hello {i % 10}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="absolute bottom-4 w-full h-full">
          <div className="relative w-full overflow-hidden h-[100px] transform rotate-6 bg-secondary">
            <div className="flex h-full items-center absolute w-full animate-slide">
              {Array(20)
                .fill(1)
                .map((a, i) => {
                  return (
                    <div
                      key={i}
                      className="text-primary text-2xl font-black px-10"
                    >
                      Hello {i % 10}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
