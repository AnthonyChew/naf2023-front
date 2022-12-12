import React from 'react'
import CartBg from './svgs/Cart/bg.svg'
import CartWord from './svgs/Cart/CART.png'

import LeftTopYellowStar from './svgs/Cart/LeftTopYellowStar.svg'
import LeftBlueStar from './svgs/Cart/LeftBlueStar.svg'
import LeftBottomPurpleStar from './svgs/Cart/LeftBottomPurpleStar.svg'
import RightTopPurpleStar from './svgs/Cart/RightTopPurpleStar.svg'
import RightBlueStar from './svgs/Cart/RightBlueStar.svg'
import BottomRightYellowStar from './svgs/Cart/BottomRightYellowStar.svg'
import ProdcutPlaceHolder from './svgs/Cart/ProdcutPlaceHolder.svg'
import CartCard from './CartCard';


let arrayOfItems = [];
const addToCart = (itemName, price) => {

}

const prodcut = [
  {
    _id: 0,
    quantity: 1,
    name: "test1",
    size: 1,
    colour: "Red",
    image: ProdcutPlaceHolder,
    price: 10,
    attribute1: "description1",
    attribute2: ""
  },
  {
    _id: 1,
    quantity: 1,
    name: "test1",
    size: 1,
    colour: "Red",
    image: ProdcutPlaceHolder,
    price: 10,
    attribute1: "description1",
    attribute2: ""
  },
  {
    _id: 2,
    quantity: 1,
    name: "test1",
    size: 1,
    colour: "Red",
    image: ProdcutPlaceHolder,
    price: 10,
    attribute1: "description1",
    attribute2: ""
  },
];

var total = 0;

Object.entries(prodcut).forEach(function ([key, value]) {
  total += value.quantity * value.price;
});

const Cart = () => {
  return (
    <div class="relative min-h-screen bg-NAFPink bg-cover overflow-hidden pt-48 pb-40" style={{ backgroundImage: `url(${CartBg})` }}>
      <img class="absolute top-[11.1%] left-[-0.0395%]" src={LeftTopYellowStar}></img>
      <img class="absolute top-[50%] left-[9.45%]" src={LeftBlueStar}></img>
      <img class="absolute top-[68%] left-[-1%]" src={LeftBottomPurpleStar}></img>
      <img class="absolute top-[2%] right-[5%]" src={RightTopPurpleStar}></img>
      <img class="absolute top-[26.25%] right-[0%] " src={RightBlueStar}></img>
      <img class="absolute top-[90%] right-[0%]" src={BottomRightYellowStar}></img>
      <div class="flex flex-col items-center w-[60%] mr-auto ml-auto">


        <div class="w-[100%] h-fit  border-4 border-black shadow-[20px_20px_0_0_rgba(255,255,0)] z-10">

          <div class="absolute left-[15%] top-28 z-[2] max-w-[100%] border-4 bg-white border-black shadow-[20px_20px_0_0_rgba(0,113,198)] shadowborder-black">
            <img class="p-5" src={CartWord}></img>
          </div>

          <div class="h-fit bg-white pt-20 pb-10">
            <div class="flex flex-row items-center justify-center">
              <div class="flex-1"></div>

              <p class="flex-1 text-xl text-[#A8A8A8] font-syne "> Item </p>

              <p class="flex-1 text-xl text-[#A8A8A8] font-syne text-center"> Quantity </p>

              <p class="flex-1 text-xl text-[#A8A8A8] font-syne text-center"> Total Price </p>
            </div>

            {
              Object.entries(prodcut).map(([key, value]) => {
                return (
                  <CartCard key={value._id} product={value} stock={1}></CartCard>
                )
              })
            }

            <div>
              <div class="flex flex-row">
                <div class="flex flex-[75%] items-center justify-center">
                </div>

                <div class="flex flex-col flex-[25%] justify-center">
                  <p class="text-center text-2xl font-syne">Subtotal: ${total}</p>
                </div>
              </div>
            </div>

            <div>
              <div class="flex flex-row">
                <div class="flex flex-[75%] items-center justify-center">
                </div>

                <div class="flex flex-col flex-[25%] items-center justify-center">
                  <button type="button" class="mt-10 w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <p class="flex-1 text-xl font-syne text-center"> Check Out </p>
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>


      </div>
    </div>
  )
}

export default Cart
