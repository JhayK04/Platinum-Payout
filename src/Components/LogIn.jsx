import React, { useEffect, useState } from "react";
import background from "../Assets/Frame 1395.png";
import platinum from "../Assets/Frame 57 1.png";
import { IoCloseCircle } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const LogIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 10000); // Dismiss after 5 seconds
      return () => clearTimeout(timer); // Clear timeout on component unmount
    }
  }, [error, success]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (Login)
 // Handle form submission (Login)
 const handleSubmit = async (e) => {
  e.preventDefault();
  setError(""); // Clear error message before login

  try {
    const response = await fetch("https://platinum-backend-project.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log(data)

    if (response.ok) {
      setSuccess("Login successful!");
      setError("");

      // Store user information in localStorage
      localStorage.setItem("user", JSON.stringify(formData)); 

      // Navigate to homepage
      navigate("/", { state: { success: "Login successful!" } });
    } else {
      // Handle error response
      setError(data.message || "Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    setError("An error occurred while logging in. Please try again.");
  }
};


 
const handleCloseMessage = () => {
  setError("");
  setSuccess("");
};







  return (
    <div className="bg-black/30 h-full flex items-center justify-center py-[200px] backdrop-blur-md overflow-y-hidden z-[99] absolute left-0 right-0 top-0 bottom-0">
       {(error || success) && (
          <div className="fixed top-[70px]  h-[67px] right-[20px] flex items-center  justify-center w-[350px]  text-white  rounded-md shadow-lg z-50">
           <div className={`w-[80px] h-[67px] flex items-center justify-center rounded-l-md bg-[#05581F] ${error ? "bg-[#C80000]" : "bg-[#05581F]"}`}>
           <RiErrorWarningLine size={25} className="text-[#F8B42E]" />
           </div>
            <p className={`flex-1 relative w-[270px] rounded-r-md h-[67px] flex items-center justify pl-6  ${error ? "bg-[#900202]" : "bg-[#008A2E]"}`}>
              {error || success}
              <IoMdClose
              className="cursor-pointer absolute right-3 text-[#F8B42E] ml-3"
              size={20}
              onClick={handleCloseMessage}
            />
            </p>
           
          </div>
        )}
      <div className="mx-auto flex flex-col h-[650px] bg-[#04030D overflow-y-auto bg-[#04030D] hide-scrollbar relative rounded-[30px] w-[680px] border-[1px] border-[#FCBF32] text-white">
        <svg width="0" height="0">
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
          <img src={background} className="w-full object-cover" alt="background" />
        </div>

        <div className="mt-2 p-4">
          <div className="flex items-center justify-center gap-5">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `h-[37px] text-[17px] rounded-[3px] w-[135px] flex items-center justify-center ${
                  isActive
                    ? "text-white border-b-[1px] border-[#DE680A] bg-gradient-to-r to-[#292551] from-[#0C0A1D]"
                    : "text-[#68686E]"
                }`
              }
            >
              Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `h-[37px] text-[17px] rounded-[3px] w-[135px] flex items-center justify-center ${
                  isActive
                    ? "text-white border-b-[1px] border-[#DE680A] bg-gradient-to-r to-[#292551] from-[#0C0A1D]"
                    : "text-[#68686E]"
                }`
              }
            >
              Sign Up
            </NavLink>
          </div>

          <form onSubmit={handleSubmit} className="flex mt-5 flex-col w-full gap-8 items-center justify-center">
            <div className="w-[346px]">
              <img src={platinum} alt="Platinum logo" />
            </div>
            <input
              className="gradient-border-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              className="gradient-border-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />

            <button
              type="submit"
              className="w-[381px] text-[20px] rounded-[100px] bg-gradient-to-r to-[#FEC636] from-[#DE680A] h-[49px]"
            >
              Sign In
            </button>


            <p className="text-[17px] font-medium">
              Don't have an account?{" "}
              <NavLink to="/signup" className="underline cursor-pointer text-[#F2A527]">
                Sign Up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
