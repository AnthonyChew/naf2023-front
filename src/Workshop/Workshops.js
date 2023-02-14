import React from "react";
import { useState } from "react";
import workshops_Logo from "./svgs/workshop/workshops_Logo.png";
import workshops_StarBacking from "./svgs/workshop/workshops_StarBacking.svg";

import WhiteStar1 from "./svgs/workshop/workshops_whitestar1.svg";
import WhiteStar1Shadow from "./svgs/workshop/workshops_whitestar1shadow.svg";
import BlueStar1 from "./svgs/workshop/workshops_bluestar1.svg";
import BlueStar1Shadow from "./svgs/workshop/workshops_bluestar1shadow.svg";
import YellowStar1 from "./svgs/workshop/workshops_yellowstar1.svg";
import YellowStar1Outline from "./svgs/workshop/workshops_yellowstar1outline.svg";
import YellowStar1Shadow from "./svgs/workshop/workshops_yellowstar1shadow.svg";
import PurpleStar1 from "./svgs/workshop/workshops_purplestar1.svg";
import PurpleStar1Shadow from "./svgs/workshop/workshops_purplestar1shadow.svg";
import YellowStar2 from "./svgs/workshop/workshops_yellowstar2.svg";
import YellowStar2Shadow from "./svgs/workshop/workshops_yellowstar2shadow.svg";
import BlueStar2 from "./svgs/workshop/workshops_bluestar2.svg";
import BlueStar2Shadow from "./svgs/workshop/workshops_bluestar2shadow.svg";
import BallShadow from "./svgs/workshop/workshops_BallShadow.svg";
import RedBall from "./svgs/workshop/workshops_RedBall.svg";
import WhiteBall from "./svgs/workshop/workshops_WhiteBall.svg";
import PurpleBall from "./svgs/workshop/workshops_PurpleBall.svg";
import workshops from "../services/workshops";

const classNames = {
  tabActive: " bg-white pt-1 border-2 border-black",
  tabInactive:
    "bg-gray-300 border-y-2 border-y-gray-300 border-r-2 border-r-black py-1",
};
const Workshops = (props) => {
  const [active, setActive] = useState(0);
  const workshop = props.workshop

  return (
    <div class="overflow-hidden relative h-auto lg:min-h-screen w-full bg-NAFPurple pb-20 px-[5%] lg:px-32">
      <div class='md:w-[70%] mx-auto'>
        {/* Top Left */}
        <img class="absolute left-0 top-[2%] w-[14%]" src={WhiteStar1Shadow} />
        <img class="absolute left-0 top-[0%] w-[14%]" src={WhiteStar1} />
        <img class="absolute left-[9.2%] top-[30.2%] w-[1.8%]" src={BallShadow} />
        <img class="absolute left-[9%] top-[30%] w-[1.8%]" src={RedBall} />
        <img class="absolute left-[23.2%] top-[5.2%] w-[1.8%]" src={BallShadow} />
        <img class="absolute left-[23%] top-[5%] w-[1.8%]" src={PurpleBall} />
        {/* Top Right */}
        <img
          class="absolute right-[9.5%] -top-[2.5%] w-[5%]"
          src={BlueStar1Shadow}
        />
        <img class="absolute right-[10%] -top-[3%] w-[5%]" src={BlueStar1} />
        <img
          class="absolute right-[7%] top-[5%] w-[3%]"
          src={YellowStar1Shadow}
        />
        <img class="absolute right-[7.2%] top-[5%] w-[3%]" src={YellowStar1} />
        <img
          class="absolute right-[7.2%] top-[5%] w-[3%]"
          src={YellowStar1Outline}
        />
        <img
          class="absolute right-0 top-[14%] w-[17%] md:w-[23%]"
          src={PurpleStar1Shadow}
        />
        <img
          class="absolute right-0 top-[14%] w-[17%] md:w-[23%]"
          src={PurpleStar1}
        />
        <img
          class="absolute right-[23%] top-[33.7%] w-[1.8%] md:block hidden"
          src={BallShadow}
        />
        <img
          class="absolute right-[23.2%] top-[33.5%] w-[1.8%] md:block hidden"
          src={WhiteBall}
        />
        {/* Bot Left */}
        <img
          class="z-20 absolute left-0 bottom-[2%] w-[12%]"
          src={YellowStar2Shadow}
        />
        <img class="z-20 absolute left-0 bottom-[2%] w-[12%]" src={YellowStar2} />
        <img
          class="absolute left-[20.2%] bottom-[2%] w-[1.8%] hidden md:block"
          src={BallShadow}
        />
        <img
          class="absolute left-[20%] bottom-[2.2%] w-[1.8%] hidden md:block"
          src={WhiteBall}
        />
        {/* Bot Right */}
        <img
          class="absolute right-[3.5%] bottom-[2%] w-[8%]"
          src={BlueStar2Shadow}
        />
        <img class="absolute right-[4%] bottom-[2%] w-[8%]" src={BlueStar2} />
        {/* Header */}
        <img class="relative pt-10 pb-5" src={workshops_Logo} />
        {/* <div class="relative mb-10 mx-[10%] lg:mx-[15%] font-semibold text-center text-xs sm:text-sm md:text-md lg:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
      </div> */}
        {/* Stars */}
        <img
          class="z-0 absolute top-[-10%] right-[3%] w-screen"
          src={workshops_StarBacking}
        />
        {/* Workshops Body */}
        <div class="z-10 relative flex w-full mt-5 ">
          <div
            onClick={() => setActive(0)}
            class={`${active === 0 ? classNames.tabActive : classNames.tabInactive
              } text-xs md:text-base w-fit px-1 lg:px-5 font-syne text-center`}
          >
            {workshop && workshop.name}
          </div>
          {/* <div
          onClick={() => setActive(1)}
          class={`${
            active === 1 ? classNames.tabActive : classNames.tabInactive
          } text-xs md:text-base w-[32%] sm:w-[17%] font-semibold text-center`}
        >
          Photobooth
        </div>
        <div
          onClick={() => setActive(2)}
          class={`${
            active === 2 ? classNames.tabActive : classNames.tabInactive
          } text-xs md:text-base w-[32%] sm:w-[17%] font-semibold text-center`}
        >
          Art Movie Screening
        </div> */}
        </div>

        {/*  */}
        <div class="z-10 relative flex border-solid bg-white border-2 border-black w-full shadow-[20px_20px_0_0_rgba(0,0,0)] p-[5%]">
          {/* Image */}
          <div class=" h-auto lg:h-80 w-4/12 mr-[8%] flex items-center justify-center font-syne overflow-hidden">
            <img src={workshop && workshop.images[0]} />
          </div>
          {/* Text Area */}
          <div class=" flex w-8/12 flex-col gap-y-2 sm:gap-y-5">
            <p class="sm:text-lg md:text-2xl lg:text-4xl font-bold flex font-syne justify-self-start">
              {active === 0
                ? workshop && workshop.name
                : active === 1
                  ? "Photobooth"
                  : "Art Movie Screening"}
            </p>
            <p class="text-left text-[10px] sm:text-sm md:text-md font-syne lg:text-lg">
              Participation Fee: ${workshop && workshop.price.toFixed(2)}
            </p>
            <p class="text-left text-[10px] sm:text-sm md:text-md font-syne lg:text-lg">
              {workshop && workshop.description}
            </p>
            <p class="text-left text-[10px] sm:text-sm md:text-md font-syne lg:text-lg">
              {(workshop &&  workshop.description2) && workshop.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Workshops;
