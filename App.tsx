import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";

interface BondEvent {
  id: string;
  type: "Interest" | "Maturity";
  name: string;
  date: string;
  amount: string;
}

interface DateGroup {
  date: string;
  total: string;
  events: BondEvent[];
}

interface YearData {
  year: string;
  total: string;
  groups: DateGroup[];
}

const TIMELINE_DATA: YearData[] = [
  {
    year: "2025",
    total: "2,01,120.00",
    groups: [
      {
        date: "22 Jan 2025",
        total: "49,127.00",
        events: [
          {
            id: "1",
            type: "Interest",
            name: "7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026",
            date: "01/Aug/2026",
            amount: "27,117.00",
          },
          {
            id: "2",
            type: "Maturity",
            name: "7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026",
            date: "01/Aug/2026",
            amount: "27,117.00",
          },
        ],
      },
      {
        date: "28 Dec 2025",
        total: "1,51,993",
        events: [
          {
            id: "3",
            type: "Maturity",
            name: "0% EDELWEISS FINANCIAL SERVICES LIMITED 01/Feb/2027",
            date: "01/Feb/2027",
            amount: "1,51,993.00",
          },
        ],
      },
    ],
  },
  {
    year: "2026",
    total: "2,01,120.00",
    groups: [
      {
        date: "01 Feb 2026",
        total: "49,127.00",
        events: [
          {
            id: "4",
            type: "Interest",
            name: "7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026",
            date: "01/Aug/2026",
            amount: "49,127.00",
          },
        ],
      },
      {
        date: "01 Aug 2026",
        total: "1,51,993",
        events: [
          {
            id: "5",
            type: "Maturity",
            name: "7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026",
            date: "01/Aug/2026",
            amount: "1,51,993.00",
          },
          {
            id: "6",
            type: "Interest",
            name: "7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026",
            date: "01/Aug/2026",
            amount: "27,117.00",
          },
        ],
      },
    ],
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState("Cashflow Timeline");
  const [selectedBondType, setSelectedBondType] = useState("All Bond Types");
  const tabs = [
    "Active Portfolio Summary",
    "Portfolio Details",
    "Cashflow Timeline",
    "Matured Bonds",
  ];

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />

      <div className="flex-1 flex flex-col ml-[60px] overflow-hidden">
        {/* Header Section */}
        <header className="px-8 pt-8 border-b border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[28px] text-slate-900 font-sans">
              My <span className="font-bold">Portfolio</span>
            </h1>

            <div className="flex items-center space-x-4">
              <div className="text-sm font-bold flex items-center">
                Your RM:{" "}
                <span className="ml-1 text-slate-600 font-normal">
                  Sanjay Singhania
                </span>
              </div>
              <div className="flex items-center space-x-2 text-[#0C4580]">
                <button className="p-1 hover:opacity-80 transition-opacity">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.09 15.09 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                </button>
                <button className="p-1 hover:opacity-80 transition-opacity">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.75 13.96c.27.13.4.45.3.73-.1.28-.4.43-.68.32l-1.37-.53c-.27-.1-.4-.4-.32-.68.1-.28.4-.43.68-.32l1.39.48zm2.4 1.74c.26.15.35.48.2.74-.15.26-.48.35-.74.2l-1.44-.81c-.26-.15-.35-.48-.2-.74.15-.26.48-.35.74-.2l1.44.81zm-.15-2.92c-.28-.05-.46-.3-.41-.58.05-.28.3-.46.58-.41l1.44.25c.28.05.46.3.41.58-.05.28-.3.46-.58.41l-1.44-.25zM12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.82L3 22l4.31-1.13c1.47.73 3.13 1.13 4.69 1.13 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.49 0-2.97-.35-4.31-1.03l-.31-.16-2.59.68.69-2.52-.17-.27C4.54 15.53 4 13.8 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-8 text-sm">
            {tabs.map((tab, i) => (
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
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              Add Bonds
            </button>
            <div className="flex-1 flex justify-end">
              <button className="pb-4 font-semibold text-slate-500">
                Matured Bonds
              </button>
            </div>
          </div>
        </header>

        {/* Filters Bar */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
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
                value=""
              />
              <div className="pr-3 text-slate-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm cursor-pointer hover:border-slate-300 transition-colors">
              <input
                type="text"
                placeholder="To Date"
                className="px-4 py-2 text-sm w-[160px] outline-none bg-white cursor-pointer"
                readOnly
                value=""
              />
              <div className="pr-3 text-slate-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="flex-1 overflow-y-auto bg-white relative">
          <div className="max-w-[1200px] mx-auto py-12 relative px-20">
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 top-[70px] bottom-[130px] w-[2px] bg-slate-100 -translate-x-1/2" />

            <div className="space-y-24">
              {TIMELINE_DATA.map((yearObj, yearIdx) => (
                <div
                  key={yearObj.year}
                  className="relative flex flex-col items-center"
                >
                  {/* Year Header */}
                  <div className="bg-[#002C59] text-white px-10 py-3 rounded-md shadow-md z-10 text-center mb-16">
                    <div className="text-base font-bold tracking-widest">
                      {yearObj.year}
                    </div>
                    <div className="text-xs opacity-90 font-medium">
                      Total Payouts:{" "}
                      <span className="font-semibold ml-1 text-sm">
                        ₹ {yearObj.total}
                      </span>
                    </div>
                  </div>

                  {/* Groups within the year */}
                  <div className="w-full space-y-16">
                    {yearObj.groups.map((group, groupIdx) => {
                      const isLeft = (yearIdx + groupIdx) % 2 === 0;
                      return (
                        <div key={group.date} className="relative flex w-full">
                          <div
                            className={`w-1/2 flex flex-col ${
                              isLeft ? "items-end pr-10" : "hidden"
                            }`}
                          >
                            {/* Date Header Box */}
                            <div className="border border-[#9BC1E3] rounded-md bg-white p-3 flex items-center min-w-[280px] shadow-sm mb-4 relative">
                              <svg
                                className="w-4 h-4 text-[#0C4580] mr-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <div className="flex-1">
                                <div className="text-sm font-bold text-[#0C4580]">
                                  {group.date}
                                </div>
                                <div className="text-xs font-bold text-slate-900">
                                  Total Payouts:{" "}
                                  <span className="font-normal ml-1">
                                    ₹ {group.total}
                                  </span>
                                </div>
                              </div>
                              <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex items-center">
                                <div className="w-8 h-[2.5px] bg-slate-200"></div>
                                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-slate-200"></div>
                              </div>
                            </div>

                            {/* Event Cards for this date */}
                            <div className="space-y-4 w-full flex flex-col items-end">
                              {group.events.map((event) => (
                                <div
                                  key={event.id}
                                  className="border border-slate-200 rounded-md bg-white p-5 shadow-sm min-w-[340px] max-w-sm hover:shadow-md transition-shadow"
                                >
                                  <div className="flex justify-between items-center mb-3">
                                    <span
                                      className={`px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wide ${
                                        event.type === "Interest"
                                          ? "bg-[#008C3B]"
                                          : "bg-[#775DD0]"
                                      }`}
                                    >
                                      {event.type} Payout
                                    </span>
                                    <svg
                                      className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                  <h3 className="text-sm font-bold text-slate-900 leading-snug mb-3 uppercase tracking-tight">
                                    {event.name}
                                  </h3>
                                  <div className="text-sm font-bold text-slate-900">
                                    Amount:{" "}
                                    <span className="font-normal ml-1">
                                      ₹ {event.amount}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* Vertical line connecting cards to group header */}
                            <div className="absolute right-[50px] top-[60px] bottom-0 w-[2px] bg-slate-200 -z-10" />
                          </div>

                          {/* Center Circle */}
                          <div className="absolute left-1/2 -translate-x-1/2 top-6 w-[14px] h-[14px] bg-white border-[3.5px] border-[#9BC1E3] rounded-full z-20 shadow-sm" />

                          <div
                            className={`w-1/2 flex flex-col ${
                              !isLeft ? "items-start pl-10" : "hidden"
                            }`}
                          >
                            {/* Date Header Box */}
                            <div className="border border-[#9BC1E3] rounded-md bg-white p-3 flex items-center min-w-[280px] shadow-sm mb-4 relative">
                              <svg
                                className="w-4 h-4 text-[#0C4580] mr-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <div className="flex-1">
                                <div className="text-sm font-bold text-[#0C4580]">
                                  {group.date}
                                </div>
                                <div className="text-xs font-bold text-slate-900">
                                  Total Payouts:{" "}
                                  <span className="font-normal ml-1">
                                    ₹ {group.total}
                                  </span>
                                </div>
                              </div>
                              <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-row-reverse items-center">
                                <div className="w-8 h-[2.5px] bg-slate-200"></div>
                                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[6px] border-r-slate-200"></div>
                              </div>
                            </div>

                            {/* Event Cards for this date */}
                            <div className="space-y-4 w-full flex flex-col items-start">
                              {group.events.map((event) => (
                                <div
                                  key={event.id}
                                  className="border border-slate-200 rounded-md bg-white p-5 shadow-sm min-w-[340px] max-w-sm hover:shadow-md transition-shadow"
                                >
                                  <div className="flex justify-between items-center mb-3">
                                    <span
                                      className={`px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wide ${
                                        event.type === "Interest"
                                          ? "bg-[#008C3B]"
                                          : "bg-[#775DD0]"
                                      }`}
                                    >
                                      {event.type} Payout
                                    </span>
                                    <svg
                                      className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                  <h3 className="text-sm font-bold text-slate-900 leading-snug mb-3 uppercase tracking-tight">
                                    {event.name}
                                  </h3>
                                  <div className="text-sm font-bold text-slate-900">
                                    Amount:{" "}
                                    <span className="font-normal ml-1">
                                      ₹ {event.amount}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* Vertical line connecting cards to group header */}
                            <div className="absolute left-[50px] top-[60px] bottom-0 w-[2px] bg-slate-200 -z-10" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* End Point Flag */}
            <div className="mt-20 flex justify-center">
              <div className="bg-[#002C59] p-3.5 px-10 rounded-md shadow-lg border-4 border-white">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 21V5q0-.425.288-.713T6 4h7l.6 2H19q.425 0 .713.288T20 7v9q0 .425-.288.713T19 17h-5l-.6-2H7v6q0 .425-.288.713T6 21t-.712-.288T5 21z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
