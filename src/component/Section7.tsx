import React from 'react'

const Section7 = () => {
  return (
    <section id='section7' className="flex bg-secondary h-fit py-10 md:py-24 w-[90%] mx-auto max-w-[1280px] flex-col gap-16 justify-center items-center">
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3 text-start'>
                <p className='font-light text-2xl  md:text-6xl text-primary-0 text-center'>Peace of mind? It's on me</p>
                <p className='font-bold text-2xl md:text-6xl text-primary text-center'>The best guarantee in the world.</p>
            </div>
            <div className='flex flex-col gap-5 text-start'>
              <p className='font-light text-sm md:text-3xl text-primary-0'>Like with any business purchase, there’s always a certain amount of risk attached when it comes to success.</p>
              <p className='font-light text-sm md:text-3xl text-primary-0'>We want to completely remove that risk from you and place it on ourselves.</p>
              {/* <p className='font-light text-3xl text-primary-500'>So, we don’t do what we say we are going to do....... <span className='text-secondary'>Don’t pay us</span></p> */}
            </div>
        </div>
     
    </section>
  )
}

export default Section7