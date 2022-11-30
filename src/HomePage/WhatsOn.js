import React from 'react'
import WhatsOnBg from './svgs/whatsonbg.svg'
import WhatsOnLogo from './svgs/whatsonLogo.png'
import WhatsOn8Star1 from './svgs/whatson8Star1.svg'
import WhatsOn8Star2 from './svgs/whatson8Star2.svg'
import WhatsOnOrbit from './svgs/whatsonOrbit.svg'
import WhatsOn4Star1 from './svgs/whatson4Star1.svg'
import WhatsOnBlueDot from './svgs/whatsonBlueDot.svg'
import WhatsOn4Star2 from './svgs/whatson4Star2.svg'

import WhatsOn8Star3 from './svgs/whatson8Star3.svg'
import WhatsOn8Star4 from './svgs/whatson8Star4.svg'
import WhatsOn4Star3 from './svgs/whatson4Star3.svg'
import WhatsOn8Star5 from './svgs/whatson8Star5.svg'

import WhatsOnYellowDot1 from './svgs/whatsonYellowDot1.svg'
import WhatsOn4Star4 from './svgs/whatson4Star4.svg'
import WhatsOn4Star5 from './svgs/whatson4Star5.svg'
import WhatsOnWhiteDot1 from './svgs/whatsonWhiteDot1.svg'

import WhatsOn8Star6 from './svgs/whatson8Star6.svg'

import AppleHeader from '../SharedPages/AppleHeader'

const WhatsOn = () => {
  return (
    <div class="bg-NAFPink bg-cover min-h-screen relative overflow-hidden" style={{ backgroundImage: `url(${WhatsOnBg})` }}>
        
        {/* Background Images: Stars, Dots, Etc */}
        <img src={WhatsOn8Star1} class="absolute top-[10%] left-[5%] z-10"></img>
        <img src={WhatsOn8Star2} class="absolute top-[35%] right-[30%] z-10"></img>
        <img src={WhatsOnBlueDot} class="absolute top-[35%] right-[45%] z-10"></img>
        <img src={WhatsOn4Star1} class="absolute top-[25%] right-[52%] z-10"></img>
        <img src={WhatsOn4Star2} class="absolute top-[5%] right-[-10%] z-10"></img>

        <img src={WhatsOn8Star3} class="absolute top-[40%] left-[-10%] z-10"></img>
        <img src={WhatsOn8Star4} class="absolute top-[58%] left-[8%] z-10"></img>
        <img src={WhatsOn4Star3} class="absolute top-[54%] right-[8%] z-10"></img>
        <img src={WhatsOn8Star5} class="absolute top-[50%] right-[-10%] z-10"></img>

        <img src={WhatsOnYellowDot1} class="absolute bottom-[12%] left-[-1.5%] z-10"></img>
        <img src={WhatsOn4Star4} class="absolute bottom-[6%] left-[0%] z-10"></img>
        <img src={WhatsOn4Star5} class="absolute bottom-[8%] left-[32%] z-10"></img>
        <img src={WhatsOnWhiteDot1} class="absolute bottom-[16%] left-[38%] z-10"></img>

        <img src={WhatsOn8Star6} class="absolute bottom-[-10%] right-[-6%] z-30"></img>

        <div class="flex relative flex-col items-center">
          <img class="mt-28 mb-28 z-20" src={WhatsOnLogo}></img>
          <img class="absolute z-10" src={WhatsOnOrbit}></img>
        </div>

        {/* Top 2 boxes */}
        <div class="flex relative justify-between mt-10 z-20">
          <div class="left-[5%] relative bottom-10 border-solid border-4 border-black w-4/12 shadow-[20px_20px_0_0_rgba(0,0,0)]">
            <AppleHeader></AppleHeader>
            <div class="h-[16em] bg-gray-500">
              <div class="flex justify-items-left gap-[1em] flex-col pt-[1em] h-full w-full pt-[8%]">
                <p class="font-yerkItalic text-4xl px-6 text-left text-white">
                  Header
                </p>

                <p class="font-syne font-normal text-base px-5 text-left text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent conque gravida nibh, eget bibendum ex conque sit amet. 
                </p>

              </div>
            </div>
          </div>

          <div class="right-[5%] relative bottom-10 border-solid border-4 border-black w-1/4 shadow-[20px_20px_0_0_rgba(0,0,0)]">
            <AppleHeader></AppleHeader>
            <div class="h-[16em] bg-white">
              <div class="flex items-center gap-[3em] flex-col pt-[1em] h-full w-full">
                {/* <p class="font-medium text-xl px-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
                </p>

                <p class="font-medium text-xl px-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
                </p> */}

              </div>
            </div>
          </div>
          {/* <img src={TopLftBox} class=" z-20"></img>
          <img src={TopRgtBox} class=" z-20"></img> */}
        </div>

        {/* Middle Box */}
        <div class="flex relative justify-center mt-10 z-20">
          <div class="relative bottom-10 border-solid border-4 border-black w-7/12 shadow-[20px_20px_0_0_rgba(0,0,0)]">
            <AppleHeader></AppleHeader>
            <div class="h-[20em] bg-white">
              <div class="flex items-center gap-[3em] flex-col pt-[1em] h-full w-full">
                {/* <p class="font-medium text-xl px-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
                </p>

                <p class="font-medium text-xl px-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
                </p> */}

              </div>
            </div>
          </div>    
          {/* <img src={MidBox} class="z-20"></img> */}
        </div>

        {/* Bottom Two Boxes */}
        <div class="flex relative justify-between mt-10 pb-5 z-20">
          <div class="left-[5%] relative bottom-10 border-solid border-4 border-black w-1/4 shadow-[20px_20px_0_0_rgba(0,0,0)]">
            <AppleHeader></AppleHeader>
            <div class="h-[16em] bg-white">
              <div class="flex justify-items-left gap-[1em] flex-col pt-[1em] h-full w-full">
                {/* <p class="font-yerkItalic text-4xl px-6 text-left text-white">
                  Header
                </p>

                <p class="font-normal text-base px-5 text-left text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
                </p> */}

              </div>
            </div>
          </div>

          <div class="right-[5%] relative bottom-10 border-solid border-4 border-black w-2/4 shadow-[20px_20px_0_0_rgba(0,0,0)]">
            <AppleHeader></AppleHeader>
            <div class="h-[16em] bg-white">
              <div class="flex items-center gap-[3em] flex-col pt-[1em] h-full w-full">
                {/* <p class="font-medium text-xl px-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
                </p>

                <p class="font-medium text-xl px-5 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
                </p> */}

              </div>
            </div>
          </div>
        </div>
        <AppleHeader backgroundColor={"bg-black"}></AppleHeader>


    </div>
  )
}

export default WhatsOn