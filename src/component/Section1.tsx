import React from 'react';
import anuragImage from "../assets/anurag.jfif";

const Section1 = () => {
  return (
    <section
      id="section1"
      className="flex bg-primary-0 h-full md:h-screen py-5 sm:py-10 w-[90%] mx-auto max-w-[1280px] max-h-[700px] flex-col gap-4 md:gap-10 bg-bg-image bg-cover"
    >
      <div className="flex text-primary w-full justify-between">
        <p className="font-semibold text-sm md:text-2xl text-start">Anurag Kanboina</p>
        <p className="font-semibold text-sm md:text-2xl text-end">+91 99309 02947</p>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between h-full">
        <div className="flex flex-col justify-between text-primary w-full md:w-1/2 h-full">
          <div>
            <div className="w-40 h-[1px] sm:h-1 bg-secondary"></div>
            <p className="text-primary font-semibold text-3xl sm:text-7xl text-start">
              I'm ROI DRIVEN
            </p>
            <p className="text-primary font-semibold text-3xl sm:text-7xl text-start">
              MARKETER
            </p>
            <p className="text-sm sm:text-2xl font-normal text-start text-primary-500">
              <span className="font-semibold">Transformative Growth</span> for 20+ brands with a
              razor-sharp focus on scale and profitability
            </p>
            <div className="flex w-fit sm:w-80 h-fit sm:h-16 bg-secondary rounded-full py-2 sm:py-4 px-8 font-semibold text-sm sm:text-3xl justify-center items-center mt-10">
              Get in touch
            </div>
          </div>
          <div className="flex items-end gap-4 sm:gap-8 mt-8 md:mt-0">
            <div>
              <p className="text-secondary text-start font-bold text-xl sm:text-4xl">30+</p>
              <p className="text-primary font-semibold text-sm sm:text-2xl">Completed Projects</p>
            </div>
            <div>
              <p className="text-secondary text-start font-bold text-xl sm:text-4xl">25+</p>
              <p className="text-primary font-semibold text-sm sm:text-2xl">Satisfied Clients</p>
            </div>
          </div>
        </div>
        <div
          className="flex text-primary w-full md:w-1/2 relative justify-center md:justify-end md:max-h-[412px]"
          // style={{
          //   maxHeight: "calc(100vh - 150px)",
          // }}
        >
          <img
            src={anuragImage}
            alt="anurag"
            className={`w-[80%] md:w-[60%] h-72 md:h-[calc(100vh-150px)] md:max-h-[550px] rounded-br-[100px] relative z-10 mr-5 object-cover`}
            style={{ objectPosition: "top" }}
          />
          <div className="w-[80%] md:w-[60%] h-72 md:h-[calc(100vh-150px)] md:max-h-[550px] rounded-br-[100px] absolute bg-secondary top-2.5 md:top-5"></div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
