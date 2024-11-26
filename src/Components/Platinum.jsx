import React, { useState } from "react";
import { IoHome, IoTrophy, IoGift, IoChevronForward, IoChevronBackOutline } from "react-icons/io5";
import { ImSpades } from "react-icons/im";
import Home from "./Home";
import gif from "../assets/gif.gif";

const Platinum = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="h-full flex w-full overflow-hidden">
      {/* Sidebar */}
     
    </div>
  );
};

export default Platinum;
