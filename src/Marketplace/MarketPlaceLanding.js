import React, {useState, useEffect} from 'react'
import MarketPlaceLogo from './svgs/marketplace/MarketPlaceLogo.png'
import Pikachu1 from '../HomePage/svgs/events/pikachu1.png';
import Pikachu2 from '../HomePage/svgs/events/pikachu2.png';

import productService from '../services/products';
import { trackPromise } from 'react-promise-tracker';

const MarketPlaceLanding = () => {
  const [products, setProducts] = useState([]);
  const [vendors, setVendors] = useState([]);
  const featuredVendors = ['NAFOfficial'];

  useEffect(() => {
    async function fetchData() {
      let res;
      res = await trackPromise(productService.getAllProducts());
      if (res.status === 200) {
        console.log("hi" + process.env.REACT_APP_BACKEND_URL)
        console.log(res.data);
        setProducts(res.data);
      }
      // }else {
      //   alert('Error loading products :(');
      // }
      // res = await trackPromise(vendorService.getAllVendors());
      // if (res.status === 200) {
      //   setVendors(res.data);
      // }
      //  else {
      //   alert('Error loading vendors :(');
      // }
      // setLoading(false);
    }
    fetchData();
  }, []);

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
              products.map((oneItem, index) => (
                <div class="mx-10 my-10 grow basis-[15%] max-h-[300px] max-w-[200px] w-[100%]">
                <div class="oneItem-img">
                  <img src={oneItem.images[0]} class="w-[200px] h-[200px]"></img>
                </div>
                <div class="oneItem-caption">
                  <div>Name: {oneItem.name}</div>
                  <div class=" text-ellipsis overflow-hidden whitespace-nowrap">Description: {oneItem.description}</div>

                  <div>Price: ${oneItem.price}</div>

                </div>
              </div>
              ))
            }
            </div>
            

            {/* ad stuff */}
            <div class="basis-1/6">
              <div class="w-[200px] h-[500px] bg-gray-700 mr-10">
              </div>
            </div>
        </div>
    </div>
  )
}

export default MarketPlaceLanding