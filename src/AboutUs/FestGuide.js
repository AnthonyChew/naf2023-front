import React, { useState } from "react";
import WhatIsNTUArtsFestival from "./svgs/FestGuide/WhatIsNTUArtsFestival.png";
import AppleHeader from "../SharedPages/AppleHeader";
import BigWhiteStar from "./svgs/FestGuide/BigWhiteStar.svg";
import MediumRedStar from "./svgs/FestGuide/MediumRedStar.svg";
import MediumYellowStar from "./svgs/FestGuide/MediumYellowStar.svg";
import SmallBlueStar from "./svgs/FestGuide/SmallBlueStar.svg";
import SmallPurpleDot from "./svgs/FestGuide/SmallPurpleDot.svg";
import SmallRedStar from "./svgs/FestGuide/SmallRedStar.svg";
import SmallWhiteDot from "./svgs/FestGuide/SmallWhiteDot.svg";
import MediumPurpleStar from "./svgs/FestGuide/MediumPurpleStar.svg";
import festGuide from "./pdfs/Festival Guide-03.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import "./pdf.css";
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

import guide_1 from './pdfs/Festival Guide-03.png'
import guide_2 from './pdfs/Festival Guide-04.png'
import guide_3 from './pdfs/Festival Guide-05.png'
import guide_4 from './pdfs/Festival Guide-06.png'
import guide_5 from './pdfs/Festival Guide-07.png'
import guide_6 from './pdfs/Festival Guide-08.png'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const FestGuide = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const PDF_VIEWPORT_FACTOR = 0.5;
  const [pdfWidth, setPDFWidth] = useState(
    window.innerWidth * PDF_VIEWPORT_FACTOR
  );

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  window.addEventListener('resize', function () {
    setPDFWidth(window.innerWidth * PDF_VIEWPORT_FACTOR);
  });

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const festImage = [guide_1, guide_2, guide_3, guide_4, guide_5, guide_6]

  return (

    <div class="flex relative lg:min-h-screen bg-NAFYellow  overflow-hidden md:pl-20  md:pr-20">

      <div class=" flex flex-row w-[100%] mt-20 lg:mt-32 mx-10 sm:mb-20 md:mb-0 flex-nowrap">
        <img src={BigWhiteStar} class="hidden lg:block absolute top-[40%] right-[0%] hidden lg:block"></img>
        {/* <img src={MediumRedStar} class="absolute top-[87%] left-[0%] "></img> */}
        <img src={MediumYellowStar} class="hidden lg:block absolute top-[-8%] right-[9%]"></img>
        {/* <img
          src={MediumPurpleStar}
          class="absolute top-[90%] right-[45%]"
        ></img> */}
        <img src={SmallBlueStar} class="hidden lg:block absolute top-[2%] left-[35%] hidden lg:block"></img>
        <img src={SmallPurpleDot} class="hidden lg:block absolute top-[7%] right-[3%] "></img>
        <img src={SmallRedStar} class="hidden lg:block absolute top-[9%] right-[4%] z-10 hidden lg:block"></img>
        <img src={SmallWhiteDot} class="hidden lg:block absolute top-[90%] left-[12%] hidden lg:block"></img>

        <div class="relative lg:flex-1 mb-10 lg:mb-20 ">
          <img src={WhatIsNTUArtsFestival} class=""></img>
          <h1 class="my-5 md:mr-10 font-syne font-normal text-lg lg:text-2xl ">
            Occurring from February to March 2023, NTU Arts Festival 2023 (NAF) is a Special Project under NTU Cultural Activities Club (CAC) which aims to develop NTU’s potential as a cultural hub and establish itself as a premiere event that will be placed on the cultural and arts calendar of Singapore. Involving the 23 CAC Member Clubs and established arts and cultural groups within NTU, NAF 2023 aims to promote the understanding and appreciation of the arts within the NTU community and bring our NTU Arts scene to greater acknowledgement in the wider local arts scene. This year, NAF 2023 will consist of 4 main segments of programmes: Glimmer, Starburst, Interstellar and Orbit.
          </h1>
          {/*./pdfs/Sample pdf document.pdf  padding: 15px 32px; */}
          <a type="submit" href={festGuide} download="NAF2023_FestGuide.pdf"
            class="justify-center hover:bg-violet-700 py-[5%] mt-2 w-[300px] h-[60px] py-[17px] box-border text-center items-center font-syne font-weight: 700; text-zinc-50 px-2 border-2 border-indigo-500/100 bg-NAFPurple rounded-lg"
          >
            DOWNLOAD FEST GUIDE
          </a>

        </div>
        <div class="lg:relative lg:flex-1 basis-full mb-20 w-min overflow-hidden hidden lg:block">
          <div class="mx-auto lg:w-[50%] h-[100%] bg-white item align-center border-4 border-black shadow-[15px_20px_0_0_rgba(0,0,0)]">
            <AppleHeader></AppleHeader>
            <div class="p-5 w-[80%] h-full mx-auto">
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
                spaceBetween={20}
                slidesPerView={1}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                loop={true}
              >
                {festImage.map((element) => {
                  return(
                  <SwiperSlide >
                    <div class='flex justify-center h-full'>
                    <img
                      src={element}
                      alt=""
                      class=' md:w-[300px] '
                    />
                  </div>
                  </SwiperSlide>
                )})
                }


              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestGuide;