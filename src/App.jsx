import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNav from "./Components/SIdeNav";
import TopNav from "./Components/TopNav";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";

const App = () => {
  const [content, setContent] = useState(false);

  const handleButtonClick = () => {
    setContent(!content); // Toggle the content when button is clicked
  };

  return (
    <Router>
      <div className="flex w-full h-screen">
        <SideNav />
        <div className="h-screen overflow-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <TopNav onButtonClick={handleButtonClick} />
                  <SignUp content={content} onClose={handleButtonClick} />
                  <Home />
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

