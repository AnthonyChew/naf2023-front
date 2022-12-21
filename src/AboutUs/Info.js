import React from 'react';
import Orbit from './svgs/Info/Orbit.svg';
import TopLeftPinkStar from './svgs/Info/TopLeftPinkStar.svg'
import MiddleBlueStar from './svgs/Info/MiddleBlueStar.svg'

const Info = () => {
  return (
    <div class="relative bg-[#0071C6]">

      {/* Star SVGs */}
      <img src={TopLeftPinkStar} class="absolute w-2/6 lg:w-1/4 top-[-10%] -left-20 lg:-left-40 z-30"></img>
      <img src={MiddleBlueStar} class="absolute w-1/6 lg:w-1/12 top-[-5%] left-[50%] z-30"></img>

      {/* <img src={Orbit} class="absolute top-[30%] w-4/6 right-[-13%] z-10"></img> */}
      {/* <img src={Orbit} class="scale-x-[-1.0] absolute top-[70%] w-4/6 left-[-13%] z-10"></img> */}
      {/* <img src={Orbit} class="absolute top-[109%] w-4/6 right-[-13%] z-10"></img> */}

      {/* First Row */}
      <div class="flex flex-row pt-10">
        <div class="flex basis-1/2 text-sm justify-center items-center z-20">
          <div class="mx-20 lg:mx-40 font-syne text-white text-base md:text-md lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia. Mauris a massa sed orci vestibulum pretium. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae lobortis lacus, at vestibulum mi. Mauris aliquet elit sed libero pharetra vestibulum.
          </div>
        </div>
        <div class="flex relative basis-1/2 my-10 justify-center items-center z-20">
          <img src={Orbit} class="absolute mb-20 z-10"></img>
          <div class="aspect-square box-border border-2 border-black bg-gray-300 w-4/6 shadow-[15px_10px_0_0_rgba(0,0,0)] z-20"></div>
        </div>
      </div>

      {/* Second Row */}
      <div class="flex flex-row">
        <div class="flex relative basis-1/2 my-10 justify-center items-center z-20">
          <img src={Orbit} class="scale-x-[-1.0] absolute mb-20 z-10"></img>
          <div class="aspect-square box-border border-2 border-black bg-gray-300 w-4/6 shadow-[15px_10px_0_0_rgba(0,0,0)] z-20"></div>
        </div>
        <div class="flex basis-1/2 text-sm justify-center items-center z-20">
          <div class="mx-20 lg:mx-40 font-syne text-white text-base md:text-md lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia. Mauris a massa sed orci vestibulum pretium. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae lobortis lacus, at vestibulum mi. Mauris aliquet elit sed libero pharetra vestibulum.
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div class="flex flex-row pb-10">
        <div class="flex basis-1/2 text-sm justify-center items-center z-20">
          <div class="mx-20 lg:mx-40 font-syne text-white text-base md:text-md lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia. Mauris a massa sed orci vestibulum pretium. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae lobortis lacus, at vestibulum mi. Mauris aliquet elit sed libero pharetra vestibulum.
          </div>
        </div>
        <div class="flex relative basis-1/2 my-10 justify-center items-center z-20">
          <img src={Orbit} class="absolute mb-20 z-10"></img>
          <div class="aspect-square box-border border-2 border-black bg-gray-300 w-4/6 shadow-[15px_10px_0_0_rgba(0,0,0)] z-20"></div>
        </div>
      </div>
    </div>
  )
}

export default Info