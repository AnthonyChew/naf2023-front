import React, { useState, Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LandingBg from "./svgs/landingbg.svg";
import MarketplaceLogo from "./svgs/MarketPlace Logo.svg";

import Pikachu1 from "./svgs/events/pikachu1.png";
import Pikachu2 from "./svgs/events/pikachu2.png";
import Pikachu3 from "./svgs/events/pikachu3.jpg";
import Pikachu4 from "./svgs/events/pikachu4.jpg";
import AppleHeader from "../SharedPages/AppleHeader";
import YellowStar from "./svgs/MarketPlace/YellowStar.svg"

const Marketplace = () => {
  const [imgState, setImgState] = useState(0);
  return (
    <div
      class="bg-NAFPurple bg-cover pb-[25rem] relative"
      style={{ backgroundImage: `url(${LandingBg})` }}
    >
      <div class="relative overflow-hidden">
      <img src={YellowStar} class="absolute top-[0%] right-[0%] z-10" ></img>
        <img src={MarketplaceLogo} class="mx-auto my-0 pt-[15rem]"></img>
        
      </div>
      <img src={YellowStar} class="absolute top-[20%] left-[20%] z-0" ></img>
      <div class="text-white bg-black rounded-lg py-5 border-black border-4 shadow-[3px_3px_0_0_rgba(0,0,0)] mt-5 w-1/2 mx-auto my-10 relative">
        
        <AppleHeader> </AppleHeader>
        <Carousel class = "z-10">
          <div>
            <img src={Pikachu4} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={Pikachu2} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={Pikachu3} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
    
      </div>
    </div>
  );
};

export default Marketplace;
