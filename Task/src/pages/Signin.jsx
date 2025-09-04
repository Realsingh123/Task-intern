import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Account");
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-[#ffffff] px-4 pt-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md"
      >
        {/* Heading */}
        <h2 className="text-xl font-bold leading-tight mb-2">
          Signin to your <br /> PopX account
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Email */}
        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#7a3cff] font-semibold">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full p-3 border border-gray-300 rounded-lg placeholder:text-gray-400 text-sm"
            required
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#7a3cff] font-semibold">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 border border-gray-300 rounded-lg placeholder:text-gray-400 text-sm"
            required
          />
        </div>
         {/* {Login button} */}
        <button
          type="submit"
          className="bg-[#d3d3d3] text-white w-full py-3 text-sm rounded-lg font-medium cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
