import React from 'react'

const GalleryxCAC = (props) => {
  return (
    <div class="bg-white w-[90%] lg:w-[80%] h-fit pb-28 mt-5 mx-auto border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)] text-center">
        <div class="text-center">
            <div class="font-syne font-bold text-2xl border-b-4 border-black py-4 v">{props.title}</div>
            <div><img class="mx-auto" src={props.img}/></div>
            <div class="m-5">{props.content}</div>
        </div>
    </div>
  )
}

export default GalleryxCAC