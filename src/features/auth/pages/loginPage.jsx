import React, { useState } from "react";
import LoginForm from "../components/login-form";
import RegisterForm from "../components/register-form";

// Custom SVG Basketball Icon with radial gradients and modern dark seams
function BasketballIcon({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id="basketballGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ff9f43" />
          <stop offset="50%" stopColor="#ff5e36" />
          <stop offset="100%" stopColor="#c02f12" />
        </radialGradient>
      </defs>
      {/* Outer Ball Sphere */}
      <circle cx="50" cy="50" r="46" fill="url(#basketballGrad)" />
      
      {/* Basketball seam lines */}
      <path d="M 50,4 L 50,96" fill="none" stroke="#090b0f" strokeWidth="3" strokeLinecap="round" />
      <path d="M 4,50 L 96,50" fill="none" stroke="#090b0f" strokeWidth="3" strokeLinecap="round" />
      
      {/* Left panel curve */}
      <path d="M 17,17 Q 40,50 17,83" fill="none" stroke="#090b0f" strokeWidth="3" strokeLinecap="round" />
      
      {/* Right panel curve */}
      <path d="M 83,17 Q 60,50 83,83" fill="none" stroke="#090b0f" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#090b0f] flex flex-col justify-center items-center py-12 px-4">
      {/* Brand Header */}
      <div className="flex flex-col items-center mb-8 select-none">
        <BasketballIcon className="w-16 h-16 mb-4 animate-bounce-slow" />
        <h1 className="text-[64px] font-extrabold text-white leading-none tracking-tight">BBL</h1>
        <p className="text-gray-400 text-xs font-semibold tracking-[0.25em] mt-2 uppercase">
          Bangkok Basketball League
        </p>
      </div>

      {/* Auth Card Container */}
      <div className="transition-all duration-300 transform">
        {isLogin ? (
          <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}
