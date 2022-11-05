import React from "react";
import { useState } from "react";
import LandingBg from "./svgs/landingbg.svg";
import workshops_Logo from "./svgs/workshops_Logo.svg";
import workshops_BlueStar from "./svgs/workshops_BlueStar.svg";
import workshops_ShadowLeftStar from "./svgs/workshops_ShadowLeftStar.svg";
import workshops_YellowRightStar from "./svgs/workshops_YellowRightStar.svg";
import workshops_ShadowRightStar from "./svgs/workshops_ShadowRightStar.svg";
import workshops_PurpleBottomRightStar from "./svgs/workshops_PurpleBottomRightStar.svg";
import workshops_ShadowBottomRightStar from "./svgs/workshops_ShadowBottomRightStar.svg";
import workshops_YellowBottomLeftStar from "./svgs/workshops_YellowBottomLeftStar.svg";
import workshops_ShadowBottomLeftStar from "./svgs/workshops_ShadowBottomLeftStar.svg";
import workshops_WhiteBall from "./svgs/workshops_WhiteBall.svg";
import workshops_ShadowBall from "./svgs/workshops_ShadowBall.svg";
import workshops_StarBacking from "./svgs/workshops_StarBacking.svg";

const classNames = {
  tabActive: "text-xs md:text-base bg-white w-[32%] sm:w-[17%] pt-1 border-2 border-black font-semibold",
  tabInactive:
    "text-xs md:text-base bg-gray-300 w-[32%] sm:w-[17%] border-y-2 border-y-gray-300 border-r-2 border-r-black py-1 font-semibold",
};
const Workshops = () => {
  const [active, setActive] = useState(0)
  return (

    <div
      class="absolute h-auto md:min-h-screen w-full bg-WorkshopRed py-20 px-[5%] lg:px-32"
      style={{ backgroundImage: `url(${LandingBg})` }}
    >
      {/* Top Left */}
      <img class="absolute left-1 top-7 w-[14%]" src={workshops_ShadowLeftStar}/>
      <img class="absolute left-0 top-5 w-[14%]" src={workshops_BlueStar}/>
      {/* Top Right */}
      <img class="absolute right-1 top-[4%] w-[20%]" src={workshops_ShadowRightStar}/>
      <img class="absolute right-2 top-[3%] w-[20%]" src={workshops_YellowRightStar}/>
      {/* Bottom Left */}
      <img class="absolute left-1 bottom-3 w-[16%]" src={workshops_ShadowBottomLeftStar}/>
      <img class="absolute left-0 bottom-5 w-[16%]" src={workshops_YellowBottomLeftStar}/>
      {/* Bottom Right */}
      <img class="absolute right-0 bottom-5 w-[20%]" src={workshops_ShadowBottomRightStar}/>
      <img class="absolute right-0 bottom-5 w-[20%]" src={workshops_PurpleBottomRightStar}/>
      {/* Balls */}
      <img class="absolute left-4 bottom-60 translate-x-1 translate-y-0.5" src={workshops_ShadowBall}/>
      <img class="absolute left-4 bottom-60" src={workshops_WhiteBall}/>
      <img class="absolute right-72 bottom-5 translate-x-0.5 translate-y-0.5" src={workshops_ShadowBall}/>
      <img class="absolute right-72 bottom-5" src={workshops_WhiteBall}/>
      <img class="absolute right-10 top-64 translate-x-0.5 translate-y-1" src={workshops_ShadowBall}/>
      <img class="absolute right-10 top-64" src={workshops_WhiteBall}/>
      <img class="absolute md:-top-[15px] -top-[5px] right-[27%] w-[45%]" src={workshops_StarBacking}/>
      <img class="absolute top-[20px] right-[22%] mt-[6%] w-[58%]" src={workshops_Logo}/>
      {/* Header */}
      {/* <div
        class="h-20 mb-20"
        style={{
          backgroundImage: `url(${workshops_Logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: "1000"
        }}
      /> */}

      {/* Workshops Body */}
      <div class="flex w-full mt-5 sm:mt-[15%]">
        <div onClick={() => setActive(0)} class={`${active === 0 ? classNames.tabActive : classNames.tabInactive}`}>Henna Tattoos</div>
        <div onClick={() => setActive(1)} class={`${active === 1 ? classNames.tabActive : classNames.tabInactive}`}>Photobooth</div>
        <div onClick={() => setActive(2)} class={`${active === 2 ? classNames.tabActive : classNames.tabInactive}`}>Art Movie Screening</div>
      </div>
      <div class="flex border-solid bg-white border-2 border-black w-full shadow-[20px_20px_0_0_rgba(0,0,0)] p-[5%]">
        {/* Image */}
        <div class="bg-gray-300 h-80 w-4/12 mr-[8%] flex items-center justify-center">
          IMAGE OF WORKSHOP
        </div>
        {/* Text Area */}
        <div class="flex w-8/12 flex-col gap-y-5">
          <p class="sm:text-lg md:text-2xl lg:text-4xl font-bold flex justify-self-start">{active === 0 ? "Henna Tattoos" : active === 1 ? "Photobooth" : "Art Movie Screening"}</p>
          <p class="text-left text-[12px] md:text-md lg:text-lg font-semibold">
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
