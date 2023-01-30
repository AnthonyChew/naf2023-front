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
        console.log(res.data)
        setAllImages(res.data.filter(image => image.workShopName.includes("Picrew")));
      }
    }
    fetchAllImage();
  }, []);

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

    const newImage = new FormData();
    if (images) {
      newImage.append('workShopName', JSON.stringify('Picrew'));
      newImage.append('verified', JSON.stringify(false));
      newImage.append('newImages', images[0]);
      newImage.append('images', JSON.stringify([]));
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
    <div class="relative bg-NAFBlue pb-20">
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
      <EventHeader
        img={GlimmerLogo}
        text="Starting the festival off with a glimmer of what is to come, Glimmer features our publicity booth and an Arts Movie Screening. Participate in Style This In Your Style, where you get to design your own version of our mascot, and learn more about NAF! Pop by our Arts Movie Screening to catch a movie"
      ></EventHeader>
      <div class="flex w-[85%] mx-auto text-center flex-wrap justify-between">
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="PUBLICITY BOOTH" date="14 to 17 Feb, 11am to 5pm, Concourse area @ South Spine" content="Come down to our publicity booth at Linkway to learn more about our upcoming events!"></EventCard>
        </div>
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="ARTS MOVIE SCREENING" date="24 Feb, 5pm to 10pm, LT1A" content="Join us for a night of unforgettable movies will "></EventCard>
        </div>
      </div>
      <div class="bg-white w-[85%] h-fit mx-auto py-7 border-4 rounded-2xl border-black shadow-[5px_5px_0_0_rgba(0,0,0)] text-center">
        <div class="font-syneExtraBold text-2xl font-bold mt-2">
          CREATE YOUR OWN PICREW
        </div>
        <div className={"w-full mt-3"}>
          <div
            className={
              "w-[80%] lg:w-[30%] mx-auto rounded-lg p-1 bg-NAFBlue text-white"
            }
          >
            8 Feb to 17 Mar, Online
          </div>
        </div>
        {/* add image part here */}
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
        {/* <div class="flex my-5 flex-wrap justify-center">
                {
                    props.imgs.map((img, index) =>
                        <div class="basis-full my-5 md:basis-[40%] lg:basis-[20%] mx-2">
                            <img src={QRCode} class="h-[300px] w-full"></img>
                        </div>
                    )
                }
            </div> */}
        <div className={"mt-3 mx-3 text-md "}>
          Come try out our NAF Picrew, where you'll get to dress up our very own
          NAF mascot in your own custom outfits and share them on social media!
        </div>
        <div>
          <div>
            <div class="flex flex-row pt-[2%] lg:pt-20 pb-20 justify-between mx-3">
              <div class="md:basis-1/2" onClick={fetchProfileData}>
                {profile ? (
                  <button
                    type="button"
                    {...getRootProps()}
                    class="bg-[#F9346C] border-2 lg:border-4 border-black rounded-md font-syneBold text-white p-3 md:p-5 text-lg mr-3 md:mr-0"
                  >
                    UPLOAD YOUR DESIGN
                    <input {...getInputProps()} />
                  </button>
                ) : (
                  <button
                    type="button"
                    class="bg-[#F9346C] border-2 lg:border-4 border-black rounded-md font-syneBold text-white p-3 md:p-5 text-sm lg:text-lg mr-3 md:mr-0"
                  >
                    UPLOAD YOUR DESIGN
                  </button>
                )}
              </div>
              <div class="md:basis-1/2">
                <a class="" href="https://picrew.me/">
                  <button class="bg-[#8F55FF] border-2 lg:border-4 border-black rounded-md font-syneBold text-white p-3 md:p-5 text-sm lg:text-lg">
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
      </div>
    </div>
  );
}

export default Glimmer