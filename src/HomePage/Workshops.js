import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import WorkshopLogo from './svgs/workshop/WorkshopLogo.png'
import AppleHeader from '../SharedPages/AppleHeader';
import WorkshopTopLeftPurpleStar from './svgs/workshop/WorkshopPurpleStar.svg'
import WorkshopTopRightRedDot from './svgs/workshop/WorkshopRedDot.svg'
import WorkshopTopRightYellowStar from './svgs/workshop/WorkshopYellowStar.svg'
import WorkshopBottomRightBlueStar from './svgs/workshop/WorkshopBlueStar.svg'
import LandingBg from './svgs/landing/landingbg.svg'

const Workshops = () => {
  return (
    <div class="bg-NAFOrange bg-cover min-h-screen relative overflow-hidden" style={{ backgroundImage: `url(${LandingBg})`}}>
        <img src={WorkshopTopLeftPurpleStar} class="absolute top-[5%] left-[0%] z-10"></img>
        <img src={WorkshopTopRightRedDot} class="absolute top-[2%] right-[10%] z-10"></img>
        <img src={WorkshopTopRightYellowStar} class="absolute top-[5%] right-[0%] z-10"></img>
        <img src={WorkshopBottomRightBlueStar} class="absolute bottom-[-8%] right-[-5%] z-10"></img>



      <div class="flex relative flex-col items-center">
        <img class="my-8 z-20" src={WorkshopLogo}></img>
      </div>
      <div class="w-[80%] h-fit mb-10 mr-auto ml-36 border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)] bg-white">
        <AppleHeader></AppleHeader>
        <div class="p-10">

        
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
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
           <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
            <div class="text-center">Pikachu</div>
          </SwiperSlide>
        </Swiper>

        </div>

      </div>
      <div class="text-center mb-10">
          <div className="swiper-custom-pagination" />
        </div>
    </div>
  )
}

export default Workshops