
import React from "react";
import { EventCard, BondEvent } from "./EventCard";

export interface DateGroup {
  date: string;
  total: string;
  events: BondEvent[];
}

interface DateSectionProps {
  group: DateGroup;
  isLeft: boolean;
}

export const DateSection = ({ group, isLeft }: DateSectionProps) => {
  return (
    <div className="relative flex w-full">
      <div className={`w-1/2 flex flex-col ${isLeft ? "items-end pr-10" : "hidden"}`}>
        <DateHeader group={group} side="left" />
        <div className="space-y-4 w-full flex flex-col items-end">
          {group.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="absolute right-[50px] top-[60px] bottom-0 w-[2px] bg-slate-200 -z-10" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-6 w-[14px] h-[14px] bg-white border-[3.5px] border-[#9BC1E3] rounded-full z-20 shadow-sm" />

      <div className={`w-1/2 flex flex-col ${!isLeft ? "items-start pl-10" : "hidden"}`} style={{paddingLeft:"35.5rem"}}>
        <DateHeader group={group} side="right" />
        <div className="space-y-4 w-full flex flex-col items-start">
          {group.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="absolute left-[50px] top-[60px] bottom-0 w-[2px] bg-slate-200 -z-10" />
      </div>
    </div>
  );
};

const DateHeader = ({ group, side }: { group: DateGroup; side: "left" | "right" }) => (
  <div className="border border-[#9BC1E3] rounded-md bg-white p-3 flex items-center min-w-[280px] shadow-sm mb-4 relative">
    <svg className="w-4 h-4 text-[#0C4580] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <div className="flex-1">
      <div className="text-sm font-bold text-[#0C4580]">{group.date}</div>
      <div className="text-xs font-bold text-slate-900">
        Total Payouts: <span className="font-normal ml-1">₹ {group.total}</span>
      </div>
    </div>
    {side === "left" ? (
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 flex items-center">
    <div />
    <div
      className="w-0 h-0 
      border-t-[12px] border-t-transparent 
      border-b-[12px] border-b-transparent 
      border-l-[16px] border-l-[#9BC1E3]"
    />
  </div>
    ) : (
       <div className="absolute -left-10 top-1/2 -translate-y-1/2 flex items-center flex-row-reverse">
    <div  />
    <div
      className="w-0 h-0 
      border-t-[12px] border-t-transparent 
      border-b-[12px] border-b-transparent 
      border-r-[16px] border-r-[#9BC1E3]"
    />
  </div>
    )}
  </div>
);
