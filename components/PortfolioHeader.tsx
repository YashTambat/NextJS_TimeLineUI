
import React from "react";

interface PortfolioHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
}

export const PortfolioHeader = ({ activeTab, setActiveTab, tabs }: PortfolioHeaderProps) => {
  return (
    <header className="px-8 pt-8 border-b border-slate-200 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[28px] text-slate-900 font-sans">
          My <span className="font-bold">Portfolio</span>
        </h1>

        <div className="flex items-center space-x-4">
          <div className="text-sm font-bold flex items-center">
            Your RM: <span className="ml-1 text-slate-600 font-normal">Sanjay Singhania</span>
          </div>
          <div className="flex items-center space-x-2 text-[#0C4580]">
            <button className="p-1 hover:opacity-80 transition-opacity">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.09 15.09 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
              </svg>
            </button>
            <button className="p-1 hover:opacity-80 transition-opacity">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.75 13.96c.27.13.4.45.3.73-.1.28-.4.43-.68.32l-1.37-.53c-.27-.1-.4-.4-.32-.68.1-.28.4-.43.68-.32l1.39.48zm2.4 1.74c.26.15.35.48.2.74-.15.26-.48.35-.74.2l-1.44-.81c-.26-.15-.35-.48-.2-.74.15-.26.48-.35.74-.2l1.44.81zm-.15-2.92c-.28-.05-.46-.3-.41-.58.05-.28.3-.46.58-.41l1.44.25c.28.05.46.3.41.58-.05.28-.3.46-.58.41l-1.44-.25zM12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.82L3 22l4.31-1.13c1.47.73 3.13 1.13 4.69 1.13 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.49 0-2.97-.35-4.31-1.03l-.31-.16-2.59.68.69-2.52-.17-.27C4.54 15.53 4 13.8 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-8 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 font-semibold whitespace-nowrap relative ${
              activeTab === tab ? "text-[#002C59]" : "text-slate-500"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#002C59] rounded-t-sm" />
            )}
          </button>
        ))}
        <button className="pb-4 flex items-center text-[#EF4822] font-bold">
          <div className="bg-[#EF4822] text-white w-4 h-4 rounded-sm flex items-center justify-center mr-2">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          Add Bonds
        </button>
        <div className="flex-1 flex justify-end">
          <button className="pb-4 font-semibold text-slate-500">Matured Bonds</button>
        </div>
      </div>
    </header>
  );
};
