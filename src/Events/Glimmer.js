import React, { useState, useEffect } from 'react'
import EventCard from './EventCard'
import EventHeader from './EventHeader'
import EventImagesCard from './EventImagesCard'
import GlimmerLogo from './svgs/Glimmer2.png'

import { useDropzone } from 'react-dropzone';
import { trackPromise } from 'react-promise-tracker';
import imageService from '../services/images';
import Modal from 'react-modal';
import config from '../config/env';
import studentSevice from '../services/students';
import { useNavigate } from 'react-router-dom';
import googleSignIn from '../Marketplace/svgs/google_signin.jpg';
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


import TopRightRedStar from './svgs/Glimmer/TopRightRedStar.svg';
import TopRightOrangeStar from './svgs/Glimmer/TopRightOrangeStar.svg';

import TopLeftYellowStar from './svgs/Glimmer/TopLeftYellowStar.svg';
import TopLeftOrangeDot from './svgs/Glimmer/TopLeftOrangeDot.svg';

import MiddleLeftPurpleStar from './svgs/Glimmer/MiddleLeftPurpleStar.svg';
import MiddleLeftRedDot from './svgs/Glimmer/MiddleLeftRedDot.svg';

import MiddleYellowStar from './svgs/Glimmer/MiddleYellowStar.svg';

import BottomLeftWhiteStar from './svgs/Glimmer/BottomLeftWhiteStar.svg';
import BottomRightPurpleStar from './svgs/Glimmer/BottomRightPurpleStar.svg';
import BottomRightOrangeStar from './svgs/Glimmer/BottomRightOrangeStar.svg';
import BottomRightYellowDot from './svgs/Glimmer/BottomRightYellowDot.svg';


