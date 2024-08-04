import React from "react";
import meta from '../assets/meta.png';
import miro from '../assets/miro.png';
import notion from '../assets/Notion.png';
import leadSquare from '../assets/leadsquared.png';
import zoho from '../assets/lucidspark.png';
import hubSpot from '../assets/Hubspot.png';
import chatGpt from '../assets/Chatgpt.png';
import googleAnalytics from '../assets/google analytics.png';
import googleTag from '../assets/Google tag.png';
import bingAds from '../assets/Bing ads.png';

const SubSection3 = () => {
  const toolsArray1: string[] = [
    meta, googleAnalytics, miro, notion, googleTag, zoho, bingAds, chatGpt, leadSquare, hubSpot, 
    meta, googleAnalytics, miro, notion, googleTag, zoho, bingAds, chatGpt, leadSquare, hubSpot
  ];
  const toolsArray2: string[] = [
    hubSpot, leadSquare, chatGpt, bingAds, zoho, googleTag, notion, miro, googleAnalytics, meta,
    hubSpot, leadSquare, chatGpt, bingAds, zoho, googleTag, notion, miro, googleAnalytics, meta
  ];

  return (
    <section className="flex bg-primary-0 h-fit pt-0 pb-10 md:pt-6 md:pb-60 w-full flex-col gap-10 justify-center items-center">
      <div className="flex w-full h-full relative">
        <div className="relative w-full overflow-hidden h-8 sm:h-28 md:h-32 transform -rotate-6 bg-[#1D1F21]">
          <div className="flex h-full items-center absolute w-full animate-slide">
            {toolsArray1.map((tool, i) => (
              <div key={i} className="text-primary text-xl sm:text-2xl font-black mx-2">
                <img src={tool} alt="tool" className="h-6 sm:h-20 md:h-24" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 w-full h-full">
          <div className="relative w-full overflow-hidden h-8 sm:h-28 md:h-32 transform rotate-6 bg-secondary">
            <div className="flex h-full items-center justify-center absolute w-full animate-slide">
              {toolsArray2.map((tool, i) => (
                <div key={i} className="mx-2">
                  <img src={tool} alt="tool" className="h-6 sm:h-20 md:h-24" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubSection3;
