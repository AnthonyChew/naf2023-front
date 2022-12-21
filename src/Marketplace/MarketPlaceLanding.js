import React, { useState, useEffect } from 'react'
import MarketPlaceLogo from './svgs/marketplace/MarketPlaceLogo.png'
import Pikachu1 from '../HomePage/svgs/events/pikachu1.png';
import Pikachu2 from '../HomePage/svgs/events/pikachu2.png';
import Modal from 'react-modal';
import productService from '../services/products';
import { trackPromise } from 'react-promise-tracker';

import { Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductNameLogo from './svgs/marketplace/ProductNameLogo.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-fade';
import AppleHeader from '../SharedPages/AppleHeader';

const MarketPlaceLanding = () => {
  const [products, setProducts] = useState([]);
  const [oneproduct, setOneProduct] = useState({ images: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setpageNumbers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);


  // No of Records to be displayed on each page   
  const [recordsPerPage] = useState(10);


  const [modalIsOpen, setIsOpen] = useState(false);

  const nextPage = () => {
      if(currentPage !== totalPages) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
      if(currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  useEffect(() => {
    async function fetchData() {
      let res;
      res = await trackPromise(productService.getAllProducts());
      if (res.status === 200) {
        console.log("hi" + process.env.REACT_APP_BACKEND_URL)
        console.log(res.data)
        setProducts(res.data);
        const totalpages = Math.ceil(res.data.length / recordsPerPage);
        setTotalPages(totalpages)
        setpageNumbers([...Array(totalpages + 1).keys()].slice(1))
        console.log(pageNumbers);
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

  function openModal(oneItem) {
    console.log(oneItem);
    setOneProduct(oneItem);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }


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
        <div class="basis-5/6">
          <div class=" flex flex-wrap">
            {
              
              products.slice((currentPage * recordsPerPage) - recordsPerPage,currentPage * recordsPerPage).map((oneItem, index) => (
                <div class="mx-10 my-10 grow basis-[15%] max-h-[300px] max-w-[200px] w-[100%]" onClick={() => openModal(oneItem)}>
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
          <div class="w-[100%] text-center my-10">
            <nav aria-label="Page navigation example">
              <ul class="inline-flex -space-x-px">
                <li>
                  <a href="#" onClick={prevPage}  class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-500 dark:bg-gray-800 dark:border-gray-500 dark:text-gray-400 dark:hover:bg-gray-500 dark:hover:text-white">Previous</a>
                </li>
                {
                  pageNumbers.map((pgNumber,index) => {
                    return <li>
                    <a href="#" onClick={() => setCurrentPage(pgNumber)} class=""
                    className= {`page-item ${currentPage == pgNumber ? 'px-3 py-2 leading-tight text-gray-500 bg-gray-900 border border-gray-500 hover:bg-gray-700 hover:text-white' : 'px-3 py-2 leading-tight text-gray-400 bg-gray-800 border border-gray-500 hover:bg-gray-500 hover:text-white'} `} >
                      {pgNumber}</a>
                  </li>
                  })
                }
               
                <li>
                  <a href="#" onClick={nextPage} class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-500 dark:bg-gray-800 dark:border-gray-500 dark:text-gray-400 dark:hover:bg-gray-500 dark:hover:text-white">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>


        {/* ad stuff */}
        <div class="basis-1/6">
          <div class="w-[200px] h-[500px] bg-gray-500 mr-10">
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        closeTimeoutMS={200}
        onClick={closeModal}
      >
        <div class="w-full h-full" onClick={closeModal}>
          <div class="w-[70%] mx-auto translate-y-[40%]" >
            <div class=" border-none shadow-lg relative pointer-events-auto bg-white bg-clip-padding rounded-md outline-none">
              <AppleHeader />
              <div class="modal-body relative p-10">
                <div class="w-[30%] inline-block ">
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectFade]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{
                      el: '.swiper-custom-pagination',
                      clickable: true,
                      renderBullet: function (index, className) {
                        return '<span class="' + className + '"><img class="pagination-bullet"/></span>';
                      }

                    }}
                    loop={true}
                  >
                    {
                      oneproduct.images.map((oneImg, index) => (
                        <SwiperSlide>
                          <img src={oneImg} alt="" class="max-h-[300px] h-[100%] w-[100%] r" />
                        </SwiperSlide>
                      ))
                    }

                  </Swiper>
                  <div class="text-center mb-10">
                    <div className="swiper-custom-pagination" />
                  </div>
                </div>  {/* end of left side */}
                <div class="w-[65%] inline-block align-top ml-10">
                  <div class="font-yerkItalic text-xl text-black">{oneproduct.name}</div>
                  <div class="mt-5">
                    <button type="button"
                      class="inline-block px-6 py-2.5 bg-gray-300 text-black border-solid border-2 border-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                    >
                      XS
                    </button>
                    <button type="button"
                      class="inline-block px-6 py-2.5 bg-gray-300 text-black border-solid border-2 border-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                    >
                      S
                    </button>
                    <button type="button"
                      class="inline-block px-6 py-2.5 bg-gray-300 text-black border-solid border-2 border-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                    >
                      M
                    </button>
                  </div>
                  <div class="flex my-5">
                    <div class="basis-1/3 mr-3">
                      <select id="countries" class="bg-gray-50 border border-gray-300 h-[40px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div class="basis-1/3">
                      <button type="button"
                        class="inline-block px-6 py-2.5 bg-blue-600 h-[40px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div class="font-syne text-black mt-5">
                    <div class="mb-3 font-semibold">Product details</div>
                    <hr class="h-px border-black  border-2"></hr>
                    <div class="mt-3">{oneproduct.description}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default MarketPlaceLanding