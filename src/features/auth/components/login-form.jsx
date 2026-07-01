import React, { useState } from "react";

export default function LoginForm({ onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("กรุณากรอกอีเมล");
      return;
    }
    if (!password.trim()) {
      alert("กรุณากรอกรหัสผ่าน");
      return;
    }
    alert(`เข้าสู่ระบบสำเร็จด้วยอีเมล: ${email}`);
  };

  const handleDemoAccess = (role) => {
    if (role === "guest") {
      setEmail("guest@bbl.com");
      setPassword("GuestPass123!");
    } else if (role === "player") {
      setEmail("player@bbl.com");
      setPassword("PlayerPass123!");
    } else if (role === "admin") {
      setEmail("admin@bbl.com");
      setPassword("AdminPass123!");
    }
  };

  return (
    <div className="bg-[#11141b] border border-[#232835] p-8 rounded-3xl shadow-2xl text-white w-[400px]">
      {/* Tab Switcher */}
      <div className="flex items-center mb-6 bg-[#181b24] p-1.5 rounded-2xl border border-[#232835]">
        <button
          type="button"
          className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-[#ff6600] text-[#090b0f] transition-all duration-300 cursor-pointer"
        >
          เข้าสู่ระบบ
        </button>
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="flex-1 py-2.5 rounded-xl text-sm font-bold text-gray-400 hover:text-white transition-all duration-300 cursor-pointer"
        >
          สมัครสมาชิก
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-400 text-sm font-medium">
            อีเมล
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#181b24] border border-[#282e3c] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] placeholder-gray-600 transition-all duration-200"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-gray-400 text-sm font-medium">
            รหัสผ่าน
          </label>
          <input
            id="password"
            type="password"
            placeholder="........."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#181b24] border border-[#282e3c] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] placeholder-gray-600 transition-all duration-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-[#ff6600] text-[#090b0f] font-bold text-base hover:bg-[#e05a00] active:scale-[0.98] transition-all duration-200 mt-2 cursor-pointer"
        >
          เข้าสู่ระบบ
        </button>
      </form>

      {/* Divider */}
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-[#232835]"></div>
      </div>

      {/* Demo Section */}
      <div className="flex flex-col items-center gap-4">
        <span className="text-xs text-gray-500 font-medium">เข้าใช้งานทดลอง</span>
        <div className="flex w-full gap-2">
          <button
            type="button"
            onClick={() => handleDemoAccess("guest")}
            className="flex-1 py-2 px-3 border border-[#282e3c] rounded-full text-xs font-semibold text-gray-400 hover:bg-[#181b24] hover:text-white transition-all duration-200 cursor-pointer"
          >
            ผู้เยี่ยมชม
          </button>
          <button
            type="button"
            onClick={() => handleDemoAccess("player")}
            className="flex-1 py-2 px-3 border border-[#282e3c] rounded-full text-xs font-semibold text-gray-400 hover:bg-[#181b24] hover:text-white transition-all duration-200 cursor-pointer"
          >
            ผู้เล่น
          </button>
          <button
            type="button"
            onClick={() => handleDemoAccess("admin")}
            className="flex-1 py-2 px-3 border border-[#ff6600] rounded-full text-xs font-semibold text-[#ff6600] hover:bg-[#ff6600]/10 transition-all duration-200 cursor-pointer"
          >
            แอดมิน
          </button>
        </div>
      </div>
    </div>
  );
}
