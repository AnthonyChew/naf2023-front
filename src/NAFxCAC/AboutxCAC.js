import React, { useState } from 'react'
import AppleHeader from '../SharedPages/AppleHeader'
const AboutxCAC = (props) => {
  const classNames = {
    tabActive: " bg-white pt-1 border-t-2 border-l-2 border-r-2 border-black",
    tabInactive:
      "bg-gray-300 pt-1 mt-1",
  };
  const [active, setActive] = useState(0);
  return (


    <div class="w-[90%] lg:w-[80%] h-fit mx-auto mb-2 pb-10">
      {/*<div class="bg-white w-[90%] lg:w-[80%] h-fit pb-10 mt-5 mx-auto mb-20 border-4 border-black md:shadow-[20px_20px_0_0_rgba(0,0,0)] text-center">
         <AppleHeader></AppleHeader>
       <div class="text-center">
        <div class="font-syne font-bold text-2xl my-5">{props.title}</div>
        <div><img class="w-[300px] md:w-[500px] mx-auto" src={props.img} /></div>
        <div class="mx-5 mt-5">{props.content}</div>
      </div> 
     </div>*/}
      < div class="z-10 relative flex w-full" >
        <div
          onClick={() => setActive(0)}
          class={`${active === 0 ? classNames.tabActive : classNames.tabInactive
            } text-xs md:text-base w-fit px-1 lg:px-5 font-syne text-center cursor-pointer`}
        >
          {props.title}
        </div>
        <div
          onClick={() => setActive(1)}
          class={`${active === 1 ? classNames.tabActive : classNames.tabInactive
            } text-xs md:text-base w-[32%] sm:w-[17%] font-syne text-center cursor-pointer`}
        >
          Theme
        </div>
      </div >

      < div class="z-10 relative flex lg:flex-row flex-col items-center border-solid bg-white border-2 border-black w-full lg:w-auto shadow-[10px_10px_0_0_rgba(0,0,0)] p-[5%] md:shadow-[20px_20px_0_0_rgba(0,0,0)] text-center" >
        {/* Image */}
        < div class=" h-auto lg:h-80 lg:w-4/12 mr-[8%] flex items-center justify-center font-syne self-center lg:p-0 p-10" >
          <img class='overflow-y-auto' src={props.img} />
        </div >
        {/* Text Area */}
        < div class=" flex lg:w-8/12 flex-col gap-y-2 sm:gap-y-5" >
          <p class="sm:text-lg md:text-2xl lg:text-4xl flex font-syne justify-center lg:justify-start">
            {active === 0
              ? props.title
              : props.themeTitle}
          </p>
          <p class="text-left text-[10px] sm:text-sm md:text-md font-syne lg:text-lg">
          {active === 0
              ? props.title
              : props.theme}
            {props.theme}
          </p>
        </div >
      </div >
    </div>
  )
}

export default AboutxCAC