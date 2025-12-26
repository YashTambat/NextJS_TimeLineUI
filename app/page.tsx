
"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { PortfolioHeader } from "@/components/PortfolioHeader";
import { FiltersBar } from "@/components/FiltersBar";
import { Timeline } from "@/components/Timeline/Timeline";
import { YearData } from "@/components/Timeline/YearSection";

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

export default function Home() {
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
        <PortfolioHeader 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          tabs={tabs} 
        />
        
        <FiltersBar 
          selectedBondType={selectedBondType} 
          setSelectedBondType={setSelectedBondType} 
        />

        <Timeline data={TIMELINE_DATA} />
      </div>
    </div>
  );
}
