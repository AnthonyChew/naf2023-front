import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CartBg from './svgs/Cart/bg.svg'
import CartWord from './svgs/Cart/CART.png'
import LeftTopYellowStar from './svgs/Cart/LeftTopYellowStar.svg'
import LeftBlueStar from './svgs/Cart/LeftBlueStar.svg'
import LeftBottomPurpleStar from './svgs/Cart/LeftBottomPurpleStar.svg'
import RightTopPurpleStar from './svgs/Cart/RightTopPurpleStar.svg'
import RightBlueStar from './svgs/Cart/RightBlueStar.svg'
import BottomRightYellowStar from './svgs/Cart/BottomRightYellowStar.svg'
import CartCard from './CartCard';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth';

const Cart = () => {

  const [auth, setAuth] = useState(null);

  const state = useSelector((state) => {
    // console.log(state);
    return state;
  });
  //const dispatch = useDispatch();
  const products = state.addedProducts;
  
  const history = useNavigate();

  const postOrder = async () => {
    //console.log(products);

    const res = await authService.checkAuthStudent();
    if (res.status === 401) {
      alert("Please login first!")
      setAuth(false);
    } else if (res.status === 200) {
      
      if(products.length > 0)
      {
        history('/payment');
      }
      else
      {
        alert("There's no product in cart!")
      }
    }
  };

  // const handleDialogResult = (continueAction) => {
  //   setOpen(false);
  //   if (continueAction) {
  //     clearCart();
  //   }
  // };

  // const clearCart = () => {
  //   dispatch(resetCart());
  // };

  return (
    <div class="relative md:min-h-screen bg-NAFPink bg-cover overflow-hidden pt-48 md:pb-40 pb-12" style={{ backgroundImage: `url(${CartBg})` }}>
      <img class="absolute top-[11.1%] left-[-0.0395%] " src={LeftTopYellowStar}></img>
      <img class="absolute top-[50%] left-[9.45%] " src={LeftBlueStar}></img>
      <img class="absolute top-[68%] left-[-1%] " src={LeftBottomPurpleStar}></img>
      <img class="absolute top-[2%] right-[5%] " src={RightTopPurpleStar}></img>
      <img class="absolute top-[26.25%] right-[0%] hidden lg:block" src={RightBlueStar}></img>
      <img class="absolute top-[90%] right-[0%] hidden lg:block" src={BottomRightYellowStar}></img>

      <div class="flex flex-col items-center lg:w-[60%] w-[90%] mr-auto ml-auto ">

        <div class="relative w-[100%] h-fit  border-4 border-black lg:shadow-[20px_20px_0_0_rgba(255,255,0)] shadow-[10px_10px_0_0_rgba(255,255,0)] z-1">

          <div class="absolute lg:-left-[10%] lg:-top-20 max-w-[100%] lg:w-[15vw] w-[20vw] -top-10 -left-[5%] border-4 bg-white border-black lg:shadow-[20px_20px_0_0_rgba(0,113,198)] shadow-[8px_8px_0_0_rgba(0,113,198)] shadowborder-black">
            {/* <img class="lg:p-5 p-1 w-full h-auto" src={CartWord}></img> */}
            <p class='font-syneBold text-black  text-center lg:my-5 xl:text-6xl lg:text-5xl md:text-4xl text-xl'>CART</p>
          </div>

          <div class="h-fit w-full inline-flex flex-col bg-white lg:pt-16 pt-5 pb-10 ">
            <div class="flex flex-row items-center justify-center">
              <div class="flex-1"></div>

              <p class="flex-1 lg:text-subheader text-sm text-[#A8A8A8] font-syne "> Item </p>

              <p class="flex-1 lg:text-subheader text-sm text-[#A8A8A8] font-syne text-center"> Quantity </p>

              <p class="flex-1 lg:text-subheader text-sm text-[#A8A8A8] font-syne text-center"> Total Price </p>
            </div>

            {products &&
              products.map((product, i) => {
                return product.variations.map((variation, j) => (
                  <CartCard key={variation._id} product={variation} stock={variation.stock} index={i}></CartCard>
                ));
              })}

            <div class="flex flex-row">
              <div class="flex flex-[75%] items-center justify-center">
              </div>

              <div class="flex flex-col flex-[25%] justify-center">
                <p class="text-center lg:text-2xl text-lg font-syne">Subtotal: ${state.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[100%] h-fit z-10">
          <div class="flex flex-row">
            <div class="flex lg:flex-[75%] flex-[66%] items-center justify-center">
            </div>
            <div class="flex flex-col lg:flex-[25%] flex-[33%] items-center justify-center">
              <button onClick={postOrder}
                type="button" class="mt-10 w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <p class="flex-1 lg:text-2xl text-sm font-syne text-center"> Check Out </p>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Cart
