import React from 'react'

const EventHeader = (props) => {
  const textColorCondition = (props.bgColor == "bg-NAFYellow" ? "text-black" : "text-white")
  return (
    <div class="relative w-[80%] lg:w-[60%] mx-auto py-20 text-center">
    <img class={"mx-auto "+ props.headerStyle} src={props.img}></img>
    <div className={"font-syne font-normal text-xl pt-2 " + textColorCondition}>{props.text}</div>
  </div>
  )
}

export default EventHeader