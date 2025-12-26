
import React from "react";

export interface BondEvent {
  id: string;
  type: "Interest" | "Maturity";
  name: string;
  date: string;
  amount: string;
}

interface EventCardProps {
  event: BondEvent;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="border border-slate-200 rounded-md bg-white p-5 shadow-sm min-w-[340px] max-w-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-3">
        <span
          className={`px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wide ${
            event.type === "Interest" ? "bg-[#008C3B]" : "bg-[#775DD0]"
          }`}
        >
          {event.type} Payout
        </span>
        <svg className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </div>
      <h3 className="text-sm font-bold text-slate-900 leading-snug mb-3 uppercase tracking-tight">
        {event.name}
      </h3>
      <div className="text-sm font-bold text-slate-900">
        Amount: <span className="font-normal ml-1">₹ {event.amount}</span>
      </div>
    </div>
  );
};
