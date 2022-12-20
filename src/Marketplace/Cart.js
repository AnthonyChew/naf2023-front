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
import Navbar from '../SharedPages/Navbar';
import Footer from '../SharedPages/Footer';

const Cart = () => {

  const state = useSelector((state) => {
    // console.log(state);
    return state;
  });
  const dispatch = useDispatch();
  const products = state.addedProducts;

  //const total = state.total.toFixed(2);
  var total = 0;
  // const [open, setOpen] = useState(false);
  // const [auth, setAuth] = useState(true);
  //const history = useHistory();

  // const postOrder = async () => {
  //   const res = await authService.checkAuthStudent();
  //   if (res.status === 401) {
  //     setAuth(false);
  //   } else if (res.status === 200) {
  //     history.push('/Payment');
  //   }
  // };

  // const handleLoginClose = () => {
  //   setAuth(true);
  // };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleDialogResult = (continueAction) => {
  //   setOpen(false);
  //   if (continueAction) {
  //     clearCart();
  //   }
  // };

  // const clearCart = () => {
  //   dispatch(resetCart());
  // };

  var arry = [];
  arry.push([99]);

  return (
    <div class="relative min-h-screen bg-NAFPink bg-cover overflow-hidden pt-48 pb-40" style={{ backgroundImage: `url(${CartBg})` }}>
      <img class="absolute top-[11.1%] left-[-0.0395%]" src={LeftTopYellowStar}></img>
      <img class="absolute top-[50%] left-[9.45%]" src={LeftBlueStar}></img>
      <img class="absolute top-[68%] left-[-1%]" src={LeftBottomPurpleStar}></img>
      <img class="absolute top-[2%] right-[5%]" src={RightTopPurpleStar}></img>
      <img class="absolute top-[26.25%] right-[0%] " src={RightBlueStar}></img>
      <img class="absolute top-[90%] right-[0%]" src={BottomRightYellowStar}></img>
      <div class="flex flex-col items-center w-[60%] mr-auto ml-auto">


        <div class="w-[100%] h-fit  border-4 border-black shadow-[20px_20px_0_0_rgba(255,255,0)] z-1">

          <div class="absolute left-[15%] top-28 max-w-[100%] border-4 bg-white border-black shadow-[20px_20px_0_0_rgba(0,113,198)] shadowborder-black">
            <img class="p-5" src={CartWord}></img>
          </div>

          <div class="h-fit bg-white pt-20 pb-10">
            <div class="flex flex-row items-center justify-center">
              <div class="flex-1"></div>

              <p class="flex-1 text-xl text-[#A8A8A8] font-syne "> Item </p>

              <p class="flex-1 text-xl text-[#A8A8A8] font-syne text-center"> Quantity </p>

              <p class="flex-1 text-xl text-[#A8A8A8] font-syne text-center"> Total Price </p>
            </div>

            {products &&
              products.map((product, i) => {
                return product.variations.map((variation, j) => (
                  <CartCard key={variation._id} product={variation} stock={arry} index={i}></CartCard>
                ));
              })}

            <div>
              <div class="flex flex-row">
                <div class="flex flex-[75%] items-center justify-center">
                </div>

                <div class="flex flex-col flex-[25%] justify-center">
                  <p class="text-center text-2xl font-syne">Subtotal: ${state.total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[100%] h-fit">
          <div class="flex flex-row">
            <div class="flex flex-[75%] items-center justify-center">
            </div>
            <div class="flex flex-col flex-[25%] items-center justify-center">
              <button type="button" class="mt-10 w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <p class="flex-1 text-2xl font-syne text-center"> Check Out </p>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Cart
