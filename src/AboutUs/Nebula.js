import React from "react";
import NebulaImg from "./svgs/FestGuide/Nebula.png";
import WhatsOnLogo from '../HomePage/svgs/whatson/whatsonLogo.png'

const Nebula = () => {
  return (
    <div class="overflow-y-clip flex relative min-h-screen bg-NAFPurple ">
      <div class="relative basis-1/2"></div>
      <div class="flex relative flex-col items-center">
          <img class="mx-14 mt-28 flex z-20 items-center" src={NebulaImg}></img>
        </div>
      <div class="relative basis-1/2"></div>
        
    </div>
  );
  
};

export default Nebula;
