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
import ClickImage from './svgs/events/eventsClickImage.svg';
import { useNavigate } from 'react-router-dom';

import Interstellar from './svgs/events/Festival Guide_1.png';
import Starburst from './svgs/events/Festival Guide_2.png';
import Glimmer from './svgs/events/Festival Guide_3.png';
import Orbit from './svgs/events/Festival Guide_4.png';
import AppleHeader from '../SharedPages/AppleHeader';
import { Link } from 'react-router-dom';

const Events = () => {
  const imgGallery = [{ image: Glimmer, location: 'Skydeck @ North Spine, Green Space @ North Spine', name: 'GLIMMER', date: '14 - 24 FEB 2023', link: '/glimmer' },
  { image: Starburst, location: 'Foyer @ LT1', name: 'STARBURST', date: '6 - 10 MAR 2023', link: '/starburst' },
  { image: Interstellar, location: 'TRs, LWN Study Room, Nanyang House, NIE', name: 'INTERSTELLAR', date: '6 - 17 MAR 2023', link: '/interstellar' },
  { image: Orbit, location: 'Green Space @ North Spine, Linkway @ Admin Building, Nanyang Auditorium', name: 'ORBIT ', date: '14 FEB - 17 MAR 2023', link: '/orbit' }];
  const [imgState, setImgState] = useState(0)
  const ImageState = (val) => (event) => {
    if (val > 3) val = 0
    if (val < 0) val = 3
    setImgState(val)
  }

  const history = useNavigate();

  return (
    <div class="flex relative overflow-x-clip bg-NAFYellow flex-col  items-center lg:flex-row lg:items-stretch">
      <div class="lg:hidden mt-5">
        <img src={EventLogo} class="w-[50%] mx-auto"></img>
      </div>
      <img src={TopRightYellowStar} class="hidden lg:block absolute top-[-22%] right-[-10%] z-20 "></img>
      <img src={RedDot} class="hidden lg:block absolute top-[15%] left-[0%] z-10" ></img>
      <img src={BigWhiteStar} class="absolute bottom-[10%] left-[-1%] z-10 w-[30%] md:w-[auto]" ></img>
      <img src={ClickImage} class="absolute top-[15%] md:top-[0%] left-[0%] z-10 w-[30%] md:w-[auto] cursor-pointer" onClick={() => history(imgGallery[imgState].link) }></img>

      {/* left side */}
      <div class="w-[70%] bg-NAFYellow grow relative flex flex-col flex-wrap align-center justify-center">
        <img src={RedStar} class="hidden lg:block absolute top-[-5%] right-[-8%] z-10" ></img>
        <img src={SmallPurpleStar} class="hidden lg:block absolute bottom-[15%] right-[-2%]" ></img>

        <div class="lg:h-2/4 my-0 mx-auto p-10 relative md:max-w-[50%] ">
          <img src={BigPurpleStar} class="hidden lg:block absolute top-[-5%] left-[-5%]" ></img>
          <Link to={imgGallery[imgState].link}>
            <img src={imgGallery[imgState].image} to={imgGallery[imgState].link} ></img>
          </Link>
        </div>
        <div class="mx-auto mb-5 lg:mb-0 flex justify-around w-3/4 lg:w-1/4 md:mt-20 gap-1">
          <div>
            <img class="inline-block w-3/4 lg:w-[auto]" src={LeftArrow} onClick={ImageState(imgState - 1)}></img>
          </div>
          <div>
            <img class="inline-block w-3/4 lg:w-[auto]" src={RightArrow} onClick={ImageState(imgState + 1)}></img>
          </div>
        </div>

      </div>

      {/* right side */}
      <div class="hidden lg:block w-[30%] max-w-[600px] bg-NAFBlue px-10 py-[4rem] relative overflow-hidden">
        <img src={WhiteDot} class="hidden lg:block absolute top-[3%] left-[15%]" ></img>

        <img src={SmallWhiteStar} class="hidden lg:block absolute bottom-[10%] right-[-1%]" ></img>
        <div class="relative">
          <img class='w-full h-full' src={EventLogo}></img>
          <div class="mt-10 w-[90%]">
            {
              imgGallery.map((oneImage, index) => (
                <div className={imgState == index ? "text-white bg-black rounded-lg py-7 my-10 pl-5 border-black border-4 shadow-[3px_3px_0_0_rgba(0,0,0)] cursor-pointer" :
                  "text-black bg-white rounded-lg py-7 my-10 pl-5 border-black border-4 shadow-[3px_3px_0_0_rgba(0,0,0)] cursor-pointer"}
                  onClick={ImageState(index)} >
                  <div class="font-syneExtraBold text-header text-ellipsis whitespace-nowrap overflow-hidden ">{oneImage.name}</div>
                  <div class="font-syneBold">{oneImage.date},{<br />} 	&lt;{oneImage.location}&gt;</div>
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