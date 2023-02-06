import React from 'react';
import Orbit from './svgs/Info/Orbit.svg';
import TopLeftPinkStar from './svgs/Info/TopLeftPinkStar.svg'
import MiddleBlueStar from './svgs/Info/MiddleBlueStar.svg'
import ArtFestivalLogo from './svgs/Info/ArtFestivalLogo.svg'

const Info = () => {
  return (
    <div class="relative bg-NAFBlue py-20">

      <div class='lg:w-[70%] mx-auto'>
        {/* Star SVGs */}
        <img src={TopLeftPinkStar} class="absolute w-2/6 lg:w-1/4 top-[-10%] md:top-[-20%] left-[-10%] lg:-left-40 z-20"></img>
        <img src={MiddleBlueStar} class="hidden lg:block absolute w-1/6 lg:w-1/12 top-[-5%] left-[50%] z-20"></img>

        {/* <img src={Orbit} class="absolute top-[30%] w-4/6 right-[-13%] z-10"></img> */}
        {/* <img src={Orbit} class="scale-x-[-1.0] absolute top-[70%] w-4/6 left-[-13%] z-10"></img> */}
        {/* <img src={Orbit} class="absolute top-[109%] w-4/6 right-[-13%] z-10"></img> */}
        <div class="flex flex-row pt-10 px-5">
            <div class="flex basis-1/2 text-sm justify-center items-center z-20">
              <div class="font-syne text-white text-paragraph_Mobile md:text-paragraph_Desktop">
                Building on the work of our predecessors, we aim to be a platform for different art forms, as well as the student body, to come together and commemorate their own strengths and each other. We hope to nurture a collaborative spirit in celebrating the arts in unity.
              </div>
            </div>
            <div class="flex relative basis-1/2 my-10 justify-center items-center z-20">
              <img src={ArtFestivalLogo} class="lg:w-[70%]  z-10 "></img>
              <img src={Orbit} class="absolute mb-20top-[27%] md:top-[4%] lg:top-[-5%]"></img>
              {/* <div class="aspect-square box-border border-2 border-black bg-gray-300 w-4/6 shadow-[15px_10px_0_0_rgba(0,0,0)] z-20"></div> */}
            </div>
          </div>
        {/* First Row */}
        {/* Laptop and Above */}
        {/* <div class="hidden lg:block">
          <div class="flex flex-row pt-10">
            <div class="flex basis-1/2 text-sm justify-center items-center z-20">
              <div class="mx-20 lg:mx-40 font-syne text-white text-base md:text-md lg:text-lg">
                Building on the work of our predecessors, we aim to be a platform for different art forms, as well as the student body, to come together and commemorate their own strengths and each other. We hope to nurture a collaborative spirit in celebrating the arts in unity.
              </div>
            </div>
            <div class="flex relative basis-1/2 my-10 justify-center items-center z-20">
              <img src={Orbit} class="absolute mb-20 z-10"></img>
              <div class="aspect-square box-border border-2 border-black bg-gray-300 w-4/6 shadow-[15px_10px_0_0_rgba(0,0,0)] z-20"></div>
            </div>
          </div>
        </div> */}

        {/* Below Laptop */}
        {/* <div class="block lg:hidden">
          <div class="flex flex-wrap flex-row pt-10">
            <div class="flex relative basis-full my-10 justify-center items-center z-20">
              <img src={Orbit} class="absolute mb-20 z-10"></img>
              <div class="aspect-square box-border border-2 border-black bg-gray-300 w-4/6 shadow-[15px_10px_0_0_rgba(0,0,0)] z-20"></div>
            </div>
            <div class="flex basis-full text-sm justify-center items-center z-20">
              <div class="mx-20 lg:mx-40 font-syne text-white text-base text-center">
                Building on the work of our predecessors, we aim to be a platform for different art forms, as well as the student body, to come together and commemorate their own strengths and each other. We hope to nurture a collaborative spirit in celebrating the arts in unity.
              </div>
            </div>
          </div>
        </div> */}

        {/* Second Row */}
        {/* <div class="flex flex-wrap flex-row">
          <div class="flex relative basis-full lg:basis-1/2 my-10 justify-center items-center z-20">
            <img src={Orbit} class="scale-x-[-1.0] absolute mb-20 z-10"></img>
            <div class="aspect-square box-border border-2 border-black bg-gray-300 w-4/6 shadow-[15px_10px_0_0_rgba(0,0,0)] z-20"></div>
          </div>
          <div class="flex basis-full lg:basis-1/2 text-sm justify-center items-center z-20">
            <div class="mx-20 lg:mx-40 font-syne text-white text-base text-center lg:text-right md:text-md lg:text-lg">
              Supernova likens our process of encouraging collaboration to the fusion of different elements. We aim to draw members of our different NTU communities in, providing them the space they need to explore, create and appreciate.
            </div>
          </div>
        </div> */}

        {/* Third Row */}
        {/* Laptop and above */}
        {/* <div class="hidden lg:block">
          <div class="flex flex-row pb-10">
            <div class="flex basis-1/2 text-sm justify-center items-center z-20">
              <div class="mx-20 lg:mx-40 font-syne text-white text-base md:text-md lg:text-lg">
                This year, we intend to pave the way to going beyond in nurturing NTU's arts scene. By doing so, we look to enrich the lives of all collaborators and benefactors, even likening this to - as our theme suggests - a brilliant burst of light.
              </div>
            </div>
            <div class="flex relative basis-1/2 my-10 justify-center items-center z-20">
              <img src={Orbit} class="absolute mb-20 z-10"></img>
              <div class="aspect-square box-border border-2 border-black bg-gray-300 w-4/6 shadow-[15px_10px_0_0_rgba(0,0,0)] z-20"></div>
            </div>
          </div>
        </div> */}

        {/* Below Laptop */}
        {/* <div class="block lg:hidden">
          <div class="flex flex-wrap flex-row pb-10">
            <div class="flex relative basis-full my-10 justify-center items-center z-20">
              <img src={Orbit} class="absolute mb-20 z-10"></img>
              <div class="aspect-square box-border border-2 border-black bg-gray-300 w-4/6 shadow-[15px_10px_0_0_rgba(0,0,0)] z-20"></div>
            </div>
            <div class="flex basis-full text-sm text-center justify-center items-center z-20">
              <div class="mx-20 lg:mx-40 font-syne text-white text-base md:text-md lg:text-lg">
                This year, we intend to pave the way to going beyond in nurturing NTU's arts scene. By doing so, we look to enrich the lives of all collaborators and benefactors, even likening this to - as our theme suggests - a brilliant burst of light.
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>

  )
}

export default Info