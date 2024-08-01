import React from "react";

const SubSection3 = () => {
  return (
    <section className="flex bg-primary-0  h-fit pt-6 pb-60 w-full flex-col gap-10 justify-center items-center">
      <div className="flex w-full h-full relative">
        <div className="relative w-full overflow-hidden h-[100px] transform -rotate-6 bg-[#1D1F21]">
          <div className="flex h-full items-center absolute w-full animate-slide">
            {Array(20)
              .fill(1)
              .map((a, i) => {
                return (
                  <div
                    key={i}
                    className="text-primary text-2xl font-black px-10"
                  >
                    Hello {i % 10}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="absolute bottom-4 w-full h-full">
          <div className="relative w-full overflow-hidden h-[100px] transform rotate-6 bg-secondary">
            <div className="flex h-full items-center absolute w-full animate-slide">
              {Array(20)
                .fill(1)
                .map((a, i) => {
                  return (
                    <div
                      key={i}
                      className="text-primary text-2xl font-black px-10"
                    >
                      Hello {i % 10}
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
