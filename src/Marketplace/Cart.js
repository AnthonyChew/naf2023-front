import React from 'react'
import CartBg from './svgs/Cart/bg.svg'
import CartWord from './svgs/Cart/CART.png'

import LeftTopYellowStar from './svgs/Cart/LeftTopYellowStar.svg'
import LeftBlueStar from './svgs/Cart/LeftBlueStar.svg'
import LeftBottomPurpleStar from './svgs/Cart/LeftBottomPurpleStar.svg'
import RightTopPurpleStar from './svgs/Cart/RightTopPurpleStar.svg'
import RightBlueStar from './svgs/Cart/RightBlueStar.svg'
import BottomRightYellowStar from './svgs/Cart/BottomRightYellowStar.svg'

let arrayOfItems = [];
const addToCart = (itemName, price) => {

}

const Cart = () => {
  return (
    <div class="relative min-h-screen bg-NAFPink bg-cover overflow-hidden" style={{ backgroundImage: `url(${CartBg})` }}>

      <div class="flex flex-col items-center w-[70%] mr-auto ml-auto">
        <img class="absolute top-[11.1%] left-[-0.0395%]" src={LeftTopYellowStar}></img>
        <img class="absolute top-[50%] left-[9.45%]" src={LeftBlueStar}></img>
        <img class="absolute top-[68%] left-[-1%]" src={LeftBottomPurpleStar}></img>
        <img class="absolute top-[2%] right-[5%]" src={RightTopPurpleStar}></img>
        <img class="absolute top-[26.25%] right-[0%] " src={RightBlueStar}></img>
        <img class="absolute top-[90%] right-[0%]" src={BottomRightYellowStar}></img>

        <div class=" h-fit mt-48 border-4 border-black shadow-[20px_20px_0_0_rgba(255,255,0)] z-10">

          <div class="absolute left-[10%] top-[10%] z-[2] max-w-[100%] border-4 bg-white border-black shadow-[20px_20px_0_0_rgba(0,113,198)] shadowborder-black">
            <img class="p-5" src={CartWord}></img>
          </div>

          <div class="h-fit bg-white py-[20%] px-[20%]">
            {/*array.forEach(item => <div>item</div>);*/}
            <p class="font-medium text-xl text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam, lobortis tellus sed, vulputate diam. Orci varius natoque penatibus et magnis dis parturient montes.
            </p>
          </div>

        </div>

        <button type="button" class="self-end mt-10 text-white bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Check Out
        </button>
      </div>
    </div>
  )
}

export default Cart
