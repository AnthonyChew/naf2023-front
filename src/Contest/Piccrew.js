import React, { useState, useEffect } from 'react'
import Header from './svgs/Header.png'
import Image from './svgs/Image.svg'
import { useDropzone } from 'react-dropzone';
import { trackPromise } from 'react-promise-tracker';
import imageService from '../services/images';
import Modal from 'react-modal';
import config from '../config/env';
import studentSevice from '../services/students';
import { useNavigate } from 'react-router-dom';

import googleSignIn from '../Marketplace/svgs/google_signin.jpg';

import TopLeftPinkStar from './svgs/TopLeftPinkStar.svg'
import TopRightPurpleStar from './svgs/TopRightPurpleStar.svg'
import MiddleYellowStar from './svgs/MiddleYellowStar.svg'
import BottomLeftWhiteStar from './svgs/BottomLeftWhiteStar.svg'
import BottomRightPinkStar from './svgs/BottomRightPinkStar.svg'
import BottomRightPurpleStar from './svgs/BottomRightPurpleStar.svg'

import WhiteDot from './svgs/WhiteDot.svg'
import YellowDot from './svgs/YellowDot.svg'

import AppleHeader from '../SharedPages/AppleHeader'

import { Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-fade';

import FileUploader from './FileUploader'

const Piccrew = () => {

  const [images, setImages] = useState([]);
  const [auth, setAuth] = useState(true);
  const [profile, setProfile] = useState(null);
  const [allImages, setAllImages] = useState(null);
  //allImages = [{"id": sdada, "images": ["asdadas"]},{"id": sdada, "images": ["asdadas"]},{"id": sdada, "images": ["asdadas"]},{"id": sdada, "images": ["asdadas"]}, ]
  const handleLoginClose = () => {
    setAuth(true);
  };

  useEffect(() => {
    async function fetchAllImage() {
      const res = await trackPromise(imageService.getAllImages());
      if (res.status === 200) {
        console.log(res.data)
        setAllImages(res.data.filter(image => image.workShopName.includes('Picrew')));
      }
    }
    fetchAllImage();
  }, []);

  // useEffect(() => {
  //   async function fetchProfileData() {
  //     const res = await trackPromise(studentSevice.getUser());
  //     if (res.status === 200) {
  //       setProfile(res.data);
  //       setAuth(true);
  //     }
  //     else {
  //       setAuth(false);
  //     }
  //   }
  //   fetchProfileData();
  // }, [auth]);

  const fetchProfileData = async () => {
    const res = await trackPromise(studentSevice.getUser());
    if (res.status === 200) {
      setProfile(res.data);
      setAuth(true);
    }
    else {
      setAuth(false);
    }
  }

  const handleSubmit = async () => {

    // console.log('POSTING', state);
    const newImage = new FormData();
    if (images) {
      newImage.append('workShopName', JSON.stringify('Picrew'));
      newImage.append('verified', JSON.stringify(false));
      newImage.append('newImages', images[0]);
      newImage.append('images', JSON.stringify([]));

      // console.log(images);
      let res;
      res = await trackPromise(imageService.addImages(newImage));

      if (res.status === 200) {
        console.log("image uploaded");
      } else {
        if (res.status === 400) {
          alert(res.data.validation.body.message);
        } else if (res.status === 413) {
          alert('Your photos are too large! Maximum of 3 MB total!');
        } else if (res.status === 401) {
          alert(
            `Error code: ${res.status} unauthorized user, error: ${res.data.error}`
          );
        } else {
          alert(`Error code: ${res.status}, error: ${res.data}`);
        }
      }
    }
    // console.log('REALLY POSTING NOW');
    // for (var [key, value] of newProduct.entries()) {
    //   console.log(key);
    //   console.log(value);
    // }
  };

  const history = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.jpeg', '.png']
    },
    onDrop: (acceptedFiles) => {
      let allFiles = images;
      acceptedFiles.forEach((file) => allFiles.push(file));

      setImages(
        allFiles.map((file) =>
          typeof file.name === 'string'
            ? Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
            : file
        )
      );
      handleSubmit();
      setImages([]);
      toast("Image uploaded! Please wait for admin to verify");
    },
    multiple: false
  });

  const googleUrl = `${config.backendUrl}/api/auth/google/login/`;

  return (
    <div class="relative bg-[#0071C6] overflow-hidden">

      <Modal
        isOpen={!auth}
        onRequestClose={handleLoginClose}
      >
        <div h-full class="h-full flex flex-col items-center justify-center">
          <div class="flex flex-col items-center justify-center bg-white p-5 gap-8 border-4 border-black rounded-lg">
            <button type="button" class="w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleLoginClose}>
              <p class="flex-1 text-2xl font-syne text-center"> Close </p>
            </button>

            <a href={googleUrl}>
              <img
                src={googleSignIn}

                alt="Sign up and Login with Google"
                class="max-w-[300px] w-full text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              />
            </a>
          </div>
        </div>
      </Modal>

      {/* Star SVGs */}
      <img src={TopLeftPinkStar} class="absolute w-1/4 lg:w-1/6 top-[10%] lg:top-[5%] -left-20 lg:-left-20"></img>
      <img src={TopRightPurpleStar} class="absolute w-1/6 lg:w-1/6 top-[-8%] right-20 lg:right-20"></img>
      <img src={MiddleYellowStar} class="absolute w-1/5 lg:w-1/6 top-[26%] lg:top-[18%] -right-10 lg:-right-18"></img>
      <img src={BottomLeftWhiteStar} class="absolute w-5/12 lg:w-4/12 bottom-[-7%] lg:bottom-[-10%] left-[-17%] lg:left-[-12%] z-10"></img>
      <img src={BottomRightPinkStar} class="absolute w-1/4 lg:w-1/5 bottom-[-10%] right-3 lg:right-10"></img>
      <img src={BottomRightPurpleStar} class="absolute w-1/12 lg:w-1/12 bottom-[10%] lg:bottom-[12%] -right-2 lg:-right-3"></img>

      {/* Dots */}
      <img src={WhiteDot} class="hidden lg:block absolute w-[2%] lg:w-[1.5%] top-[33%] lg:top-[23%] left-20 lg:left-40"></img>
      <img src={YellowDot} class="hidden lg:block absolute w-[2%] lg:w-[1.5%] bottom-[8%] lg:bottom-[3%] left-[15%] lg:left-[15%]"></img>

      {/* Header */}
      <div class='flex flex-col items-center pt-10 pb-5'>
        <img src={Header} class="w-[50%]"></img>
      </div>

      {/* Header Text */}
      <div class='grid place-content-center mx-[15%] py-5 font-syne text-white text-center text-sm lg:text-lg'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia. Mauris a massa sed orci vestibulum pretium. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae lobortis lacus, at vestibulum mi. Mauris aliquet elit sed libero pharetra vestibulum.
      </div>

      {/* Boxes */}
      <div class="hidden lg:block mx-5 lg:mx-10 py-5 lg:py-10"> {/* To alter the margin for flex basis */}
        <div class="flex flex-row">
          <div class="flex basis-1/3 justify-center items-center z-20">
            {/* <img src={Image} class='w-[80%]'></img> */}
            <div class="relative border-solid border-4 border-black w-9/12 shadow-[20px_20px_0_0_rgba(0,0,0)]">
              <AppleHeader></AppleHeader>
              <div class="h-[23em] bg-gray-300 border-solid border-[15px] border-white">
                <div class="flex justify-center flex-col h-full w-full">
                  <p class="font-syne font-bold text-xl text-center text-black">
                    &#60;INSERT PICCREW EXAMPLES HERE FOR USER'S INSPO&#62;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex basis-1/3 justify-center items-center">
            {/* <img src={Image} class='w-[80%]'></img> */}
            <div class="relative border-solid border-4 border-black w-9/12 shadow-[20px_20px_0_0_rgba(0,0,0)]">
              <AppleHeader></AppleHeader>
              <div class="h-[23em] bg-gray-300 border-solid border-[15px] border-white">
                <div class="flex justify-center flex-col h-full w-full">
                  <p class="font-syne font-bold text-xl text-center text-black">
                    &#60;INSERT PICCREW EXAMPLES HERE FOR USER'S INSPO&#62;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex basis-1/3 justify-center items-center z-20"> {/* Setting Z value of outermost div doesnt affect child elements */}
            {/* <img src={Image} class='w-[80%]'></img> */}
            <div class="relative border-solid border-4 border-black w-9/12 shadow-[20px_20px_0_0_rgba(0,0,0)]">
              <AppleHeader></AppleHeader>
              <div class="h-[23em] bg-gray-300 border-solid border-[15px] border-white">
                <div class="flex justify-center flex-col h-full w-full">
                  <p class="font-syne font-bold text-xl text-center text-black">
                    &#60;INSERT PICCREW EXAMPLES HERE FOR USER'S INSPO&#62;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block lg:hidden">
        <div class="w-[80%] h-fit mb-10 mx-auto border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)] bg-white">
          <AppleHeader></AppleHeader>
          <div class="p-7">

            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              pagination={{
                el: '.swiper-custom-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '"><img class="pagination-bullet"/></span>';
                }

              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              loop={true}
            >
              {/* {
                for oneImage in allImages (python)
                allImages.map(oneImage)


                alllimages.map((oneImage) => (
                  <SwiperSlide>
                  <img src={oneImage.images[0]} alt="" />
                  <div class="text-center">Pikachu</div>
                </SwiperSlide>
                ))
              } */}
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
                <div class="text-center">Pikachu</div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
                <div class="text-center">Pikachu</div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
                <div class="text-center">Pikachu</div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div class="text-center mb-10">
        <div className="swiper-custom-pagination" />
      </div>

      {/* Buttons */}
      <div>
        <div >
          <div class="flex flex-row pt-[2%] lg:pt-20 pb-20 lg:pb-40" >
            <div class='flex basis-1/2 justify-end' onClick={fetchProfileData}>
              {
                profile ?
                    <button type='button' {...getRootProps()} class="mr-10 bg-[#F9346C] border-2 lg:border-4 border-black rounded-md px-1 lg:px-10 py-3 lg:py-6 font-syneBold text-sm lg:text-lg text-white z-20">
                      UPLOAD YOUR DESIGN
                      <input {...getInputProps()} />
                    </button>
                  :
                    <button type='button' class="mr-10 bg-[#F9346C] border-2 lg:border-4 border-black rounded-md px-1 lg:px-10 py-3 lg:py-6 font-syneBold text-sm lg:text-lg text-white z-20">
                      UPLOAD YOUR DESIGN
                    </button>
              }
            </div>
            <div class='flex basis-1/2 justify-start'>
              <a class="ml-10" href='https://picrew.me/'>
                <button class="bg-[#8F55FF] border-2 lg:border-4 border-black rounded-md px-1 lg:px-10 py-3 lg:py-6 font-syneBold text-sm lg:text-lg text-white z-20">VISIT OUR PICREW</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick />
    </div>
  )
}

export default Piccrew