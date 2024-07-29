import React from 'react'
import anuragImage from "../assets/anurag.jfif";

const serviceArray: string[] = [
  "Google Ads",
  "Bing Ads",
  "Youtube Ads",
  "Shopping Ads",
  "Display Ads",
  "Keyword Research",
  "Campaign Management",
  "Retargeting Campaigns",
  "Ads & Copy Optimization",
  "Bid Strategy",
  "Lead Generation",
  "Competitor Analysis",
  "Rapid Experimentation",
  "PPC reporting",
  "Audience Research",
  "PPC landing page oprimizations",
  "Meta Ads"
]

const Section3 = () => {
  return (
    <section className="flex bg-primary-0 w-full h-fit py-32 px-28 flex-col gap-10 justify-center items-center">
        <div className='flex flex-col w-3/4 gap-4'>
          <p className='font-semibold text-primary text-6xl text-center'>Our PPC & SEM Tactics</p>
          <p className='font-normal text-primary-500 text-3xl text-center'>My well rounded perspective on business metrics to achieves growth beyond the Ads dashboard</p>
        </div>
        <div>Content</div>
      </section>
  )
}

export default Section3