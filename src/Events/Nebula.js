import React from "react";
import NebulaImg from "./svgs/nebula/Nebula.png";

const Nebula = () => {
  return (
    <div class="overflow-y-clip flex relative min-h-screen bg-NAFPurple ">
      <div class="relative basis-1/2"></div>
      <div class="flex relative flex-col items-center">
          <img class="mx-14 mt-28 flex z-20 items-center" src={NebulaImg}></img>
          <div class="text-white font-syne font-normal text-xl pt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
        </div>
      <div class="relative basis-1/2"></div>
        
    </div>
  );
  
};

export default Nebula;
