import React from "react";
import looker from "../assets/lookerstudio.png";
import googleAnalytics from "../assets/google analytics.png";
import meta from "../assets/meta.png";
import bingAds from "../assets/Bing ads.png";
import spyfu from "../assets/SPYFU 2.png";
import zoho from "../assets/lucidspark.png";
import hubSpot from "../assets/Hubspot.png";
import leadSquare from "../assets/leadsquared.png";
import notion from "../assets/Notion.png";

import lucidSpark from "../assets/lucidspark.png";
import semrush from "../assets/Semrush 2.png";
// import answerThePublic
import chatGpt from "../assets/Chatgpt.png";

import calarity from "../assets/clarity.png";
import similarWeb from "../assets/Similar web.png";
import shopify from "../assets/shopify 2.png";
import googleTag from "../assets/Google tag.png";
// import googleTag from '../assets/';
import miro from "../assets/miro.png";
import unbounce from "../assets/unbounce.png";

const SubSection3 = () => {
  const toolsArray1: string[] = [
    looker,
    googleAnalytics,
    meta,
    bingAds,
    spyfu,
    zoho,
    hubSpot,
    leadSquare,
    notion,
    lucidSpark,
    semrush,
    chatGpt,
    calarity,
    similarWeb,
    shopify,
    googleTag,
    miro,
    unbounce,
  ];
  const toolsArray2: string[] = [
    notion,
    leadSquare,
    hubSpot,
    zoho,
    spyfu,
    bingAds,
    meta,
    googleAnalytics,
    looker,
    unbounce,
    miro,
    googleTag,
    shopify,
    similarWeb,
    calarity,
    chatGpt,
    semrush,
    lucidSpark,
  ];

  return (
    <section className="flex bg-primary-0 h-fit pt-0 pb-10 md:pt-6 md:pb-60 w-full flex-col gap-10 justify-center items-center">
      <div className="flex w-full h-full relative">
        <div className="flex items-center justify-center relative w-full overflow-hidden h-8 sm:h-24 transform -rotate-6 bg-[#1D1F21]">
          <div className="flex h-full items-center absolute w-[1500px] md:w-[140%] animate-slide">
            {toolsArray1.map((tool, i) => (
              <div
                key={i}
                className="flex mx-2 items-center justify-center shrink-0"
              >
                <img src={tool} alt="tool" className="h-6 sm:h-12" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute w-full h-full">
          <div className="flex items-center justify-center relative w-full overflow-hidden h-8 sm:h-24 transform rotate-[8.56deg] bg-secondary">
            <div className="flex h-full items-center justify-center absolute w-[1500px] md:w-[140%] animate-slide">
              {toolsArray2.map((tool, i) => (
                <div
                  key={i}
                  className="flex mx-2 items-center justify-center shrink-0"
                >
                  <img src={tool} alt="tool" className="h-6 sm:h-12" />
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
