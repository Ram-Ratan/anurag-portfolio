import React from 'react'
import anuragImage from "../assets/anurag.jfif";

const Section1 = () => {
  return (
    <section className="flex bg-primary-0 w-full h-screen py-10 px-14 flex-col gap-10 bg-bg-image bg-cover">
        <div className="flex text-primary w-full justify-between">
          <p className='font-brunoAceSC font-normal text-2xl'>Anurag kanboina</p>
          <p className='font-brunoAceSC font-normal text-2xl'>+91 99309 02947</p>
        </div>
        <div className="flex justify-between h-full">
          <div className="flex flex-col justify-between text-primary w-1/2 h-full">
            <div>
            <div className="w-40 h-1 bg-secondary"></div>
            <p className="text-primary font-semibold text-7xl text-start">
              PERFORMANCE{" "}
            </p>
            <p className="text-primary font-semibold text-7xl text-start">
              MARKETER{" "}
            </p>
            <p className="text-2xl font-normal text-start text-primary-500">
              This is going to be the placeholder for the tagline which will be
              mixture of keywords
            </p>
            <div className="flex w-80 h-16 bg-secondary rounded-full py-4 px-8 font-semibold text-3xl justify-center items-center mt-10">
              Get in touch
            </div>
            </div>
            <div className='flex items-end gap-8'>
                <div>
                  <p className='text-secondary text-start font-bold text-4xl'>30+</p>
                  <p className='text-primary font-semibold text-2xl'>Completed Projects</p>
                </div>
                <div>
                <p className='text-secondary text-start font-bold text-4xl'>25+</p>
                <p className='text-primary font-semibold text-2xl'>Satisfied Client</p>
                </div>
            </div>
          </div>
          <div className="flex text-primary w-1/2 relative justify-end" style={{
            maxHeight: "calc(100vh - 150px)"
          }}>
            <img
              src={anuragImage}
              alt="anurag"
              className="w-[60%] h-[90%] rounded-br-[100px] relative z-10 mr-5 object-cover"
              style={{ objectPosition: "top" }} 
            />
            <div className="w-[60%] h-[90%] rounded-br-[100px] absolute bg-secondary top-5"></div>
          </div>
        </div>
      </section>
  )
}

export default Section1