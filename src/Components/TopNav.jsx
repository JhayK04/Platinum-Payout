import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import platinums from "../Assets/Frame 57 1.png";
import { RiErrorWarningLine } from "react-icons/ri";
import { RiAccountCircleLine } from "react-icons/ri";
import { PiHandDeposit } from "react-icons/pi";
import { FaQuestion } from "react-icons/fa6";
import { GiTwoCoins } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { GiPadlock } from "react-icons/gi";
import { RiCoupon2Line } from "react-icons/ri";
import { BsFillGiftFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiSignOutLight } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import { BiMoneyWithdraw } from "react-icons/bi";
import tola from "../Assets/Group 2.png";

const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }

    const successShown = localStorage.getItem("successShown");
    if (location.state && location.state.success && !successShown) {
      setSuccess(location.state.success);
      console.log("Displaying success message:", location.state.success);
      localStorage.setItem("successShown", "true");

      setTimeout(() => {
        setSuccess("");
        localStorage.removeItem("successShown");
      }, 3000);
    }

    return () => {
      if (location.state && location.state.success) {
        navigate(location.pathname, { replace: true });
      }
    };
  }, [location.state, navigate]);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("successShown");
    navigate("/login");
  };

  const handleCloseMessage = () => {
    setSuccess("");
  };

  return (
    <div className="relative px-6 py-7 shadow-lg flex items-center justify-between h-full z-30">
      <div className="absolute inset-0 backdrop-blur-md bg-white rounded-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A1D] to-[#292551] opacity-100 backdrop-blur-[5px]"></div>

      <div className="relative z-10 flex items-center justify-between w-full">
        <div>
          <img className="w-[200px] h-auto" src={platinums} alt="Platinum Logo" />
        </div>

        <div className="flex items-center gap-5">
        {user ? (
  <div className="relative">
    <div className="flex items-center gap-3">
    <div className="flex gap-3">
              <Link
                to="/login"
                className="w-[94px] h-[45px] flex items-center gap-2 text-[13px] justify-center rounded-[40px] border border-white text-white  py-[13px] bg-[#25214B] backdrop-blur-md"
              >
               <GiTwoCoins className="text-[#E88717]"  />
               <p>$0,00</p>
              </Link>
              <Link
                to="/signup"
                className="w-[94px] h-[45px] flex items-center text-[13px] justify-center rounded-[40px] text-white bg-gradient-to-r from-[#DE680A] to-[#FEC636] px-[23px] py-[13px] shadow-md"
              >
              Deposit
              </Link>
              </div> 
    <button onClick={toggleDropdown} className="text-white transition-colors">
   <img src={tola} alt="" />
    </button>
    </div>
    <div 
          className={`absolute right-0 mt-2 w-[325px] bg-[#434172] rounded shadow-lg z-50 transition-all duration-500 ease-in-out ${dropdownOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}
          style={{ overflow: 'hidden' }}
        >
          <nav className="flex flex-col">
            {user && (
              <span className="text-[17px] px-4 py-2 text-black dark:text-white">
                <div className="flex items-center gap-2 border-b-[1px] border-[#4E4D78] py-2  text-[13px]">
                <img src={tola} alt="" />
             <span className="text-[#E88717]"> {user.email} </span>
              </div>
              </span>
            )}
            {user ? (
              <div className="flex flex-col px-5  gap-6">
              <Link className=" gap-4 flex items-center">
              <RiAccountCircleLine size={30} className="text-[#E88717]" />
              <p className="text-[16px] text-white">Account</p>
              </Link>
              <Link className=" gap-4 flex items-center">
              <FaQuestion  size={30} className="text-[#E88717]" />
              <p className="text-[16px] text-white">Referrals</p>
              </Link>
              <Link className=" gap-4 flex items-center">
              <PiHandDeposit  size={30} className="text-[#E88717]" />
              <p className="text-[16px] text-white">Deposits</p>
              </Link>
              <Link className=" gap-4 flex items-center">
              <GiPadlock  size={30} className="text-[#E88717]" />
              <p className="text-[16px] text-white">Change Password</p>
              </Link>
              <Link className=" gap-4 flex items-center">
              <IoDocumentTextOutline  size={30} className="text-[#E88717]" />
              <p className="text-[16px] text-white">Documents</p>
              </Link>
              <Link className=" gap-4 flex items-center">
              <BiSupport  size={30} className="text-[#E88717]" />
              <p className="text-[16px] text-white">Live Support</p>
              </Link>
              <Link className=" gap-4 flex items-center">
              <BiMoneyWithdraw  size={30} className="text-[#E88717]" />
              <p className="text-[16px] text-white">Withdraw</p>
              </Link>
              <Link className=" gap-4 flex items-center">
              <GoHistory  size={30} className="text-[#E88717]" />
              <p className="text-[16px] text-white">History</p>
              </Link>
              <Link className=" gap-4 flex items-center">
              <RiCoupon2Line  size={30} className="text-[#E88717]" />
              <p className="text-[16px] text-white">Coupons</p>
              </Link>
              <Link className=" gap-4 flex items-center">
              <BsFillGiftFill  size={30} className="text-[#E88717]" />
              <p className="text-[16px] text-white">Bonus</p>
              </Link>

                <Link to="/" onClick={handleLogout} className="text-[16px] flex items-center  border-[#4E4D78] gap-4 border-t-[1px] py-2 ">
                <PiSignOutLight  size={30} className="text-[#E88717]" />
                 <p className="text-[16px] text-white">Logout</p> 
                </Link>
               
             
              </div>
            ) : (
              <>
                <Link to="/login" className="text-[17px] px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  Login
                </Link>
                <Link to="/register" className="text-[17px] px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
  </div>
) 

           
           : (
            <>
              <Link
                to="/login"
                className="w-[94px] h-[45px] flex items-center text-[13px] justify-center rounded-[40px] border border-white text-white px-[23px] py-[13px] bg-white/10 backdrop-blur-md"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="w-[94px] h-[45px] flex items-center text-[13px] justify-center rounded-[40px] text-white bg-gradient-to-r from-[#DE680A] to-[#FEC636] px-[23px] py-[13px] shadow-md"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {success && (
        <div className="fixed top-[70px] right-[20px] flex items-center justify-center w-[350px] h-[67px] text-white rounded-md shadow-lg z-50">
          <div className="w-[80px] h-full flex items-center justify-center rounded-l-md bg-[#05581F]">
            <RiErrorWarningLine size={25} className="text-[#F8B42E]" />
          </div>
          <div className="relative w-[270px] flex-1 rounded-r-md h-full flex items-center pl-6 bg-[#008A2E]">
            {success}
            <IoMdClose
              className="cursor-pointer absolute right-3 text-[#F8B42E]"
              size={20}
              onClick={handleCloseMessage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNav;
