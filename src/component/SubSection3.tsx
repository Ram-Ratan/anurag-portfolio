import React from "react";
import meta from '../assets/meta.png'
import miro from '../assets/miro.png'
import notion from '../assets/Notion.png'
// import leadSquare from '../assets/leadsquared.png'
import zoho from '../assets/lucidspark.png'
import hubSpot from '../assets/Hubspot.png'


const SubSection3 = () => {
  const toolsArray1: string[] = [meta, miro, notion, zoho, hubSpot, meta, miro, notion, zoho, hubSpot, meta, miro, notion, zoho, hubSpot];
  const toolsArray2: string[] = [hubSpot, zoho, notion, miro, meta, hubSpot, zoho, notion, miro, meta, hubSpot, zoho, notion, miro, meta];

  return (
    <section className="flex bg-primary-0  h-fit pt-6 pb-60 w-full flex-col gap-10 justify-center items-center">

      <div className="flex w-full h-full relative">
        <div className="relative w-full overflow-hidden h-[100px] transform -rotate-6 bg-[#1D1F21]">
          <div className="flex h-full items-center absolute w-full animate-slide">
            {toolsArray1
              .map((tool, i) => {
                return (
                  <div
                    key={i}
                    className="text-primary text-2xl font-black"
                  >
                    <img src={tool} alt="meta" className="h-20 transform -rotate-6"/>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="absolute bottom-4 w-full h-full">
          <div className="relative w-full overflow-hidden h-[100px] transform rotate-6 bg-secondary">
            <div className="flex h-full items-center absolute w-full animate-slide">
              {toolsArray2
                .map((tool, i) => {
                  return (
                    <div
                      key={i}
                      className="text-primary text-2xl font-black"
                    >
                      <img src={tool} alt="meta" className="h-20 transform -rotate-6"/>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubSection3;
