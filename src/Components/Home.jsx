import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import page from "../Assets/Frame 1361.png";
import page1 from "../Assets/Frame 1356.png";
import page2 from "../Assets/Frame 1357.png";
import page3 from "../Assets/Frame 1358.png";
import page4 from "../Assets/Frame 1359.png";
import hero from "../Assets/Frame 1353.png";
import hero1 from "../Assets/Frame 1353 (1).png";
import hero2 from "../Assets/Frame 1353 (2).png";
import crypto from "../Assets/cryptocurrency.png";
import { RiVipCrownFill } from "react-icons/ri";
import { FaDice } from "react-icons/fa6";
import { FaRedhat } from "react-icons/fa";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GiFlame } from "react-icons/gi";
import { GrNext, GrPrevious } from "react-icons/gr";
import { GiRoundStar } from "react-icons/gi";

const Platinum = () => {
  return (
    <div className="h-[100vh] overflow-y-scroll bg-gradient-to-r to-[#292551]   from-[#0C0A1D]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1500}
        fadeEffect={{ crossFade: true }}
        className="mb-6 "
      >
        <SwiperSlide className="p-6">
          <img className="w-full md:h-[426px]" src={hero} alt="Hero Image 1" />
        </SwiperSlide>
        <SwiperSlide className="p-6">
          <img className="w-full md:h-[426px]" src={hero1} alt="Hero Image 2" />
        </SwiperSlide>
        <SwiperSlide className="p-6">
          <img className="w-full md:h-[426px]" src={hero2} alt="Hero Image 3" />
        </SwiperSlide>
      </Swiper>

      <div className="relative px-6 mb-4">
        <input
          type="text"
          placeholder="Search games"
          className="w-full py-3 border-[1px] px-6 border-[#B4732F]  bg-[#1E1A3D] text-white rounded-full outline-none"
        />
      </div>

      <div className="mb-[200px] flex flex-col gap-6">
        {/* First Swiper Section */}
        <div>
          <div className="text-white text-xl flex my-10  px-6 items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <GiFlame className="text-[#EC921D]" size={24} /> <p>Hot</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center ">
                <div className="relative flex items-center">
                  <div className="swiper-button-prev-unique-1 custom-nav text-[9px] text-white">
                    <GrPrevious />
                  </div>
                  <div className="w-2 h-[1px] bg-[#4E4D51] "></div>
                </div>
                <div className="swiper-pagination-unique-1 flex gap-[2px] "></div>
                <div className="relative flex items-center">
                  <div className="w-2 h-[1px] bg-[#4E4D51]"></div>
                  <div className="swiper-button-next-unique-1 custom-nav text-[9px] text-white">
                    <GrNext />
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-[#DE680A] text-[9px] to-[#FEC636] text-white px-4 py-[1px] rounded-full">
                See All
              </button>
            </div>
          </div>

          <div className="relative px-6 my-10">
            <div className="h-[1px] bg-[#322F5E]"></div>
            <div className="absolute pl-6 bottom-[-10px] left-[24px] w-5 h-5 blur-[3px] rounded-full bg-gradient-to-r to-[#EE9D2D] from-[#E3821D]"></div>
          </div>

          <div className="relative px-6">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={5}
              navigation={{
                nextEl: ".swiper-button-next-unique-1",
                prevEl: ".swiper-button-prev-unique-1",
              }}
              pagination={{
                el: ".swiper-pagination-unique-1",
                clickable: true,
                bulletClass: "swiper-pagination-unique-bullet",
                bulletActiveClass: "swiper-pagination-unique-bullet-active",
              }}
              className="swiper-container"
            >
              <SwiperSlide>
                <img
                  src={page}
                  alt="Game 1"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page1}
                  alt="Game 2"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page2}
                  alt="Game 3"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page3}
                  alt="Game 4"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page4}
                  alt="Game 5"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page4}
                  alt="Game 5"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page4}
                  alt="Game 5"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Second Swiper Section */}
        <div>
          <div className="text-white text-xl px-6 flex my-10 items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <GiRoundStar className="text-[#EC921D]" size={24} />{" "}
              <p>New Games</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center ">
                <div className="relative flex items-center">
                  <div className="swiper-button-prev-unique-2 custom-nav text-[9px] text-white">
                    <GrPrevious />
                  </div>
                  <div className="w-2 h-[1px] bg-[#4E4D51] "></div>
                </div>
                <div className="swiper-pagination-unique-2 flex gap-[2px] "></div>
                <div className="relative flex items-center">
                  <div className="w-2 h-[1px] bg-[#4E4D51]"></div>
                  <div className="swiper-button-next-unique-2 custom-nav text-[9px] text-white">
                    <GrNext />
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-[#DE680A] text-[9px] to-[#FEC636] text-white px-4 py-[1px] rounded-full">
                See All
              </button>
            </div>
          </div>

          <div className="relative px-6 my-10">
            <div className="h-[1px] bg-[#322F5E]"></div>
            <div className="absolute bottom-[-10px] left-[24px] w-5 h-5 blur-[3px] rounded-full bg-gradient-to-r to-[#EE9D2D] from-[#E3821D]"></div>
          </div>

          <div className="relative px-6">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={5}
              navigation={{
                nextEl: ".swiper-button-next-unique-2",
                prevEl: ".swiper-button-prev-unique-2",
              }}
              pagination={{
                el: ".swiper-pagination-unique-2",
                clickable: true,
                bulletClass: "swiper-pagination-unique-bullet",
                bulletActiveClass: "swiper-pagination-unique-bullet-active",
              }}
              className="swiper-container"
            >
              <SwiperSlide>
                <img
                  src={page}
                  alt="Game 1"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page1}
                  alt="Game 2"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page2}
                  alt="Game 3"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page3}
                  alt="Game 4"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page4}
                  alt="Game 5"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page4}
                  alt="Game 5"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page4}
                  alt="Game 5"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full items-center m-0 p-0 justify-center mt-[70px]">
          <h1 className="text-[#89879A] text-[25px]">
            Play using your favourite cryptocurrency{" "}
          </h1>

          <div className="min-w-full h-[83px] px-0 mx-0 flex items-center bg-[#211C33]">
            <marquee behavior="smooth" direction="right">
              {" "}
              <img src={crypto} alt="" />
            </marquee>
          </div>
        </div>

        <div className="">
          <div className="text-white text-xl px-6 flex my-10 items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <RiVipCrownFill className="text-[#EC921D]" size={24} />{" "}
              <p>Exclusive</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center ">
                <div className="relative flex items-center">
                  <div className="swiper-button-prev-unique-3 custom-nav text-[9px] text-white">
                    <GrPrevious />
                  </div>
                  <div className="w-2 h-[1px] bg-[#4E4D51] "></div>
                </div>
                <div className="swiper-pagination-unique-3 flex gap-[2px] "></div>
                <div className="relative flex items-center">
                  <div className="w-2 h-[1px] bg-[#4E4D51]"></div>
                  <div className="swiper-button-next-unique-3 custom-nav text-[9px] text-white">
                    <GrNext />
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-[#DE680A] text-[9px] to-[#FEC636] text-white px-4 py-[1px] rounded-full">
                See All
              </button>
            </div>
          </div>

          <div className="relative px-6 my-10">
            <div className="h-[1px] bg-[#322F5E]"></div>
            <div className="absolute bottom-[-10px] left-[24px] w-5 h-5 blur-[3px] rounded-full bg-gradient-to-r to-[#EE9D2D] from-[#E3821D]"></div>
          </div>

          <div className="relative px-6">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={5}
              navigation={{
                nextEl: ".swiper-button-next-unique-3",
                prevEl: ".swiper-button-prev-unique-3",
              }}
              pagination={{
                el: ".swiper-pagination-unique-3",
                clickable: true,
                bulletClass: "swiper-pagination-unique-bullet",
                bulletActiveClass: "swiper-pagination-unique-bullet-active",
              }}
              className="swiper-container"
            >
              <SwiperSlide>
                <img
                  src={page}
                  alt="Game 1"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page1}
                  alt="Game 2"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page2}
                  alt="Game 3"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page3}
                  alt="Game 4"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page4}
                  alt="Game 5"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page4}
                  alt="Game 5"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={page4}
                  alt="Game 5"
                  className="rounded-2xl w-full max-w-xs mx-auto"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="">
          <div className="text-white  text-xl px-6 flex my-10 items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <FaDice className="text-[#EC921D]" size={24} /> <p>Live Casino</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center ">
                <div className="relative flex items-center">
                  <div className="swiper-button-prev-unique-4 custom-nav text-[9px] text-white">
                    <GrPrevious />
                  </div>
                  <div className="w-2 h-[1px] bg-[#4E4D51] "></div>
                </div>
                <div className="swiper-pagination-unique-4 flex gap-[2px] "></div>
                <div className="relative flex items-center">
                  <div className="w-2 h-[1px] bg-[#4E4D51]"></div>
                  <div className="swiper-button-next-unique-4 custom-nav text-[9px] text-white">
                    <GrNext />
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-[#DE680A] text-[9px] to-[#FEC636] text-white px-4 py-[1px] rounded-full">
                See All
              </button>
            </div>
          </div>

          <div className="relative px-6 my-10">
            <div className="h-[1px] bg-[#322F5E]"></div>
            <div className="absolute bottom-[-10px] left-[24px] w-5 h-5 blur-[3px] rounded-full bg-gradient-to-r to-[#EE9D2D] from-[#E3821D]"></div>
          </div>

          <div className="relative px-6">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={5}
              navigation={{
                nextEl: ".swiper-button-next-unique-4",
                prevEl: ".swiper-button-prev-unique-4",
              }}
              pagination={{
                el: ".swiper-pagination-unique-4",
                clickable: true,
                bulletClass: "swiper-pagination-unique-bullet",
                bulletActiveClass: "swiper-pagination-unique-bullet-active",
              }}
              className="swiper-container  m-8 group"
            >
              <SwiperSlide className="relative transition-transform transform ease-in-out duration-500 group-hover:scale-75">
                <div className="transition-transform transform hover:scale-125 ease-in-out duration-500 rounded-2xl">
                  <img
                    src={page}
                    alt="Game 1"
                    className="rounded-2xl w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <button className="bg-white text-[25px] text-[#EC921D] rounded-full h-11 w-11">
                      ▶️
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="relative transition-transform transform ease-in-out duration-500 group-hover:scale-75">
                <div className="transition-transform transform hover:scale-125 ease-in-out duration-500 rounded-2xl">
                  <img
                    src={page1}
                    alt="Game 2"
                    className="rounded-2xl w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <button className="bg-white text-[25px] text-[#EC921D] rounded-full h-11 w-11">
                      ▶️
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="relative transition-transform transform ease-in-out duration-500 group-hover:scale-75">
                <div className="transition-transform transform hover:scale-125 ease-in-out duration-500 rounded-2xl">
                  <img
                    src={page2}
                    alt="Game 3"
                    className="rounded-2xl w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <button className="bg-white text-[25px] text-[#EC921D] rounded-full h-11 w-11">
                      ▶️
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="relative transition-transform transform ease-in-out duration-500 group-hover:scale-75">
                <div className="transition-transform transform hover:scale-125 ease-in-out duration-500 rounded-2xl">
                  <img
                    src={page3}
                    alt="Game 4"
                    className="rounded-2xl w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <button className="bg-white text-[25px] text-[#EC921D] rounded-full h-11 w-11">
                      ▶️
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="relative transition-transform transform ease-in-out duration-500 group-hover:scale-75">
                <div className="transition-transform transform hover:scale-125 ease-in-out duration-500 rounded-2xl">
                  <img
                    src={page4}
                    alt="Game 5"
                    className="rounded-2xl w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <button className="bg-white text-[25px] text-[#EC921D] rounded-full h-11 w-11">
                      ▶️
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="relative transition-transform transform ease-in-out duration-500 group-hover:scale-75">
                <div className="transition-transform transform hover:scale-125 ease-in-out duration-500 rounded-2xl">
                  <img
                    src={page4}
                    alt="Game 5"
                    className="rounded-2xl w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <button className="bg-white text-[25px] text-[#EC921D] rounded-full h-11 w-11">
                      ▶️
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="relative transition-transform transform ease-in-out duration-500 group-hover:scale-75">
                <div className="transition-transform transform hover:scale-125 ease-in-out duration-500 rounded-2xl">
                  <img
                    src={page4}
                    alt="Game 5"
                    className="rounded-2xl w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <button className="bg-white text-[25px] text-[#EC921D] rounded-full h-11 w-11">
                      ▶️
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="">
            <div className="text-white text-xl px-6 flex my-10 items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <FaRedhat className="text-[#EC921D]" size={24} />{" "}
                <p>Top Picks</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center ">
                  <div className="relative flex items-center">
                    <div className="swiper-button-prev-unique-5 custom-nav text-[9px] text-white">
                      <GrPrevious />
                    </div>
                    <div className="w-2 h-[1px] bg-[#4E4D51] "></div>
                  </div>
                  <div className="swiper-pagination-unique-5 flex gap-[2px] "></div>
                  <div className="relative flex items-center">
                    <div className="w-2 h-[1px] bg-[#4E4D51]"></div>
                    <div className="swiper-button-next-unique-5 custom-nav text-[9px] text-white">
                      <GrNext />
                    </div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#DE680A] text-[9px] to-[#FEC636] text-white px-4 py-[1px] rounded-full">
                  See All
                </button>
              </div>
            </div>

            <div className="relative px-6 my-10">
              <div className="h-[1px] bg-[#322F5E]"></div>
              <div className="absolute bottom-[-10px] left-[24px] w-5 h-5 blur-[3px] rounded-full bg-gradient-to-r to-[#EE9D2D] from-[#E3821D]"></div>
            </div>

            <div className="relative px-6">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                navigation={{
                  nextEl: ".swiper-button-next-unique-5",
                  prevEl: ".swiper-button-prev-unique-5",
                }}
                pagination={{
                  el: ".swiper-pagination-unique-5",
                  clickable: true,
                  bulletClass: "swiper-pagination-unique-bullet",
                  bulletActiveClass: "swiper-pagination-unique-bullet-active",
                }}
                className="swiper-container"
              >
                <SwiperSlide>
                  <img
                    src={page}
                    alt="Game 1"
                    className="rounded-2xl object-cover w-full max-w-xs mx-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={page1}
                    alt="Game 2"
                    className="rounded-2xl w-full max-w-xs mx-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={page2}
                    alt="Game 3"
                    className="rounded-2xl w-full max-w-xs mx-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={page3}
                    alt="Game 4"
                    className="rounded-2xl w-full max-w-xs mx-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={page4}
                    alt="Game 5"
                    className="rounded-2xl w-full max-w-xs mx-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={page4}
                    alt="Game 5"
                    className="rounded-2xl w-full max-w-xs mx-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={page4}
                    alt="Game 5"
                    className="rounded-2xl  w-full max-w-xs mx-auto"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="px-6 flex flex-col gap-5">
          <h1 className="text-white text-[24px] font-medium">Fair and Provable winners</h1>
          <div className="flex items-center">
          <div >
            <button className="h-[80px] text-white text-[20px] font-medium bg-transparent  w-[140px]">All Bets</button>
          </div>
          <div>
            <button className="h-[70px] text-white text-[20px] font-medium border-b-[1px] border-white bg-gradient-to-r from-[#DE680A] to-[#FEC636] rounded-[3px]  w-[140px]">High Rollers</button>
          </div>
          </div>

          <div>
          <div className="w-full text-white">
  <table className="w-full text-white border-separate border-spacing-0">
    <thead className="bg-gray-800">
      <tr className="text-center">
        <th className="p-2">Games</th>
        <th className="p-2">Names</th>
        <th className="p-2">Payout</th>
        <th className="p-2">Time</th>
        <th className="p-2">Multiplier</th>
      </tr>
    </thead>
    <tbody className="">
      <tr className="bg-blue-500 ">
        <td className="p-2 rounded-l-full">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2 rounded-r-full">mango</td>
      </tr> <br />
      <tr className="bg-green-500 mb-2">
        <td className="p-2 rounded-l-full">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2 rounded-r-full">mango</td>
      </tr>
      <tr className="bg-red-500 mb-2">
        <td className="p-2 rounded-l-full">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2 rounded-r-full">mango</td>
      </tr>
      <tr className="bg-yellow-500 mb-2">
        <td className="p-2 rounded-l-full">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2 rounded-r-full">mango</td>
      </tr>
      <tr className="bg-purple-500 mb-2">
        <td className="p-2 rounded-l-full">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2">mango</td>
        <td className="p-2 rounded-r-full">mango</td>
      </tr>
    </tbody>
  </table>
</div>



          </div>
         
        </div>
      </div>

      {/* Add more Swiper sections as needed effwith unique pagination */}
    </div>
  );
};

export default Platinum;
