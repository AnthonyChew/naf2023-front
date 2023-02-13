import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MarketPlaceLogo from './svgs/marketplace/MarketPlaceLogo.png'
import Modal from 'react-modal';
import productService from '../services/products';
import { addProductToCart } from '../reducer/CartReducer';
import { trackPromise } from 'react-promise-tracker';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import FocusedImage from '../SharedPages/FocusImage.js';
import EventHeader from '../Events/EventHeader'
import NoImage from '../SharedPages/svgs/NOIMG.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-fade';
import AppleHeader from '../SharedPages/AppleHeader';
import SearchBar from './SearchBar';
import Filter from './Filter';
import Quantity from '../utils/Quantity';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import OrangeDot from './svgs/marketplace/OrangeDot.svg';
import WhiteDot from './svgs/marketplace/WhiteDot.svg';
import PurpleDot from './svgs/marketplace/PurpleDot.svg';
import BlueDot from './svgs/marketplace/BlueDot.svg';

import TopRightPurpleStar from './svgs/marketplace/TopRightPurpleStar.svg';
import TopRightYellowStar from './svgs/marketplace/TopRightYellowStar.svg';

import TopLeftBlueStar from './svgs/marketplace/TopLeftBlueStar.svg';
import TopLeftYellowStar from './svgs/marketplace/TopLeftYellowStar.svg';


import MiddleLeftYellowStar from './svgs/marketplace/MiddleLeftYellowStar.svg';

import MiddleRightYellowStar from './svgs/marketplace/MiddleRightYellowStar.svg';
import MiddleRightPurpleStar from './svgs/marketplace/MiddleRightPurpleStar.svg';

import MiddleBlueStar from './svgs/marketplace/MiddleBlueStar.svg';
import MiddleOrangeStar from './svgs/marketplace/MiddleOrangeStar.svg';


import BottomLeftBlueStar from './svgs/marketplace/BottomLeftBlueStar.svg';
import BottomRightOrangeStar from './svgs/marketplace/BottomRightOrangeStar.svg';
import BottomRightPurpleStar from './svgs/marketplace/BottomRightPurpleStar.svg';
import BottomRightYellowStar from './svgs/marketplace/BottomRightYellowStar.svg';
import BottomMiddlePurpleStar from './svgs/marketplace/BottomMiddlePurpleStar.svg';


