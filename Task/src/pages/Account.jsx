import React from "react";
import { Camera } from "lucide-react";
import Mary from "../assets/deer/Mary doe.png"; 

export default function Account() {
  return (
    <div className="flex flex-col items-start h-screen bg-[#fafafa] pt-5">
      {/* Page Title */}
      <h2 className="text-lg font-semibold mb-6 px-6">Account Settings</h2>

      {/* Card */}
      <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 max-w-[600px] w-full mx-auto">
        
        {/* Profile Section */}
        <div className="flex items-center mb-4">
          <div className="relative">
            <img
              src={Mary}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-[#7a3cff] p-1 rounded-full cursor-pointer">
              <Camera className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="ml-4">
            <p className="font-semibold">Marry Doe</p>
            <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}
