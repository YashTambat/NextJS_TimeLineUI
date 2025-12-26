
import React from "react";
import { DateSection, DateGroup } from "./DateSection";

export interface YearData {
  year: string;
  total: string;
  groups: DateGroup[];
}

interface YearSectionProps {
  yearData: YearData;
  yearIdx: number;
}

export const YearSection = ({ yearData, yearIdx }: YearSectionProps) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="bg-[#002C59] text-white px-10 py-3 rounded-md shadow-md z-10 text-center mb-16">
        <div className="text-base font-bold tracking-widest">{yearData.year}</div>
        <div className="text-xs opacity-90 font-medium">
          Total Payouts: <span className="font-semibold ml-1 text-sm">₹ {yearData.total}</span>
        </div>
      </div>

      <div className="w-full space-y-16">
        {yearData.groups.map((group, groupIdx) => (
  <DateSection
    key={group.date}
    group={group}
    isLeft={groupIdx % 2 === 0}
  />
))}

      </div>
    </div>
  );
};
