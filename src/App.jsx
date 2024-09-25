import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNav from "./Components/SIdeNav";
import TopNav from "./Components/TopNav";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import PlatinumFunding from "./Components/PlatinumFunding";
import LogIn from "./Components/LogIn";
import Deposit from "./Components/Deposit";

const App = () => {
  const [content, setContent] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleButtonClick = () => {
    setContent(!content); // Toggle the content when button is clicked
  };

  const handleSignUp = () => {
    setSignup(!signup);
  };

  return (
    <Router>
      <div className="flex w-full h-screen">
        <SideNav />
        <div className="flex-1 h-screen bg-gradient-to-r to-[#292551] from-[#0C0A1D] overflow-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <TopNav /> {/* Move user logic to TopNav */}
                  <Home />
                </div>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route
              path="/platinumfunding"
              element={
                <div>
                  <TopNav />
                  <PlatinumFunding />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
