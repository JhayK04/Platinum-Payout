import React, { useState } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoGift } from "react-icons/io5";
import { IoTrophy } from "react-icons/io5";
import gif from '../Assets/gif.gif'
import { ImSpades } from "react-icons/im";
import { MdDashboardCustomize } from "react-icons/md";

const SideNav = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex relative     h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-r py-[31px]  hidden md:flex to-[#292551] border-r-[1px] border-[#FCBF32] from-[#201B43] ${
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
              <div className="flex gap-[30px]  justify-center items-center">
                <div>
                  <IoHome className="text-[#434172]" size={25} />
                </div>
                <p
                  className={` transition-all font-[400] text-[#434172] duration-700    ${
                    open
                      ? "opacity-0 transition-all text-[0px]  invisible"
                      : "opacity-100 transition-all text-[16px] visible"
                  }`}
                >
                  Casino Live
                </p>
              </div>
              <div className="flex gap-[30px]  justify-center items-center">
                <div>
                <IoTrophy  className="text-[#434172]" size={25} />
                </div>
                <p
                  className={` transition-all font-[400] text-[#434172] duration-700    ${
                    open
                      ? "opacity-0 transition-all text-[0px]  invisible"
                      : "opacity-100 transition-all text-[16px] visible"
                  }`}
                >
                 Casino Slots
                </p>
              </div>
              <div className="flex gap-[30px] relative  justify-center items-center">
                <div>
                  <IoGift className="text-[#434172]" size={25} />
                </div>
                <p
                  className={` transition-all flex font-[400] text-[#434172] duration-700    ${
                    open
                      ? "opacity-0 transition-all text-[0px]  invisible"
                      : "opacity-100 transition-all text-[16px] visible"
                  }`}
                >
                 PlatinumBets
                 <img  className={` ${open  ? 'w-0 invisible opacity-0' : 'w-[101px] visible opacity-100 -top-[50px] '} absolute    `} src={gif} alt="" />
                </p>
              </div>
              <div className="flex gap-[30px] relative  justify-center items-center">
                <div>
                  <ImSpades className="text-[#434172]" size={25} />
                </div>
                <p
                  className={` transition-all flex font-[400] text-[#434172] duration-700    ${
                    open
                      ? "opacity-0 transition-all text-[0px]  invisible"
                      : "opacity-100 transition-all text-[16px] visible"
                  }`}
                >
                 PlatinumFunding
                 <img  className={` ${open  ? 'w-[50px] invisible' : 'w-[101px] visible opacity-100 -top-[50px]'} absolute    `} src={gif} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SideNav;
