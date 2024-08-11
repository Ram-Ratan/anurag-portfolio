import React from "react";

type Props = {
  text: string;
  variant: string;
};

const Service = ({ text, variant }: Props) => {
  return (
    <div className="flex items-center p-2 sm:p-4 shrink-0">
      <div className="hidden sm:flex items-center">
        <div
          className={`flex items-center justify-center w-5 h-5 ${
            variant === "primary" ? "bg-primary" : "bg-secondary"
          } rounded-full`}
        >
          <div
            className={`w-2.5 h-2.5 ${
              variant === "primary" ? "bg-secondary" : "bg-primary"
            } rounded-full`}
          ></div>
        </div>
        <div
          className={`w-12 h-1 ${
            variant === "primary" ? "bg-primary" : "bg-secondary"
          }`}
        ></div>
      </div>
      <div className="bg-[#1A1B1C] border-[#252525] font-semibold border text-primary text-sm sm:text-2xl px-2 py-1 rounded shadow text-nowrap">
        {text}
      </div>
    </div>
  );
};

export default Service;
