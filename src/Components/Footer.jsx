import React from 'react'
import platinums from "../assets/Frame 57 1.png";
const Footer = () => {
  return (
    <section>
      <div className="mt-[10px] w-full  py-8 justify-center  flex gap-[100px] ">
        <div className="flex flex-col   gap-7">
          <div className="">
            <img className="w-[400px] " src={platinums} alt="" />
          </div>
          <div className="flex px-4  gap-10 text-white">
            <div className="flex flex-col gap-5">
              <div>
                <h1>Casino</h1>
              </div>
              <div className="flex text-[9px] flex-col gap-3">
                <h1>Play casino</h1>
                <h1>Slot</h1>
                <h1>Video Poker</h1>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h1>Table Games</h1>
              </div>
              <div className="flex text-[9px] flex-col gap-3">
                <h1>Blackjack</h1>
                <h1>Roulette</h1>
                <h1>Casino Poker</h1>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h1>Live Casino</h1>
              </div>
              <div className="flex text-[9px] flex-col gap-3">
                <h1>Live Blackjack</h1>
                <h1>Live Baccarat</h1>
                <h1>Live Roulette</h1>
                <h1>All Live Casino Games</h1>
                <h1>Developers</h1>
                <h1>Support</h1>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h1>Company</h1>
              </div>
              <div className="flex text-[9px] flex-col gap-3">
                <h1>About Us</h1>
                <h1>Affiliate Program</h1>
                <h1>FAQs</h1>
                <h1>Responsible Gaming</h1>
                <h1>Contact us</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 flex flex-col gap-6   ">
          <h1 className="text-[28px] flex items-end   font-light uppercase text-white tracking-[px]">
            play real money casino games <br />
            online
          </h1>

          <div>
            <h1 className="text-white">
              If you’re looking for exciting real money casino action, you’re{" "}
              <br /> in the right place.
            </h1>
          </div>
          <div>
            {" "}
            <button className="w-[124px] h-[45px] flex items-center text-[13px] font-bold justify-center rounded-[40px] text-white bg-gradient-to-r from-[#DE680A] to-[#FEC636] px-[23px] py-[13px] shadow-md">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer