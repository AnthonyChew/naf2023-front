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
      
      <img class="absolute top-[15%] left-[0%]" src={LeftTopYellowStar}></img>
      <img class="absolute top-[50%] left-[10%]" src={LeftBlueStar}></img>
      <img class="absolute top-[80%] left-[0%]" src={LeftBottomPurpleStar}></img>
      <img class="absolute top-[8%] right-[0%]" src={RightTopPurpleStar}></img>
      <img class="absolute top-[50%] right-[0%]" src={RightBlueStar}></img>
      <img class="absolute top-[90%] right-[0%]" src={BottomRightYellowStar}></img>
      
      
      <div class="absolute left-[0%] top-[0%] max-w-[30%] border-4 bg-white border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
          <div class="flex items-center gap-[2em] flex-col pt-[1em] h-full w-full">
            <img class="mt-11 mb-10 mx-43" src={CartWord}></img>
          </div>
      </div>

      <div class="absolute right-[30%] absolute top - [20%] w-[50%] h-fit mb-28 mr-auto ml-36 border-4 border-black shadow-[20px_20px_0_0_rgba(255,255,0)]">
        <div class="h-fit bg-white">
        
        </div>
        
      </div>

      
    </div>
  )
}

export default Cart
