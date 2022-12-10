import React, { useState, useEffect } from 'react'
import Footer from '../SharedPages/Footer'
import Navbar from '../SharedPages/Navbar'
import FestGuide from './FestGuide'
import Info from './Info'
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


/*


        /* bottom-10 border-solid border-4 border-black w-4/12 shadow-[20px_20px_0_0_rgba(0,0,0)] 
*/

/*
<div class="flex relative items-center min-h-screen bg-NAFPurple bg-cover overflow-hidden" style={{ backgroundImage: `url(${LandingBg})` }}>

      <div class="w-[60%] h-fit mb-28 mr-auto ml-36 border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
        <AppleHeader title={"www.aboutus.com"}></AppleHeader>
*/
const AboutUs = () => {
  return (
    
    <div>
      <Navbar></Navbar>
      <div class="min-h-screen bg-NAFYellow relative">

        
        <img src={BigWhiteStar} class="absolute top-[20%] right-[20%] z-0"></img>
        <img src={MediumRedStar} class="absolute top-[6%] left-[5%] z-10"></img>
        <img src={MediumYellowStar} class="absolute top-[6%] left-[5%] z-10"></img>
        <img src={SmallBlueStar} class="absolute top-[6%] left-[5%] z-10"></img>
        <img src={SmallPurpleDot} class="absolute top-[6%] left-[5%] z-10"></img>
        <img src={SmallRedStar} class="absolute top-[6%] left-[5%] z-10"></img>
        <img src={SmallWhiteDot}  class="absolute top-[6%] left-[5%] z-10"></img>

        <div>
          {/*Left Side stuff*/}
          <h1 class="basis-1/2 z-10 max-w-[27%] flex-col absolute top-[30%] left-[5%]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h1>
          <img src={WhatIsNTUArtsFestival} class="absolute top-[5%] left-[5%] z-20 " ></img>
          <img src={NTUArtsFestivalShadow} class="absolute top-[5.3%] left-[5.3%] z-10" ></img>

        </div>

        <button class="font-syne font-weight: 700; text-zinc-50 px-2 border-2 border-indigo-500/100 bg-NAFPurple rounded-lg ...">Download Fest Guide</button>
        
        <div>
          {/*Right Side stuff*/}
          <div class="basis-1/2 z-0 ml-5 relative right-[-43%] w-[30%] h-fit border-4 border-black shadow-[15px_20px_0_0_rgba(0,0,0)]">
          {/*//h-fit mb-28 mr-auto ml-36 border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]*/}
          <AppleHeader></AppleHeader>
          <div class="h-full w-full border-solid">
            <div class="p-5 bg-white">
            <iframe class="h-[35em] w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          </div>
        </div>

      </div>
        <FestGuide></FestGuide>
        <Info></Info>
        <Footer></Footer>
    </div>

  )
}

export default AboutUs

