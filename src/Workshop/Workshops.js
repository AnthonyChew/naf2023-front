import React from "react";
import { useState } from "react";
import LandingBg from "./svgs/workshop/landingbg.svg";
import workshops_Logo from "./svgs/workshop/workshops_Logo.svg";
import workshops_BlueStar from "./svgs/workshop/workshops_BlueStar.svg";
import workshops_ShadowLeftStar from "./svgs/workshop/workshops_ShadowLeftStar.svg";
import workshops_YellowRightStar from "./svgs/workshop/workshops_YellowRightStar.svg";
import workshops_ShadowRightStar from "./svgs/workshop/workshops_ShadowRightStar.svg";
import workshops_PurpleBottomRightStar from "./svgs/workshop/workshops_PurpleBottomRightStar.svg";
import workshops_ShadowBottomRightStar from "./svgs/workshop/workshops_ShadowBottomRightStar.svg";
import workshops_YellowBottomLeftStar from "./svgs/workshop/workshops_YellowBottomLeftStar.svg";
import workshops_ShadowBottomLeftStar from "./svgs/workshop/workshops_ShadowBottomLeftStar.svg";
import workshops_WhiteBall from "./svgs/workshop/workshops_WhiteBall.svg";
import workshops_ShadowBall from "./svgs/workshop/workshops_ShadowBall.svg";
import workshops_StarBacking from "./svgs/workshop/workshops_StarBacking.svg";

const classNames = {
  tabActive: " bg-white pt-1 border-2 border-black",
  tabInactive:
    "bg-gray-300 border-y-2 border-y-gray-300 border-r-2 border-r-black py-1",
};
const Workshops = () => {
  const [active, setActive] = useState(0)
  return (

    <div
      class="h-auto md:min-h-screen w-full bg-NAFOrange pb-20 px-[5%] lg:px-32"
    >
      {/*  
      {/* Top Left */}
      {/* <img class="absolute left-1 top-[30%] w-[14%]" src={workshops_ShadowLeftStar}/>
      <img class="absolute left-0 top-[29%] w-[14%]" src={workshops_BlueStar}/> */}
      {/* Top Right */}
      {/* <img class="absolute right-1 top-[30%] w-[15%] sm:w-[20%]" src={workshops_ShadowRightStar}/>
      <img class="absolute right-2 top-[29%] w-[15%] sm:w-[20%]" src={workshops_YellowRightStar}/> */}
      {/* Bottom Left */}
      {/* <img class="absolute left-1 bottom-3 w-[16%]" src={workshops_ShadowBottomLeftStar}/>
      <img class="absolute left-0 bottom-4 w-[16%]" src={workshops_YellowBottomLeftStar}/> */}
      {/* Bottom Right */}
      {/* <img class="absolute right-0 bottom-4 w-[20%]" src={workshops_ShadowBottomRightStar}/>
      <img class="absolute right-0 bottom-5 w-[20%]" src={workshops_PurpleBottomRightStar}/> */}
      {/* Balls */}
      {/* <img class="absolute w-[1.5%] left-[15%] bottom-[3%] sm:left-[2%] sm:bottom-[30%] translate-x-0.5 translate-y-0.5" src={workshops_ShadowBall}/>
      <img class="absolute w-[1.5%] left-[15%] bottom-[3%] sm:left-[2%] sm:bottom-[30%]" src={workshops_WhiteBall}/>
      <img class="absolute w-[1.5%] right-[18%] sm:right-[25%] bottom-[3%] translate-x-0.5 translate-y-0.5" src={workshops_ShadowBall}/>
      <img class="absolute w-[1.5%] right-[18%] sm:right-[25%] bottom-[3%]" src={workshops_WhiteBall}/>
      <img class="absolute w-[1.5%] right-[16%] sm:right-[3%] top-[12%] sm:top-[33%] translate-x-0.5 translate-y-0.5" src={workshops_ShadowBall}/>
      <img class="absolute w-[1.5%] right-[16%] sm:right-[3%] top-[12%] sm:top-[33%]" src={workshops_WhiteBall}/> */}
      
      {/* Header */}
      <img class="relative pt-10 pb-5 ml-[23%] w-[58%]" src={workshops_Logo}/>
      <div class="z-10 relative mb-10 mx-[10%] lg:mx-[15%] font-semibold text-center text-xs sm:text-sm md:text-md lg:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
      mollit anim id est laborum.
      </div>
      {/* Stars */}
      <img class="z-0 absolute top-[40%] right-[3%] w-screen" src={workshops_StarBacking}/>
      {/* Workshops Body */}
      <div class="z-10 relative flex w-full mt-5 ">
        <div onClick={() => setActive(0)} class={`${active === 0 ? classNames.tabActive : classNames.tabInactive} text-xs md:text-base w-[32%] sm:w-[17%] font-semibold text-center`}>Henna Tattoos</div>
        <div onClick={() => setActive(1)} class={`${active === 1 ? classNames.tabActive : classNames.tabInactive} text-xs md:text-base w-[32%] sm:w-[17%] font-semibold text-center`}>Photobooth</div>
        <div onClick={() => setActive(2)} class={`${active === 2 ? classNames.tabActive : classNames.tabInactive} text-xs md:text-base w-[32%] sm:w-[17%] font-semibold text-center`}>Art Movie Screening</div>
      </div>
      
      {/*  */}
      <div class="z-10 relative flex border-solid bg-white border-2 border-black w-full shadow-[20px_20px_0_0_rgba(0,0,0)] p-[5%]">
        {/* Image */}
        <div class=" bg-gray-300 h-auto lg:h-80 w-4/12 mr-[8%] flex items-center justify-center">
          IMAGE OF WORKSHOP
        </div>
        {/* Text Area */}
        <div class=" flex w-8/12 flex-col gap-y-2 sm:gap-y-5">
          <p class="font-Ubuntu sm:text-lg md:text-2xl lg:text-4xl font-bold flex justify-self-start">{active === 0 ? "Henna Tattoos" : active === 1 ? "Photobooth" : "Art Movie Screening"}</p>
          <p class="text-left text-[10px] sm:text-sm md:text-md lg:text-lg font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
