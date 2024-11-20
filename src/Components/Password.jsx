import React, { useState } from "react";
import { PiWarningCircle } from "react-icons/pi";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import Footer from "./Footer";
const Password = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    try {
      const response = await fetch(
        "https://your-api-url.com/api/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            currentPassword: formData.currentPassword,
            newPassword: formData.newPassword,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setSuccess("Password changed successfully!");
        setTimeout(() => {
          navigate("/"); // Redirect on success
        }, 3000);
      } else {
        setError(data.message || "Password change failed.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };
  return (
    <section>
      <div className="w-full py-4 px-4 md:px-0 md:w-[40rem] md:ml-auto flex  justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-center text-[36px] font-bold ">
            Change Password
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
      {/* Change of password */}
      <div>
        {error && (
          <div className="fixed top-[70px] h-[67px] right-[20px] flex items-center justify-center w-[350px] text-white rounded-md shadow-lg z-50">
            <div className="w-[80px] h-[67px] flex items-center justify-center rounded-l-md bg-[#C80000]">
              <RiErrorWarningLine size={25} className="text-[#F8B42E]" />
            </div>
            <p className="flex-1 w-[270px] h-[67px] bg-[#900202] flex items-center pl-6">
              {error}
              <IoMdClose
                className="absolute right-3 cursor-pointer"
                onClick={() => setError("")}
              />
            </p>
          </div>
        )}

        {success && (
          <div className="fixed top-[70px] h-[67px] right-[20px] flex items-center justify-center w-[350px] text-white rounded-md shadow-lg z-50">
            <div className="w-[80px] h-[67px] flex items-center justify-center rounded-l-md bg-[#05581F]">
              <RiErrorWarningLine size={25} className="text-[#F8B42E]" />
            </div>
            <p className="flex-1 w-[270px] h-[67px] bg-[#008A2E] flex items-center pl-6">
              {success}
              <IoMdClose
                className="absolute right-3 cursor-pointer"
                onClick={() => setSuccess("")}
              />
            </p>
          </div>
        )}

        <div className="max-w-[40rem] mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-[1rem]">
            <div className="text-white">
              <label htmlFor="currenpassword">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
                className="text-[#434172] bg-transparent outline-none rounded-full px-3 py-2 w-full border border-[#fec636] mt-3"
                required
              />
            </div>
            <div className="text-white">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                className="text-[#434172] bg-transparent outline-none rounded-full px-3 py-2 w-full border border-[#fec636] mt-3"
                required
              />
            </div>

            <div className="text-white">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm New Password"
                className="text-[#434172] bg-transparent outline-none rounded-full px-3 py-2 w-full border border-[#fec636] mt-3"
                required
              />
            </div>
            <button className="bg-gradient flex justify-center gap-4 items-center w-full md:w-1/2 py-2 mx-auto text-white font-bold mt-3 rounded-full">
              Confirm{" "}
              <span>
                <IoMdCheckmark size={20} />
              </span>
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Password