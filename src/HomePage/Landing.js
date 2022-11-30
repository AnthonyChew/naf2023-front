import React from 'react'
import AppleHeader from '../SharedPages/AppleHeader'
import LandingBg from './svgs/landingbg.svg'
import InstagramIcon from './svgs/landingInstagram.svg'
import FacebookIcon from './svgs/landingFacebook.svg'
import TikTok from './svgs/landingTikTok.svg'
import LeftBigBlueStarIcon from './svgs/landingBlueStar.svg'
import MiddleYellowDotIcon from './svgs/landingYellowDot.svg'
import MiddleRedStarIcon from './svgs/landingRedStar.svg'

import RightYellowStar from './svgs/landingYellowStar.svg'
import RightSmallBlueStartIcon from './svgs/landingSmallBlueStar.svg'
import RightWhiteDotIcon from './svgs/landingWhiteDot.svg'

const Landing = () => {
  return (

    <div class="flex relative items-center min-h-screen bg-NAFPurple bg-cover overflow-hidden" style={{ backgroundImage: `url(${LandingBg})` }}>

      <div class="w-[60%] h-fit mb-28 mr-auto ml-36 border-4 border-black w-3/12 shadow-[20px_20px_0_0_rgba(0,0,0)]">
        <AppleHeader title={"www.aboutus.com"}></AppleHeader>
        <div class="h-full w-full border-solid "  >
          <div class="p-5 bg-white">
            <iframe class="h-[35em] w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <img class="absolute top-[67%] left-[5%]" src={LeftBigBlueStarIcon}></img>
          <img class="absolute top-[87%] right-[43%] " src={MiddleYellowDotIcon}></img>
          <img class="absolute top-[68%] right-[35%] " src={MiddleRedStarIcon}></img>
          <img class="absolute -top-[3%] right-[18%]" src={RightYellowStar}></img>
          <img class="absolute -top-[3%] right-[14%]" src={RightSmallBlueStartIcon}></img>
          <img class="absolute top-[18%] right-[18%]" src={RightWhiteDotIcon}></img>

          <div class="absolute right-[8%] bottom-[5%] max-w-[30%] border-4 border-black w-3/12 shadow-[20px_20px_0_0_rgba(0,0,0)]">

            <AppleHeader title={"www.aboutus.com"}></AppleHeader>
            <div class="h-fit bg-white">
              <div class="flex items-center gap-[2em] flex-col pt-[1em] h-full w-full">
                <p class="font-medium text-xl px-5 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
                </p>

                <p class="font-medium text-xl px-5 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
                </p>

                <div class="flex items-center justify-center gap-[3em] pb-[1em]">
                  <img class="max-w-[5em]" src={InstagramIcon}></img>
                  <img class="max-w-[5em]" src={FacebookIcon}></img>
                  <img class="max-w-[5em]" src={TikTok}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing