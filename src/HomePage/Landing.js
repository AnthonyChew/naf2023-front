import React, { useEffect } from 'react'
import AppleHeader from '../SharedPages/AppleHeader'
import LandingBg from './svgs/landing/landingbg.svg'
import InstagramIcon from './svgs/landing/landingInstagram.svg'
import FacebookIcon from './svgs/landing/landingFacebook.svg'
import TikTokIcon from './svgs/landing/landingTikTok.svg'
import LeftBigBlueStarIcon from './svgs/landing/landingBlueStar.svg'
import MiddleYellowDotIcon from './svgs/landing/landingYellowDot.svg'
import MiddleRedStarIcon from './svgs/landing/landingRedStar.svg'

import RightYellowStar from './svgs/landing/landingYellowStar.svg'
import RightSmallBlueStartIcon from './svgs/landing/landingSmallBlueStar.svg'
import RightWhiteDotIcon from './svgs/landing/landingWhiteDot.svg'

const Landing = () => {



  return (
    <div class="flex relative items-center min-h-screen bg-NAFPurple bg-cover overflow-hidden" style={{ backgroundImage: `url(${LandingBg})` }}>

      <div class="w-[90%] lg:w-[60%] h-fit mb-28 mx-auto lg:mr-auto lg:ml-36 mt-20 border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
        <AppleHeader title={"www.aboutus.com"}></AppleHeader>
        <div class="h-full w-full border-solid "  >
          <div class="p-5 bg-white">
            <iframe class="md:h-[35em] h-[25em] w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <img class="hidden lg:block absolute top-[67%] left-[5%]" src={LeftBigBlueStarIcon}></img>
          <img class="absolute top-[87%] right-[43%] " src={MiddleYellowDotIcon}></img>
          <img class="hidden lg:block absolute top-[68%] right-[35%] " src={MiddleRedStarIcon}></img>
          <img class="hidden lg:block absolute -top-[3%] right-[18%]" src={RightYellowStar}></img>
          <img class="absolute -top-[3%] right-[14%]" src={RightSmallBlueStartIcon}></img>
          <img class="absolute top-[18%] right-[18%]" src={RightWhiteDotIcon}></img>

          <div class="hidden lg:block absolute right-[8%] bottom-[5%] max-w-[30%] border-4 border-black w-3/12 shadow-[20px_20px_0_0_rgba(0,0,0)]">
            <AppleHeader title={"www.aboutus.com"}></AppleHeader>
            <div class="h-fit bg-white">
              <div class="flex items-center gap-[2em] flex-col pt-[1em] h-full w-full">
                <p class="font-medium text-xl px-5 text-left">
                NTU Arts Festival is finally back! From 14 February to 17 March, get a taste of NTU's colourful arts scene through various activities planned and curated just for you; From exciting performances to engaging workshops, it's the perfect opportunity to explore and appreciate the arts.
                <br/>
                <br/>
                Guided by our theme of "Supernova", this year's festival promises to deliver a joyful and explosive return to physical activities for the student population to enjoy. See you there!
                </p>

                <div class="flex items-center justify-center gap-[3em] pb-[1em]">
                  <a href='https://www.facebook.com/ntuartsfestival/'>
                    <img src={FacebookIcon} class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]  mx-2"></img>
                  </a>

                  <a href='https://www.instagram.com/ntuartsfestival/?hl=en'>
                    <img src={InstagramIcon} class="w-[35px] h-[35px] md:w-[50px] md:h-[50px] mx-2"></img>
                  </a>


                  <a href='https://www.instagram.com/ntuartsfestival/?hl=en'>
                    <img src={TikTokIcon} class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]  mx-2"></img>
                  </a>
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