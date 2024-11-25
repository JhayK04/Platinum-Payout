import React, {useState} from 'react'
import { PiWarningCircle } from "react-icons/pi";
import CashBag from "../assets/cashbag.png"
import MoneyBag from "../assets/moneybag.png"
import Dollar from "../assets/dollar.png"
import Sign from "../assets/sign.png"
import Footer from "./Footer"
const Bonus = () => {
  const bonusData = [
    {
      icon: Dollar,
      amount: "220",
      label: "Total Balance",
      percentage: "3.46",
      description: "Since last month",
      isZero: false,
    },
    {
      icon: CashBag,
      amount: "220",
      label: "Bonus Balance",
      percentage: "3.46",
      description: "Since last month",
      isZero: false,
    },
    {
      icon: MoneyBag,
      amount: "220",
      label: "Real Balance",
      percentage: "3.46",
      description: "Since last month",
      isZero: false,
    },
    {
      icon: Sign,
      amount: "000",
      label: "No Bonuses available",
      percentage: "3.46",
      description: "Since last month",
      isZero: true,
    },
  ];
 const [isHovered, setIsHovered] = useState(false); 
  return (
    <section>
      <div className="w-full py-4 px-4 md:px-0 md:w-[33rem] md:ml-auto flex  justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-center text-[36px] font-bold ">
            Bonus
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
      <div className="bg-gray-900 flex flex-wrap  items-center gap-6 mt-8">
        {bonusData.map((card, index) => (
          <BonusCard
            key={index}
            icon={card.icon}
            amount={card.amount}
            label={card.label}
            percentage={card.percentage}
            description={card.description}
            isZero={card.isZero}
          />
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Bonus


const BonusCard = ({ icon, amount, label, percentage, description, isZero }) => {
  return (
    <div className="flex flex-col justify-between w-64 h-36 bg-[#231F4A] rounded-xl p-4 shadow-lg">
      {/* Top Section: Icon and Amount */}
      <div className="flex items-center">
        <div className="mr-3">
          <img src={icon} alt={icon} className="w-[100%]" />
        </div>
        <div>
          <h2
            className={`text-2xl font-bold ${
              isZero ? "text-gray-400" : "text-white"
            }`}
          >
            {amount}
            <span className="text-sm ml-1">ZAR</span>
          </h2>
          <p className={`text-sm ${isZero ? "text-gray-400" : "text-white"}`}>
            {label}
          </p>
        </div>
      </div>

      {/* Bottom Section: Percentage and Description */}
      <div className="flex items-center text-xs mt-2">
        <span className="text-green-400 flex items-center mr-1 gap-3">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.333984 8.72634L7.39398 1.66634H3.00065V0.333008H9.66732V6.99967H8.33398V2.60634L1.27398 9.66634L0.333984 8.72634Z"
              fill="#27AE60"
            />
          </svg>
          {percentage}%
        </span>
        <span className={`ml-1 ${isZero ? "text-gray-500" : "text-gray-300"}`}>
          {description}
        </span>
      </div>
    </div>
  );
};


