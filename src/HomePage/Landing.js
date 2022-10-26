import React from 'react'
import AppleHeader from '../SharedPages/AppleHeader'
import LandingBg from './svgs/landingbg.svg'
import InstagramIcon from './svgs/landingInstagram.svg'
import FacebookIcon from './svgs/landingFacebook.svg'
import EmailIcon from './svgs/landingFacebook.svg'
import LeftBigBlueStarIcon from './svgs/landingBlueStar.svg'
import MiddleYellowDotIcon from './svgs/landingYellowDot.svg'
import MiddleRedStarIcon from './svgs/landingRedStar.svg'

import RightYellowStar from './svgs/landingYellowStar.svg'
import RightSmallBlueStartIcon from './svgs/landingSmallBlueStar.svg'
import RightWhiteDotIcon from './svgs/landingWhiteDot.svg'

const Landing = () => {
  return (
    <div class="min-h-screen bg-LandingPurple" style={{ backgroundImage: `url(${LandingBg})` }}>
        <div class="absolute left-28 border-solid border-4 border-black w-8/12 mt-16 shadow-[20px_20px_0_0_rgba(0,0,0)]">
            <AppleHeader title={"www.teaservideo.com"}></AppleHeader>
            <div class="h-[44em] bg-white">
              <div class="flex items-center justify-center h-full w-full">
              <div class="flex items-center justify-center bg-headerGray h-[90%] w-[90%]" >NAF Video Here</div>
              </div>
            </div>
          <img class="absolute -left-12 -bottom-32" src={LeftBigBlueStarIcon}></img>
          <img class="absolute right-52 -bottom-32" src={MiddleYellowDotIcon}></img>
          <img class="absolute right-12 -bottom-32" src={MiddleRedStarIcon}></img>
        </div>
        <div class="absolute right-24 bottom-10 border-solid border-4 border-black w-3/12 mt-36 shadow-[20px_20px_0_0_rgba(0,0,0)]">
            <img class="absolute left-12 -top-[23rem]" src={RightYellowStar}></img>
            <img class="absolute left-64 -top-[22rem]" src={RightSmallBlueStartIcon}></img>
            <img class="absolute left-56 -top-44" src={RightWhiteDotIcon}></img>
            <AppleHeader title={"www.aboutus.com"}></AppleHeader>
            <div class="h-[38em] bg-white">
              <div class="flex items-center gap-[3em] flex-col pt-[1em] h-full w-full">
                <p class="font-medium text-xl px-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
                </p>

                <p class="font-medium text-xl px-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
                </p>

                <div class="flex items-center justify-center gap-[3em] mt-[1em]">
                  <img class="max-w-[5em]" src={InstagramIcon}></img>
                  <img class="max-w-[5em]" src={FacebookIcon}></img>
                  <img class="max-w-[5em]" src={EmailIcon}></img>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Landing