import React, { useState, useEffect } from 'react'
import LeftArrow from './svgs/LeftArrow.svg';
import RightArrow from './svgs/RightArrow.svg';

const GalleryxCAC = (props) => {
  // const imgGallery = [  {image:Pikachu1 , location: 'Linkway, LT1A' , name:'Glimmer' , date:'14 - 24 FEB 2023'},
  // {image:Pikachu2 , location: 'Foyer @ LT1A' , name:'Starburst' ,  date:'6 - 10 MAR 2023'},
  // {image:Pikachu3 , location: 'TRs, LWN Study Room, Nanyang House, NIE' , name:'Interstellar' , date:'6 - 17 MAR 2023' },
  // {image:Pikachu4 , location: 'Green Lawn @ NS Linkway Nanyang Auditorium' , name:'Orbit ' , date:'6 FEB - 17 MAR 2023' }];
    const [imgState, setImgState] = useState(props.imgs)
    const [galleryState, setGalleryState] = useState(0)
    const ImageState = (val) => (event) => {
      if (val > (imgState.length - 1)) val = 0
      if (val < 0) val = (imgState.length - 1)
      setGalleryState(val)
    }
  
  return (
    <div>
    <div class="bg-white w-[90%] lg:w-[80%] h-fit mt-5 mx-auto border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)] text-center">
        <div class="text-center">
            <div class="font-syne font-bold text-2xl border-b-4 border-black py-4 v">{props.title}</div>
            <div><img class="mx-auto h-[650px]" src={imgState[galleryState]}/></div>
        </div>
    </div>
    <div class="mx-auto mb-5 lg:mb-0 flex justify-around w-1/4 mt-10">
          <img class="inline-block w-[15%]" src={LeftArrow}  onClick={ImageState(galleryState - 1)}></img>
          <img class="inline-block w-[15%]" src={RightArrow}  onClick={ImageState(galleryState+ 1)}></img>
        </div>

    </div>

  )
}

export default GalleryxCAC