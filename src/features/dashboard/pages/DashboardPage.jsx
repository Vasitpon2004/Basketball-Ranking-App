import React from "react";
import { useAuth } from "../../../context/AuthContext";

function BasketballIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id="basketballGradDash" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ff9f43" />
          <stop offset="50%" stopColor="#ff5e36" />
          <stop offset="100%" stopColor="#c02f12" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#basketballGradDash)" />
      <path d="M 50,4 L 50,96" fill="none" stroke="#090b0f" strokeWidth="4" strokeLinecap="round" />
      <path d="M 4,50 L 96,50" fill="none" stroke="#090b0f" strokeWidth="4" strokeLinecap="round" />
      <path d="M 17,17 Q 40,50 17,83" fill="none" stroke="#090b0f" strokeWidth="4" strokeLinecap="round" />
      <path d="M 83,17 Q 60,50 83,83" fill="none" stroke="#090b0f" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function LogoutIcon({ className = "w-5 h-5" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
    </svg>
  );
}

export default function DashboardPage() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#090b0f] text-white flex flex-col font-sans">
      {/* Navbar Container */}
      <header className="w-full bg-[#090b0f]/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#181b24] px-4 md:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 select-none cursor-pointer">
          <BasketballIcon className="w-8 h-8" />
          <span className="text-xl font-extrabold tracking-tight">Basketball Ranking</span>
        </div>

        {/* User profile / Logout */}
        <div className="flex items-center gap-4">
          {/* User Badge */}
          <div className="hidden sm:flex items-center gap-2 bg-[#11141b] border border-[#232835] px-3.5 py-1.5 rounded-full">
            <span className="bg-[#00c853] text-[#090b0f] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Player
            </span>
            <span className="text-sm font-semibold text-gray-300">
              {currentUser?.username || "ผู้เล่น"}
            </span>
          </div>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="flex items-center justify-center p-2 rounded-full border border-[#232835] hover:bg-red-500/10 hover:border-red-500 hover:text-red-500 transition-all duration-200 cursor-pointer"
            title="ออกจากระบบ"
          >
            <LogoutIcon className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content Area - Blank Home Page */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center justify-center">
        <div className="text-center max-w-lg bg-[#11141b] border border-[#232835] p-12 rounded-3xl shadow-2xl flex flex-col items-center gap-6 group hover:border-[#ff6600]/30 transition-all duration-300 transform hover:scale-[1.01]">
          {/* Decorative Basketball Logo inside Card */}
          <div className="bg-[#ff6600]/10 p-5 rounded-full border border-[#ff6600]/20 animate-pulse-slow">
            <BasketballIcon className="w-16 h-16" />
          </div>
          
          <h2 className="text-3xl font-black tracking-tight mt-2 text-white">
            ยินดีต้อนรับสู่ Basketball Ranking
          </h2>
          
          <p className="text-gray-400 text-sm leading-relaxed">
            ระบบจัดอันดับและสถิติการเล่นสำหรับคนรักบาสเกตบอล 
            พร้อมใช้งานและเปิดให้จัดการข้อมูลได้เร็วๆ นี้
          </p>

          <div className="w-full h-[1px] bg-[#232835] my-2"></div>
          
          <div className="flex items-center gap-2 text-xs text-[#ff6600] font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ff6600] animate-ping"></span>
            Home Page
          </div>
        </div>
      </main>
    </div>
  );
}
