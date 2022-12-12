import React from 'react'
import MarketPlaceLogo from './svgs/marketplace/MarketPlaceLogo.png'

const MarketPlaceLanding = () => {
  return (
    <div class="bg-NAFPink bg-cover min-h-screen relative overflow-hidden">
        <div class="flex relative flex-col items-center">
          <img class="my-10" src={MarketPlaceLogo}></img>
          <div class="font-syne w-[60%] text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
        </div>

        <div></div>
    </div>
  )
}

export default MarketPlaceLanding