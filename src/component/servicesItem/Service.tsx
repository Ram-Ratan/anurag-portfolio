import React from "react";

type Props = {
  text: string;
  variant: string;
};

const Service = ({ text, variant }: Props) => {
  return (
    <div className="flex items-center p-0.5 lg:p-4">
      <div className="flex items-center">
        <div
          className={`flex items-center justify-center w-1 h-1 lg:w-5 lg:h-5 ${
            variant === "primary" ? "bg-primary" : "bg-secondary"
          } rounded-full`}
        >
          <div
            className={`w-0.5 h-0.5 lg:w-2.5 lg:h-2.5 ${
              variant === "primary" ? "bg-secondary" : "bg-primary"
            } rounded-full`}
          ></div>
        </div>
        <div
          className={`w-6 h-[1px] lg:w-12 lg:h-1 ${
            variant === "primary" ? "bg-primary" : "bg-secondary"
          }`}
        ></div>
      </div>
      <div className="bg-[#1A1B1C] border-[#252525] font-extralight lg:font-semibold border px-[1px] text-primary text-[8px] lg:text-2xl sm:px-2 sm:py-1 rounded shadow">
        {text}
      </div>
    </div>
  );
};

export default Service;
