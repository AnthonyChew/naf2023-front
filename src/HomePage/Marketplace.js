import React, { useState, Component, useEffect} from "react";
import MarketPlaceLogo from './svgs/MarketPlace/MarketPlace Logo.svg'

import MarketPlaceOrbit1 from './svgs/MarketPlace/MarketPlaceOrbit1.svg'
import MarketPlaceOrbit2 from './svgs/MarketPlace/MarketPlaceOrbit2.svg'
import MarketPlaceOrbit3 from './svgs/MarketPlace/MarketPlaceOrbit3.svg'
import MarketPlaceOrbit4 from './svgs/MarketPlace/MarketPlaceOrbit4.svg'


import MarketPlacePurpleDot from './svgs/MarketPlace/MarketPlacePurpleDot.svg'
import MarketPlaceOrangeDot from './svgs/MarketPlace/MarketPlaceOrangeDot.svg'
import MarketPlaceWhiteDot from './svgs/MarketPlace/MarketPlaceWhiteDot.svg'

import MarketPlaceYellow4Star1 from './svgs/MarketPlace/MarketPlaceYellow4Star1.svg'
import MarketPlaceOrange8Star1 from './svgs/MarketPlace/MarketPlaceOrange8Star1.svg'
import MarketPlaceBlue4Star1 from './svgs/MarketPlace/MarketPlaceBlue4Star1.svg'
import MarketPlaceYellow8Star1 from './svgs/MarketPlace/MarketPlaceYellow8Star1.svg'
import MarketPlacePurple8Star1 from './svgs/MarketPlace/MarketPlacePurple8Star1.svg'
import MarketPlaceOrange4Star1 from './svgs/MarketPlace/MarketPlaceOrange4Star1.svg'
import MarketPlaceBlue8Star1 from './svgs/MarketPlace/MarketPlaceBlue8Star1.svg'
import MarketPlacePurple8Star2 from './svgs/MarketPlace/MarketPlacePurple8Star2.svg'
import MarketPlaceWhite4Star1 from './svgs/MarketPlace/MarketPlaceWhite4Star1.svg'

import MarketPlaceWhite4Star2 from './svgs/MarketPlace/MarketPlaceWhite4Star2.svg'
import MarketPlacePurple4Star1 from './svgs/MarketPlace/MarketPlacePurple4Star1.svg'
import MarketPlaceBlue4Star2 from './svgs/MarketPlace/MarketPlaceBlue4Star2.svg'
import MarketPlaceYellow4Star2 from './svgs/MarketPlace/MarketPlaceYellow4Star2.svg'
import MarketPlaceBlue8Star2 from './svgs/MarketPlace/MarketPlaceBlue8Star2.svg'

import MarketPlaceWhite4Star3 from './svgs/MarketPlace/MarketPlaceWhite4Star3.svg'
import MarketPlacePurple4Star2 from './svgs/MarketPlace/MarketPlacePurple4Star2.svg'

import MarketPlacePurple8Star3 from './svgs/MarketPlace/MarketPlacePurple8Star3.svg'
import MarketPlaceYellow4Star3 from './svgs/MarketPlace/MarketPlaceYellow4Star3.svg'
import MarketPlaceOrange8Star2 from './svgs/MarketPlace/MarketPlaceOrange8Star2.svg'
import MarketPlaceWhite4Star4 from './svgs/MarketPlace/MarketPlaceWhite4Star4.svg'
import MarketPlacePurple8Star4 from './svgs/MarketPlace/MarketPlacePurple8Star4.svg'
import MarketPlaceBlue4Star3 from './svgs/MarketPlace/MarketPlaceBlue4Star3.svg'
import MarketPlaceOrange8Star3 from './svgs/MarketPlace/MarketPlaceOrange8Star3.svg'
import MarketPlaceWhite4Star5 from './svgs/MarketPlace/MarketPlaceWhite4Star5.svg'
import MarketPlaceYellow8Star2 from './svgs/MarketPlace/MarketPlaceYellow8Star2.svg'
import MarketPlaceBlue4Star4 from './svgs/MarketPlace/MarketPlaceBlue4Star4.svg'


