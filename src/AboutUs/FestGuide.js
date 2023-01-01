import React from "react";
import WhatIsNTUArtsFestival from "./svgs/FestGuide/WhatIsNTUArtsFestival.png";
import AppleHeader from "../SharedPages/AppleHeader";
import BigWhiteStar from "./svgs/FestGuide/BigWhiteStar.svg";
import MediumRedStar from "./svgs/FestGuide/MediumRedStar.svg";
import MediumYellowStar from "./svgs/FestGuide/MediumYellowStar.svg";
import SmallBlueStar from "./svgs/FestGuide/SmallBlueStar.svg";
import SmallPurpleDot from "./svgs/FestGuide/SmallPurpleDot.svg";
import SmallRedStar from "./svgs/FestGuide/SmallRedStar.svg";
import SmallWhiteDot from "./svgs/FestGuide/SmallWhiteDot.svg";
import MediumPurpleStar from "./svgs/FestGuide/MediumPurpleStar.svg";

const FestGuide = () => {
  
  return (
    <div class="overflow-y-clip flex relative min-h-screen bg-NAFYellow">
      {/* <div>
          <h1 class="basis-1/2 z-10 max-w-[27%] flex-col absolute top-[30%] left-[5%]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h1>
          <img src={WhatIsNTUArtsFestival} class="absolute top-[5%] left-[5%] z-20 " ></img>
          <img src={NTUArtsFestivalShadow} class="absolute top-[5.3%] left-[5.3%] z-10" ></img>
        </div>
        <button class="font-syne font-weight: 700; text-zinc-50 px-2 border-2 border-indigo-500/100 bg-NAFPurple rounded-lg ...">Download Fest Guide</button>
        
        <div>
          <div class="basis-1/2 z-0 ml-5 relative right-[-43%] w-[30%] h-fit border-4 border-black shadow-[15px_20px_0_0_rgba(0,0,0)]">
          <AppleHeader></AppleHeader>
          <div class="h-full w-full border-solid">
            <div class="p-5 bg-white">
            <iframe class="h-[35em] w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          </div>
        </div>  */}

      <div class=" flex flex-row w-[100%] min-h-screen mt-32 mx-10 my-10 flex-wrap">
        <img src={BigWhiteStar} class="absolute top-[40%] right-[0%] hidden lg:block"></img>
        {/* <img src={MediumRedStar} class="absolute top-[87%] left-[0%] "></img> */}
        <img src={MediumYellowStar} class="absolute top-[-8%] right-[9%]"></img>
        {/* <img
          src={MediumPurpleStar}
          class="absolute top-[90%] right-[45%]"
        ></img> */}
        <img src={SmallBlueStar} class="absolute top-[2%] left-[35%] hidden lg:block"></img>
        <img src={SmallPurpleDot} class="absolute top-[7%] right-[3%] "></img>
        <img src={SmallRedStar} class="absolute top-[9%] right-[4%] z-10 hidden lg:block"></img>
        <img src={SmallWhiteDot} class="absolute top-[90%] left-[12%] hidden lg:block"></img>

        <div class="relative basis-1/2">
          <img src={WhatIsNTUArtsFestival} class=""></img>
          <h1 class="my-5 mr-10 font-syne font-normal text-2xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </h1>
{/*./pdfs/Sample pdf document.pdf  padding: 15px 32px; */}
          <a type="submit" href="/AboutUs/pdfs/Sample pdf document.pdf" download="Sample pdf document.pdf"
            class="hover:bg-violet-700 py-[5%] mt-2 w-[45%] p-15  box-border text-center items-center font-syne font-weight: 700; text-zinc-50 px-2 border-2 border-indigo-500/100 bg-NAFPurple rounded-lg ..."
          >
            DOWNLOAD FEST GUIDE
          </a>
          
        </div>
        <div class="lg:relative lg:basis-1/2 ">
          <div class="mx-auto w-[80%] h-[80%] bg-white align-center border-4 border-black shadow-[15px_20px_0_0_rgba(0,0,0)]">
            <AppleHeader></AppleHeader>
            <div class="h-[100%] border-solid p-5">
              <iframe
                class=" w-full h-[95%] "
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestGuide;