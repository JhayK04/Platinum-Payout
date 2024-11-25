import React, {useState} from 'react'
import { PiWarningCircle } from "react-icons/pi";
import Footer from './Footer';
import Spade from "../assets/spade.png"
const CouponList = () => {
  const [isHovered, setIsHovered] = useState(false);  
  // Example coupon data
  const coupons = [
    {
      amount: "$10",
      type: "Platinum 60%",
      code: "Platinum60%",
      expiry: "01 February 2022",
      color: "gradient",
    },
    {
      amount: "25% OFF",
      type: "Platinum 78% FC",
      code: "Platinum78%FC",
      expiry: "03 March 2022",
      color: "gradient",
    },
  ];

  // Single CouponCard Logic
  const CouponCard = ({ amount, code, expiry, color, isAddCoupon }) => {
    return (
      <div
        className={`flex justify-center items-center w-80 h-32 ${
          isAddCoupon
            ? "bg-gradient cursor-pointer"
            : `bg-gradient-to-r from-[#8E84FF] to-[#3D3591]`
        } rounded-xl p-4 shadow-lg transition duration-200`}
        style={{
          clipPath: !isAddCoupon
            ? "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%, 15px 50%)"
            : undefined,
        }}
      >
        {isAddCoupon ? (
          // Add Coupon Button Layout
          <div className="text-center text-white">
            <div className="text-2xl font-bold">+</div>
            <p className="mt-2">Add Coupon</p>
          </div>
        ) : (
          // Coupon Card Layout
          <div className="flex  items-center justify-evenly w-full text-white">
            {/* Icon */}
            <div>
              <img src={Spade} alt="spade" />
            </div>

            {/* Coupon Details */}
            <div className="">
              <h2 className="text-xl font-bold">{amount}</h2>
              <p className="text-xs mt-2">{code}</p>

              {/* Expiry Date */}
              <p className="text-xs text-black mt-2">Valid until {expiry}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section>
       <div className="w-full py-4 px-4 md:px-0 md:w-[33rem] md:ml-auto flex  justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-center text-[36px] font-bold ">
             Coupons
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
      <div className="flex justify-center space-x-4 bg-gray-900 p-6">
        {/* Render each coupon */}
        {coupons.map((coupon, index) => (
          <CouponCard
            key={index}
            amount={coupon.amount}
            type={coupon.type}
            code={coupon.code}
            expiry={coupon.expiry}
            color={coupon.color}
          />
        ))}

        {/* Render the "Add Coupon" button */}
        <CouponCard isAddCoupon />
      </div>
      <Footer/>
    </section>
  );
};

export default CouponList;


