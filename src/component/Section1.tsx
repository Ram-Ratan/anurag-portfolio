import React, { useEffect, useState } from "react";
import anuragImage from "../assets/anurag.png";
import { PopupModal } from "react-calendly";
import TypewriterEffect from "./TypewriteEffect";

const Section1 = () => {
  const [projectCount, setProjectCount] = useState<number>(0);
  const [satisfiedClientCount, setSatisfiedClientCount] = useState<number>(0);
  const [titleText, setTitleText] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = `
  animate-fade-in-1 animate-fade-in-2 animate-fade-in-3 animate-fade-in-4
  animate-fade-in-5 animate-fade-in-6 animate-fade-in-7 animate-fade-in-8
  animate-fade-in-9 animate-fade-in-10 animate-fade-in-11 animate-fade-in-12 animate-fade-in-13 animate-fade-in-14 animate-fade-in-15 animate-fade-in-16 animate-fade-in-17
`;

  useEffect(() => {
    if (projectCount < 30) {
      setTimeout(() => {
        setProjectCount((count) => count + 1);
      }, 50);
    }
  }, [projectCount]);
  useEffect(() => {
    if (satisfiedClientCount < 25) {
      setTimeout(() => {
        setSatisfiedClientCount((count) => count + 1);
      }, 50);
    }
  }, [satisfiedClientCount]);

  useEffect(() => {
    const cycleText = () => {
      if (titleText === "") {
        setTimeout(() => {
          setTitleText("ROI DRIVEN");
        }, 500); // Wait 1 second before starting "ROI DRIVEN"
      } else if (titleText === "ROI DRIVEN") {
        setTimeout(() => {
          setTitleText("PERFORMANCE");
        }, 4000); // Change to "PERFORMANCE" after 1 second
      } else {
        setTimeout(() => {
          setTitleText("");
        }, 4000); // Clear the text after "PERFORMANCE"
      }
    };

    cycleText();
  }, [titleText]);
  return (
    <section
      id="section1"
      className="flex bg-primary-0 h-full md:h-screen py-5 sm:py-10 w-[90%] mx-auto max-w-[1280px] max-h-[700px] flex-col gap-4 md:gap-10"
    >
      <div className="flex text-primary w-full justify-between">
        <p className="font-semibold text-sm md:text-2xl text-start">
          Anurag Kanboina
        </p>
        <p className="font-semibold text-sm md:text-2xl text-end">
          +91 99309 02947
        </p>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between h-full">
        <div className="flex flex-col justify-between text-primary w-full md:w-1/2 h-full">
          <div>
            <div className="w-40 h-[1px] sm:h-1 bg-secondary"></div>
            <p className="flex gap-2 text-primary font-semibold text-3xl sm:text-6xl text-start">
              <span className="inline-block">I'm A</span>{" "}
              {/* {titleText?.split("")?.map((char, i) => (
                <span
                  key={i + titleText}
                  className={`inline-block opacity-0 animate-fade-in-${i + 1}`}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))} */}
              <TypewriterEffect />
            </p>
            <p className="text-primary typewrite font-semibold text-3xl sm:text-6xl text-start">
              MARKETER
            </p>
            <p className="text-sm sm:text-2xl mt-4 font-normal text-start text-primary-500">
              <span className="font-semibold">Transformative Growth</span> for
              30+ brands with a razor-sharp focus on scale and profitability
            </p>
            <div
              className="flex w-fit cursor-pointer sm:w-80 h-fit sm:h-16 bg-secondary rounded-full py-2 sm:py-4 px-8 font-semibold text-sm sm:text-3xl justify-center items-center mt-10 transition-transform duration-300 transform hover:scale-110 hover:shadow-secondary hover:shadow-2xl"
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
          </div>
          <div className="flex items-end gap-4 sm:gap-8 mt-8 md:mt-0">
            <div>
              <p className="text-secondary text-start font-bold text-xl sm:text-4xl md:text-6xl">
                {projectCount}+
              </p>
              <p className="text-primary font-semibold text-sm sm:text-2xl">
                Completed Projects
              </p>
            </div>
            <div>
              <p className="text-secondary text-start font-bold text-xl sm:text-4xl md:text-6xl">
                {satisfiedClientCount}+
              </p>
              <p className="text-primary font-semibold text-sm sm:text-2xl">
                Satisfied Clients
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex text-primary w-full md:w-1/2 relative justify-center md:justify-end md:max-h-[412px] animate-slide-in-from-right"
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
