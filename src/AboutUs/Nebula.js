import React from "react";
import NebulaImg from "./svgs/FestGuide/Nebula.png";
import WhatsOnLogo from '../HomePage/svgs/whatson/whatsonLogo.png'

const Nebula = () => {
  return (
    <div class="overflow-y-clip flex relative min-h-screen bg-NAFPurple ">
        <div class="flex relative flex-col items-center">
          <img class="mt-28 mb-28 z-20" src={NebulaImg}></img>
      <div class = "flex relative flex-col items-center">
        <img src={WhatsOnLogo} class = "mt-28 mb-28 z-20 "></img>
        </div>
        </div>
    </div>
  );
};

export default Nebula;
