import React, { useState } from "react";

export default function RegisterForm() {
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
    console.log(username);
    console.log(email);
    console.log(password);
    console.log("Form submitted successfully!");
    alert("Form submitted successfully!");
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
    <div className="bg-[#151617] p-6 rounded-lg shadow-md text-white w-[440px] h-[500px]">
      <div className="flex items-center mb-6 bg-[#25262b] p-3 rounded-3xl">
        <button className="rounded-3xl border border-[#4b4c4f] flex-1 hover:text-white text-gray-500">Login</button>
        <button className="rounded-3xl border border-[#4b4c4f] bg-[#e85d07] hover:bg-[#c75006] flex-1">Register</button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="username" className="block mb-2 text-sm font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-[#4b4c4f] rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 bg-[#25262b]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#4b4c4f] rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 bg-[#25262b]"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[#4b4c4f] rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 bg-[#25262b]"
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-[#4b4c4f] rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 bg-[#25262b]"
          />
        </div>
        <button
          id="register-button"
          type="submit"
          className="gap-2 rounded-xl py-2 bg-[#e85d07] hover:bg-[#c75006]"
        >
          Register
        </button>
      </form>
    </div>
  );
}
