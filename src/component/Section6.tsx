import React from "react";
import linkedIn from "../assets/linkedin.png";
import person1 from "../assets/Rectangle 6.png";
import person2 from "../assets/person-2.png"
import person3 from "../assets/person-3.png"


const Section6 = () => {
  return (
    <section className="flex bg-primary-0 h-fit pt-10 pb-32 w-[90%] mx-auto max-w-[1280px] flex-col gap-16 justify-center items-center">
      <div className="w-[704px]">
        <p className="font-bold text-primary text-6xl text-center">
          Don't Trust me? See it for yourself.
        </p>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-6">
        <div
          className="flex flex-col flex-shrink-0 gap-8 items-center justify-center w-[492px] h-[580px] px-8 py-12 rounded-br-[42px] border-[1.5px] border-[#2E2E2E] relative"
          style={{
            background:
              "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
          }}
        >
          <div className="flex w-full flex-col gap-4 ">
            <img
              src={person1}
              alt="profile"
              className="w-[105px] h-[105px] rounded-xl"
            />
            <div className="flex flex-col gap-1.5">
              <p className="font-semibold text-2xl text-primary text-start">
                Aman Verma
              </p>
              <div className="flex gap-2">
                <p className="text-primary-500 font-normal text-xl">
                  Co-Founder at Primebook
                </p>
                <div className="h-6 w-0.5 bg-primary-500"></div>
                <p className="text-primary-500 font-normal text-xl">
                  IIT Delhi
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium text-5xl text-primary text-start">“</p>
            <p className="font-medium text-xl text-primary text-start">
              I highly recommend Anurag for Google Ads expertise. His strategic
              approach and skilled campaign management consistently yield
              successful results. Anurag is a valuable asset for any team aiming
              for excellence in online advertising.
            </p>
            <p className="font-medium text-5xl text-primary text-end">”</p>
          </div>
          <img
            src={linkedIn}
            alt="LinkedInd"
            className="w-[55px] h-[55px] absolute top-8 right-8"
          />
        </div>
        <div
          className="flex flex-col flex-shrink-0 gap-8 items-center justify-center w-[492px] h-[580px] px-8 py-12 rounded-br-[42px] border-[1.5px] border-[#2E2E2E] relative"
          style={{
            background:
              "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
          }}
        >
          <div className="flex w-full flex-col gap-4 ">
            <img
              src={person2}
              alt="profile"
              className="w-[105px] h-[105px] rounded-xl"
            />
            <div className="flex flex-col gap-1.5">
              <p className="font-semibold text-2xl text-primary text-start">
                Shivaranjan Kumar
              </p>
              <div className="flex gap-2">
                <p className="text-primary-500 font-normal text-xl">
                  Co-Founder & CFO at Learnyst
                </p>
                {/* <div className="h-6 w-0.5 bg-primary-500"></div>
                <p className="text-primary-500 font-normal text-xl">
                  IIT Delhi
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium text-5xl text-primary text-start">“</p>
            <p className="font-medium text-xl text-primary text-start">
              Anurag has deep understanding in Google Ads. He has been
              instrumental in delivering quality leads. His approach towards
              understanding customer requirement and working towards a solution
              is commendable.
            </p>
            <p className="font-medium text-5xl text-primary text-end">”</p>
          </div>
          <img
            src={linkedIn}
            alt="LinkedInd"
            className="w-[55px] h-[55px] absolute top-8 right-8"
          />
        </div>
        <div
          className="flex flex-col flex-shrink-0 gap-8 items-center justify-center w-[492px] h-[580px] px-8 py-12 rounded-br-[42px] border-[1.5px] border-[#2E2E2E] relative"
          style={{
            background:
              "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
          }}
        >
          <div className="flex w-full flex-col gap-4 ">
            <img
              src={person3}
              alt="profile"
              className="w-[105px] h-[105px] rounded-xl"
            />
            <div className="flex flex-col gap-1.5">
              <p className="font-semibold text-2xl text-primary text-start">
                Muktesh Narula
              </p>
              <div className="flex gap-2">
                <p className="text-primary-500 font-normal text-xl text-start">
                  Chief Executive Officer | New Business Development, Marketing
                  Communications
                </p>
                {/* <div className="h-6 w-0.5 bg-primary-500"></div>
                <p className="text-primary-500 font-normal text-xl">
                  IIT Delhi
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium text-5xl text-primary text-start">“</p>
            <p className="font-medium text-xl text-primary text-start">
              Anurag is undoubtedly an expert digital marketer. While at Intent
              Farm, he did an excellent job to promote our online presence. I
              wish him all the very best for his future. Keep up the good work,
              Anurag!
            </p>
            <p className="font-medium text-5xl text-primary text-end">”</p>
          </div>
          <img
            src={linkedIn}
            alt="LinkedInd"
            className="w-[55px] h-[55px] absolute top-8 right-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Section6;
