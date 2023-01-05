import React, { useRef, useState } from "react";
import Logo from "./svgs/gallery/workshops_gallerylogo.svg";
import File from "./svgs/gallery/workshops_file.svg";
import Planet1 from "./svgs/gallery/workshops_planet1.svg";
import Planet2 from "./svgs/gallery/workshops_planet2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  EffectFade,
  Grid,
} from "swiper";

import "swiper/css";
import "swiper/css/grid"; // need this
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
import "./styles.css";

const Gallery = () => {
  const pagination = {
    el: ".swiper-custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '"><img class="pagination-bullet"/></span>'
      );
    },
  };
  const navigation = {
    nextEl: ".gallery-nextEl",
    prevEl: ".gallery-prevEl",
  };

  return (
    <div class="overflow-hidden relative h-auto md:min-h-screen w-full bg-NAFBlue pt-12 md:pb-0 pb-20 px-[5%] lg:px-20">
      <img className="z-0 absolute -bottom-[5%] left-0 w-[47%]" src={Planet1} />
      <img
        className="z-0 absolute -bottom-[23%] right-0 w-[47%] "
        src={Planet2}
      />
      <img class="relative ml-[27.5%] w-[45%] mb-[2%]" src={Logo} />
      <div class="z-10 relative mb-[3%] mx-[10%] lg:mx-[15%] font-semibold text-white text-center text-xs sm:text-sm md:text-md lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className="flex flex-row">
        <div className="z-10 gallery-prevEl" />
        <div className="h-[400px] lg:h-[800px] mb-5 flex flex-row !w-[80%]">
          <Swiper
            // install Swiper modules
            className="gallery-swiper"
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectCube,
              EffectFade,
              Grid,
            ]}
            spaceBetween={50}
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            navigation={navigation}
            pagination={pagination}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="gallery-swiper-slide">Slide 1</SwiperSlide>
            <SwiperSlide className="gallery-swiper-slide">Slide 2</SwiperSlide>
            <SwiperSlide className="gallery-swiper-slide">Slide 3</SwiperSlide>
            <SwiperSlide className="gallery-swiper-slide">Slide 4</SwiperSlide>
            <SwiperSlide className="gallery-swiper-slide">Slide 5</SwiperSlide>
            <SwiperSlide className="gallery-swiper-slide">Slide 6</SwiperSlide>
            <SwiperSlide className="gallery-swiper-slide">Slide 7</SwiperSlide>
            <SwiperSlide className="gallery-swiper-slide">Slide 8</SwiperSlide>
            <SwiperSlide className="gallery-swiper-slide">Slide 9</SwiperSlide>
          </Swiper>
        </div>
        <div className="z-10 gallery-nextEl" />
      </div>
      <div className="text-center mb-5">
        <div className="swiper-custom-pagination" />
      </div>
      <div className="flex flex-row justify-center justify-between mx-[20%] mb-[20%]">
        <img className="z-10 w-[10%]" src={File} />
        <img className="z-10 w-[10%]" src={File} />
        <img className="z-10 w-[10%]" src={File} />
        <img className="z-10 w-[10%]" src={File} />
        <img className="z-10 w-[10%]" src={File} />
      </div>
    </div>
  );
};

export default Gallery;
