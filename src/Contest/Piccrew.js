import React from 'react'
import Header from './svgs/Header.png'
import Image from './svgs/Image.svg'

import TopLeftPinkStar from './svgs/TopLeftPinkStar.svg'
import TopRightPurpleStar from './svgs/TopRightPurpleStar.svg'
import MiddleYellowStar from './svgs/MiddleYellowStar.svg'
import BottomLeftWhiteStar from './svgs/BottomLeftWhiteStar.svg'
import BottomRightPinkStar from './svgs/BottomRightPinkStar.svg'
import BottomRightPurpleStar from './svgs/BottomRightPurpleStar.svg'

import WhiteDot from './svgs/WhiteDot.svg'
import YellowDot from './svgs/YellowDot.svg'


const Piccrew = () => {
  return (
    <div class="relative bg-[#0071C6] overflow-hidden">

      {/* Star SVGs */}
      <img src={TopLeftPinkStar} class="absolute w-1/4 lg:w-1/6 top-[10%] lg:top-[5%] -left-20 lg:-left-20"></img>
      <img src={TopRightPurpleStar} class="absolute w-1/6 lg:w-1/6 top-[-8%] right-20 lg:right-20"></img>
      <img src={MiddleYellowStar} class="absolute w-1/5 lg:w-1/6 top-[26%] lg:top-[18%] -right-10 lg:-right-18"></img>
      <img src={BottomLeftWhiteStar} class="absolute w-5/12 lg:w-4/12 bottom-[-7%] lg:bottom-[-10%] left-[-17%] lg:left-[-12%]"></img>
      <img src={BottomRightPinkStar} class="absolute w-1/4 lg:w-1/5 bottom-[-10%] right-3 lg:right-10"></img>
      <img src={BottomRightPurpleStar} class="absolute w-1/12 lg:w-1/12 bottom-[10%] lg:bottom-[12%] -right-2 lg:-right-3"></img>
      
      {/* Dots */}
      <img src={WhiteDot} class="absolute w-[2%] lg:w-[1.5%] top-[33%] lg:top-[23%] left-20 lg:left-40"></img>
      <img src={YellowDot} class="absolute w-[2%] lg:w-[1.5%] bottom-[8%] lg:bottom-[3%] left-[15%] lg:left-[15%]"></img>

      {/* Header */}
      <div class='flex flex-col items-center pt-10 pb-5'>
        <img src={Header} class="w-[50%]"></img>
      </div>

      {/* Header Text */}
      <div class='grid place-content-center mx-40 lg:mx-60 py-5 font-syne text-white text-center text-md lg:text-lg'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia. Mauris a massa sed orci vestibulum pretium. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae lobortis lacus, at vestibulum mi. Mauris aliquet elit sed libero pharetra vestibulum.
      </div>

      {/* Images */}
      <div class="mx-5 lg:mx-10 py-5 lg:py-10"> {/* To alter the margin for flex basis */}
        <div class="flex flex-row">
          <div class="flex basis-1/3 justify-center items-center z-20">
            <img src={Image} class='w-[80%]'></img>
          </div>
          <div class="flex basis-1/3 justify-center items-center">
            <img src={Image} class='w-[80%]'></img>
          </div>
          <div class="flex basis-1/3 justify-center items-center z-20"> {/* Setting Z value of outermost div doesnt affect child elements */}
            <img src={Image} class='w-[80%]'></img>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div>
        <div class="flex flex-row pt-10 lg:pt-20 pb-20 lg:pb-40">
          <div class='flex basis-1/2 justify-end'>
            <button class="mr-10 bg-[#F9346C] border-2 lg:border-4 border-black rounded-md px-5 lg:px-10 py-3 lg:py-6 font-syneBold text-md lg:text-lg text-white">UPLOAD YOUR DESIGN</button>
          </div>
          <div class='flex basis-1/2 justify-start'>
          <button class="ml-10 bg-[#8F55FF] border-2 lg:border-4 border-black rounded-md px-5 lg::px-10 py-3 lg:py-6 font-syneBold text-md lg:text-lg text-white">VISIT OUR PICREW</button>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Piccrew