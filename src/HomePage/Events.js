import React, { useState, useEffect } from 'react'
import LandingBg from './svgs/landing/landingbg.svg';
import EventLogo from './svgs/events/eventsLogo.png';
import LeftArrow from './svgs/events/eventsLeftArrow.svg';
import RightArrow from './svgs/events/eventsRightArrow.svg';
import BigWhiteStar from './svgs/events/eventsBigWhiteStar.svg';
import BigPurpleStar from './svgs/events/eventsBigPurpleStar.svg';
import RedStar from './svgs/events/eventsRedStar.svg';
import SmallPurpleStar from './svgs/events/eventsSmallPurpleStar.svg';
import SmallWhiteStar from './svgs/events/eventsSmallWhiteStar.svg';
import WhiteDot from './svgs/events/eventsWhiteDot.svg';
import RedDot from './svgs/events/eventsRedDot.svg';
import TopRightYellowStar from './svgs/events/eventsTopRightYellowStar.svg'

import Pikachu1 from './svgs/events/pikachu1.png';
import Pikachu2 from './svgs/events/pikachu2.png';
import Pikachu3 from './svgs/events/pikachu3.jpg';
import Pikachu4 from './svgs/events/pikachu4.jpg';
import AppleHeader from '../SharedPages/AppleHeader';

const Events = () => {
  const imgGallery = [Pikachu1, Pikachu2, Pikachu3, Pikachu4];
  const [imgState, setImgState] = useState(0)
  const ImageState = (val) => (event) => {
    if (val > 3) val = 0
    if (val < 0) val = 3
    setImgState(val)
  }

  return (
    <div class="flex relative overflow-x-clip ">
      <img src={TopRightYellowStar} class="absolute top-[-22%] right-[-10%] z-30 "></img>
      <img src={RedDot} class="absolute top-[15%] left-[0%] z-10" ></img>
      <img src={BigWhiteStar} class="absolute bottom-[10%] left-[-1%] z-10" ></img>


      <div class="w-[70%] bg-NAFYellow grow relative flex flex-col flex-wrap align-center justify-center">
        <img src={RedStar} class="absolute top-[-5%] right-[-8%] z-10" ></img>
        <img src={SmallPurpleStar} class="absolute bottom-[15%] right-[-2%]" ></img>

        <div class="h-2/4 my-0 mx-auto p-10 relative max-w-[50%]">
          <img src={BigPurpleStar} class="absolute top-[-5%] left-[-5%]" ></img>
          <img src={imgGallery[imgState]} class="h-full w-full"></img>
        </div>
        <div class="mx-auto my-0 flex justify-around w-1/4">
          <img class="inline-block" src={LeftArrow} onClick={ImageState(imgState-1)}></img>
          <img class="inline-block" src={RightArrow} onClick={ImageState(imgState+1)}></img>
        </div>

      </div>
      <div class="w-[30%] max-w-[600px] bg-NAFBlue px-10 py-[4rem] relative overflow-hidden">
        <img src={WhiteDot} class="absolute top-[3%] left-[15%]" ></img>

        <img src={SmallWhiteStar} class="absolute bottom-[10%] right-[-1%]" ></img>
        <div class="relative">
          <img src={EventLogo} class="w-3/4"></img>
          <div class="mt-10 w-[90%]">
            {
              imgGallery.map((oneImage, index) => (
                <div className={imgState == index ? "text-white bg-black rounded-lg py-7 my-10 border-black border-4 shadow-[3px_3px_0_0_rgba(0,0,0)]" :
                 "text-black bg-white rounded-lg py-7 my-7 border-black border-4 shadow-[3px_3px_0_0_rgba(0,0,0)]"} 
                 onClick={ImageState(index)} >
                  <div class="font-yerkItalic text-2xl">EVENT NAME</div>
                  <div class="font-syne font-bold text-xl">XX FEB 2023, 	&lt;Location&gt;</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events