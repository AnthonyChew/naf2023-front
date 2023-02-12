import React from "react";
import FocusedImage from '../SharedPages/FocusImage.js';
import WhatsOnBg from "./svgs/whatson/whatsonbg.svg";
import WhatsOnLogo from "./svgs/whatson/whatsonLogo.png";
import WhatsOn8Star1 from "./svgs/whatson/whatson8Star1.svg";
import WhatsOn8Star2 from "./svgs/whatson/whatson8Star2.svg";
import WhatsOnOrbit from "./svgs/whatson/whatsonOrbit.svg";
import WhatsOn4Star1 from "./svgs/whatson/whatson4Star1.svg";
import WhatsOnBlueDot from "./svgs/whatson/whatsonBlueDot.svg";
import WhatsOn4Star2 from "./svgs/whatson/whatson4Star2.svg";

import WhatsOn8Star3 from "./svgs/whatson/whatson8Star3.svg";
import WhatsOn8Star4 from "./svgs/whatson/whatson8Star4.svg";
import WhatsOn4Star3 from "./svgs/whatson/whatson4Star3.svg";
import WhatsOn8Star5 from "./svgs/whatson/whatson8Star5.svg";

import WhatsOnYellowDot1 from "./svgs/whatson/whatsonYellowDot1.svg";
import WhatsOn4Star4 from "./svgs/whatson/whatson4Star4.svg";
import WhatsOn4Star5 from "./svgs/whatson/whatson4Star5.svg";
import WhatsOnWhiteDot1 from "./svgs/whatson/whatsonWhiteDot1.svg";

import Image1 from "./svgs/whatson/Image1.jpg";
import Image2 from "./svgs/whatson/Image2.jpg";
import Image3 from "./svgs/whatson/Image3.jpg";
import Image4 from "./svgs/whatson/Image4.jpg";

import AppleHeader from "../SharedPages/AppleHeader";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";

