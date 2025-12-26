
import React from "react";

interface FiltersBarProps {
  selectedBondType: string;
  setSelectedBondType: (type: string) => void;
}

export const FiltersBar = ({ selectedBondType, setSelectedBondType }: FiltersBarProps) => {
  return (
    <div className="px-8 py-4 bg-white border-b border-transparent flex items-center space-x-6">
      <div className="relative">
        <select
          value={selectedBondType}
          onChange={(e) => setSelectedBondType(e.target.value)}
          className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-slate-300 w-[220px] shadow-sm cursor-pointer"
        >
          <option value="All Bond Types">All Bond Types</option>
          <option value="Government Bonds">Government Bonds</option>
          <option value="Corporate Bonds">Corporate Bonds</option>
          <option value="Tax Free Bonds">Tax Free Bonds</option>
        </select>
        <svg
          className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="flex-1 flex justify-end items-center space-x-6">
        <span className="text-sm font-medium text-slate-900 tracking-tight">
          View Between Date Range
        </span>
        <div className="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm cursor-pointer hover:border-slate-300 transition-colors">
          <input
            type="text"
            placeholder="From Date"
            className="px-4 py-2 text-sm w-[160px] outline-none bg-white cursor-pointer"
            readOnly
          />
          <div className="pr-3 text-slate-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm cursor-pointer hover:border-slate-300 transition-colors">
          <input
            type="text"
            placeholder="To Date"
            className="px-4 py-2 text-sm w-[160px] outline-none bg-white cursor-pointer"
            readOnly
          />
          <div className="pr-3 text-slate-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
