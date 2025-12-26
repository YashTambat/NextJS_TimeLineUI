
import React from "react";
import { YearSection, YearData } from "./YearSection";

interface TimelineProps {
  data: YearData[];
}

export const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="flex-1 overflow-y-auto bg-white relative">
      <div className="max-w-[1200px] mx-auto py-12 relative px-20">
        <div className="absolute left-1/2 top-[70px] bottom-[130px] w-[2px] bg-slate-100 -translate-x-1/2" />
        
        <div className="space-y-24">
         {data.map((yearData) => (
  <YearSection
    key={yearData.year}
    yearData={yearData}
  />
))}

        </div>

        <div className="mt-20 flex justify-center">
          <div className="bg-[#002C59] p-3.5 px-10 rounded-md shadow-lg border-4 border-white">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 21V5q0-.425.288-.713T6 4h7l.6 2H19q.425 0 .713.288T20 7v9q0 .425-.288.713T19 17h-5l-.6-2H7v6q0 .425-.288.713T6 21t-.712-.288T5 21z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
