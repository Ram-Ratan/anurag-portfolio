import React, { useState } from "react";
import { PopupButton, PopupModal, PopupWidget } from "react-calendly";

const Section8 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="section8"
      className="flex bg-primary-0 h-fit py-10 md:py-24 w-[90%] mx-auto max-w-[1280px] flex-col gap-16 justify-center items-center"
    >
      <div className="flex flex-col md:flex-row md:justify-between w-full px-4 md:px-8">
        <div className="flex flex-col gap-3 md:gap-6 text-start mb-8 md:mb-0">
          <p className="font-brunoAceSC font-normal text-lg sm:text-2xl text-primary">
            Anurag Kanboina
          </p>
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="font-light text-sm sm:text-xl text-primary">Email:</p>
            <p className="font-semibold text-sm sm:text-xl text-secondary">
              marketinginsight5496@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="font-light text-sm sm:text-xl text-primary">Mobile Number:</p>
            <p className="font-semibold text-sm sm:text-xl text-secondary">
              +91 9930902947
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-5 font-figtree text-start mb-8 md:mb-0">
          <p className="text-sm sm:text-xl font-semibold text-[#9DB0D8]">Site Links</p>
          <a href="#section1" className="text-sm sm:text-xl font-semibold text-[#E5EEFF] cursor-pointer">Home</a>
          <a href="#section2" className="text-sm sm:text-xl font-semibold text-[#E5EEFF] cursor-pointer">
            Problems We Solve
          </a>
          <a href="#section3" className="text-sm sm:text-xl font-semibold text-[#E5EEFF] cursor-pointer">Services</a>
          <a href="#section4" className="text-sm sm:text-xl font-semibold text-[#E5EEFF] cursor-pointer">Roadmap</a>
          <a href="#section5" className="text-sm sm:text-xl font-semibold text-[#E5EEFF] cursor-pointer">
            Brands I have worked for
          </a>
          <a href="#section6" className="text-sm sm:text-xl font-semibold text-[#E5EEFF] cursor-pointer">Testimonials</a>
        </div>
        <div className="flex flex-col gap-2 md:gap-5 text-start">
          <p className="text-primary font-light text-sm sm:text-xl">Book a call with me</p> 
          <div className="flex w-fit md:w-72 h-fit sm:h-16 bg-secondary rounded-full py-2 sm:py-4 px-8 font-semibold text-sm sm:text-3xl justify-center items-center text-primary cursor-pointer" onClick={()=> setIsOpen(true)}>
            SETUP CALL
          </div>
          
          <PopupModal
          url="https://calendly.com/ramratan72908"
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
      </div>
    </section>
  );
};

export default Section8;
