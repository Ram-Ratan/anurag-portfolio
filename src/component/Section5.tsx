import React, { useState } from "react";
import googleIcon from "../assets/google_icon.png";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import icon5 from "../assets/icon-5.png";
import icon6 from "../assets/icon-6.png";
import icon7 from "../assets/icon-7.png";
import icon8 from "../assets/icon-8.png";
import icon9 from "../assets/icon-9.png";
import icon10 from "../assets/icon-10.png";
import icon11 from "../assets/icon-11.png";
import icon12 from "../assets/icon-12.png";
import icon13 from "../assets/icon-13.png";
import icon14 from "../assets/icon-14.png";
import icon15 from "../assets/icon-15.png";

const companyArray: any[] = [
  {
    name: "Millet Amma (Shark tank)",
    logoUrl: icon1,
    "Revenue Generated": "50L+",
    ROAS: "5X",
    "Customer Returning Rate": "30%",
  },
  {
    name: "Primebook  (Shark tank)",
    logoUrl: icon2,
    "Revenue Generated": "3Cr+",
    ROAS: "10X",
    "CAC Reduction": "25%",
  },
  {
    name: "Learnyst ",
    logoUrl: icon3,
    "Revenue Generated": "1.5 Cr",
    "CAC Reduced": "35%",
    "SQLs Generated": "1000+",
  },
  {
    name: "Fixhealth",
    logoUrl: icon4,
    "Appointments Booked": "2000+",
    "CAC Reduced": "30%",
    "Treatment Started ": "100+",
  },
  {
    name: "TranZact",
    logoUrl: icon5,
    "Qualfied Leads Generated": "2000+",
    "CAC Reduced": "20%",
    "Customers Acquired": "200+",
  },
  {
    name: "Tetr College of Business By Master's Union",
    logoUrl: icon6,
    "Qualified Leads": "500+",
    "MQLs Generated": "20000+",
    "SQLs Generated": "4000+",
  },
  {
    name: "Shoonya",
    logoUrl: icon8,
    "Demat Accounts Opened": "2 L+",
    "CAC Reduced": "80%",
    "Prospects Reached": "55M+",
  },
  {
    name: "Indian Sweet Master",
    logoUrl: icon10,
    "Walk-ins Achieved": "40000+",
    "Revenue generated": "$10M+",
    "Increase Online Order Sales": "45%",
  },
  {
    name: "Cubelelo",
    logoUrl: icon11,
    "Revenue Generated": "3.5 Cr+",
    "CAC Reduced": "30%",
    "AOV Increased": "30%",
  },
  {
    name: "Northeastern University",
    logoUrl: icon12,
    "Leads Increased": "44%",
    "CAC Reduced": "28%",
    "MQLs Generated": "4400+",
  },
  {
    name: "Mehfill Indian Cuisize",
    logoUrl: icon13,
    "Walk-ins Achieved": "40000+",
    "Revenue generated": "$3M+",
    "Increase Online Order Sales": "55%",
  },
  {
    name: "Evelta",
    logoUrl: icon14,
    "Revenue Generated": "3 Cr+",
    "CAC Reduced": "35%",
    "B2B Orders": "300+",
  },
  {
    name: "Artwork Flo",
    logoUrl: icon15,
    "Qualified Enterprise Leads": "600+",
    "MQLs Generated": "7000+",
    "SQLs Generated": "2000+",
  },
];

const Section5 = () => {
  const [currentCompany, setCurrentCompany] = useState<any>(companyArray[0]);

  return (
    <section
      id="section5"
      className="flex bg-primary-0 h-fit pt-10 pb-10 md:pb-32 w-[90%] mx-auto max-w-[1280px] flex-col gap-6 md:gap-16 justify-center items-center"
    >
      <div className="w-full sm:w-3/4">
        <p className="font-semibold text-primary text-2xl md:text-6xl text-center">
          Brands <span className="text-secondary">I have worked </span> with
        </p>
      </div>
      <div className="flex w-full justify-center gap-2 md:gap-8">
        {Object.keys(currentCompany)
          ?.filter((key) => key !== "name" && key !== "logoUrl")
          ?.slice(0, 3)
          ?.map((key, index) => {
            return (
              <div
                key={index}
                className="flex flex-grow items-center justify-center w-1/4 md:w-full h-20 md:h-44 px-4 sm:px-8 py-6 sm:py-12 rounded-br-3xl md:rounded-br-[42px] border-[1.5px] border-[#2E2E2E]"
                style={{
                  background:
                    "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
                }}
              >
                <div className="flex flex-col gap-0.5 md:gap-2 text-center">
                  <p className="text-secondary font-bold text-xs md:text-4xl">
                    {currentCompany?.[key]}
                  </p>
                  <p className="text-primary font-semibold text-[8px] md:text-2xl">
                    {key}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-10 w-full md:max-w-[1164px]">
        {companyArray?.map((company, ind) => {
          return (
            <div
              key={ind}
              className="flex items-center justify-center gap-1 cursor-pointer w-24 md:w-40"
              onMouseOver={() => {
                setCurrentCompany(company);
              }}
            >
              <img
                src={company.logoUrl.length > 0 ? company.logoUrl : googleIcon}
                alt="company"
                className="w-full"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section5;
