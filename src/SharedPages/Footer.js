import React from 'react'
import CAC_Logo from './svgs/CAC_Logo.svg';
import InstagramIcon from '../HomePage/svgs/landing/landingInstagram.svg'
import FacebookIcon from '../HomePage/svgs/landing/landingFacebook.svg'
import TikTokIcon from '../HomePage/svgs/landing/landingTikTok.svg'

import DCMF_logo from './svgs/poweredByDCMF.png'
import MJD_logo from './svgs/poweredByMJD.png'
import MyULife_logo from './svgs/poweredByMyULife.png'

const Footer = () => {
  return (
    <div class="flex h-[200px] mt-12 font-syne font-medium text-xl flex-wrap mb-10">
      <div class="basis-1/2 text-center md:basis-1/4">
        <div>Organised By</div>
        <div class="pt-5">
          <img class="mx-auto my-0 w-[30%] md:w-[70%] lg:w-[auto]" src={CAC_Logo}></img>
        </div>
      </div>
      <div class="basis-1/2 md:basis-1/4">
        <div>Powered By</div>
        <div class="flex pt-5 ">

          <img src={DCMF_logo} class="w-[45px] h-[35px] md:w-[65px] md:h-[50px]  mx-2"></img>
          <img src={MJD_logo} class="w-[45px] h-[35px] md:w-[65px] md:h-[50px]  mx-2"></img>
          <img src={MyULife_logo} class="w-[45px] h-[35px] md:w-[65px] md:h-[50px]  mx-2"></img>
        </div>
      </div>
      <div class="w-[100%] md:basis-1/4 md:w-[auto] text-center">
        <div>Social Media</div>
        <div class="flex pt-5 justify-center">
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

    </div >
  )
}

export default Footer