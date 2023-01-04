import React from 'react'
import CAC_Logo from './svgs/CAC_Logo.svg';
import InstagramIcon from '../HomePage/svgs/landing/landingInstagram.svg'
import FacebookIcon from '../HomePage/svgs/landing/landingFacebook.svg'
import EmailIcon from '../HomePage/svgs/landing/landingFacebook.svg'

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
        <div></div>
      </div>
      <div class="w-[100%] md:basis-1/4 md:w-[auto] text-center">
        <div>Social Media</div>
        <div class="flex pt-5 justify-center">
          <img src={InstagramIcon} class="w-[35px] h-[35px] md:w-[50px] md:h-[50px] mx-2"></img>
          <img src={EmailIcon} class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]  mx-2"></img>
          <img src={EmailIcon} class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]  mx-2"></img>
        </div>
        
      </div>

    </div>
  )
}

export default Footer