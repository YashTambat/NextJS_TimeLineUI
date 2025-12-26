
import React from 'react';

const SidebarItem = ({ icon, active = false }: { icon: React.ReactNode, active?: boolean }) => (
  <div className={`flex items-center justify-center w-full h-[60px] cursor-pointer transition-all duration-200 ${active ? 'bg-white' : 'hover:bg-white/10'}`}>
    <div className={active ? 'text-[#002C59]' : 'text-white'}>
      {icon}
    </div>
  </div>
);

export const Sidebar = () => {
  return (
    <div className="w-[60px] h-screen bg-[#002C59] flex flex-col items-center py-0 z-50 fixed left-0 top-0">
      {/* Spacer to match alignment if needed, or just start items */}
      <div className="w-full h-16 flex items-center justify-center">
        {/* Placeholder for top margin or logo if required by global design */}
      </div>

      <div className="w-full flex-1 flex flex-col items-center space-y-0">
        {/* Icon 1: Dashboard Grid */}
        <SidebarItem 
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="7" height="7" rx="1.5" />
              <rect x="13" y="4" width="7" height="7" rx="1.5" />
              <rect x="4" y="13" width="7" height="7" rx="1.5" />
              <rect x="13" y="13" width="7" height="7" rx="1.5" />
            </svg>
          } 
        />
        
        {/* Icon 2: Pie Chart (Active) */}
        <SidebarItem 
          active
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 2v10h10c0-5.52-4.48-10-10-10z" />
              <path d="M9 4.1c-4 1.1-7 4.7-7 9.1s4.5 10 10 10c4.3 0 7.9-2.9 9.1-6.8H9V4.1z" />
              <path d="M21 14h-3.2c.5 1 1.2 2 2.1 2.8.5-.8.9-1.8 1.1-2.8z" opacity="0.3"/>
            </svg>
          } 
        />
        
        {/* Icon 3: Stacked Drawers */}
        <SidebarItem 
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 14h16v3H4zM6 10h12v2H6zM8 6h8v2H8z" />
              <path d="M3 18h18v2H3z" />
            </svg>
          } 
        />
        
        {/* Icon 4: Money Sack */}
        <SidebarItem 
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2zM7.5 7h9c1.1 0 2 .9 2 2v1c0 5-4.5 10-6.5 10s-6.5-5-6.5-10V9c0-1.1.9-2 2-2z"/>
            </svg>
          } 
        />
      </div>
    </div>
  );
};
