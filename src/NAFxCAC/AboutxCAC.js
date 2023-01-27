import React from 'react'
import AppleHeader from '../SharedPages/AppleHeader'
const AboutxCAC = (props) => {
  return (
    <div class="bg-white w-[90%] lg:w-[80%] h-fit pb-10 mt-5 mx-auto mb-20 border-4 border-black md:shadow-[20px_20px_0_0_rgba(0,0,0)] text-center">
        <AppleHeader></AppleHeader>
        <div class="text-center">
            <div class="font-syne font-bold text-2xl my-5">{props.title}</div>
            <div><img class="w-[300px] md:w-[500px] mx-auto" src={props.img}/></div>
            <div class="mx-5 mt-5">{props.content}</div>
        </div>
    </div>
  )
}

export default AboutxCAC