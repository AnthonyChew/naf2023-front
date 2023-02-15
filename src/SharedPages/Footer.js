import React from 'react'
import CAC_Logo from './svgs/CAC_Logo.svg';

import DCMF_logo from './svgs/poweredByDCMF.png'
import MJD_logo from './svgs/poweredByMJD.png'
import MyULife_logo from './svgs/poweredByMyULife.png'

const Footer = () => {
  return (
    <div class="flex h-fit mt-12 font-syne font-medium text-xl flex-wrap mb-10">
      <div class="basis-1/2 text-center md:basis-1/4">
        <div>Organised By</div>
        <div class="md:pt-5 pt-2">
          <img class="mx-auto my-0 w-[30%] md:w-[70%] lg:w-[auto]" src={CAC_Logo}></img>
        </div>
      </div>
      <div class="basis-1/2 md:basis-1/">
        <div className='flex gap-20'>
          <div>
            <div class='text-center '>Powered By</div>
            <div class="flex md:pt-5 pt-2">
              <img src={DCMF_logo} class="w-[45px] h-[35px] md:w-[75px] md:h-[102px] mx-2 object-contain "></img>
              <img src={MyULife_logo} class="w-[45px] h-[35px] md:w-[75px] md:h-[102px] mx-2 object-contain "></img>
            </div>
          </div>
          <div class='md:block hidden'>
            <div class='text-center '> Official Production Partner</div>
            <div class="flex pt-5 items-center justify-center">
              <img src={MJD_logo} class="w-[45px] h-[35px] lg:w-[200px] lg:h-[37px] xl:w-[255px] xl:h-[45px] md:w-[150px] md:h-[25px] mx-2"></img>
            </div>
          </div>
        </div>
      </div>
      <div class="md:hidden w-[100%] md:basis-1/4 md:w-[auto] text-center  md:mt-0 mt-5">
        <div > Official Production Partner</div>
        <div class="flex pt-2 justify-center">
          <img src={MJD_logo} class="w-[125px] h-[25px] md:w-[400px] md:h-[75px]  mx-2"></img>
        </div>
      </div>

      <div class="w-[100%] md:basis-1/4 md:w-[auto] text-center md:mt-0 mt-5">
        <div>Social Media</div>
        <div class="flex gap-3 md:pt-5 pt-2 justify-center">
          <a href='https://www.facebook.com/ntuartsfestival/'>
            <svg xmlns="http://www.w3.org/2000/svg" class='w-9 h-9' viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" /></svg>
          </a>

          <a href='https://www.instagram.com/ntuartsfestival/?hl=en'>
            <svg xmlns="http://www.w3.org/2000/svg" class='w-9 h-9' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
          </a>


          <a href='https://www.tiktok.com/@ntuartsfestival?_t=8ZSfbGScD6A&_r=1'>
            <svg xmlns="http://www.w3.org/2000/svg" class='w-9 h-9' viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
          </a>

          <a href='mailto:NAF-PARTICIPANTS@e.ntu.edu.sg'>
            <svg xmlns="http://www.w3.org/2000/svg" class='w-9 h-9'  viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
          </a>
        </div>

      </div>

    </div >
  )
}

export default Footer