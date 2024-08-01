import React from "react";
import googleIcon from '../assets/google_icon.png';

const companyArray: string[] = [
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
  "Meta Ads",
];

const Section5 = () => {
  return (
    <section className="flex bg-primary-0 w-full h-fit pt-10 pb-32 px-24 flex-col gap-16 justify-center items-center">
      <div className="w-3/4">
        <p className="font-semibold text-primary text-6xl text-center">
          Brands <span className="text-secondary">I have worked </span> with
        </p>
      </div>
      <div className="flex w-full justify-center gap-8">
        <div
          className="flex flex-grow items-center justify-center w-full h-44 px-8 py-12 rounded-br-[42px] border-[1.5px] border-[#2E2E2E]"
          style={{
            background:
              "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
          }}
        >
          <div className="flex flex-col gap-2">
            <p className="text-secondary text-center font-bold text-4xl">
              50.5%
            </p>
            <p className="text-primary font-semibold text-2xl">Metric 1</p>
          </div>
        </div>
        <div
          className="flex flex-grow items-center justify-center w-full h-44 px-8 py-12 rounded-br-[42px] border-[1.5px] border-[#2E2E2E]"
          style={{
            background:
              "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
          }}
        >
          <div className="flex flex-col gap-2">
            <p className="text-secondary text-center font-bold text-4xl">
              50.5%
            </p>
            <p className="text-primary font-semibold text-2xl">Metric 1</p>
          </div>
        </div>
        <div
          className="flex flex-grow items-center justify-center w-full h-44 px-8 py-12 rounded-br-[42px] border-[1.5px] border-[#2E2E2E]"
          style={{
            background:
              "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
          }}
        >
          <div className="flex flex-col gap-2">
            <p className="text-secondary text-center font-bold text-4xl">
              50.5%
            </p>
            <p className="text-primary font-semibold text-2xl">Metric 1</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 w-[1164px] space-y-2">
        {companyArray?.map((company, ind) => {
          return (
            <div
              key={ind}
              className="flex items-center justify-center gap-1 cursor-pointer"
            >
                <img src={googleIcon} alt="google" className="w-11 h-11"/>
                <p className="text-primary font-semibold text-3xl">{company}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section5;
