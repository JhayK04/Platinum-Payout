import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import background from "../Assets/Frame 1395.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiCoupon2Line } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";

const Deposit = () => {
  return (
    <div className="bg-black/30 h-full overflow-hidden flex items-center justify-center py-[50px] backdrop-blur-md z-[99] absolute left-0 right-0 top-0 bottom-0">
      <div className="mx-auto flex flex-col  overflow-y-auto h-[670px] hide-scrollbar bg-[#04030D] relative rounded-[30px] w-[523px] border-[1px] border-[#FCBF32] text-white">
        <svg width="0" height="0">
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" stopColor="#DE680A" />
            <stop offset="100%" stopColor="#FEC636" />
          </linearGradient>
        </svg>

        <Link to="/">
          <IoCloseCircle
            className="absolute cursor-pointer right-[13px] top-[13px]"
            size={25}
            style={{ fill: "url(#icon-gradient)" }}
          />
        </Link>
        <div className="w-full">
          <img src={background} className="w-full object-cover" alt="" />
        </div>
        <div className="flex items-center mt-5 justify-center gap-5">
          <NavLink
            to="/deposit"
            className={({ isActive }) =>
              `h-[37px] text-[17px] rounded-[3px] w-[135px] flex items-center justify-center ${
                isActive
                  ? "text-white border-b-[1px] border-[#DE680A] bg-gradient-to-r to-[#292551] from-[#0C0A1D]"
                  : "text-[#68686E]"
              }`
            }
          >
            Deposit
          </NavLink>
          <div className="*:h-[37px] text-[17px] leading-[29px] text-[#EB901E] rounded-[3px] w-[185px] flex items-center justify-center">
            Start earning now!
          </div>
        </div>
        <div className="wallet-section text-center mt-6 p-4 rounded-md text-white ">
          <h2 className="text-[29px] font-bold">YOUR WALLET</h2>
          <h2 className="text-center text-[13px] py-3">
            {" "}
            Enter Your Desired Amount
          </h2>
          <input
            className="deposit w-full  mt-3 mx-0"
            type="text"
            placeholder="Amount"
            required
          />
        </div>

        <div className="swiper-wrapper mb-4 flex justify-center items-center">
          <Swiper
            spaceBetween={15}
            slidesPerView={4}
            navigation={{
              nextEl: ".swiper-button-next-unique-1",
              prevEl: ".swiper-button-prev-unique-1",
            }}
            pagination={{
              el: ".swiper-pagination-unique-1",
              clickable: true,
              bulletClass: "swiper-pagination-unique-bullet",
              bulletActiveClass: "swiper-pagination-unique-bullet-active",
            }}
            className="flex items-center justify-center w-[450px]"
          >
            <SwiperSlide className="">
              <button className="bg-gradient-to-r from-[#DE680A] to-[#FEC636] text-white w-full h-[43px] rounded-full">
                ZAR 20
              </button>
            </SwiperSlide>
            <SwiperSlide className="">
              <button className="bg-gradient-to-r from-[#DE680A] to-[#FEC636] text-white w-full h-[43px] rounded-full">
                ZAR 50
              </button>
            </SwiperSlide>
            <SwiperSlide className=" flex items-center justify-center">
              <button className="bg-gradient-to-r from-[#DE680A] to-[#FEC636] text-white w-full h-[43px] rounded-full">
                ZAR 100
              </button>
            </SwiperSlide>
            <SwiperSlide className=" flex items-center justify-center">
              <button className="bg-gradient-to-r from-[#DE680A] to-[#FEC636] text-white w-full h-[43px] rounded-full">
                ZAR 100
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="coupon-section flex w-full justify-between px-[35px] mb-4">
          <div className="flex items-center gap-2">
            <RiCoupon2Line size={20} className="text-[#E88717]" />
            <h1 className="text-[#7E7E7E]">Bonus Coupon</h1>
          </div>
          <div className="flex items-center gap-2">
            <FaPlusCircle size={20} className="text-[#E88717]" />
            <h1 className="text-[#7E7E7E]">Add Coupon</h1>
          </div>
        </div>

        <button className=" bg-gradient-to-r w-[400px] mx-auto from-[#DE680A] to-[#FEC636] text-white  mb-7 py-3 rounded-full">
          Deposit
        </button>
      </div>
    </div>
  );
};

export default Deposit;
