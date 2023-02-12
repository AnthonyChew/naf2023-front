import React, { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from 'react-router-dom';

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

const Workshops = (props) => {
  const history = useNavigate();

  const workshops = props.workshops;

  window.addEventListener('resize', function () {
    if (window.innerWidth < 1250) {
      setNum(1);
    }
    else {

      setNum(3);
    }
  });
  const [num, setNum] = useState(3);

  function info(workshop) {
    history('/workshop', {
      state: { workshop }
    });
  }

  return (
    <div class="bg-NAFOrange bg-cover relative overflow-hidden" style={{ backgroundImage: `url(${LandingBg})` }}>
      <img src={WorkshopTopLeftPurpleStar} class="absolute top-[5%] left-[0%] z-10 w-[20%] md:w-[auto]"></img>
      <img src={WorkshopTopRightRedDot} class="absolute top-[2%] right-[10%] z-10"></img>
      <img src={WorkshopTopRightYellowStar} class="hidden lg:block absolute top-[5%] right-[0%] z-10"></img>
      <img src={WorkshopBottomRightBlueStar} class="absolute bottom-[-8%] right-[-5%] z-10 w-[40%] md:w-auto"></img>

      <div class="flex relative flex-col items-center">
        <img class="my-8 z-20  lg:w-[40%]" src={WorkshopLogo}></img>
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
            slidesPerView={num}
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
            loop={true}
          >
            <SwiperSlide >
              <div class='cursor-pointer'>
                <div class='my-auto' onClick={() => info(workshops[0])}>
                  <img
                    src={workshops[0] && workshops[0].images[0]}
                    alt=""
                    class='md:h-[250px] max-h-[200px]  mx-auto'
                  />
                  <div class="text-center font-syne md:text-paragraph_Desktop text-paragraph_Mobile mt-3  whitespace-wrap">{workshops[0] && workshops[0].name}</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class='cursor-pointer'>
                <div class='my-auto' onClick={() => info(workshops[1])}>
                  <img
                    src={workshops[1] && workshops[1].images[0]}
                    alt=""
                    class='md:h-[250px] max-h-[200px]  mx-auto'
                  />
                  <div class="text-center font-syne md:text-paragraph_Desktop text-paragraph_Mobile mt-3 whitespace-wrap">{workshops[1] && workshops[1].name}</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div  class='cursor-pointer'>
                <div class='my-auto' onClick={() => info(workshops[2])}>
                  <img
                    src={workshops[2] && workshops[2].images[0]}
                    alt=""
                    class='md:h-[250px] max-h-[200px]  mx-auto'

                  />
                  <div class="text-center font-syne md:text-paragraph_Desktop text-paragraph_Mobile mt-3 whitespace-wrap">{workshops[2] && workshops[2].name}</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='cursor-pointer' >
                <div class='my-auto' onClick={() => info(workshops[3])}>
                  <img
                    src={workshops[3] && workshops[3].images[0]}
                    alt=""
                    class='md:h-[250px] max-h-[200px] mx-auto'
                  />
                  <div class="text-center font-syne md:text-paragraph_Desktop text-paragraph_Mobile mt-3 whitespace-wrap ">{workshops[3] && workshops[3].name}</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="text-center mb-10">
        <div className="swiper-custom-pagination" />
      </div>

      <div class="text-center mb-10">
        <button
          onClick={() => history('/interstellar')}
          class='bg-NAFPink rounded-md px-1 lg:px-2 py-3 lg:py-1 font-syne text-buttonText_Desktop md:text-header text-white z-20  hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '
        >
          Click for More!
        </button>
      </div>
    </div>
  );
};

export default Workshops;
