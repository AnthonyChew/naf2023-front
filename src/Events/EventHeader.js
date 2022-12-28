import React from 'react'

const EventHeader = (props) => {
  const textColorCondition = (props.bgColor == "bg-NAFYellow" ? "text-black" : "text-white")
  return (
    <div class="relative w-[80%] lg:w-[40%] mx-auto py-20 text-center">
    <img class="mx-auto" src={props.img}></img>
    <div className={"font-syne font-normal text-xl pt-2 " + textColorCondition}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
  </div>
  )
}

export default EventHeader