import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#f5f5f5]">
      <div className="flex flex-col w-full max-w-[400px] md:max-w-[420px] h-screen bg-white shadow-md p-5 md:p-6">
        
        {/* Image section */}
        <div className="h-[200px] md:h-[250px] bg-white bg-cover bg-center rounded-md mb-5"></div>

        {/* Content section */}
        <div className="flex flex-col justify-end flex-1 mb-5">
          <h2 className="text-[20px] md:text-[22px] font-semibold text-black mb-2 text-left">
            Welcome to PopX
          </h2>
          <p className="text-[14px] md:text-[15px] text-gray-600 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mb-3">
          <button
            className="px-4 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-[15px] font-medium transition"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
          <button
            className="px-4 py-3 bg-purple-200 hover:bg-purple-300 text-black rounded-lg text-[15px] font-medium transition"
            onClick={() => navigate("/signin")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