const MarketPlaceLanding = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [oneproduct, setOneProduct] = useState({ images: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setpageNumbers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [filterOptions, setFilterOptions] = useState([1, 2]);

  // No of Records to be displayed on each page   
  const [recordsPerPage] = useState(15);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [confirmationIsOpen, setConfirmationIsOpen] = useState(false);

  const [colour, setColour] = useState();
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);

  const [productError, setProductError] = useState(false);

  function handleColorChoice(e) {
    //console.log(e);
    setColour(e.target.value);
  }

  function handleSizeChoice(e) {
    //console.log(e);
    setSize(e.target.value);
  }

  const state = useSelector((state) => {
    // console.log(state);
    return state;
  });


  const product = state.addedProducts;
  const dispatch = useDispatch();

  function handleAddProduct(e) {
    //console.log(oneproduct);
    const newProduct = {
      ...product,
      _id: oneproduct._id,
      name: oneproduct.name,
      price: oneproduct.price,
      description: oneproduct.description,
      canCollect: oneproduct.canCollect,
      canDeliver: oneproduct.canDeliver,
      category: oneproduct.category,
      attribute1: oneproduct.attribute1,
      attribute2: oneproduct.attribute2,
      date_uploaded: oneproduct.date_uploaded,
      leadTime: oneproduct.leadTime,
      vendorId: oneproduct.vendorId,
      vendorName: oneproduct.vendorName,
      vendorSurcharge: oneproduct.vendorSurcharge <= 0 ? 0 : oneproduct.vendorSurcharge,
      image: oneproduct.images.length > 0 ? oneproduct.images[0] : null,
      quantity: parseInt(quantity),
      stock: oneproduct.quantity,
      colour: colour,
      size: size,
      colours: oneproduct.colours,
      sizes: oneproduct.sizes,
    };
    delete newProduct['images'];
    delete newProduct['description'];
    delete newProduct['quantitySold'];
    //console.log(newProduct);
    dispatch(addProductToCart(newProduct));

    setColour();
    setSize();
    setQuantity(1);
    setProductError(false);
    closeConfirmation();
    setIsOpen(false);
    toast("Added to cart!");
  }



  const nextPage = () => {
    if (currentPage !== totalPages) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }
  // initial product load view
  useEffect(() => {
    async function fetchData() {
      let res;
      res = await trackPromise(productService.getAllProducts());
      if (res.status === 200) {
        // console.log(res.data)
        setProducts(res.data); // current products
        setAllProducts(res.data); // reusable all products
        updatePagination(res.data);
      }
    }
    fetchData();
  }, []);

  const allProductsInCart = useSelector((state) => {
    return state.addedProducts;
  });

  //everytime filter or search, update products view
  useEffect(() => {
    var newProducts = allproducts.filter(oneItem => oneItem.name.includes(searchValue))
    if (filterOptions.length > 0) {
      newProducts = newProducts.filter(oneItem => filterOptions.includes(oneItem.category))
    }
    setProducts(newProducts)
    updatePagination(newProducts)


  }, [searchValue, filterOptions]);

  function updatePagination(data) {
    var totalpages = Math.ceil(data.length / recordsPerPage);
    setTotalPages(totalpages)
    setpageNumbers([...Array(totalpages + 1).keys()].slice(1))
  }

  function openModal(oneItem) {
    //console.log(oneItem);
    setOneProduct(oneItem);
    setIsOpen(true);
    setColour();
    setSize();
  }

  function handleConfirmationModal() {
    if (quantity === 0) {
      setProductError("Please select quantity!");
    }
    if (oneproduct.attribute1 && colour === undefined) {
      setProductError("Please select attribute 1!");
      return;
    }
    if (oneproduct.attribute2 && size === undefined) {
      setProductError("Please select attribute 2!");
      return;
    }
    setConfirmationIsOpen(true);
  }

  function closeModal(e) {
    //console.log(e.target.id);
    if (e == "modal-outside") {
      setIsOpen(false);
    }
    else if (e.target.id == "modal-outside") {
      setIsOpen(false);
    }
  }

  function closeConfirmation() {
    setConfirmationIsOpen(false);
  }

  document.body.style.overflow = 'unset';
  return (
    <div class="bg-NAFPink bg-cover min-h-screen relative overflow-hidden">

      <img src={TopLeftBlueStar} class="absolute top-[-5%] left-[5%]"></img>
      <img src={TopLeftYellowStar} class="absolute top-[4%] left-[0%]"></img>



      <img src={TopRightPurpleStar} class="absolute top-[-7%] right-[0%]"></img>
      <img src={TopRightYellowStar} class="absolute top-[8%] right-[17%]"></img>
      <img src={WhiteDot} class="absolute top-[1%] right-[20%]"></img>


      <img src={MiddleOrangeStar} class="absolute top-[34%] right-[20%]"></img>
      <img src={BlueDot} class="absolute top-[34%] right-[40%]"></img>
      <img src={OrangeDot} class="absolute top-[55%] left-[30%]"></img>


      <img src={MiddleLeftYellowStar} class="absolute top-[61%] left-[0%]"></img>

      <img src={MiddleRightPurpleStar} class="absolute top-[48%] right-[0%]"></img>
      <img src={MiddleRightYellowStar} class="absolute top-[69%] right-[0%]"></img>

      <img src={BottomLeftBlueStar} class="absolute bottom-[-3%] left-[0%]"></img>
      <img src={BottomMiddlePurpleStar} class="hidden md:block absolute bottom-[10%] left-[20%]"></img>

      <img src={BottomRightPurpleStar} class="absolute bottom-[13%] right-[5%]"></img>
      <img src={WhiteDot} class="absolute bottom-[13%] right-[21%]"></img>

      <img src={BottomRightYellowStar} class="absolute bottom-[4%] right-[30%]"></img>
      <img src={BottomRightOrangeStar} class="absolute bottom-[-4%] right-[0%]"></img>

      <div class='md:w-[80%] mx-auto relative'>
        <EventHeader headerStyle='mt-4 mb-4' img={MarketPlaceLogo} text="NAF Arts Market is a creative and craftswork bazaar meant to show off the artistry of local students and expose NTU to various art mediums!"></EventHeader>

        {/* filter and search button */}
        <div class="flex lg:justify-between lg:mb-20 lg:mx-32 mx-1 flex-wrap">
          <SearchBar searchCallback={(searchValue) => setSearchValue(searchValue)} />
          <Filter filterCallback={(filterOptions) => setFilterOptions(filterOptions)}></Filter>
        </div>

        {/* product and ads */}
        <div class="flex font-syne">
          {/* product part */}
          <div class=''>
            <div class=" flex flex-wrap p-5 justify-center">
              {
                products.slice((currentPage * recordsPerPage) - recordsPerPage, currentPage * recordsPerPage).map((oneItem, index) => (
                  <div class="mx-10 my-10 bg-white border-black border-2 grow basis-[15%] max-h-[300px] max-w-[250px] w-[100%] cursor-pointer" onClick={() => openModal(oneItem)}>

                    <div class="w-full min-w-[240px] h-[200px] border-black border-b-2">
                      <FocusedImage class='focused-image' imageSrc={oneItem.images[0] ? oneItem.images[0] : NoImage} x={-0.5} y={0} ></FocusedImage>
                    </div>
                    <div class="oneItem-caption p-1">
                      <div class="text-ellipsis font-bold overflow-hidden whitespace-nowrap text-paragraph_Mobile md:text-paragraph_Desktop">{oneItem.name}</div>
                      <div class=" text-ellipsis overflow-hidden whitespace-nowrap text-paragraph_Mobile md:text-paragraph_Desktop">{oneItem.vendorName}</div>

                      <div class="text-paragraph_Mobile md:text-paragraph_Desktop">${oneItem.price.toFixed(2)}</div>

                    </div>
                  </div>
                ))
              }
            </div>
            {/* Pagination at bottom of page */}
            <div class="w-[100%] text-center my-10">
              {
                pageNumbers.length > 0 ?
                  <nav aria-label="Page navigation example">
                    <ul class="inline-flex -space-x-px list-none">
                      <li>
                        <a href="#" onClick={prevPage} class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-500 dark:bg-gray-800 dark:border-gray-500 dark:text-gray-400 dark:hover:bg-gray-500 dark:hover:text-white">Previous</a>
                      </li>
                      {
                        pageNumbers.map((pgNumber, index) => {
                          return <li>
                            <a href="#" onClick={() => setCurrentPage(pgNumber)} class=""
                              className={`page-item ${currentPage == pgNumber ? 'px-3 py-2 leading-tight text-gray-500 bg-gray-900 border border-gray-500 hover:bg-gray-700 hover:text-white' : 'px-3 py-2 leading-tight text-gray-400 bg-gray-800 border border-gray-500 hover:bg-gray-500 hover:text-white'} `} >
                              {pgNumber}</a>
                          </li>
                        })
                      }

                      <li>
                        <a href="#" onClick={nextPage} class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-500 dark:bg-gray-800 dark:border-gray-500 dark:text-gray-400 dark:hover:bg-gray-500 dark:hover:text-white">Next</a>
                      </li>
                    </ul>
                  </nav> :
                  <></>
              }

            </div>
          </div>


          {/* ad stuff */}
          {/* <div class="basis-1/6 hidden lg:block">
            <div class="w-[200px] h-[500px] bg-gray-500 mr-10">

            </div>
          </div> */}
          {/* Modal */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => closeModal("modal-outside")}
            appElement={document.getElementById('root') || undefined} // weird error if dont add this
            shouldCloseOnOverlayClick={true}
          >
            <div class="w-full h-full overflow-y-auto" onClick={(e) => closeModal(e)} id="modal-outside" >
              <div class="w-[100%] md:w-[70%] mx-auto " >
                <div class="shadow-lg relative pointer-events-auto bg-white bg-clip-padding border-4 border-black" id="modal-box">
                  {/* <AppleHeader /> */}
                  <div class="flex items-center justify-end mb-8 bg-headerGray border-b-4 border-black ">
                    <button class="navbar-close" onClick={() => closeModal("modal-outside")}>
                      <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="modal-body relative p-2 md:p-10 text-center lg:text-left ">
                    <div class="w-[70%] lg:w-[30%] inline-block text-center">
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
                         oneproduct.images[0] ?
                          oneproduct.images.map((oneImg, index) => (
                            <SwiperSlide>
                              <img src={oneImg} alt="" class="max-h-[300px] h-[100%] w-[100%] r" />
                            </SwiperSlide>
                          ))
                          :
                          <SwiperSlide>
                              <img src={NoImage} alt="" class="max-h-[300px] h-[100%] w-[100%] r" />
                            </SwiperSlide>
                        }

                      </Swiper>
                      <div class="text-center mb-10">
                        <div className="swiper-custom-pagination" />
                      </div>
                    </div>  {/* end of left side */}
                    <div class="w-[100%] lg:w-[65%] inline-block align-top lg:ml-5">
                      <div class="font-syneBold text-subheader text-black">{oneproduct.name}</div>
                      <div class="font-syneBold text-paragraph_Mobile md:text-paragraph_Desktop text-NAFPink">{oneproduct.vendorName}</div>
                      <div class='flex flex-col mt-5'>
                        <div class="font-syneBold text-paragraph_Mobile md:text-paragraph_Desktop text-black ">{oneproduct.attribute1}:</div>
                        {oneproduct.colours && <ul class="flex w-full flex-wrap">
                          {oneproduct.colours.map((colour, index) => {
                            return (
                              <li class="mx-2  my-2 min-w-[50px] list-none">
                                <input type="radio" id={colour} name="colour" value={colour} onClick={handleColorChoice} required class="hidden peer" />
                                <label for={colour} class="inline-flex justify-between items-center p-3 w-full text-white bg-gray-400 rounded-lg border border-black cursor-pointer peer-checked:bg-NAFPurple">
                                  <div class="block text-center w-[100%]">
                                    <div class="w-full font-syne md:text-buttonText_Desktop text-buttonText_Mobile">{colour}</div>
                                  </div>
                                </label>
                              </li>
                            )
                          })}
                        </ul>}
                      </div>
                      {oneproduct.attribute2 &&
                        <div class='flex flex-col mt-5'>
                          <div class="font-syneBold text-paragraph_Mobile md:text-paragraph_Desktop text-black">{oneproduct.attribute2}:</div>
                          <ul class="flex w-full flex-wrap">
                            {oneproduct.sizes.map((sizes, index) => {
                              return (
                                <li class="mx-2 my-2 min-w-[50px] list-none">
                                  <input type="radio" id={sizes} name="sizes" value={sizes} onClick={handleSizeChoice} required class="hidden peer" />
                                  <label for={sizes} class="inline-flex justify-between items-center p-3 w-full text-white bg-gray-400 rounded-lg border border-black cursor-pointer peer-checked:bg-NAFPurple">
                                    <div class="block text-center w-[100%]">
                                      <div class="w-full text-m font-syne  md:text-buttonText_Desktop text-buttonText_Mobile">{sizes}</div>
                                    </div>
                                  </label>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      }

                      <div class="flex my-5 gap-5 flex-wrap justify-center md:justify-between lg:justify-start">
                        <div class="relative border-2 border-black w-[70%] md:w-auto">
                          <p class="absolute -top-[40%] left-[5%] bg-white font-syne ">Quantity</p>
                          <Quantity class="basis-1/3 mr-3" quantity={quantity} changeState={(type) => setQuantity(type)} />
                        </div>
                        <div class="w-[70%] md:w-auto">
                          <button type="button" onClick={handleConfirmationModal}
                            class="inline-block px-6 py-2.5 w-[100%] md:w-auto font-syne bg-NAFPink h-[40px] text-white font-medium md:text-buttonText_Desktop text-buttonText_Mobile leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                            disabled={oneproduct.quantity <= 0 ? true : false}>
                            Add to Cart
                          </button>
                        </div>
                        {oneproduct.quantity <= 0 ? <p class="text-red-500">Product out of stock</p> : null}
                        {productError && <p class="text-red-500">{productError}</p>}

                        <Modal
                          isOpen={confirmationIsOpen}
                          onRequestClose={closeConfirmation}
                          shouldCloseOnOverlayClick={true}
                        >
                          <div class="w-full h-full" onClick={(e) => closeModal(e)} id="confirmation" >
                            <div class="w-fit mx-auto translate-y-[100%] md:translate-y-[200%] " >
                              <div class=" border-none shadow-lg relative pointer-events-auto w-fit bg-white bg-clip-padding rounded-md outline-none p-5 overflow-y-auto" id="modal-box">
                                <p class="font-syne text-subheader text-black">Add product</p>
                                <p class='mb-5 font-syne text-paragraph_Mobile md:text-paragraph_Desktop'>Do you want to add {oneproduct.name} {oneproduct.attribute1 && oneproduct.attribute1}:{colour} {oneproduct.attribute2 && oneproduct.attribute2}:{size} x{quantity} into cart?</p>
                                <div class='flex flex-row justify-end gap-2'>
                                  <button onClick={closeConfirmation}
                                    class="inline-block px-6 py-2.5 font-syne bg-gray-600 h-[40px] text-white md:text-buttonText_Desktop text-buttonText_Mobile leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                                    No
                                  </button>
                                  <button type="button" onClick={handleAddProduct}
                                    class="inline-block px-6 py-2.5 font-syne bg-blue-600 h-[40px] text-white md:text-buttonText_Desktop md:text-buttonText_Mobile leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                                    Yes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Modal>
                      </div>
                      <div class="font-syne text-black mt-5">
                        <div class="mb-3 font-syne text-subheader">Product details</div>
                        <hr class="h-px border-black  border-2 bg-black"></hr>
                        <div class="mt-3 font-syne text-paragraph_Mobile md:text-paragraph_Desktop">{oneproduct.description}</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </Modal>
          <ToastContainer position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick />
        </div>
      </div>
    </div>
  )
}


export default MarketPlaceLanding