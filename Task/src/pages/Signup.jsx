import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Account");
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-[#ffffff] px-4 pt-10">
    
      <form
        className="w-full max-w-lg"
         // ✅ same width as Signin card
        onSubmit={handleSubmit}
      >
        {/* Heading */}
        <h2 className="text-[22px] font-bold mb-5 leading-snug">
          Create your <br /> PopX account
        </h2>

        {/* Full Name */}
        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#7a3cff] font-semibold">
            Full Name*
          </label>
          <input
            type="text"
            placeholder="Enter fullname"
            className="w-full p-3 border border-gray-300 rounded-lg placeholder:text-gray-400 text-sm"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#7a3cff] font-semibold">
            Phone number*
          </label>
          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full p-3 border border-gray-300 rounded-lg placeholder:text-gray-400 text-sm"
            required
          />
        </div>

        {/* Email */}
        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#7a3cff] font-semibold">
            Email address*
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-3 border border-gray-300 rounded-lg placeholder:text-gray-400 text-sm"
            required
          />
        </div>

        {/* Password */}
        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#7a3cff] font-semibold">
            Password*
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 border border-gray-300 rounded-lg placeholder:text-gray-400 text-sm"
            required
          />
        </div>

        {/* Company Name */}
        <div className="relative mb-5">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#7a3cff] font-semibold">
            Company name
          </label>
          <input
            type="text"
            placeholder="Enter company's name"
            className="w-full p-3 border border-gray-300 rounded-lg placeholder:text-gray-400 text-sm"
          />
        </div>

        {/* Radio Buttons */}
        <div className="mb-6">
          <p className="text-sm text-black mb-2">
            Are you an Agency?*
          </p>
          <label className="text-sm text-black mr-6">
            <input type="radio" name="agency" className="mr-2" /> Yes
          </label>
          <label className="text-sm text-black">
            <input type="radio" name="agency" className="mr-2" /> No
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#7a3cff] text-white w-full py-3 text-base rounded-lg font-semibold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
