import React, { useState } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { IoHome, IoGift, IoTrophy } from "react-icons/io5";
import { ImSpades } from "react-icons/im";
import { NavLink } from "react-router-dom";
import gif from '../Assets/gif.gif';

const SideNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex relative h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-r py-[31px] hidden xl:flex to-[#292551] border-r-[1px] border-[#FCBF32] from-[#201B43] ${
          open ? "w-[150px] fixed" : "w-[300px]"
        } transition-all duration-700 ease-in-out relative flex flex-col px-[50px]`}
      >
        {/* Toggle Button */}
        <div
          onClick={handleOpen}
          className="absolute -top-2 py-[31px] left-[50px]"
        >
          <p className="cursor-pointer flex font-bold items-center justify-center text-white text-[20px] w-10 h-10 rounded-full bg-[#434172]">
            {open ? <IoChevronForward /> : <IoChevronBackOutline />}
          </p>
        </div>

        <div className="py-[100px]">
          {/* Sidebar Content */}
          <div>
            <div className="flex flex-col text-white font-bold items-start gap-[91px]">
              <div className="flex gap-[30px] justify-center items-center">
              {/* Casino Live Link */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` ${
                    isActive ? "bg-gradient-to-r from-[#DE680A] to-[#FEC636] rounded-full " : ""
                  }`
                }
              >
               
                  <IoHome className="text-[#434172] m-2" size={25} />
               
                </NavLink>
                <NavLink
                 to="/"
                 className={({ isActive }) =>
                  `transition-all font-[400] text-[#434172] duration-700 ${
                    isActive ? "text-[#DE7D1A]" : ""
                  }
                  ${
                    open
                      ? "opacity-0 transition-all text-[0px] invisible"
                      : "opacity-100 transition-all text-[16px] visible"}
                `}
                >
                  Casino Live
                </NavLink>
            </div>
               <div className="flex gap-[30px] justify-center items-center ">
              {/* Casino Slots Link */}
              <NavLink
                to="/casino-slots"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-gradient-to-r from-[#DE680A] to-[#FEC636] rounded-full " : ""
                  }`
                }
              >
               
                  <IoTrophy className="text-[#434172] m-2" size={25} />
              </NavLink>
              <NavLink
                 to="/casino-slots"
                 className={({ isActive }) =>
                  `transition-all font-[400] text-[#434172] duration-700 ${
                    isActive ? "text-[#DE7D1A]" : ""
                  }
                  ${
                    open
                      ? "opacity-0 transition-all text-[0px] invisible"
                      : "opacity-100 transition-all text-[16px] visible"}
                `}
                >
                  Casino Slots
                </NavLink>
            </div>

              {/* Platinum Bets Link */}
              <div className="flex gap-[30px] relative justify-center items-center">
              <NavLink
                to="/platinumbets"
                className={({ isActive }) =>
                  ` ${
                    isActive ? "bg-gradient-to-r from-[#DE680A] to-[#FEC636] rounded-full " : ""
                  }`
                }
              >
              
                  <IoGift className="text-[#434172] m-2" size={25} />
               </NavLink>
               <NavLink
                 to="/platinumbets"
                 className={({ isActive }) =>
                  `transition-all font-[400] text-[#434172] duration-700 ${
                    isActive ? "text-[#DE7D1A]" : ""
                  }
                  ${
                    open
                      ? "opacity-0 transition-all text-[0px] invisible"
                      : "opacity-100 transition-all text-[16px] visible"}
                `}
                >
                  PlatinumBets
                  <img
                    className={`${
                      open
                        ? "w-0 invisible opacity-0"
                        : "w-[101px] visible opacity-100 -top-[50px]"
                    } absolute`}
                    src={gif}
                    alt=""
                  />
                </NavLink>
                </div>

              {/* Platinum Funding Link */}
              <div className="flex gap-[30px] relative justify-center items-center">
              <NavLink
                to="/platinumfunding"
                className={({ isActive }) =>
                  ` ${
                    isActive ? "bg-gradient-to-r from-[#DE680A] to-[#FEC636] rounded-full" : ""
                  }`
                }
              >
              
                  <ImSpades className="text-[#434172] m-2" size={25} />
               </NavLink>
               <NavLink
                 to="/platinumfunding"
                 className={({ isActive }) =>
                  `transition-all font-[400] text-[#434172] duration-700 ${
                    isActive ? "text-[#DE7D1A]" : ""
                  }
                  ${
                    open
                      ? "opacity-0 transition-all text-[0px] invisible"
                      : "opacity-100 transition-all text-[16px] visible"}
                `}
                >
                  PlatinumFunding
                  <img
                    className={`${
                      open
                        ? "w-[50px] invisible"
                        : "w-[101px] visible opacity-100 -top-[50px]"
                    } absolute`}
                    src={gif}
                    alt=""
                  />
                </NavLink>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
