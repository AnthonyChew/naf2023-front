import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import QRCode from '../Marketplace/svgs/Payment/QRCode.svg'

const ThemexCAC = (props) => {
  return (
    <div class="relative mx-auto w-[90%] lg:w-[80%] mt-20">
      <div class="relative w-full mt-5">
        <div class="font-syne bg-gray-300 py-2 border-4 border-black border-b-0 lg:w-[32%] w-[60%] font-bold text-center text-xl">{props.title}</div>
      </div>
      <div class="relative flex border-solid bg-white border-4 border-black w-full md:shadow-[20px_20px_0_0_rgba(0,0,0)] p-[2%]">

        {/* Text Area */}
        <div class="">
          <p class="text-left text-[10px] sm:text-sm md:text-md lg:text-lg font-semibold">
            {props.content}
          </p>
        </div>
        {/* Image */}
        <div class="w-6/12 md:w-5/12 lg:w-4/12 ml-[8%]">
          <div class="w-[100%] inline-block">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                el: '.swiper-custom-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '"><img class="pagination-bullet"/></span>';
                }

              }}
              loop={true}
            >
              {
                props.imgs.map((oneImg, index) => (
                  <SwiperSlide>
                    <img src={QRCode} alt="" class="" />
                  </SwiperSlide>
                ))
              }

            </Swiper>
            <div class="text-center mt-3">
              <div className="swiper-custom-pagination" />
            </div>
          </div>  {/* end of left side */}
        </div>
      </div>
    </div>
  )
}

export default ThemexCAC