const Marketplace = () => {
  return (
    <div class="bg-NAFPink flex relative flex-col min-h-screen overflow-hidden justify-center">
      <div class="mx-auto my-0 w-2/3 h-1/4 text-center">
        <img src={MarketPlaceLogo} class="my-6 mx-auto w-[90%]"></img>
        <button class="bg-NAFBlue w-1/3 text-xs md:text-xl font-syneBold text-white py-4 px-1 border-2 border-black rounded-lg">SEE ALL PRODUCTS</button>
      </div>

      <img src={MarketPlaceYellow4Star1} class="absolute top-[3%] left-[0%] z-20"></img>
      <img src={MarketPlacePurpleDot} class="absolute top-[21%] left-[9%] z-20"></img>
      <img src={MarketPlaceOrange8Star1} class="absolute top-[9%] left-[12.4%] z-20"></img>
      <img src={MarketPlaceBlue4Star1} class="absolute top-[5.2%] left-[24.51%]"></img>
      <img src={MarketPlaceYellow8Star1} class="absolute top-[6.3%] left-[31.25%]"></img>
      <img src={MarketPlacePurple8Star1} class="absolute top-[3.3%] left-[45%]"></img>
      <img src={MarketPlaceOrange4Star1} class="absolute top-[10.9%] right-[39%]"></img>
      <img src={MarketPlaceBlue8Star1} class="absolute top-[2%] right-[27.8%] z-20"></img>
      <img src={MarketPlacePurple8Star2} class="absolute top-[10.5%] right-[17%] z-20"></img>
      <img src={MarketPlaceOrangeDot} class="absolute top-[5%] right-[10.7%]"></img>
      <img src={MarketPlaceWhite4Star1} class="absolute top-[9.4%] right-[1%]"></img> 

      <img src={MarketPlaceBlue8Star1} class="absolute top-[26.4%] left-[1%]"></img>
      <img src={MarketPlaceWhite4Star2} class="absolute top-[27%] left-[13%]"></img>
      <img src={MarketPlacePurple4Star1} class="absolute top-[18%] left-[26%]"></img>
      <img src={MarketPlaceBlue4Star2} class="absolute top-[18%] left-[41.3%]"></img>
      <img src={MarketPlaceWhiteDot} class="absolute top-[27.8%] left-[52.7%]"></img>
      <img src={MarketPlaceYellow4Star2} class="absolute top-[21.4%] right-[32.5%]"></img>
      <img src={MarketPlaceWhiteDot} class="absolute top-[27%] right-[27%]"></img>
      <img src={MarketPlaceBlue8Star2} class="absolute top-[25%] right-[1.5%]"></img>

      <img src={MarketPlaceWhite4Star3} class="absolute top-[50%] left-[8%]"></img>
      <img src={MarketPlacePurple4Star2} class="absolute bottom-[39%] right-[4.5%]"></img>

      <img src={MarketPlaceWhiteDot} class="absolute bottom-[6%] left-[2.6%]"></img>
      <img src={MarketPlacePurple8Star3} class="absolute bottom-[13%] left-[1%]"></img>
      <img src={MarketPlaceYellow4Star3} class="absolute bottom-[8.5%] left-[16.5%] z-20"></img>
      <img src={MarketPlaceOrange8Star2} class="absolute bottom-[23.2%] left-[25%] z-20"></img>
      <img src={MarketPlaceWhite4Star4} class="absolute bottom-[1.5%] left-[31.7%]"></img>
      <img src={MarketPlacePurple8Star4} class="absolute bottom-[15.7%] left-[39.3%]"></img>
      <img src={MarketPlaceWhiteDot} class="absolute bottom-[7.6%] left-[47.4%]"></img>
      <img src={MarketPlaceBlue4Star3} class="absolute bottom-[12.4%] right-[38%]"></img>
      <img src={MarketPlaceOrange8Star3} class="absolute bottom-[5.5%] right-[25.5%]"></img>
      <img src={MarketPlaceWhite4Star5} class="absolute bottom-[28.6%] right-[27.7%]"></img>
      <img src={MarketPlaceYellow8Star2} class="absolute bottom-[18.8%] right-[14.8%]"></img>
      <img src={MarketPlaceWhiteDot} class="absolute bottom-[9.5%] right-[19.7%] z-20"></img>
      <img src={MarketPlaceBlue4Star4} class="absolute bottom-[1.7%] right-[2%]"></img>
      <img src={MarketPlaceOrangeDot} class="absolute bottom-[26.1%] right-[2.8%]"></img>

      <img src={MarketPlaceOrbit1} class="absolute w-[20%] top-[1%] left-[0%] z-10"></img>
      <img src={MarketPlaceOrbit2} class="absolute w-[19%] top-[-2%] right-[17%] z-10"></img>
      <img src={MarketPlaceOrbit3} class="absolute w-[21%] bottom-[5%] left-[15%] z-10"></img>
      <img src={MarketPlaceOrbit4} class="absolute w-[21%] bottom-[1%] right-[14.5%] z-10"></img>
    </div>
  );
};

export default Marketplace;
