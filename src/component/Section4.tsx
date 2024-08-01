import React from "react";
import timeline1 from "../assets/timeline-1.png";

const Section4 = () => {
  return (
    <section className="flex bg-primary-0 h-fit py-24 w-[90%] mx-auto max-w-[1280px] gap-6 justify-start items-center relative">
      <div className="flex flex-col">
        <div
          className="w-2.5 h-[323px] relative"
          style={{
            background:
              "linear-gradient(to bottom, #602399 0%, #A03AFF 50%, #602399 100%)",
            // backgroundSize: "100% 160px", // Define the height of one gradient cycle
            // backgroundRepeat: "repeat-y",
          }}
        >
          <div
            className="w-14 h-14 rounded-full absolute -top-7 -left-[23px]"
            style={{
              background: "linear-gradient(180deg, #A03AFF 0%, #602399 100%)",
            }}
          ></div>
        </div>
        <div
          className="w-2.5 h-[753px] relative"
          style={{
            background:
              "linear-gradient(to bottom, #602399 0%, #A03AFF 50%, #602399 100%)",
            // backgroundSize: "100% 160px", // Define the height of one gradient cycle
            // backgroundRepeat: "repeat-y",
          }}
        >
          <div
            className="flex w-20 h-20 rounded-full absolute -top-10 -left-[35px] justify-center font-extrabold text-5xl items-center text-primary"
            style={{
              background: "linear-gradient(180deg, #A03AFF 0%, #602399 100%)",
            }}
          ></div>
          <div
            className="flex w-20 h-20 rounded-full absolute -top-10 -left-[35px] justify-center font-extrabold text-5xl items-center text-primary"
            style={{
              background:
                "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
            }}
          >
            <span>1</span>
          </div>
        </div>
        <div
          className="w-2.5 h-[812px] relative"
          style={{
            background:
              "linear-gradient(to bottom, #602399 0%, #A03AFF 50%, #602399 100%)",
            // backgroundSize: "100% 160px", // Define the height of one gradient cycle
            // backgroundRepeat: "repeat-y",
          }}
        >
          <div
            className="flex w-20 h-20 rounded-full absolute -top-10 -left-[35px] justify-center font-extrabold text-5xl items-center text-primary"
            style={{
              background: "linear-gradient(180deg, #A03AFF 0%, #602399 100%)",
            }}
          ></div>
          <div
            className="flex w-20 h-20 rounded-full absolute -top-10 -left-[35px] justify-center font-extrabold text-5xl items-center text-primary"
            style={{
              background:
                "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
            }}
          >
            <span>2</span>
          </div>
        </div>
        <div
          className="w-2.5 h-[686px] relative"
          style={{
            background:
              "linear-gradient(to bottom, #602399 0%, #A03AFF 50%, #602399 100%)",
            // backgroundSize: "100% 160px", // Define the height of one gradient cycle
            // backgroundRepeat: "repeat-y",
          }}
        >
          <div
            className="flex w-20 h-20 rounded-full absolute -top-10 -left-[35px] justify-center font-extrabold text-5xl items-center text-primary"
            style={{
              background: "linear-gradient(180deg, #A03AFF 0%, #602399 100%)",
            }}
          ></div>
          <div
            className="flex w-20 h-20 rounded-full absolute -top-10 -left-[35px] justify-center font-extrabold text-5xl items-center text-primary"
            style={{
              background:
                "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
            }}
          >
            <span>3</span>
          </div>
        </div>
        <div
          className="w-2.5 h-[561px] relative"
          style={{
            background:
              "linear-gradient(180deg, #602399 0%, #A03AFF 47.88%, #090B0D 100%)",
            // backgroundSize: "100% 160px", // Define the height of one gradient cycle
            // backgroundRepeat: "repeat-y",
          }}
        >
          <div
            className="flex w-20 h-20 rounded-full absolute -top-10 -left-[35px] justify-center font-extrabold text-5xl items-center text-primary"
            style={{
              background: "linear-gradient(180deg, #A03AFF 0%, #602399 100%)",
            }}
          ></div>
          <div
            className="flex w-20 h-20 rounded-full absolute -top-10 -left-[35px] justify-center font-extrabold text-5xl items-center text-primary"
            style={{
              background:
                "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
            }}
          >
            <span>4</span>
          </div>
        </div>
      </div>
      <div className="w-full h-full place-items-start pl-6 absolute top-[60px] left-40" style={{
        width: 'calc(100vw - 300px)'
      }}>
        <div className="flex flex-col gap-2.5 h-[323px] w-[531px]">
          <p className="font-semibold text-6xl text-primary text-start">
            Peak into the{" "}
            <span className="font-extrabold text-secondary">Journey Ahead</span>
          </p>
        </div>
        <div className="flex flex-col gap-8 h-[753px] w-full">
          <div className="flex flex-col gap-2.5 text-start">
            <p
              className="text-primary font-normal text-lg py-2.5 px-5 border-[1.5px] border-[#2E2E2E] rounded-[500px] w-fit"
              style={{
                background:
                  "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
              }}
            >
              Pre-sale
            </p>
            <p className="font-semibold text-4xl text-primary">
              Initial{" "}
              <span className="font-black text-secondary">Discovery</span>
            </p>
            <p className="font-normal text-2xl text-primary-500">
              We identify your needs and objectives so we can accurately price &
              scope what is needed to drive the most value, setting our
              onboarding team for success.
            </p>
          </div>
          <div
            className="w-[789px] h-fit p-7 border-[0.5px] border-[#5D5D5D] rounded-xl"
            style={{
              background:
                "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
            }}
          >
            <img
              src={timeline1}
              alt="timeline"
              className="h-[348px] rounded-md border-[0.5px] border-[#2E2E2E]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 h-[812px] w-full">
          <div className="flex flex-col gap-2.5 text-start">
            <p
              className="text-primary font-normal text-lg py-2.5 px-5 border-[1.5px] border-[#2E2E2E] rounded-[500px] w-fit"
              style={{
                background:
                  "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
              }}
            >
              Day 01
            </p>
            <p className="font-semibold text-4xl text-primary">Onboarding</p>
            <p className="font-normal text-2xl text-primary-500">
              We identify your needs and objectives so we can accurately price &
              scope what is needed to drive the most value, setting our
              onboarding team for success.
            </p>
          </div>
          <div
            className="w-[789px] h-fit p-7 border-[0.5px] border-[#5D5D5D] rounded-xl"
            style={{
              background:
                "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
            }}
          >
            <img
              src={timeline1}
              alt="timeline"
              className="h-[348px] rounded-md border-[0.5px] border-[#2E2E2E]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 h-[686px] w-full">
          <div className="flex flex-col gap-2.5 text-start">
            <p
              className="text-primary font-normal text-lg py-2.5 px-5 border-[1.5px] border-[#2E2E2E] rounded-[500px] w-fit"
              style={{
                background:
                  "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
              }}
            >
              3-5 days from contract ( Week 1 )
            </p>
            <p className="font-semibold text-4xl text-primary">
              MUTUAL{" "}
              <span className="font-black text-secondary">UNDERSTANDING</span>
            </p>
            <p className="font-normal text-2xl text-primary-500">
              We identify your needs and objectives so we can accurately price &
              scope what is needed to drive the most value, setting our
              onboarding team for success.
            </p>
          </div>
          <div
            className="w-[789px] h-fit p-7 border-[0.5px] border-[#5D5D5D] rounded-xl"
            style={{
              background:
                "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
            }}
          >
            <img
              src={timeline1}
              alt="timeline"
              className="h-[348px] rounded-md border-[0.5px] border-[#2E2E2E]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 h-[561px] w-full">
          <div className="flex flex-col gap-2.5 text-start">
            <p
              className="text-primary font-normal text-lg py-2.5 px-5 border-[1.5px] border-[#2E2E2E] rounded-[500px] w-fit"
              style={{
                background:
                  "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
              }}
            >
              Near Day 45 ; 90 Days cycle
            </p>
            <p className="font-semibold text-4xl text-primary">
              ONGOING{" "}
              <span className="font-black text-secondary">STRATEGY</span>
            </p>
            <p className="font-normal text-2xl text-primary-500">
              We identify your needs and objectives so we can accurately price &
              scope what is needed to drive the most value, setting our
              onboarding team for success.
            </p>
          </div>
          <div
            className="w-[789px] h-fit p-7 border-[0.5px] border-[#5D5D5D] rounded-xl"
            style={{
              background:
                "linear-gradient(115.97deg, rgba(255, 255, 255, 0) -12.71%, rgba(255, 255, 255, 0.1) 112.15%)",
            }}
          >
            <img
              src={timeline1}
              alt="timeline"
              className="h-[348px] rounded-md border-[0.5px] border-[#2E2E2E]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
