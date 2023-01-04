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
import { useIsMount } from '../utils/isMount';

const MarketPlaceLanding = () => {
  const isMount = useIsMount();
  const [allproducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const [oneproduct, setOneProduct] = useState({ images: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setpageNumbers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const [searchValue, setSearchValue] = useState('');
  const [filterOptions, setFilterOptions] = useState([1, 2]);


  // No of Records to be displayed on each page   
  const [recordsPerPage] = useState(10);

  const [modalIsOpen, setIsOpen] = useState(false);

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
    console.log(quantity)
    if (quantity === undefined) {
      setProductError("Please select quantity!");
    }
    if (oneproduct.attribute1 !== null) {
      if (colour === undefined) {
        setProductError("Please select attribute 1!");
        return;
      }
    }
    else {
      if (colour === undefined) {
        setProductError("Please select attribute 1!");
        return;
      }
      if (size === undefined) {
        setProductError("Please select attribute 2!");
        return;
      }
    }
    // console.log('ADD TO CART');
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
  }

  const nextPage = () => {
    if (currentPage !== totalPages) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  useEffect(() => {
    async function fetchData() {
      let res;
      res = await trackPromise(productService.getAllProducts());
      if (res.status === 200) {
        console.log(res.data)
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

  function closeModal(e) {
    //console.log(e.target.id);
    if (e.target.id == "modal-outside") {
      setIsOpen(false);
    }
  }

  return (
    <div class="bg-NAFPink bg-cover min-h-screen relative overflow-hidden">
      <div class="flex relative flex-col items-center">
        <img class="my-10" src={MarketPlaceLogo}></img>
        <div class="font-syne w-[60%] text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
      </div>
      {/* button */}
      <div class="flex justify-between m-10">
        <SearchBar searchCallback={(searchValue) => setSearchValue(searchValue)} />
        <Filter filterCallback={(filterOptions) => setFilterOptions(filterOptions)}></Filter>
      </div>

      {/* product and ads */}
      <div class="flex font-syne">
        <div class="basis-5/6">
          <div class=" flex flex-wrap">
            {

              products.slice((currentPage * recordsPerPage) - recordsPerPage, currentPage * recordsPerPage).map((oneItem, index) => (
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
            {
              pageNumbers.length > 0 ?
                <nav aria-label="Page navigation example">
                  <ul class="inline-flex -space-x-px">
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
        <div class="basis-1/6">
          <div class="w-[200px] h-[500px] bg-gray-500 mr-10">
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        closeTimeoutMS={200}
        onRequestClose={() => closeModal("modal-outside")}
        shouldCloseOnOverlayClick={true}
      >
        <div class="w-full h-full" onClick={(e) => closeModal(e)} id="modal-outside" >
          <div class="w-[70%] mx-auto translate-y-[30%]" >
            <div class=" border-none shadow-lg relative pointer-events-auto bg-white bg-clip-padding rounded-md outline-none" id="modal-box">
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
                  {oneproduct.colours && <ul class="grid gap-6 w-full md:grid-cols-8 mt-5">
                    {oneproduct.colours.map((colour, index) => {
                      return (
                        <li>
                          <input type="radio" id={colour} name="colour" value={colour} onClick={handleColorChoice} required class="hidden peer" />
                          <label for={colour} class="inline-flex justify-between items-center p-3 w-full text-white bg-gray-400 rounded-lg border border-black cursor-pointer peer-checked:bg-NAFPurple">
                            <div class="block text-center w-[100%]">
                              <div class="w-full text-m font-semibold">{colour}</div>
                            </div>
                          </label>
                        </li>
                      )
                    })}
                  </ul>}

                  {oneproduct.sizes && <ul class="grid gap-6 w-full md:grid-cols-8 mt-5">
                    {oneproduct.sizes.map((sizes, index) => {
                      return (
                        <li>
                          <input type="radio" id={sizes} name="sizes" value={sizes} onClick={handleSizeChoice} required class="hidden peer" />
                          <label for={sizes} class="inline-flex justify-between items-center p-3 w-full text-white bg-gray-400 rounded-lg border border-black cursor-pointer peer-checked:bg-NAFPurple">
                            <div class="block text-center w-[100%]">
                              <div class="w-full text-m font-semibold">{sizes}</div>
                            </div>
                          </label>
                        </li>
                      )
                    })}
                  </ul>}

                  <div class="flex my-5 gap-5">
                    <div class="relative border-2 border-black">
                      <p class="absolute -top-[40%] left-[5%] bg-white font-syne ">Quantity</p>
                      <Quantity class="basis-1/3 mr-3" quantity={quantity} changeState={(type) => setQuantity(type)} />
                    </div>
                    <div>
                      <button type="button" onClick={handleAddProduct}
                        class="inline-block px-6 py-2.5 bg-blue-600 h-[40px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                        Add to Cart
                      </button>
                    </div>
                    {productError && <p class="text-red-500">{productError}</p>}
                  </div>
                  <div class="font-syne text-black mt-5">
                    <div class="mb-3 font-semibold">Product details</div>
                    <hr class="h-px border-black  border-2 bg-black"></hr>
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