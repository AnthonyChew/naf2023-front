import React from "react";
import Logo from "./svgs/gallery/workshops_gallerylogo.svg";
import LogoShadow from "./svgs/gallery/workshops_gallerylogoshadow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";

const Gallery = () => {
  return (
    <div class="overflow-hidden relative h-auto md:min-h-screen w-full bg-NAFBlue pt-12 md:pb-0 pb-20 px-[5%] lg:px-20">
      <img class="absolute mt-1 ml-[23%] w-[45%]" src={LogoShadow} />
      <img class="absolute ml-[23%] mb-10 w-[45%]" src={Logo} />
      <div class="z-10 relative mt-[6%] mb-10 mx-[10%] lg:mx-[15%] font-semibold text-white text-center text-xs sm:text-sm md:text-md lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <Swiper
        className="mySwiper mx-auto w-[80%] !h-[100vh] !mx-[10%] !lg:mx-[15%]"
        slidesPerView={3}
        slidesPerColumn={2}
        grid={{
          rows: 2,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
      >
        <SwiperSlide className="bg-white !h-[40%] !w-[27%] border-solid border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="bg-white ml-[6.333%] !h-[40%] !w-[27%] border-solid border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="bg-white ml-[6.333%] !h-[40%] !w-[27%] border-solid border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="bg-white ml-[6.333%] !h-[40%] !w-[27%] border-solid border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="bg-white ml-[6.333%] !h-[30%] !w-[27%] border-solid border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="bg-white ml-[6.333%] !h-[30%] !w-[27%] border-solid border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="bg-white ml-[6.333%] !h-[30%] !w-[27%] border-solid border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="bg-white ml-[6.333%] !h-[30%] !w-[27%] border-solid border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="bg-white ml-[6.333%] !h-[30%] !w-[27%] border-solid border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
