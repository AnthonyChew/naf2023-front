import React from 'react'
import LandingBg from './svgs/landingbg.svg';
import EventLogo from './svgs/eventsLogo.png';
import LeftArrow from './svgs/eventsLeftArrow.svg';
import RightArrow from './svgs/eventsRightArrow.svg';
import BigWhiteStar from './svgs/eventsBigWhiteStar.svg';
import BigPurpleStar from './svgs/eventsBigPurpleStar.svg';
import RedStar from './svgs/eventsRedStar.svg';
import SmallPurpleStar from './svgs/eventsSmallPurpleStar.svg';
import SmallWhiteStar from './svgs/eventsSmallWhiteStar.svg';
import WhiteDot from './svgs/eventsWhiteDot.svg';
import RedDot from './svgs/eventsRedDot.svg';

const Events = () => {
  return (
    <div class="flex relative ">
        <img src={RedDot} class="absolute top-[15%] left-[0%] z-10" ></img>
        <img src={BigWhiteStar} class="absolute bottom-[10%] left-[-1%] z-10" ></img>


      <div class="w-[70%] bg-NAFYellow grow relative">
        <img src={RedStar} class="absolute top-[-5%] right-[-8%] z-10" ></img>
        <img src={SmallPurpleStar} class="absolute bottom-[15%] right-[-2%]" ></img>

        <div class="w-4/4 h-3/4 my-0 mx-auto p-10 relative">
          
        <img src={BigPurpleStar} class="absolute top-[-5%] left-[0%] z-0" ></img>
          <img src="" class="h-full w-full"></img>
        </div>
        <div class="mx-auto my-0 flex justify-around w-1/4">
            <img class="inline-block" src={LeftArrow}></img>
            <img class="inline-block" src={RightArrow}></img>
        </div>

      </div>
      <div class="w-[30%] max-w-[600px] bg-NAFBlue px-10 py-[8rem] relative overflow-hidden">
        <img src={WhiteDot} class="absolute top-[3%] left-[15%]" ></img>

        <img src={SmallWhiteStar} class="absolute bottom-[10%] right-[-1%]" ></img>
        <div class="">
          <img src={EventLogo} class="w-3/4"></img>
          <div class="mt-15 w-4/5">
            <div class="bg-white rounded-lg py-7 my-10 2xl:py-10">
              <div class="font-yerkItalic text-4xl">EVENT NAME</div>
              <div class="font-syne font-bold text-2xl">XX FEB 2023, 	&lt;Location	&gt;</div>
            </div>
            <div class="bg-white rounded-lg py-7 my-10 2xl:py-10">
              <div class="font-yerkItalic text-4xl">EVENT NAME</div>
              <div class="font-syne font-bold text-2xl">XX FEB 2023, 	&lt;Location	&gt;</div>
            </div>
            <div class="bg-white rounded-lg py-7 my-10 2xl:py-10">
              <div class="font-yerkItalic text-4xl">EVENT NAME</div>
              <div class="font-syne font-bold text-2xl">XX FEB 2023, 	&lt;Location	&gt;</div>
            </div>
            <div class="bg-white rounded-lg py-7 my-10 2xl:py-10">
              <div class="font-yerkItalic text-4xl">EVENT NAME</div>
              <div class="font-syne font-bold text-2xl">XX FEB 2023, 	&lt;Location	&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events