import React, { useState } from "react";

export default function RegisterForm({ onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$]).{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    alert("สมัครสมาชิกสำเร็จ!");
    if (onSwitchToLogin) {
      onSwitchToLogin();
    }
  };

  const validateForm = () => {
    if (username.trim() === "") {
      alert("กรุณากรอก Username");
      return false;
    }
    if (email.trim() === "") {
      alert("กรุณากรอก Email");
      return false;
    }
    if (password.trim() === "") {
      alert("กรุณากรอก Password");
      return false;
    }
    if (confirmPassword.trim() === "") {
      alert("กรุณากรอก Confirm Password");
      return false;
    }
    if (!regex.test(password)) {
      alert(
        "Password ต้องมีความยาวอย่างน้อย 8 ตัวอักษรและมีอักขระพิเศษอย่างน้อย 1 ตัว",
      );
      return false;
    }
    if (password !== confirmPassword) {
      alert("Password และ Confirm Password ไม่ตรงกัน");
      return false;
    }
    return true;
  };

  return (
    <div className="bg-[#11141b] border border-[#232835] p-8 rounded-3xl shadow-2xl text-white w-[400px]">
      {/* Tab Switcher */}
      <div className="flex items-center mb-6 bg-[#181b24] p-1.5 rounded-2xl border border-[#232835]">
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="flex-1 py-2.5 rounded-xl text-sm font-bold text-gray-400 hover:text-white transition-all duration-300 cursor-pointer"
        >
          เข้าสู่ระบบ
        </button>
        <button
          type="button"
          className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-[#ff6600] text-[#090b0f] transition-all duration-300 cursor-pointer"
        >
          สมัครสมาชิก
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Username Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="username" className="text-gray-400 text-sm font-medium">
            ชื่อผู้ใช้งาน
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-[#181b24] border border-[#282e3c] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] placeholder-gray-600 transition-all duration-200"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-gray-400 text-sm font-medium">
            อีเมล
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#181b24] border border-[#282e3c] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] placeholder-gray-600 transition-all duration-200"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-gray-400 text-sm font-medium">
            รหัสผ่าน
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#181b24] border border-[#282e3c] rounded-xl pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] placeholder-gray-600 transition-all duration-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none cursor-pointer transition-colors duration-200"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.815 7.815L21 21m-3.955-3.955-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="confirmPassword"
            className="text-gray-400 text-sm font-medium"
          >
            ยืนยันรหัสผ่าน
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-[#181b24] border border-[#282e3c] rounded-xl pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] placeholder-gray-600 transition-all duration-200"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none cursor-pointer transition-colors duration-200"
            >
              {showConfirmPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.815 7.815L21 21m-3.955-3.955-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          id="register-button"
          type="submit"
          className="w-full py-3 rounded-xl bg-[#ff6600] text-[#090b0f] font-bold text-base hover:bg-[#e05a00] active:scale-[0.98] transition-all duration-200 mt-2 cursor-pointer"
        >
          สมัครสมาชิก
        </button>
      </form>
    </div>
  );
}
