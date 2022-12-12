import React from 'react'
import WhatIsNTUArtsFestival from './svgs/WhatIsNTUArtsFestival.svg';
import NTUArtsFestivalShadow from './svgs/NTUArtsFestivalShadow.svg';
import AppleHeader from '../SharedPages/AppleHeader'
import BigWhiteStar from './svgs/BigWhiteStar.svg';
import MediumRedStar from './svgs/MediumRedStar.svg';
import MediumYellowStar from './svgs/MediumYellowStar.svg';
import SmallBlueStar from './svgs/SmallBlueStar.svg';
import SmallPurpleDot from './svgs/SmallPurpleDot.svg';
import SmallRedStar from './svgs/SmallRedStar.svg';
import SmallWhiteDot from './svgs/SmallWhiteDot.svg';
import MediumPurpleStar from './svgs/MediumPurpleStar.svg';

const FestGuide = () => {
  return (
    <div class="flex relative min-h-screen bg-NAFYellow">
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

      <div class="flex flex-row w-[100%] h-fit mt-32">

        <img src={BigWhiteStar} class="absolute top-[40%] right-[0%] z-10"></img>
        <img src={MediumRedStar} class="absolute top-[87%] left-[0%] z-10"></img>
        <img src={MediumYellowStar} class="absolute top-[-8%] right-[9%] z-0"></img>
        <img src={MediumPurpleStar} class="absolute top-[90%] right-[45%] z-0"></img>
        <img src={SmallBlueStar} class="absolute top-[2%] left-[35%] z-10"></img>
        <img src={SmallPurpleDot} class="absolute top-[7%] right-[3%] z-10"></img>
        <img src={SmallRedStar} class="absolute top-[9%] right-[4%] z-30"></img>
        <img src={SmallWhiteDot} class="absolute top-[90%] left-[12%] z-10"></img>
        <img src={WhatIsNTUArtsFestival} class="absolute top-[8%] left-[5%] z-20 " ></img>
        <img src={NTUArtsFestivalShadow} class="absolute top-[8.3%] left-[5.3%] z-10" ></img>
        {/*<button class="flex flex-1 h-5 w-2 items-center justify-center font-syne font-weight: 700; text-zinc-50 px-2 border-2 border-indigo-500/100 bg-NAFPurple rounded-lg ...">Download Fest Guide</button>*/}
        
        {/* left */}
        <div class="flex flex-1 items-center justify-center ">
        <h1 class="relative font-syne font-normal basis-1/2 z-10 text-2xl max-w-[100%] flex-col absolute top-[30%] left-[5%]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h1>
        <button class="relative font-syne font-bold text-zinc-50 px-1 border-8 border-indigo-500/10 bg-NAFPurple rounded-lg ...">DOWNLOAD FEST GUIDE</button>
        </div>

        {/* right */}
        <div class="flex flex-1 items-center justify-center z-20">
          <div class="w-[60%] border-4 border-black">
            <AppleHeader></AppleHeader>
            <div class="h-full w-full border-solid">
              <div class="h-fit bg-white ">
                <div class="flex items-center p-5">
                  <iframe class="h-[35em] w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FestGuide