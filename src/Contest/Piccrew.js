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

import AppleHeader from '../SharedPages/AppleHeader'

import { Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-fade';

const Piccrew = () => {
  return (
    <div class="relative bg-[#0071C6] overflow-hidden">

      {/* Star SVGs */}
      <img src={TopLeftPinkStar} class="absolute w-1/4 lg:w-1/6 top-[10%] lg:top-[5%] -left-20 lg:-left-20"></img>
      <img src={TopRightPurpleStar} class="absolute w-1/6 lg:w-1/6 top-[-8%] right-20 lg:right-20"></img>
      <img src={MiddleYellowStar} class="absolute w-1/5 lg:w-1/6 top-[26%] lg:top-[18%] -right-10 lg:-right-18"></img>
      <img src={BottomLeftWhiteStar} class="absolute w-5/12 lg:w-4/12 bottom-[-7%] lg:bottom-[-10%] left-[-17%] lg:left-[-12%] z-10"></img>
      <img src={BottomRightPinkStar} class="absolute w-1/4 lg:w-1/5 bottom-[-10%] right-3 lg:right-10"></img>
      <img src={BottomRightPurpleStar} class="absolute w-1/12 lg:w-1/12 bottom-[10%] lg:bottom-[12%] -right-2 lg:-right-3"></img>
      
      {/* Dots */}
      <img src={WhiteDot} class="hidden lg:block absolute w-[2%] lg:w-[1.5%] top-[33%] lg:top-[23%] left-20 lg:left-40"></img>
      <img src={YellowDot} class="hidden lg:block absolute w-[2%] lg:w-[1.5%] bottom-[8%] lg:bottom-[3%] left-[15%] lg:left-[15%]"></img>

      {/* Header */}
      <div class='flex flex-col items-center pt-10 pb-5'>
        <img src={Header} class="w-[50%]"></img>
      </div>

      {/* Header Text */}
      <div class='grid place-content-center mx-[15%] py-5 font-syne text-white text-center text-sm lg:text-lg'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia. Mauris a massa sed orci vestibulum pretium. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae lobortis lacus, at vestibulum mi. Mauris aliquet elit sed libero pharetra vestibulum.
      </div>

      {/* Boxes */}
      <div class="hidden lg:block mx-5 lg:mx-10 py-5 lg:py-10"> {/* To alter the margin for flex basis */}
        <div class="flex flex-row">
          <div class="flex basis-1/3 justify-center items-center z-20">
            {/* <img src={Image} class='w-[80%]'></img> */}
            <div class="relative border-solid border-4 border-black w-9/12 shadow-[20px_20px_0_0_rgba(0,0,0)]">
              <AppleHeader></AppleHeader>
              <div class="h-[23em] bg-gray-300 border-solid border-[15px] border-white">
                <div class="flex justify-center flex-col h-full w-full">
                  <p class="font-syne font-bold text-xl text-center text-black">
                    &#60;INSERT PICCREW EXAMPLES HERE FOR USER'S INSPO&#62;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex basis-1/3 justify-center items-center">
            {/* <img src={Image} class='w-[80%]'></img> */}
            <div class="relative border-solid border-4 border-black w-9/12 shadow-[20px_20px_0_0_rgba(0,0,0)]">
              <AppleHeader></AppleHeader>
              <div class="h-[23em] bg-gray-300 border-solid border-[15px] border-white">
                <div class="flex justify-center flex-col h-full w-full">
                  <p class="font-syne font-bold text-xl text-center text-black">
                    &#60;INSERT PICCREW EXAMPLES HERE FOR USER'S INSPO&#62;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex basis-1/3 justify-center items-center z-20"> {/* Setting Z value of outermost div doesnt affect child elements */}
            {/* <img src={Image} class='w-[80%]'></img> */}
            <div class="relative border-solid border-4 border-black w-9/12 shadow-[20px_20px_0_0_rgba(0,0,0)]">
              <AppleHeader></AppleHeader>
              <div class="h-[23em] bg-gray-300 border-solid border-[15px] border-white">
                <div class="flex justify-center flex-col h-full w-full">
                  <p class="font-syne font-bold text-xl text-center text-black">
                    &#60;INSERT PICCREW EXAMPLES HERE FOR USER'S INSPO&#62;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="block lg:hidden">
        <div class="w-[80%] h-fit mb-10 mx-auto border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)] bg-white">
          <AppleHeader></AppleHeader>
          <div class="p-7">

          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            pagination={{
              el: '.swiper-custom-pagination',
              clickable: true,
              renderBullet: function(index, className) {
                return '<span class="' + className + '"><img class="pagination-bullet"/></span>';
            }
    
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop={true}
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
              <div class="text-center">Pikachu</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
              <div class="text-center">Pikachu</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
              <div class="text-center">Pikachu</div>
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
      </div>

      <div class="text-center mb-10">
        <div className="swiper-custom-pagination" />
      </div>

      {/* Buttons */}
      <div>
        <div class="flex flex-row pt-[2%] lg:pt-20 pb-20 lg:pb-40">
          <div class='flex basis-1/2 justify-end'>
            <button class="ml-[15%] mr-10 bg-[#F9346C] border-2 lg:border-4 border-black rounded-md px-1 lg:px-10 py-3 lg:py-6 font-syneBold text-sm lg:text-lg text-white z-20">UPLOAD YOUR DESIGN</button>
          </div>
          <div class='flex basis-1/2 justify-start'>
            <button class="mr-[15%] ml-10 bg-[#8F55FF] border-2 lg:border-4 border-black rounded-md px-1 lg:px-10 py-3 lg:py-6 font-syneBold text-sm lg:text-lg text-white z-20">VISIT OUR PICREW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Piccrew