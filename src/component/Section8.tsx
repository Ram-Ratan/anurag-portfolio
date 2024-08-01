import React from "react";

const Section8 = () => {
  return (
    <section className="flex bg-primary-0 w-full h-fit py-24 px-28 flex-col gap-16 justify-center items-center">
      <div className="flex justify-between w-full px-8">
        <div className="flex flex-col gap-6 text-start">
          <p className="font-brunoAceSC font-normal text-2xl text-primary">
            Anurag kanboina
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-light text-xl text-primary">Email:</p>
            <p className="font-semibold text-xl text-secondary">
              marketinginsight5496@gmail.com
            </p>
          </div>
          <div>
            <p className="font-light text-xl text-primary">Mobile Number</p>
            <p className="font-semibold text-xl text-secondary">
              +91 9930902947
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 font-figtree text-start">
          <p className="text-xl font-semibold text-[#9DB0D8]">Site Links</p>
          <p className="text-xl font-semibold text-[#E5EEFF] cursor-pointer">Home</p>
          <p className="text-xl font-semibold text-[#E5EEFF] cursor-pointer">
            Problems We Solve
          </p>
          <p className="text-xl font-semibold text-[#E5EEFF] cursor-pointer">Services</p>
          <p className="text-xl font-semibold text-[#E5EEFF] cursor-pointer">Roadmap</p>
          <p className="text-xl font-semibold text-[#E5EEFF] cursor-pointer">
            Brands I have worked for
          </p>
          <p className="text-xl font-semibold text-[#E5EEFF] cursor-pointer">Testimonials</p>
        </div>
        <div className="flex flex-col gap-5 text-start">
          <p className="text-primary font-light text-xl">Book a call with me</p>
          <div className="flex w-80 h-16 bg-secondary rounded-full py-4 px-8 font-semibold text-3xl justify-center items-center text-primary cursor-pointer">
            SETUP CALL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
