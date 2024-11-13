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

  // Close the dropdown on route change
  useEffect(() => {
    if (dropdownOpen) {
      setDropdownOpen(false);
    }
  }, [location]);

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
                    <GiTwoCoins className="text-[#E88717]" />
                    <p>$0,00</p>
                  </Link>
                  <Link
                    to="/deposit"
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
                className={`absolute right-0 mt-2 w-[325px] bg-[#434172] rounded shadow-lg z-50 transition-all duration-500 ease-in-out ${
                  dropdownOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
                }`}
                style={{ overflow: "hidden" }}
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
                    <div className="flex flex-col px-5 gap-6">
                      <Link to="/profile/account" className="gap-4 flex items-center">
                        <RiAccountCircleLine size={30} className="text-[#E88717]" />
                        <p className="text-[16px] text-white">Account</p>
                      </Link>
                      <Link to="/profile/referral" className="gap-4 flex items-center">
                        <FaQuestion size={30} className="text-[#E88717]" />
                        <p className="text-[16px] text-white">Referrals</p>
                      </Link>
                      <Link to="/profile/transaction" className="gap-4 flex items-center">
                        <PiHandDeposit size={30} className="text-[#E88717]" />
                        <p className="text-[16px] text-white">Deposits</p>
                      </Link>
                      <Link to="/profile/password" className="gap-4 flex items-center">
                        <GiPadlock size={30} className="text-[#E88717]" />
                        <p className="text-[16px] text-white">Change Password</p>
                      </Link>
                      <Link to="/profile/documents" className="gap-4 flex items-center">
                        <IoDocumentTextOutline size={30} className="text-[#E88717]" />
                        <p className="text-[16px] text-white">Documents</p>
                      </Link>
                      <Link to="/profile/account" className="gap-4 flex items-center">
                        <BiSupport size={30} className="text-[#E88717]" />
                        <p className="text-[16px] text-white">Live Support</p>
                      </Link>
                      <Link to="/profile/withdrawal" className="gap-4 flex items-center">
                        <BiMoneyWithdraw size={30} className="text-[#E88717]" />
                        <p className="text-[16px] text-white">Withdraw</p>
                      </Link>
                      <Link to="/profile/account" className="gap-4 flex items-center">
                        <GoHistory size={30} className="text-[#E88717]" />
                        <p className="text-[16px] text-white">History</p>
                      </Link>
                      <Link to="/profile/coupons" className="gap-4 flex items-center">
                        <RiCoupon2Line size={30} className="text-[#E88717]" />
                        <p className="text-[16px] text-white">Coupons</p>
                      </Link>
                      <Link to="/profile/bonus" className="gap-4 flex items-center">
                        <BsFillGiftFill size={30} className="text-[#E88717]" />
                        <p className="text-[16px] text-white">Bonus</p>
                      </Link>

                      <Link
                        to="/"
                        onClick={handleLogout}
                        className="text-[16px] flex items-center  border-[#4E4D78] gap-4 border-t-[1px] py-2 "
                      >
                        <PiSignOutLight size={30} className="text-[#E88717]" />
                        <p className="text-[16px] text-white">Logout</p>
                      </Link>
                    </div>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="text-[17px] px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="text-[17px] px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/login"
                className="w-[94px] h-[45px] flex items-center justify-center rounded-[40px] text-[13px] text-white border border-white bg-[#25214B] backdrop-blur-md"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="w-[94px] h-[45px] flex items-center justify-center rounded-[40px] text-[13px] text-white bg-gradient-to-r from-[#DE680A] to-[#FEC636] px-[23px] py-[13px] shadow-md"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Success message */}
      {success && (
        <div className="absolute z-10 bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-[500px] px-4">
          <div className="flex items-center justify-between gap-2 bg-green-500 text-white rounded p-4">
            <p>{success}</p>
            <button onClick={handleCloseMessage} className="text-white hover:text-gray-200">
              <IoMdClose size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNav;
