// import React, { useState, useRef } from "react";
// import { BiPlus, BiMinus } from "react-icons/bi";
// import wheel from "../img/wheel.png";
// import button from "../img/button.png";
// import marker from "../img/marker.png";

// const WheelGame = () => {
//   const [deg, setDeg] = useState(0);
//   const [result, setResult] = useState("-");
//   const [balance, setBalance] = useState(1000); // Initial balance
//   const [betAmount, setBetAmount] = useState(0); // Bet amount
//   const [betAnimal, setBetAnimal] = useState(""); // Bet amount
//   const [prizes, setPrizes] = useState({
//     Frog: 0,
//     Snail: 0,
//     Dolphin: 0,
//     Ladybug: 0,
//     Koala: 0,
//     Unicorn: 0,
//     Dragon: 0,
//     Snowman: 0
//   });

//   const single_items = [
//     {
//       name: "Snowman",
//       image: "snowman.jpeg",
//       style: "bg-purple-600 border-purple-600"
//     },
//     {
//       name: "Ladybug",
//       image: "ladybug.jpeg",
//       style: "bg-purple-600 border-purple-600"
//     },
//     {
//       name: "Dolphin",
//       image: "dolphin.jpeg",
//       style: "bg-white border-white"
//     },
//     {
//       name: "Dragon",
//       image: "dragon.jpeg",
//       style: "bg-white border-white"
//     },
//     {
//       name: "Frog",
//       image: "frog.jpeg",
//       style: "bg-blue-300 border-blue-300"
//     },
//     {
//       name: "Koala",
//       image: "koala",
//       style: "bg-blue-300 border-blue-300"
//     },
//     {
//       name: "Snail",
//       image: "snail.jpeg",
//       style: "bg-blue-700 border-blue-700"
//     },
//     {
//       name: "Unicorn",
//       image: "unicorn.jpeg",
//       style: "bg-blue-700 border-blue-700"
//     }
//   ];

//   const wheelRef = useRef(null);
//   const startButtonRef = useRef(null);

//   const zoneSize = 45;
//   const symbolSegments = {
//     1: "Frog",
//     2: "Snail",
//     3: "Dolphin",
//     4: "Ladybug",
//     5: "Koala",
//     6: "Unicorn",
//     7: "Dragon",
//     8: "Snowman"
//   };

//   // Calculate the prize based on the bet amount
//   const calculatePrizes = (bet) => {
//     return {
//       Frog: bet * 2,
//       Snail: bet * 3,
//       Dolphin: bet * 4,
//       Ladybug: bet * 5,
//       Koala: bet * 6,
//       Unicorn: bet * 7,
//       Dragon: bet * 8,
//       Snowman: bet * 10
//     };
//   };

//   const handleWin = (actualDeg) => {
//     const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
//     const winningSymbol = symbolSegments[winningSymbolNr] || "-";
//     // setResult(winningSymbol);
//     if (winningSymbol !== "-" && winningSymbol === betAnimal) {
//       const winAmount = prizes[winningSymbol];
//       setBalance((prevBalance) => prevBalance + winAmount);
//       setResult("WON");
//     } else {
//       // alert("Sorry u lost the bet");
//       setResult("LOST");
//     }
//   };

//   const handleSpin = () => {
//     if (betAmount > 0 && betAmount <= balance && betAnimal !== "") {
//       // Reset the result display
//       setResult("Spinning...");
//       setBalance((prevBalance) => prevBalance - betAmount);
//       setPrizes(calculatePrizes(betAmount));

//       // Disable the start button while spinning
//       startButtonRef.current.style.pointerEvents = "none";
//       const newDeg = Math.floor(5000 + Math.random() * 5000);
//       setDeg(newDeg);
//       wheelRef.current.style.transition = "all 10s ease-out";
//       wheelRef.current.style.transform = `rotate(${newDeg}deg)`;
//       wheelRef.current.classList.add("blur");
//     } else {
//       if (betAmount <= 0) setResult("Bet amount must be greater than 0");
//       if (betAmount > balance) setResult("Insufficient balance");
//       if (betAnimal === "") setResult("Please select an animal");
//     }
//   };

