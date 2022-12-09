import React from 'react'
import CartBg from './svgs/Cart/bg.svg'
import CartWord from './svgs/Cart/CART.png'

import LeftTopYellowStar from './svgs/Cart/LeftTopYellowStar.svg'
import LeftBlueStar from './svgs/Cart/LeftBlueStar.svg'
import LeftBottomPurpleStar from './svgs/Cart/LeftBottomPurpleStar.svg'
import RightTopPurpleStar from './svgs/Cart/RightTopPurpleStar.svg'
import RightBlueStar from './svgs/Cart/RightBlueStar.svg'
import BottomRightYellowStar from './svgs/Cart/BottomRightYellowStar.svg'

const Cart = () => {
  return (

    <div class="flex relative items-center min-h-screen bg-NAFPink bg-cover overflow-hidden" style={{ backgroundImage: `url(${CartBg})` }}>
      <div class = "absolute left-[11%] absolute top-[7%] w-[100%] z-[1] ">
        <div class="flex top-[19%] z-[0] w-[68%] h-fit mt-[5%] mb-[14.5%] mr-[10%] ml-[6%] border-4 border-black shadow-[20px_20px_0_0_rgba(255,255,0)]">
          <div class="absolute left-[0%] top-[2.5%] z-[1] max-w-[100%] border-4 bg-white border-black shadow-[20px_20px_0_0_rgba(0,113,198)] shadowborder-black">
            <div class="flex items-center gap-[2em] flex-col pt-[1em] h-full w-full">
              <img class="px-8 py-3 center" src={CartWord}></img>
            </div>
          </div>
          <div class="h-fit bg-white py-[30%] px-[20%]">
              <p class="font-medium text-xl text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
              </p>
          </div>
        </div>
      </div>

      <img class="absolute top-[11.1%] left-[-0.0395%]" src={LeftTopYellowStar}></img>
      <img class="absolute top-[50%] left-[9.45%]" src={LeftBlueStar}></img>
      <img class="absolute top-[68%] left-[-1%]" src={LeftBottomPurpleStar}></img>
      <img class="absolute top-[2%] right-[5%]" src={RightTopPurpleStar}></img>
      <img class="absolute top-[26.25%] right-[0%]" src={RightBlueStar}></img>
      <img class="absolute top-[90%] right-[0%]" src={BottomRightYellowStar}></img>
    </div>
  )
}

export default Cart
