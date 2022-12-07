import React, { useState, useEffect } from 'react'
import Footer from '../SharedPages/Footer'
import Navbar from '../SharedPages/Navbar'
import FestGuide from './FestGuide'
import Info from './Info'
import WhatIsNTUArtsFestival from './svgs/WhatIsNTUArtsFestival.svg';
import NTUArtsFestivalShadow from './svgs/NTUArtsFestivalShadow.svg';

/*
import WhatIsNTUArtsFestival from './src/AboutUs/svgs';
import LeftArrow from './svgs/events/eventsLeftArrow.svg';
import RightArrow from './svgs/events/eventsRightArrow.svg';
import BigWhiteStar from './svgs/events/eventsBigWhiteStar.svg';
import BigPurpleStar from './svgs/events/eventsBigPurpleStar.svg';
import RedStar from './svgs/events/eventsRedStar.svg';
import SmallPurpleStar from './svgs/events/eventsSmallPurpleStar.svg';
import SmallWhiteStar from './svgs/events/eventsSmallWhiteStar.svg';
import WhiteDot from './svgs/events/eventsWhiteDot.svg';
import RedDot from './svgs/events/eventsRedDot.svg';
<Navbar></Navbar>
        <Landing></Landing>
        <WhatsOn></WhatsOn>
        <Events></Events>
        <Marketplace></Marketplace>
        <Workshops/>
        <Footer></Footer>
        /* bottom-10 border-solid border-4 border-black w-4/12 shadow-[20px_20px_0_0_rgba(0,0,0)] 
*/

const AboutUs = () => {
  return (
    
    <div>
      <Navbar></Navbar>
      <div class="min-h-screen bg-NAFYellow grow relative flex flex-col flex-wrap align-center">
        <img src={WhatIsNTUArtsFestival} class="absolute top-[5%] right-[45%] z-10 " ></img>
        <img src={NTUArtsFestivalShadow} class="absolute top-[6%] right-[45%] z-9 " ></img>
        <h1 class="absolute top-[100%]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h1>

        </div>
 
        <FestGuide></FestGuide>
        <Info></Info>
        <Footer></Footer>
    </div>
   

    
  )
}

export default AboutUs

