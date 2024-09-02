import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNav from "./SIdeNav";
import Platinum from "./Platinum";
// import OtherPage from "./OtherPage"; // Import other pages if needed
import TopNav from "./TopNav";
import Home from "./Home"


const App = () => {
  const isPlatinumPage = window.location.pathname === "/platinum";

  return (
    <Router>
      <div className="flex w-full h-screen">
        <SideNav />
        <div className=" h-screen  overflow-hidden">
         
          <Routes>
            <Route
              path="/platinum"
              element={
                
               
                  <div className="">
                     <TopNav/>
                    <Home />
                  </div>
                
              }
            />
            {/* <Route path="/other-page" element={<OtherPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
