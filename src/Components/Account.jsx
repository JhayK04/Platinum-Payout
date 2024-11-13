import React, { useEffect, useState } from "react";
import platinums from "../Assets/Frame 57 1.png";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { PiWarningCircle } from "react-icons/pi";
import { GiCancel } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import { BiCheck } from "react-icons/bi";

const Account = () => {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState(null);

  useEffect(() => {
    // Retrieve the user from localStorage (no need for a token here)
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-40">
     <div className="flex border-b-[1px] border-white py-4   justify-between ">
      <div className="flex flex-col gap-1">
        <h1 className="text-white text-[20px] ">Your Profile</h1>
        <p className="text-[#211F3E]">Please update your profile settings here</p>
      </div>
      <div className="flex items-center gap-6">
      
      <div class="relative bg-[#434172] flex flex-col justify-center   items-center text-[14px] text-white  rounded-xl w-[312px] h-[72px]">
 <div className="flex flex-col gap-2">
 <p class=" font-semibold">Advice</p>
  <p>Enter your Account details in this section.</p>
  </div>
 
  <div class="absolute bottom-[37%] right-[-20px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] rounded-br-[10px]  border-b-transparent  border-l-[20px] border-l-[#434172]"></div>
  
</div>
<PiWarningCircle  size={25} className="text-white"/>
      </div>
     </div>
     <div className="py-8 border-b-[1px] border-white flex flex-col gap-6">
  <div className="text-white flex items-center gap-4">
   <p className="w-[90px]">Full Name</p> <input className="fullname w-[500px]" placeholder="Adetola Egberongbe" type="text" value={user.name} readOnly />
  </div>
  <div className="text-white flex items-center gap-4">
   <p className="w-[90px]">Email</p> <input className="email" placeholder="Adetola Egberongbe" type="text" value={user.email} readOnly />
  </div>
  

</div>
<div className="py-8 border-b-[1px] border-white flex flex-col  gap-6">
 
<div className=" flex items-center gap-5">
<p className="text-white w-[150px]">Phone Number</p>
<PhoneInput
        country={'us'}
        value={phone}
        onChange={setPhone}
        enableSearch={true}  // Enables search for country codes
        style={{ transition: 'none' }} // Disable transitions for hover effects
        // Apply Tailwind styles to the input and dropdown
        inputClass="b"
        buttonClass="bg-black text-white p-2 border border-gray-300 rounded-l-lg"
        dropdownClass=""
        searchClass="border border-gray-300 p-2 rounded-lg"
      />
   
  </div>
  <div className="flex items-center gap-5">
  <p className="text-white w-[130px]">Date of Birth</p>
  <div className="date-picker-container ">

    <div className="calendar-icon flex items-center justify-center bg-gradient-to-r from- to- rounded-l-full">
        <svg className="" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        </div>
        <DatePicker
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="DD/MM/YYYY"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          className="styled-date-picker"
          wrapperClassName="styled-date-picker-wrapper"
          popperClassName="styled-date-picker-popper"
        />
      </div>
      </div>
  </div>
  <div className="flex items-center mt-7 justify-center gap-6">
  <button
              
                className="w-[104px] h-[45px] flex items-center gap-2 justify-center rounded-[40px] text-[13px] text-white border border-white bg-[#25214B] backdrop-blur-md"             >
                Cancel
                <LiaTimesSolid size={20} />
              </button>
              <button
              
                className="w-[104px] h-[45px] gap-2 flex items-center justify-center rounded-[40px] text-[13px] text-white bg-gradient-to-r from-[#DE680A] to-[#FEC636] px-[23px] py-[13px] shadow-md"
              >
               Save
               <BiCheck size={25}/>
              </button>
  </div>
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
                  play real money casino games <br />online
                </h1>

                <div>
                  <h1 className="text-white">
                  If you’re looking for exciting real money casino action, you’re <br /> in the right place. 
                  </h1>
                </div>
                <div> <button className="w-[124px] h-[45px] flex items-center text-[13px] font-bold justify-center rounded-[40px] text-white bg-gradient-to-r from-[#DE680A] to-[#FEC636] px-[23px] py-[13px] shadow-md">
          Join Now
        </button></div>
              </div>
            </div>
    </div>
  );
};

export default Account;