//   const handleTransitionEnd = () => {
//     wheelRef.current.classList.remove("blur");
//     startButtonRef.current.style.pointerEvents = "auto";

//     // Calculate the final rotation on a 360-degree basis
//     const actualDeg = deg % 360;

//     // Apply the final rotation instantly without transition
//     wheelRef.current.style.transition = "none";
//     wheelRef.current.style.transform = `rotate(${actualDeg}deg)`;

//     // Display the winning symbol
//     handleWin(actualDeg);
//   };
//   const increaseBet = () => {
//     if (betAmount < balance) {
//       setBetAmount(betAmount + 100);
//     }
//   };

//   // Function to decrease bet
//   const decreaseBet = () => {
//     if (betAmount > 100) {
//       setBetAmount(betAmount - 100);
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center h-screen overflow-hidden">
//       <img
//         src="backg.jpg"
//         className="absolute top-0 left-0 w-full h-full"
//         alt="Background"
//       />
//       <img
//         src="background.png"
//         className="absolute top-0 left-0 w-full h-full"
//         alt="Background Overlay"
//       />

//       <div className="w-full h-full flex flex-col md:flex-row gap-5 items-center justify-center relative ">
//         <div className="flex flex-col justify-center items-center gap-5">
//           <div className="w-[300px]  h-[300px] relative">
//             <img
//               className="absolute w-12  top-[-5px] left-[43%] z-10"
//               src={marker}
//               alt="Marker"
//             />

//             <img
//               className="w-full h-full rounded-full"
//               src={wheel}
//               alt="Wheel"
//               ref={wheelRef}
//               onTransitionEnd={handleTransitionEnd}
//             />
//           </div>
//           <div className="w-fit h-fit my-6 flex gap-4 justify-center items-center relative">
//             {single_items.map((item, index) => (
//               <div
//                 key={index}
//                 className={`w-[50px] h-[50px] rounded-full border-[5px] transition-all duration-500 ease-in-out  ${
//                   betAnimal !== ""
//                     ? `  absolute m-5  ${betAnimal === item.name && "z-50"} `
//                     : ""
//                 } ${item.style}`}
//                 onClick={() => setBetAnimal(item.name)}
//               >
//                 <img
//                   src={item.image}
//                   className="w-full h-full rounded-full"
//                   alt={item.name}
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="">
//             <p className="text-xl text-white font-bold"> ${balance}</p>
//           </div>

//           <div className="flex gap-5 items-center">
//             <div
//               className="w-8 h-8  rounded-full text-white font-bold text-3xl bg-blue-500 flex justify-center items-center cursor-pointer"
//               onClick={decreaseBet}
//             >
//               <BiMinus />
//             </div>
//             <p className="text-white text-2xl font-bold">{betAmount}</p>
//             <div
//               className="w-8 h-8  rounded-full text-white font-bold text-3xl bg-blue-500 flex justify-center items-center cursor-pointer"
//               onClick={increaseBet}
//             >
//               <BiPlus />
//             </div>
//           </div>
//           <img
//             className="w-[200px] h-[50px] cursor-pointer"
//             src={button}
//             alt="Start Button"
//             ref={startButtonRef}
//             onClick={handleSpin}
//           />

//           <div
//             className={`w-[200px] h-[50px] border-white border-2 text-2xl text-white ${
//               result === "WON"
//                 ? "border-green-600 text-green-600"
//                 : result === "-" || "Spinning..."
//                 ? ""
//                 : "w-fit px-5 border-red-600 text-red-600"
//             } `}
//           >
//             {result}
//           </div>
//         </div>

//         {/* Info Section */}
//         {/* <div className="md:ml-10 mt-10 md:mt-0 text-white absolute right-10">
//           <div className="mb-6">
//             <p className="text-xl">Balance: ${balance}</p>
//           </div>

