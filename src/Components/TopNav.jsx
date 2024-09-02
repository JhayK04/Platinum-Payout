import React from "react";
import platinums from "../Assets/Frame 57 1.png";

const TopNav = () => {
  return (
    <div className="relative px-6 py-7 shadow-lg flex items-center justify-between h-full z-30">
    {/* Blurred background */}
    <div className="absolute inset-0 backdrop-blur-md bg-white rounded-lg"></div>
  
    {/* Gradient overlay with high transparency */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A1D] bg-opacity-[30px] opacity-100 backdrop-blur-[5px]   to-[#292551] "></div>
  
    {/* Content */}
    <div className="relative z-10 flex items-center justify-between w-full">
      <div>
        <img className="w-[200px] h-auto" src={platinums} alt="Platinum Logo" />
      </div>
      <div className="flex items-center gap-5">
        <button className="w-[94px] h-[45px] flex items-center text-[13px] justify-center rounded-[40px] border border-white text-white px-[23px] py-[13px] bg-white/10 backdrop-blur-md">
          Login
        </button>
        <button className="w-[94px] h-[45px] flex items-center text-[13px] justify-center rounded-[40px] text-white bg-gradient-to-r from-[#DE680A] to-[#FEC636] px-[23px] py-[13px] shadow-md">
          Sign Up
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default TopNav;
