import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { PiWarningCircle } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from 'react';
import Footer from './Footer';
const Withdrawal = () => {
  const [isHovered, setIsHovered] = useState(false);
   const [withdrawTo, setWithdrawTo] = useState("");
   const [dropdownVisible, setDropdownVisible] = useState(false);

   const options = ["fola@gmail.com", "account@bank.com", "wallet@crypto.com"];

   const handleSelectOption = (option) => {
     setWithdrawTo(option);
     setDropdownVisible(false); 
   };

   const toggleDropdown = () => {
     setDropdownVisible(!dropdownVisible);
   };
  return (
    <section>
      <div className="w-full py-4 px-4 md:px-0 md:w-[40rem] md:ml-auto flex  justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-center text-[36px] font-bold ">
            Withdrawal
          </h1>
        </div>

        <div className="flex items-center gap-6 self-end">
          {/* Hover Icon with Advice Box */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <PiWarningCircle
              size={40}
              className="text-white cursor-pointer border border-2-white rounded-full p-2"
            />

            {/* Conditional Rendering of Advice Box to the Left */}
            {isHovered && (
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 bg-[#434172] flex flex-col items-center text-white rounded-xl w-[312px] h-[72px] shadow-lg p-3">
                <div className="flex flex-col gap-1 text-[14px]">
                  <p className="font-semibold">Advice</p>
                  <p>Enter your Account details in this section.</p>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-[10px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-[#434172]"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="" />
      <div>
        <form className="mt-[2rem]">
          <div className="flex flex-col gap-4 justify-center max-w-[40rem] mx-auto">
            {/*  Withdraw */}
            <div>
              <label
                htmlFor="amount"
                className="block text-white font-semibold mb-1"
              >
                Amount to Withdraw
              </label>
              <input
                type="number"
                placeholder="Enter amount to withdraw"
                name="amount"
                id="amount"
                className="text-[#434172] bg-transparent outline-none rounded-full px-3 py-2 w-full border border-[#fec636]"
                required
              />
            </div>

            {/* Withdraw */}
            <div className="relative">
              <label
                htmlFor="withdrawTo"
                className="block text-white font-semibold mb-1"
              >
                WAIT
              </label>
              <div
                className="flex items-center border-[#fec636] border rounded-full px-3 py-2 w-full cursor-pointer"
                onClick={toggleDropdown}
              >
                <input
                  type="text"
                  value={withdrawTo}
                  onChange={(e) => setWithdrawTo(e.target.value)}
                  placeholder="Enter email or select an option"
                  name="withdrawTo"
                  id="withdrawTo"
                  className="flex-grow outline-none bg-transparent text-[#434172]"
                  required
                />
                <FaChevronDown className="text-gray-500 ml-2" />
              </div>

              {dropdownVisible && (
                <div className="absolute left-0 right-0 mt-2 shadow-lg z-10 bg-white rounded">
                  {options
                    .filter((option) =>
                      option.toLowerCase().includes(withdrawTo.toLowerCase())
                    )
                    .map((option) => (
                      <div
                        key={option}
                        onClick={() => handleSelectOption(option)}
                        className="px-4 py-2 text-[#434172] cursor-pointer"
                      >
                        {option}
                      </div>
                    ))}
                </div>
              )}
              <p className="text-[#475569]">
                Different options relevant to the South African banking system
              </p>
            </div>
            <button className="bg-gradient flex justify-center gap-4 items-center w-full md:w-1/2 py-2 mx-auto text-white font-bold mt-8 rounded-full">
              Confirm{" "}
              <span>
                <IoMdCheckmark  size={20}/>
              </span>
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </section>
  );
}

export default Withdrawal