//           <div className="mb-6">
//             <label className="text-lg">Bet Amount: </label>
//             <input
//               type="number"
//               value={betAmount}
//               onChange={(e) => setBetAmount(Number(e.target.value))}
//               min="1"
//               max={balance}
//               className="ml-2 p-1 text-black w-16"
//             />
//           </div>

//           <div className="prizes">
//             <h3 className="text-xl mb-2">Prizes:</h3>
//             <ul className="space-y-1">
//               {Object.keys(prizes).map((animal) => (
//                 <li key={animal} className="text-lg">
//                   {animal}: ${prizes[animal]}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default WheelGame;

import React, { useState, useRef } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import wheel from "../img/wheel.png";
import button from "../img/button.png";
import marker from "../img/marker.png";

const WheelGame = () => {
  const [deg, setDeg] = useState(0);
  const [result, setResult] = useState("-");
  const [balance, setBalance] = useState(1000); // Initial balance
  const [betAmount, setBetAmount] = useState(0); // Bet amount
  const [betAnimal, setBetAnimal] = useState(""); // Bet amount
  const [prizes, setPrizes] = useState({
    Frog: 0,
    Snail: 0,
    Dolphin: 0,
    Ladybug: 0,
    Koala: 0,
    Unicorn: 0,
    Dragon: 0,
    Snowman: 0
  });
  const [itemsCollapsed, setItemsCollapsed] = useState(false); // New state for collapsing/spreading items

  const single_items = [
    {
      name: "Snowman",
      image: "snowman.jpeg",
      style: "bg-purple-600 border-purple-600"
    },
    {
      name: "Ladybug",
      image: "ladybug.jpeg",
      style: "bg-purple-600 border-purple-600"
    },
    {
      name: "Dolphin",
      image: "dolphin.jpeg",
      style: "bg-white border-white"
    },
    {
      name: "Dragon",
      image: "dragon.jpeg",
      style: "bg-white border-white"
    },
    {
      name: "Frog",
      image: "frog.jpeg",
      style: "bg-blue-300 border-blue-300"
    },
    {
      name: "Koala",
      image: "koala.jpeg",
      style: "bg-blue-300 border-blue-300"
    },
    {
      name: "Snail",
      image: "snail.jpeg",
      style: "bg-blue-700 border-blue-700"
    },
    {
      name: "Unicorn",
      image: "unicorn.jpeg",
      style: "bg-blue-700 border-blue-700"
    }
  ];

  const wheelRef = useRef(null);
  const startButtonRef = useRef(null);

  const zoneSize = 45;
  const symbolSegments = {
    1: "Frog",
    2: "Snail",
    3: "Dolphin",
    4: "Ladybug",
    5: "Koala",
    6: "Unicorn",
    7: "Dragon",
    8: "Snowman"
  };

  // Calculate the prize based on the bet amount
  const calculatePrizes = (bet) => {
    return {
      Frog: bet * 2,
      Snail: bet * 3,
      Dolphin: bet * 4,
      Ladybug: bet * 5,
      Koala: bet * 6,
      Unicorn: bet * 7,
      Dragon: bet * 8,
      Snowman: bet * 10
    };
  };

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    const winningSymbol = symbolSegments[winningSymbolNr] || "-";
    if (winningSymbol !== "-" && winningSymbol === betAnimal) {
      const winAmount = prizes[winningSymbol];
      setBalance((prevBalance) => prevBalance + winAmount);
      setResult("WON");
    } else {
      setResult("LOST");
    }
    // Spread the items back out after showing the result
    setItemsCollapsed(false);
  };

  const handleSpin = () => {
    if (betAmount > 0 && betAmount <= balance && betAnimal !== "") {
      // Reset the result display and collapse the items
      setResult("Spinning...");
      setBalance((prevBalance) => prevBalance - betAmount);
      setPrizes(calculatePrizes(betAmount));
      setItemsCollapsed(true); // Collapse items after spin starts

      // Disable the start button while spinning
      startButtonRef.current.style.pointerEvents = "none";
      const newDeg = Math.floor(5000 + Math.random() * 5000);
      setDeg(newDeg);
      wheelRef.current.style.transition = "all 10s ease-out";
      wheelRef.current.style.transform = `rotate(${newDeg}deg)`;
      wheelRef.current.classList.add("blur");
    } else {
      if (betAmount <= 0) setResult("Bet amount must be greater than 0");
      if (betAmount > balance) setResult("Insufficient balance");
      if (betAnimal === "") setResult("Please select an animal");
    }
  };

  const handleTransitionEnd = () => {
    wheelRef.current.classList.remove("blur");
    startButtonRef.current.style.pointerEvents = "auto";

    // Calculate the final rotation on a 360-degree basis
    const actualDeg = deg % 360;

    // Apply the final rotation instantly without transition
    wheelRef.current.style.transition = "none";
    wheelRef.current.style.transform = `rotate(${actualDeg}deg)`;

    // Display the winning symbol
    handleWin(actualDeg);
  };

  const increaseBet = () => {
    if (betAmount < balance) {
      setBetAmount(betAmount + 100);
    }
  };

  const decreaseBet = () => {
    if (betAmount > 100) {
      setBetAmount(betAmount - 100);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <img
        src="backg.jpg"
        className="absolute top-0 left-0 w-full h-full"
        alt="Background"
      />
      <img
        src="background.png"
        className="absolute top-0 left-0 w-full h-full"
        alt="Background Overlay"
      />

      <div className="w-full h-full flex flex-col md:flex-row gap-5 items-center justify-center relative ">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-[300px]  h-[300px] relative">
            <img
              className="absolute w-12  top-[-5px] left-[43%] z-10"
              src={marker}
              alt="Marker"
            />

            <img
              className="w-full h-full rounded-full"
              src={wheel}
              alt="Wheel"
              ref={wheelRef}
              onTransitionEnd={handleTransitionEnd}
            />
          </div>

          {/* Items that collapse and spread based on the game state */}
          <div
            className={`w-fit h-[50px] my-6 flex gap-4 justify-center items-center transition-all duration-500 relative ${
              itemsCollapsed ? "my-6" : ""
            }`}
          >
            {single_items.map((item, index) => (
              <div
                key={index}
                className={`w-[50px] h-[50px] rounded-full border-[5px] transition-all cursor-pointer duration-500 ease-in-out ${
                  betAnimal === item.name && "scale-125 z-50 "
                } ${
                  itemsCollapsed
                    ? "absolute ransition-all duration-500 ease-in-out"
                    : "relative transition-all duration-500 ease-in-out"
                } ${item.style}`}
                onClick={() => setBetAnimal(item.name)}
              >
                <img
                  src={item.image}
                  className="w-full h-full rounded-full"
                  alt={item.name}
                />
              </div>
            ))}
          </div>

          <div className="">
            <p className="text-xl text-white font-bold"> ${balance}</p>
          </div>

          <div className="flex gap-5 items-center">
            <div
              className="w-8 h-8  rounded-full text-white font-bold text-3xl bg-blue-500 flex justify-center items-center cursor-pointer"
              onClick={decreaseBet}
            >
              <BiMinus />
            </div>
            <p className="text-white text-2xl font-bold">{betAmount}</p>
            <div
              className="w-8 h-8  rounded-full text-white font-bold text-3xl bg-blue-500 flex justify-center items-center cursor-pointer"
              onClick={increaseBet}
            >
              <BiPlus />
            </div>
          </div>

          <img
            className="w-[200px] h-[50px] cursor-pointer"
            src={button}
            alt="Start Button"
            ref={startButtonRef}
            onClick={handleSpin}
          />

          <div
            className={`min-w-[200px] h-[50px]  border-4 text-2xl flex justify-center items-center font-bold  ${
              result === "WON"
                ? "border-green-600 text-green-600"
                : (result === "-") | "Spinning..."
                ? "border-white text-white"
                : "w-fit px-5 border-red-600 text-red-600"
            } `}
          >
            {result}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelGame;
