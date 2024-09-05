import React from "react";
import background from "../Assets/Frame 1395.png";
import platinum from "../Assets/Frame 57 1.png";
import { IoCloseCircle } from "react-icons/io5";

const SignUp = ({ content, onClose }) => {
  return (
    <>
      {content && (
        <div className="bg-black/30 h-full flex items-center justify-center  py-[200px] backdrop-blur-md overflow-y-hidden z-[99] absolute left-0 right-0 top-0 bottom-0">
          <div className=" mx-auto flex flex-col  h-[650px] bg-[#04030D] relative rounded-[30px] w-[523px] border-[1px] border-[#FCBF32]  text-white">
            <svg width="0" height="0">
              <linearGradient
                id="icon-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#DE680A" />
                <stop offset="100%" stopColor="#FEC636" />
              </linearGradient>
            </svg>

            <IoCloseCircle
              onClick={onClose}
              className="absolute cursor-pointer right-[13px] top-[13px]"
              size={25}
              style={{ fill: "url(#icon-gradient)" }}
            />
            <div className="w-full">
              <img src={background} className="w-full object-cover" alt="" />
            </div>
            <div className="mt-2 p-4">
              <div className="flex items-center justify-center gap-3">
                <button className="h-[37px] text-white text-[17px]  border-b-[1px] border-[#DE680A] bg-gradient-to-r to-[#292551]   from-[#0C0A1D] rounded-[3px]  w-[135px]">
                  Sign in
                </button>
                <button className="h-[37px] text-white text-[17px]  border-b-[1px] border-[#DE680A] bg-gradient-to-r to-[#292551]   from-[#0C0A1D] rounded-[3px]  w-[135px]">
                  Sign up
                </button>
              </div>

              <div className="flex mt-5 flex-col  w-full gap-8 items-center justify-center">
                <div className="w-[346px]">
                  <img src={platinum} className="" alt="" />
                </div>
                <input
                  className="gradient-border-input"
                  type="text"
                  placeholder="Password"
                />
                <input
                  className="gradient-border-input"
                  type="email"
                  placeholder="Email"
                />

                <button className="w-[381px] text-[20px] rounded-[100px] bg-gradient-to-r to-[#FEC636]   from-[#DE680A] h-[49px]">
                  Sign in
                </button>

                <p className="text-[17px] font-medium">Don't have an account? <span className="underline cursor-pointer text-[#F2A527]" >Sign Up</span></p>
              </div>

              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
