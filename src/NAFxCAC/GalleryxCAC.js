import React, { useState, useEffect } from 'react'
import FocusedImage from '../SharedPages/FocusImage.js';

const GalleryxCAC = (props) => {
  // const imgGallery = [  {image:Pikachu1 , location: 'Linkway, LT1A' , name:'Glimmer' , date:'14 - 24 FEB 2023'},
  // {image:Pikachu2 , location: 'Foyer @ LT1A' , name:'Starburst' ,  date:'6 - 10 MAR 2023'},
  // {image:Pikachu3 , location: 'TRs, LWN Study Room, Nanyang House, NIE' , name:'Interstellar' , date:'6 - 17 MAR 2023' },
  // {image:Pikachu4 , location: 'Green Lawn @ NS Linkway Nanyang Auditorium' , name:'Orbit ' , date:'6 FEB - 17 MAR 2023' }];
  const [imgState, setImgState] = useState(props.imgs)
  const offSet = props.offSet;
  const [galleryState, setGalleryState] = useState(0)
  const ImageState = (val) => (event) => {
    if (val > (imgState.length - 1)) val = 0
    if (val < 0) val = (imgState.length - 1)
    setGalleryState(val)
  }

  return (
    <div>
      <div class="bg-white w-[90%] lg:w-[80%] h-fit mt-5 mx-auto border-4 border-black md:shadow-[20px_20px_0_0_rgba(0,0,0)] text-center">
        <div class="text-center">
          <div class="font-syne font-bold text-lg lg:text-2xl border-b-4 border-black py-4 v">{props.title}</div>
          <div class=" md:h-[600px] h-[250px]"> <FocusedImage class='focused-image' classWrap='ml-auto' imageSrc={imgState[galleryState]} x={offSet[galleryState].x} y={offSet[galleryState].y} ></FocusedImage></div>
        </div>
      </div>
      <div class="mx-auto mb-5 lg:mb-0 flex justify-around w-3/4 md:w-1/4 mt-10 cursor-pointer"  onClick={ImageState(galleryState - 1)}>
        <div class="bg-NAFPurple border-4 border-black px-5 pt-5 pb-4">
          <button class="inline-block w-[15%] md:w-[30%] lg:w-[15%]">
            <svg xmlns="http://www.w3.org/2000/svg" class='md:h-10 md:w-10 w-5 h-5' viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
          </button>
        </div>
        <div class="bg-NAFPurple border-4 border-black px-5 pt-5 pb-4 cursor-pointer"  onClick={ImageState(galleryState + 1)}>
          <button class="inline-block w-[15%] md:w-[30%] lg:w-[15%]">
            <svg xmlns="http://www.w3.org/2000/svg" class='md:h-10 md:w-10 w-5 h-5' viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
          </button>
        </div>
      </div>

    </div>

  )
}

export default GalleryxCAC