const WhatsOn = () => {
  return (
    <div>

      {/* Laptop and Above */}
      <div
        class="hidden lg:block bg-NAFPink bg-cover min-h-screen relative overflow-hidden"
        style={{ backgroundImage: `url(${WhatsOnBg})` }}
      >
        {/* Background Images: Stars, Dots, Etc */}
        <img
          src={WhatsOn8Star1}
          class="absolute top-[10%] left-[5%] z-10"
        ></img>
        <img
          src={WhatsOn8Star2}
          class="absolute top-[35%] right-[30%] z-10"
        ></img>
        <img
          src={WhatsOnBlueDot}
          class="absolute top-[35%] right-[45%] z-10"
        ></img>
        <img
          src={WhatsOn4Star1}
          class="absolute top-[25%] right-[52%] z-10"
        ></img>
        <img
          src={WhatsOn4Star2}
          class="absolute top-[5%] right-[-10%] z-10"
        ></img>

        <img
          src={WhatsOn8Star3}
          class="absolute top-[40%] left-[-10%] z-10"
        ></img>
        <img
          src={WhatsOn8Star4}
          class="absolute top-[58%] left-[8%] z-10"
        ></img>
        <img
          src={WhatsOn4Star3}
          class="absolute top-[54%] right-[8%] z-10"
        ></img>
        <img
          src={WhatsOn8Star5}
          class="absolute top-[50%] right-[-10%] z-10"
        ></img>

        <img
          src={WhatsOnYellowDot1}
          class="absolute bottom-[12%] left-[-1.5%] z-10"
        ></img>
        <img
          src={WhatsOn4Star4}
          class="absolute bottom-[6%] left-[0%] z-10"
        ></img>
        <img
          src={WhatsOn4Star5}
          class="absolute bottom-[8%] left-[32%] z-10"
        ></img>
        <img
          src={WhatsOnWhiteDot1}
          class="absolute bottom-[16%] left-[38%] z-10"
        ></img>

        <div class="flex relative flex-col items-center">
          <img class="mt-28 mb-28 z-20 w-[60%]" src={WhatsOnLogo}></img>
          <img class="absolute z-10" src={WhatsOnOrbit}></img>
        </div>

        {/* Top 2 boxes */}
        <div class="flex relative justify-between mt-10 z-20">
          <div class="left-[5%] relative bottom-10 border-solid border-4 border-black w-4/12 shadow-[20px_20px_0_0_rgba(0,0,0)] overflow-hidden">
            <AppleHeader></AppleHeader>
            <div class="h-full bg-gray-500">
              <div class="flex justify-items-left gap-[1em] flex-col pt-[2em] pb-[2em] h-full w-full">
                <p class="font-syneBold text-4xl px-6 text-left text-white">
                  TAKE A SNEAK PEEK
                </p>

                <p class="font-syne md:text-paragraph_Desktop text-paragraph_Mobile px-5 text-left text-white">
                  At past editions of NAF, and into the various activities NAF has in store for you. We hope you're as excited as we are!
                </p>
              </div>
            </div>
          </div>

          <div class="right-[5%] relative bottom-10 border-solid border-4 border-black w-1/4 shadow-[20px_20px_0_0_rgba(0,0,0)] overflow-hidden">
            <AppleHeader></AppleHeader>
            <div class="flex justify-items-left gap-[1em] flex-col h-full w-full">
              <div class='h-[300px]'>
                <FocusedImage class='focused-image' imageSrc={Image2} x={0} y={-1} ></FocusedImage>
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
            <div class='h-[300px]'>
              <FocusedImage class='focused-image' imageSrc={Image3} x={-0.5} y={0} ></FocusedImage>
            </div>
          </div>
          {/* <img src={MidBox} class="z-20"></img> */}
        </div>

        {/* Bottom Two Boxes */}
        <div class="flex relative justify-between mt-10 pb-5 z-20">
          <div class="left-[5%] relative bottom-10 border-solid border-4 border-black w-1/4 shadow-[20px_20px_0_0_rgba(0,0,0)]">
            <AppleHeader></AppleHeader>
            <div class='h-[300px]'>
              <FocusedImage class='focused-image' imageSrc={Image1} x={-0.5} y={-1} ></FocusedImage>
            </div>
          </div>

          <div class="right-[5%] relative bottom-10 border-solid border-4 border-black w-2/4 shadow-[20px_20px_0_0_rgba(0,0,0)] overflow-hidden">
            <AppleHeader></AppleHeader>
            <div class='h-[300px]'>
              <FocusedImage class='focused-image' imageSrc={Image4} x={-0.5} y={0} ></FocusedImage>
            </div>
          </div>
        </div>
        <AppleHeader backgroundColor={"bg-black"}></AppleHeader>
      </div>

      {/* Tablet and Mobile */}
      <div
        class="block lg:hidden bg-NAFPink bg-cover relative overflow-hidden"
        style={{ backgroundImage: `url(${WhatsOnBg})` }}
      >
        <div class="flex relative flex-col items-center">
          <img class="mt-5 mb-5 z-20" src={WhatsOnLogo}></img>
          {/* <img class="absolute z-5 top-[-100%]" src={WhatsOnOrbit}></img> */}
        </div>

        <div class="md:p-10">
          <Swiper
            // install Swiper modules
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectCube,
              EffectFade,
            ]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            pagination={{
              el: ".swiper-custom-pagination-3",
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  '"><img class="pagination-bullet"/></span>'
                );
              },
            }}
            loop={true}
          >
            <SwiperSlide>
              <div class="bg-white border-black border-4 mx-10 mb-10 shadow-[20px_20px_0_0_rgba(0,0,0)]">
                <AppleHeader></AppleHeader>
                {/* <img
                  class="p-[4%]"
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt=""
                /> */}
                <div class='h-[300px]'>
                  <FocusedImage class='focused-image' imageSrc={Image1} x={0} y={-0.5} ></FocusedImage>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="bg-white border-black border-4 mx-10 mb-10 shadow-[20px_20px_0_0_rgba(0,0,0)] overflow-hidden">
                <AppleHeader></AppleHeader>
                {/* <img
                  class="p-[4%]"
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt=""
                /> */}
                <div class='h-[300px] w-[350px]'>
                  <FocusedImage class='focused-image' imageSrc={Image2} x={-0.5} y={-0.5} ></FocusedImage>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="bg-white border-black border-4 mx-10 mb-10 shadow-[20px_20px_0_0_rgba(0,0,0)] overflow-hidden">
                <AppleHeader></AppleHeader>
                {/* <img
                  class="p-[4%]"
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt=""
                /> */}
                <div class='h-[300px]  w-[400px]'>
                  <FocusedImage class='focused-image' classWrap='w-full' imageSrc={Image3} x={-0.5} y={0} ></FocusedImage>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="bg-white border-black border-4 mx-10 mb-10 shadow-[20px_20px_0_0_rgba(0,0,0)] overflow-hidden">
                <AppleHeader></AppleHeader>
                {/* <img
                  class="p-[4%]"
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  alt=""
                /> */}
                <div class='h-[300px] w-[400px]'>
                  <FocusedImage class='focused-image' imageSrc={Image4} x={-0.5} y={0} ></FocusedImage>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="text-center mb-5">
            <div className="swiper-custom-pagination-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsOn;
