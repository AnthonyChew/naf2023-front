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
                <p class="px-5 text-left font-syne text-paragraph_Desktop">
                  NTU Arts Festival is finally back! From 14 February to 17 March, get a taste of NTU's colourful arts scene through various activities planned and curated just for you; from exciting performances to engaging workshops, it's the perfect opportunity to explore and appreciate the arts.
                  <br />
                  <br />
                  Guided by our theme of "Supernova", this year's festival promises to deliver a joyful and explosive return to physical activities for the student population to enjoy. See you there!
                </p>

                <div class="flex items-center justify-center gap-[3em] pb-[1em]">
                  <a href='https://www.facebook.com/ntuartsfestival/'>
                    <svg xmlns="http://www.w3.org/2000/svg" class='w-9 h-9' viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" /></svg>
                  </a>

                  <a href='https://www.instagram.com/ntuartsfestival/?hl=en'>
                    <svg xmlns="http://www.w3.org/2000/svg" class='w-9 h-9' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                  </a>


                  <a href='https://www.tiktok.com/@ntuartsfestival?_t=8ZSfbGScD6A&_r=1'>
                    <svg xmlns="http://www.w3.org/2000/svg" class='w-9 h-9' viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
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