import React from "react";
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

import WorkshopLogo from "./svgs/workshop/WorkshopLogo.png";
import AppleHeader from "../SharedPages/AppleHeader";
import WorkshopTopLeftPurpleStar from "./svgs/workshop/WorkshopPurpleStar.svg";
import WorkshopTopRightRedDot from "./svgs/workshop/WorkshopRedDot.svg";
import WorkshopTopRightYellowStar from "./svgs/workshop/WorkshopYellowStar.svg";
import WorkshopBottomRightBlueStar from "./svgs/workshop/WorkshopBlueStar.svg";
import LandingBg from "./svgs/landing/landingbg.svg";

const Workshops = () => {
  return (
    <div class="bg-NAFOrange bg-cover relative overflow-hidden" style={{ backgroundImage: `url(${LandingBg})`}}>
        <img src={WorkshopTopLeftPurpleStar} class="hidden lg:block absolute top-[5%] left-[0%] z-10"></img>
        <img src={WorkshopTopRightRedDot} class="hidden lg:block absolute top-[2%] right-[10%] z-10"></img>
        <img src={WorkshopTopRightYellowStar} class="hidden lg:block absolute top-[5%] right-[0%] z-10"></img>
        <img src={WorkshopBottomRightBlueStar} class="hidden lg:block absolute bottom-[-8%] right-[-5%] z-10"></img>



      <div class="flex relative flex-col items-center">
        <img class="my-8 z-20 w-[70%] lg:w-[40%]" src={WorkshopLogo}></img>
      </div>
      <div class="w-[95%] md:w-[90%] lg:w-[80%] h-fit mb-10 mx-auto border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)] bg-white">
        <AppleHeader></AppleHeader>
        <div class="p-10">
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
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            pagination={{
              el: ".swiper-custom-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  '"><img class="pagination-bullet"/></span>'
                );
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
          >
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt=""
              />
              <div class="text-center">Pikachu</div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt=""
              />
              <div class="text-center">Pikachu</div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt=""
              />
              <div class="text-center">Pikachu</div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt=""
              />
              <div class="text-center">Pikachu</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="text-center mb-10">
        <div className="swiper-custom-pagination" />
      </div>
    </div>
  );
};

export default Workshops;
