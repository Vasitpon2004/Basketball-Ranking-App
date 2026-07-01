import React, { useState } from "react";

export default function RegisterForm({ onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#181b24] border border-[#282e3c] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] placeholder-gray-600 transition-all duration-200"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="confirmPassword"
            className="text-gray-400 text-sm font-medium"
          >
            ยืนยันรหัสผ่าน
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-[#181b24] border border-[#282e3c] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] placeholder-gray-600 transition-all duration-200"
          />
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
