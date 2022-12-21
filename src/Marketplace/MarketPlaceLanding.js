import React from 'react'
import MarketPlaceLogo from './svgs/marketplace/MarketPlaceLogo.png'
import Pikachu1 from '../HomePage/svgs/events/pikachu1.png';
import Pikachu2 from '../HomePage/svgs/events/pikachu2.png';
import MarketPlaceMockData from './marketPlace_MockData.json';

const MarketPlaceLanding = () => {
  const marketPlaceItems = MarketPlaceMockData;

  return (
    <div class="bg-NAFPink bg-cover min-h-screen relative overflow-hidden">
        <div class="flex relative flex-col items-center">
          <img class="my-10" src={MarketPlaceLogo}></img>
          <div class="font-syne w-[60%] text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
        </div>
        {/* button */}
        <div class="flex">
          
        </div>

        {/* product and ads */}
        <div class="flex font-syne">
            <div class="basis-5/6 flex flex-wrap">

            {
              marketPlaceItems.map((oneItem, index) => (
                <div class="mx-10 my-10">
                <div class="oneItem-img">
                  <img src={Pikachu1} class="w-[200px] h-[200px]"></img>
                </div>
                <div class="oneItem-caption">
                  <div>Name: {oneItem.title}</div>
                  <div>Price: ${oneItem.price}</div>

                </div>
              </div>
              ))
            }
            </div>
            <div class="basis-1/6">
              <div class="w-[200px] h-[500px] bg-gray-700 mr-10">
              </div>
            </div>
        </div>
    </div>
  )
}

export default MarketPlaceLanding