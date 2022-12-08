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
      <div class = "absolute left-[12%] absolute top-[7.5%] w-[100%] ">
        <div class="absolute left-[0%] top-[0%] z-[1] max-w-[100%] border-4 bg-white border-black shadow-[20px_20px_0_0_rgba(0,113,198)]">
          <div class="flex items-center gap-[2em] flex-col pt-[1em] h-full w-full">
            <img class="mt-11 mb-10 mx-43" src={CartWord}></img>
          </div>
        </div>

        <div class="flex absolute top-[20%] z-[0] w-[50%] h-fit mt-[5%] mb-[14.5%] mr-[20%] ml-[6%] border-4 border-black shadow-[20px_20px_0_0_rgba(255,255,0)]">
          <div class="h-fit bg-white pb-[80%]">
              <p class="font-medium text-xl px-5 text-left">
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
