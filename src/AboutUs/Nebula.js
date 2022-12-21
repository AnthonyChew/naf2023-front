import React from "react";
import NebulaImg from "./svgs/FestGuide/Nebula.png";
import WhatsOnLogo from '../HomePage/svgs/whatson/whatsonLogo.png'

const Nebula = () => {
  return (
    <div class="overflow-y-clip flex relative min-h-screen bg-NAFPurple ">
        <div class="flex relative flex-col items-center">
          <img class="mx-14 mt-28 z-20" src={NebulaImg}></img>
        </div>
    </div>
  );
  
};

export default Nebula;