const Glimmer = () => {
  const bgcolor = "bg-NAFBlue"
  const imgs = [1, 2, 3, 4]

  const [images, setImages] = useState([]);
  const [auth, setAuth] = useState(true);
  const [profile, setProfile] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const handleLoginClose = () => {
    setAuth(true);
  };

  useEffect(() => {
    async function fetchAllImage() {
      const res = await trackPromise(imageService.getVerifiedImages());
      if (res.status === 200) {
        setAllImages(res.data.filter(image => image.workShopName.includes(config.events.StyleIt)));
      }
    }
    fetchAllImage();
  }, []);

  const fetchProfileData = async () => {
    const res = await trackPromise(studentSevice.getUser());
    if (res.status === 200) {
      //setProfile(res.data);
      setAuth(true);
    }
    else {
      setAuth(false);
    }
  }

  const handleSubmit = async () => {

    const newImage = new FormData();
    if (images) {
      newImage.append('workShopName', JSON.stringify('Picrew'));
      newImage.append('verified', JSON.stringify(false));
      newImage.append('newImages', images[0]);
      newImage.append('images', JSON.stringify([]));
      let res;
      res = await trackPromise(imageService.addImages(newImage));

      if (res.status === 200) {
        //console.log("image uploaded");
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

  document.body.style.overflow = 'unset';
  return (
    <div class="relative bg-NAFBlue pb-20 overflow-hidden">
      <img src={TopRightRedStar} class="hidden lg:block absolute top-[0%] right-[0%]"></img>
      <img src={TopRightOrangeStar} class="hidden md:block absolute top-[0%] right-[15%]"></img>

      <img src={TopLeftYellowStar} class="hidden lg:block absolute top-[-5%] left-[0%]"></img>
      <img src={TopLeftOrangeDot} class="hidden lg:block absolute top-[15%] left-[20%]"></img>

      <img src={MiddleLeftPurpleStar} class="absolute top-[44%] left-[5%]"></img>
      <img src={MiddleLeftRedDot} class="absolute top-[44%] left-[2%]"></img>

      <img src={MiddleYellowStar} class="absolute top-[40%] right-[12%]"></img>
      <img src={BottomLeftWhiteStar} class="hidden lg:block absolute bottom-[-20%] left-[0%]"></img>

      <img src={BottomRightPurpleStar} class="absolute bottom-[-5%] right-[4%]"></img>
      <img src={BottomRightOrangeStar} class="absolute bottom-[10%] right-[0%]"></img>
      <img src={BottomRightYellowDot} class="absolute bottom-[8%] right-[3%]"></img>

      {/* 
            <img src={MiddleRightPurpleStar} class="hidden md:block absolute top-[51%] left-[0%]"></img>

            <img src={BottomLeftOrangeStar} class="hidden md:block absolute bottom-[-3%] left-[0%] w-[15%]"></img>
            <img src={BottomRightRedStar} class="hidden md:block absolute bottom-[10%] right-[0%]"></img> */}
      <Modal isOpen={!auth} onRequestClose={handleLoginClose}>
        <div h-full class="h-full flex flex-col items-center justify-center">
          <div class="flex flex-col items-center justify-center bg-white p-5 gap-8 border-4 border-black rounded-lg">
            <button
              type="button"
              class="w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleLoginClose}
            >
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
      <div class='xl:w-[70%] mx-auto'>
        <EventHeader
          img={GlimmerLogo}
          headerStyle='w-[80%]'
          text="Starting the festival off with a glimmer of what is to come, Glimmer features our publicity booth and an Arts Movie Screening. Participate in Style This In Your Style, where you get to design your own version of our mascot, and learn more about NAF! Pop by our Arts Movie Screening to catch a movie."
        ></EventHeader>
        <div class="flex w-[90%] mx-auto text-center flex-wrap justify-between relative">
          <div class="basis-full lg:basis-[45%]">
            <EventCard bgColor={bgcolor} title="PUBLICITY BOOTH" date={"14 to 17 Feb, 11am to 5pm,\nSkydeck @ North Spine"} content="Come down to our publicity booth at Linkway to learn more about our upcoming events!"></EventCard>
          </div>
          <div class="basis-full lg:basis-[45%]">
            <EventCard bgColor={bgcolor} title="ARTS MOVIE SCREENING" date={"24 Feb, 6:30pm,\nThe Green Space @ North Spine"} content="The Arts Movie Screening will be a free screening showcasing nostalgic, art-related movies done by NTU Professors and students. Join us for a night of unforgettable movies."></EventCard>
          </div>
        </div>

        <div class="relative w-[90%] mx-auto">
          <EventImagesCard bgColor={bgcolor} title="STYLE IT IN YOUR STYLE" date={"14 - 17 February, 11am - 5pm\nSouth Spine"} noOfImgs={[1,2,3,4]} imgs={allImages} content='Think you’ve got what it takes to be our next trendsetter? Embrace your inner fashion guru and design your own version of the NAF mascot following the theme "Starry, Starry Night" for a chance to win awesome prizes!'></EventImagesCard>
        </div>
        {/* <div class="bg-white w-[90%] h-fit mx-auto py-7 border-4 rounded-2xl border-black shadow-[5px_5px_0_0_rgba(0,0,0)] text-center relative">
        <div class="font-syneExtraBold text-2xl font-bold mt-2">
          CREATE YOUR OWN NAF PICREW
        </div>
        <div className={"w-full mt-3"}>
          <div
            class="w-[80%] lg:w-[30%] mx-auto rounded-lg p-1 font-syne bg-NAFBlue text-white"
          >
            8 Feb to 17 Mar<br/>Online
          </div>
        </div>
        <div class="block md:hidden mx-5 my-5">
          <Swiper
            // install Swiper modules
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectCube,
              EffectFade,
            ]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
          >
            {
              // for oneImage in allImages (python)
              // allImages.map(oneImage)

              allImages.map((oneImage) => (
                <SwiperSlide>
                  <img src={oneImage.images[0]} alt="" class="w-[400px]" />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>


        <div class="hidden md:block lg:hidden mx-5 my-5">
          <Swiper
            // install Swiper modules
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectCube,
              EffectFade,
            ]}
            spaceBetween={20}
            slidesPerView={2}
            navigation={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
          >
            {
              // for oneImage in allImages (python)
              // allImages.map(oneImage)

              allImages.map((oneImage) => (
                <SwiperSlide>
                  <img src={oneImage.images[0]} alt="" class="w-[400px]" />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>

        <div class="hidden lg:block mx-5 my-5">
          <Swiper
            // install Swiper modules
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectCube,
              EffectFade,
            ]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
          >
            {
              // for oneImage in allImages (python)
              // allImages.map(oneImage)

              allImages.map((oneImage) => (
                <SwiperSlide>
                  <img src={oneImage.images[0]} alt="" class="w-[400px]" />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div class="mt-3 mx-3 text-md font-syne">
          Come try out our NAF Picrew, where you'll get to dress up our very own
          NAF mascot in your own custom outfits and share them on social media!
        </div>
        <div>
          <div>
            <div class="flex flex-row pt-[2%] lg:pt-20 pb-20 justify-between mx-3 gap-1 md:gap-0">
              <div class="md:basis-1/2" onClick={fetchProfileData}>
                {profile ? (
                  <button
                    type="button"
                    {...getRootProps()}
                    class="bg-[#F9346C] border-2 lg:border-4 border-black rounded-md font-syneBold text-white p-1 md:p-3 text-lg mr-3 md:mr-0"
                  >
                    UPLOAD YOUR DESIGN
                    <input {...getInputProps()} />
                  </button>
                ) : (
                  <button
                    type="button"
                    class="bg-[#F9346C] border-2 lg:border-4 border-black rounded-md font-syneBold text-white p-1 md:p-3 text-sm lg:text-lg mr-3 md:mr-0"
                  >
                    UPLOAD YOUR DESIGN
                  </button>
                )}
              </div>
              <div class="md:basis-1/2">
                <a class="" href="https://picrew.me/">
                  <button class="bg-[#8F55FF] border-2 lg:border-4 border-black rounded-md font-syneBold text-white p-1 md:p-3 text-sm lg:text-lg">
                    VISIT OUR PICREW
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />
      </div> */}
      </div>
    </div>
  );
}

export default Glimmer