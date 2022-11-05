import React, { useState, Component, useEffect} from "react";
import Heart from "react-heart"
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
import RedStar from "./svgs/MarketPlace/RedStar.svg"
import BlueStar from "./svgs/MarketPlace/BlueStar.svg"

const Marketplace = () => {
    const imgGallery = [Pikachu1, Pikachu2, Pikachu3, Pikachu4];
    const [imgState, setImgState] = useState(0)
    const handleClick = () => {
        // implementation details
      };
    const [active, setActive] = useState(false)
    

  return (
    <div
      class="bg-NAFPurple bg-cover pb-[25rem] relative"
      style={{ backgroundImage: `url(${LandingBg})` }}
    >
      <div class="relative overflow-hidden">
      <img src={YellowStar} class="absolute top-[0%] right-[0%] z-10" ></img>
        <img src={MarketplaceLogo} class="mx-auto my-0 pt-[8rem] pb-[5rem] "></img>
        
      </div>
      <img src={RedStar} class="absolute top-[7%] left-[19%] z-0" ></img>
      <img src={BlueStar} class="absolute top-[70%] left-[70%] z-0" ></img>
      <div class="text-white bg-gray-500 rounded-lg pb-5 border-black border-4 shadow-[20px_20px_0_0_rgba(0,0,0)] mt-5 w-1/2 mx-auto my-10 relative">
      


        <AppleHeader> </AppleHeader>
        <Carousel class = "z-10">
          <div>
            <img src={Pikachu4} />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <img src={Pikachu2} />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src={Pikachu3} />
            <p className="legend">Image 3</p>
          </div>
        </Carousel>
        <div style={{ width: "3rem" }} class="top-[10%] right-[100%]">
          <Heart isActive={active} onClick={() => setActive(!active)} animationScale = {1.2} animationTrigger = "both" animationDuration = {.2} className = {`customHeart${active ? " active": ""}`}/>
        </div>
        
        

      </div>
    </div>
  );
};

export default Marketplace;
