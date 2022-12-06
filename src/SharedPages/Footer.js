import React from 'react'
import CAC_Logo from './svgs/CAC_Logo.svg';
import InstagramIcon from '../HomePage/svgs/landing/landingInstagram.svg'
import FacebookIcon from '../HomePage/svgs/landing/landingFacebook.svg'
import EmailIcon from '../HomePage/svgs/landing/landingFacebook.svg'

const Footer = () => {
  return (
    <div class="flex h-[300px] mt-12 font-syne font-medium text-xl">
      <div class="basis-1/6 text-center">
        <div>Organised By</div>
        <div class="pt-5">
          <img class="mx-auto my-0" src={CAC_Logo}></img>
          </div>
      </div>
      <div class="basis-1/4">
        <div>Powered By</div>
        <div></div>
      </div>
      <div class="basis-1/4">
        <div>Social Media</div>
        <div class="flex justify-center pt-5">
          <img src={InstagramIcon} class="w-[50px] h-[50px] mx-2"></img>
          <img src={EmailIcon} class="w-[50px] h-[50px] mx-2"></img>
          <img src={EmailIcon} class="w-[50px] h-[50px] mx-2"></img>
        </div>
        
      </div>

    </div>
  )
}

export default Footer