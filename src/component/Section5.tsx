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
import { PopupModal } from "react-calendly";

const companyArray: any[] = [
  {
    id: 1,
    name: "Millet Amma",
    hoverText: true,
    logoUrl: icon1,
    "Revenue Generated": "50L+",
    ROAS: "5X",
    "Customer Returning Rate": "30%",
  },
  {
    id: 2,
    name: "Prime Book",
    hoverText: true,
    logoUrl: icon2,
    "Revenue Generated": "3Cr+",
    ROAS: "10X",
    "CAC Reduction": "25%",
  },
  {
    id: 3,
    name: "Learnyst ",
    logoUrl: icon3,
    "Revenue Generated": "1.5 Cr",
    "CAC Reduced": "35%",
    "SQLs Generated": "1000+",
  },
  {
    id: 4,
    name: "Fixhealth",
    logoUrl: icon4,
    "Appointments Booked": "2000+",
    "CAC Reduced": "30%",
    "Treatments Started ": "100+",
  },
  {
    id: 5,
    name: "TranZact",
    logoUrl: icon5,
    "Qualfied Leads Generated": "2000+",
    "CAC Reduced": "20%",
    "Customers Acquired": "200+",
  },
  {
    id: 6,
    name: "Tetr College of Business By Master's Union",
    logoUrl: icon6,
    "Qualified Leads": "500+",
    "MQLs Generated": "20000+",
    "SQLs Generated": "4000+",
  },
  {
    id: 7,
    name: "Shoonya",
    logoUrl: icon8,
    "Demat Accounts Opened": "2 L+",
    "CAC Reduced": "80%",
    "Prospects Reached": "55M+",
  },
  {
    id: 8,
    name: "Indian Sweet Master",
    logoUrl: icon10,
    "Walk-ins Achieved": "40000+",
    "Revenue generated": "$10M+",
    "Increase Online Order Sales": "45%",
  },
  {
    id: 9,
    name: "Cubelelo",
    logoUrl: icon11,
    "Revenue Generated": "3.5 Cr+",
    "CAC Reduced": "30%",
    "AOV Increased": "30%",
  },
  {
    id: 10,
    name: "Northeastern University",
    logoUrl: icon12,
    "Leads Increased": "44%",
    "CAC Reduced": "28%",
    "MQLs Generated": "4400+",
  },
  // {
  //   id: 11,
  //   name: "Mehfill Indian Cuisize",
  //   logoUrl: icon13,
  //   "Walk-ins Achieved": "40000+",
  //   "Revenue generated": "$3M+",
  //   "Increase Online Order Sales": "55%",
  // },
  {
    id: 12,
    name: "Artwork Flo",
    logoUrl: icon14,
    "Qualified Enterprise Leads": "600+",
    "MQLs Generated": "7000+",
    "SQLs Generated": "2000+",
  },
  {
    id: 13,
    name: "Evelta",
    logoUrl: icon15,
    "Revenue Generated": "3 Cr+",
    "CAC Reduced": "35%",
    "B2B Orders": "300+",
  },
];

const Section5 = () => {
  const [currentCompany, setCurrentCompany] = useState<any>(companyArray[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredIcon, setHoveredIcon] = useState<number>(0);

  return (
    <div id="section5" className="flex flex-col items-center justify-center gap-5">
      <div
        className="flex w-fit text-primary cursor-pointer sm:w-80 h-fit sm:h-16 bg-secondary rounded-full py-2 sm:py-4 px-8 font-semibold text-sm sm:text-3xl justify-center items-center mt-10 transition-transform duration-300 transform hover:scale-110 hover:shadow-secondary hover:shadow-2xl"
        onClick={() => setIsOpen(true)}
      >
        Get in touch
      </div>
      <PopupModal
        url="https://calendly.com/anurag-kanboina"
        // pageSettings={this.props.pageSettings}
        // utm={this.props.utm}
        // prefill={this.props.prefill}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root") as HTMLElement}
      />
      <section
        className="flex bg-primary-0 h-fit pt-10 pb-10 md:pb-32 w-[90%] mx-auto max-w-[1280px] flex-col gap-6 md:gap-16 justify-center items-center"
      >
        <div className="w-full sm:w-3/4">
          <p className="font-semibold text-primary text-2xl md:text-6xl text-center">
            Brands <span className="text-secondary">I have worked </span> with
          </p>
        </div>
        <div className="flex w-full justify-center gap-2 md:gap-8">
          {Object.keys(currentCompany)
            ?.filter((key) => key !== "name" && key !== "logoUrl" && key !=='id' && key !== 'hoverText')
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
                    <p className="text-secondary font-bold text-xs md:text-5xl [text-shadow:_0_3px_0_rgb(160_58_255_/_40%)]">
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
                className="flex flex-col items-center justify-center cursor-pointer w-24 md:w-60 md:h-40"
                onMouseOver={() => {
                  setCurrentCompany(company);
                }}
              >
                <img
                  src={
                    company.logoUrl.length > 0 ? company.logoUrl : googleIcon
                  }
                  alt="company"
                  className={`w-full ${company.id === 13 || company.id === 10 ? "md:w-40":"md:w-60"} md:max-h-40`}
                  onMouseEnter={()=> setHoveredIcon(company.id)}
                  onMouseLeave={()=> setHoveredIcon(0)}
                />
                {hoveredIcon === company.id &&  company?.hoverText && (
                  <p className="text-primary font-bold">Appeared In <span className="text-secondary">Shark Tank India</span></p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Section5;
