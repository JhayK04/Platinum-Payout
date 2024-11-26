import React, { useState } from 'react'
import { VscCopy } from "react-icons/vsc";
import { PiWarningCircle } from "react-icons/pi";
import Footer from './Footer';
const Refferals = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section>
      <div className="w-full py-4 px-4 md:px-0 md:w-[33rem] md:ml-auto flex  justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-center text-[36px] font-bold ">
            Referrals
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
      <div className="text-white text-center bg-[#231F4A] w-full md:w-[600px] mx-auto mt-8 p-4 md:p-0">
        <p className="text-[16px] bg-gradient-to-r from-[#DE680A] to-[#FEC636] py-4 ">
          Refer a friend and earn money
        </p>
        <p className="w-full md:w-[540px] mx-auto text-center text-[16px] pt-4">
          Get your referral link to give your friends and receive ZAR 50.00 in
          real MONEY for each friend you refer. If they use it, we’ll reward you
          with ZAR50.
        </p>
        <p className='w-full md:w-[441px] mx-auto font-[600] py-6'>
          To activate your balance, your friend's first deposit must be at least
          R$ 20.00"
        </p>
        <div className="flex items-center justify-center pb-4">
          <input
            type="copy"
            name="copy"
            placeholder="Nahttps://Platinum-Payout/ref/01j6ab7qq3q6c05fm5dkn0379bme"
            className="text-[#434172] bg-transparent outline-none rounded-full px-3 py-2 w-[514px] border border-[#fec636] mt-3 "
          />
          <VscCopy color="#FF7A00" className="relative right-8 top-2" />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Refferals