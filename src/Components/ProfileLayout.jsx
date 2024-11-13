import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Documents from "./Documents";
import Transactions from "./Transactions";
import Coupons from "./Coupons";
import Password from "./Password";
import Refferals from "./Refferals";
import Withdrawal from "./Withdrawal";
import Bonus from "./Bonus";
// import Documents from "./Documents";
// import Transaction from "./Transaction";

const ProfileLayout = () => {
  return (
    <div className="w-full h-[100vh] relative overflow-y-scroll p-5 bg-gradient-to-b from-[#0D0A1F] to-[#181534] flex flex-col ">
      {/* Top Links (Profile Navigation) */}
      <div className="w-full  border-b-[1px] border-[#191732]  p-4 flex justify-between">
        <NavLink
          to="/profile/account"
          className={({ isActive }) =>
            ` ${
              isActive ? "text-[#DE7D1A] " : "text-[#1E293B] "
            }`
          }
        >
          Account
        </NavLink>
        <NavLink
          to="/profile/documents"
          className={({ isActive }) =>
            ` ${
              isActive ? "text-[#DE7D1A] " : "text-[#1E293B] "
            }`
          }
        >
          Documents
        </NavLink>
        <NavLink
          to="/profile/transaction"
          className={({ isActive }) =>
            ` ${
              isActive ? "text-[#DE7D1A] " : "text-[#1E293B] "
            }`
          }
        
        >
          Transaction
        </NavLink>
        <NavLink
          to="/profile/password"
          className={({ isActive }) =>
            ` ${
              isActive ? "text-[#DE7D1A] " : "text-[#1E293B] "
            }`
          }
          >
         Password
        </NavLink>
        <NavLink
          to="/profile/withdrawal"
          className={({ isActive }) =>
            ` ${
              isActive ? "text-[#DE7D1A] " : "text-[#1E293B] "
            }`
          }
        >
         Withdrawal
        </NavLink>
        <NavLink
          to="/profile/bonus"
          className={({ isActive }) =>
            ` ${
              isActive ? "text-[#DE7D1A] " : "text-[#1E293B] "
            }`
          }
        >
        Bonus
        </NavLink>
        <NavLink
          to="/profile/coupons"
          className={({ isActive }) =>
            ` ${
              isActive ? "text-[#DE7D1A] " : "text-[#1E293B] "
            }`
          }
        >
        Coupons
        </NavLink>
        <NavLink
          to="/profile/referral"
          className={({ isActive }) =>
            ` ${
              isActive ? "text-[#DE7D1A] " : "text-[#1E293B] "
            }`
          }
        >
         Referral
        </NavLink>
        {/* Add more links as needed */}
      </div>

      {/* Content Area */}
      <div className="flex-1 p-5">
        <Routes>
          {/* Route to different profile sections */}
          <Route path="/account" element={<Account />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/password" element={<Password />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/referral" element={<Refferals />} />
          <Route path="/bonus" element={<Bonus />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileLayout;
