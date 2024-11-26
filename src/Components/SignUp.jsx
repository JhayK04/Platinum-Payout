import React, { useState, useEffect } from "react";
import background from "../assets/Frame 1395.png";
import platinum from "../assets/Frame 57 1.png";
import { IoCloseCircle } from "react-icons/io5";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io"; // Import the close icon
import Select from "react-select"; // Import react-select
import countryList from "react-select-country-list"; // To get country list options
import { RiErrorWarningLine } from "react-icons/ri";

const SignUp = ({ signup, onClose, onButtonClick, onButtonClicks }) => {
  const [formData, setFormData] = useState({
    country: "",
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  // Clear messages after 5 seconds
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
      [e.target.name]: e.target.value
    });
  };

  // Handle country select
  const handleCountryChange = (selectedOption) => {
    setFormData({
      ...formData,
      country: selectedOption.value
    });
  };

  // Handle form submission
  // Handle form submission
// Handle form submission for signup
const handleSubmit = async (e) => {
  e.preventDefault();

  setSuccess(""); // Clear success message before trying again

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match!");
    return;
  }

  try {
    const response = await fetch("https://platinum-backend-project.onrender.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      setSuccess("Registration successful!");
      setError("");

      // Store the user details from formData directly after signup
      const userData = {
        name: formData.name,
        email: formData.email,
        country: formData.country,
      };

      // Store the user information in localStorage based on formData
      localStorage.setItem("user", JSON.stringify(userData));

      // Navigate to the homepage and pass the user details to the state
      navigate("/", { state: { success: "Registration successful!", user: userData } });

    } else if (data.message === "User already exists") {
      setError("User already exists.");
      setSuccess("");
    } else {
      setError(data.message || "Registration failed.");
      setSuccess("");
    }
  } catch (error) {
    console.error("Error during registration:", error);
    setError("An error occurred while registering. Please try again.");
    setSuccess("");
  }
};


  

 
  const handleCloseMessage = () => {
    setError("");
    setSuccess("");
  };

  const options = countryList().getData(); // Get list of countries

  return (
    <div className="overflow-hidden ">
      <div className="bg-black/30 h-full overflow-hidden flex items-center justify-center py-[50px] backdrop-blur-md z-[99] absolute left-0 right-0 top-0 bottom-0">
        
        {/* Floating Success/Error Message */}
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

        <div className="mx-auto flex flex-col overflow-y-auto h-[650px] hide-scrollbar bg-[#04030D] relative rounded-[30px] w-[680px] border-[1px] border-[#FCBF32] text-white">
          <svg width="0" height="0">
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%">
              <stop offset="0%" stopColor="#DE680A" />
              <stop offset="100%" stopColor="#FEC636" />
            </linearGradient>
          </svg>

          <Link to="/">
            <IoCloseCircle
              onClick={onClose}
              className="absolute cursor-pointer right-[13px] top-[13px]"
              size={25}
              style={{ fill: "url(#icon-gradient)" }}
            />
          </Link>

          <div className="w-full">
            <img src={background} className="w-full object-cover" alt="" />
          </div>

          <div className="mt-2 p-3">
            <div className="flex items-center justify-center gap-5">
              <NavLink
                to="/login"
                onClick={onButtonClicks}
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
                onClick={onButtonClick}
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

            <form onSubmit={handleSubmit} className="flex mt-5 flex-col w-full gap-10   justify-center">
              <div className="w-[346px] flex items-center justify-center mx-auto">
                <img src={platinum} alt="" />
              </div>
              <input
                  className="name w-full mx-0"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              {/* Country Select and Input Fields */}
              <div className="flex justify-between  gap-6 ">
        
            
            <Select
  className="text-black"
  options={options}
  value={options.find(option => option.value === formData.country)}
  onChange={handleCountryChange}
  placeholder="Select a country"
  styles={{
    control: (provided) => ({
      ...provided,
      width: '300px', // Fixed width
      borderRadius: '9999px', // Fully rounded
      backgroundColor: '#231F4A', // Dark background
      padding: '9px', // Padding inside the input
      border: '1px solid transparent', // Transparent border to support background-clip
      backgroundImage: `linear-gradient(#231F4A, #231F4A), linear-gradient(to right, #DE680A, #FEC636)`, // Gradient border
      backgroundOrigin: 'border-box', // Makes gradient apply to the border
      backgroundClip: 'padding-box, border-box', // Ensures gradient doesn't affect the padding
      outline: 'none', // No outline when focused
      boxShadow: 'none', // Disable any box-shadow
      "&:hover": {
        borderColor: 'transparent', // No hover effect, keep as transparent
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff', // Ensure the selected value text is white
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#68686E', // Placeholder text color
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#FCBF32', // Arrow color to match the theme
      cursor: 'pointer', // Make dropdown icon a pointer
      "&:hover": {
        color: '#FCBF32', // No hover color change
      }
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none' // Remove the line separator between arrow and value
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 50, // Ensure dropdown stays on top
      backgroundColor: '#231F4A', // Match dropdown background
      borderRadius: '10px',
      position: 'absolute', // Prevent pushing other content up/down
      marginTop: '3px', // Add slight margin below the input
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor: '#231F4A', // Dark background for options
      color: '#FCBF32', // Text color for options
      cursor: 'pointer', // Ensure options have a pointer cursor
      "&:hover": {
        backgroundColor: '#231F4A', // No hover effect on options
        color: '#FCBF32', // No text color change on hover
      }
    })
  }}
/>



                <input
                  className="input w-full"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="flex  justify-between gap-6">
               

                <input
                  className="input w-full"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                   <input
                className="input w-full"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
              </div>

           

              <button type="submit" className="w-[381px] mx-auto text-[20px] rounded-[100px] bg-gradient-to-r to-[#FEC636] from-[#DE680A] h-[49px]">
                Sign Up
              </button>

              <p className="text-[17px] mx-auto font-medium">
                Already have an account?{" "}
                <span className="underline cursor-pointer text-[#F2A527]">
                  Sign In
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
