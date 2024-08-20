import React from "react";
import linkedIn from "../assets/linkedin.png";
import person1 from "../assets/Rectangle 6.png";
import person2 from "../assets/person-2.png";
import person3 from "../assets/person-3.png";

const Section6 = () => {
  return (
    <section
      id="section6"
      className="flex bg-primary-0 h-fit pt-10 pb-10 md:pb-20 w-[90%] mx-auto max-w-[1280px] flex-col gap-16 justify-center items-center"
    >
      <div className="w-full md:w-[704px] px-4">
        <p className="font-bold text-primary text-2xl sm:text-6xl text-center">
          Don't Trust me? <span className="text-secondary">See it for yourself.</span>
        </p>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-6">
        {[person1, person2, person3].map((person, index) => (
          <div
            key={index}
            className="flex flex-col flex-shrink-0 gap-8 items-center justify-center w-full sm:w-[492px] h-auto sm:h-[580px] px-4 sm:px-8 py-6 md:py-12 rounded-br-[30px] sm:rounded-br-[42px] border-[1.5px] border-[#2E2E2E] relative"
            style={{
              background:
                "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
            }}
          >
            <div className="flex w-full flex-col gap-2 md:gap-4">
              <img
                src={person}
                alt={`profile ${index + 1}`}
                className="w-[60px] h-[60px] sm:w-[105px] sm:h-[105px] rounded-xl"
              />
              <div className="flex flex-col gap-1.5">
                <p className="font-semibold text-base sm:text-2xl text-primary text-start">
                  {["Aman Verma", "Shivaranjan Kumar", "Muktesh Narula"][index]}
                </p>
                <div className="flex gap-2 flex-wrap">
                  <p className="text-primary-500 font-normal text-sm md:text-xl text-start">
                    {[
                      "Co-Founder at Primebook | IIT Delhi",
                      "Co-Founder & CFO at Learnyst",
                      "Chief Executive Officer | New Business Development, Marketing Communications",
                    ][index]}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-0.5 md:gap-1">
              <p className="font-medium text-lg md:text-5xl text-primary text-start">“</p>
              <p className="font-medium text-xs md:text-xl text-primary text-start">
                {[
                  "I highly recommend Anurag for Google Ads expertise. His strategic approach and skilled campaign management consistently yield successful results. Anurag is a valuable asset for any team aiming for excellence in online advertising.",
                  "Anurag has deep understanding in Google Ads. He has been instrumental in delivering quality leads. His approach towards understanding customer requirement and working towards a solution is commendable.",
                  "Anurag is undoubtedly an expert digital marketer. He did an excellent job to promote our online presence. I wish him all the very best for his future. Keep up the good work, Anurag!",
                ][index]}
              </p>
              <p className="font-medium text-lg sm:text-5xl text-primary text-end">”</p>
            </div>
            <img
              src={linkedIn}
              alt="LinkedIn"
              className="w-[20px] h-[20px] sm:w-[55px] sm:h-[55px] absolute top-4 sm:top-8 right-4 sm:right-8"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section6;
