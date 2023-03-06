import React, { useState, useEffect, useRef } from 'react';
import ProfileHeader from './ProfileHeader';
import UserWorkshop from './UserWorkshop';
import OrderTable from '../Marketplace/OrderTable';
import studentSevice from '../services/students';
import Logout from '../Authentication/Logout';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import ProfileBg from './svgs/profilebg.svg'
import Modal from 'react-modal';
import SocialLogin from '../Authentication/SocialLogin'
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MiddleLeftPinkStart from './svgs/MiddleLeftPinkStar.svg';
import MiddleLeftYellowSparkle from './svgs/MiddleLeftYellowSparkle.svg';
import MiddleRightBlueDot from './svgs/MiddleRightBlueDot.svg';
import MiddleRightWhiteSparkle from './svgs/MiddleRightWhiteSparkle.svg';
import MiddleRightYellowSparkle from './svgs/MiddleRightYellowSparkle.svg';

import TopLeftBlueSparkle from './svgs/TopLeftBlueSparkle.svg';
import TopLeftOrangeStar from './svgs/TopLeftOrangeStar.svg';
import TopLeftYellowStar from './svgs/TopLeftYellowStar.svg';
import TopRightBlueSparkle from './svgs/TopRightBlueSparkle.svg';
import TopRightPinkStar from './svgs/TopRightPinkStar.svg';
import TopRightYellowSparkle from './svgs/TopRightYellowSparkle.svg';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [auth, setAuth] = useState(null);
  const [annoucment, setAnnoucment] = useState(false);
  // console.log(profile);
  // console.log(auth);

  useEffect(() => {
    async function fetchProfileData() {
      const res = await trackPromise(studentSevice.getUser());
      if (res.status === 200) {
        setProfile(res.data);
        setAuth(true);
        setAnnoucment(true);
        // console.log(res.data);
      }
      else {
        setAuth(false);
      }
    }
    Modal.setAppElement('body');
    fetchProfileData();
  }, [auth]);

  function closeModal() {
    setAuth(true);
    setAnnoucment(false);
  }

  function parentReturnCallBack() {
    document.body.style.overflow = 'unset';
    history(-1);
  }

  function handelToastCallback(data) {
    toast(data);
  }

  useEffect(() => {
    if (!auth) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [auth]);

  let history = useNavigate();

  return (
    <div class="relative h-fit pt-32 pb-32 min-h-screen bg-NAFPurple bg-cover overflow-hidden bg-center" style={{ backgroundImage: `url(${ProfileBg})` }}>

      <img class='absolute left-[0%] top-[60%] lg:block hidden' src={MiddleLeftPinkStart} />
      <img class='absolute left-[15%] top-[70%]' src={MiddleLeftYellowSparkle} />
      <img class='absolute left-[15%] top-[50%] lg:block hidden' src={TopLeftBlueSparkle} />
      <img class='absolute left-[5%] top-[0%]' src={TopLeftOrangeStar} />
      <img class='absolute left-[0%] top-[20%] lg:block hidden' src={TopLeftYellowStar} />

      <img class='absolute right-[5%] top-[85%] lg:block hidden' src={MiddleRightBlueDot} />
      <img class='absolute right-[15%] top-[78%]' src={MiddleRightWhiteSparkle} />
      <img class='absolute right-[5%] top-[70%]' src={MiddleRightYellowSparkle} />
      <img class='absolute right-[5%] top-[8%] lg:block hidden' src={TopRightBlueSparkle} />
      <img class='absolute right-[0%] top-[30%] lg:block hidden' src={TopRightPinkStar} />
      <img class='absolute right-[15%] top-[20%]' src={TopRightYellowSparkle} />

      <LoadingSpinnerComponent />
      <Modal
        isOpen={!auth}
        onRequestClose={closeModal}
      >
        <SocialLogin parentReturnCallBack={parentReturnCallBack} />
      </Modal>
      <Modal isOpen={annoucment}
        onRequestClose={closeModal}
      >
        <div h-full class="h-full flex flex-col justify-center">
          <div class="flex flex-col items-center justify-center bg-white p-5 gap-8 border-4 border-black rounded-lg">
            <p class="text-subheader font-syneExtraBold mb-2 ">Annoucment!</p>
            <p class='font-syne md:text-paragraph_Desktop text-paragraph_Mobile'>
              Workshops registration period has ended.<br />
              If you wish to cancel your workshops, please reach out to Aida at @hahahello on Telegram.<br />
              Please also note that you may no longer be eligible for a refund. Thank you!
            </p>
            <button class="bg-NAFPurple rounded-md px-1 lg:px-2 py-3 lg:py-1 font-syne md:text-buttonText_Desktop text-buttonText_Mobile text-white z-20  hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out border-black border-2 self-center"
              onClick={() => closeModal()}>
              Ok</button>
          </div>
        </div>
      </Modal>
      {profile && (
        <>
          <ProfileHeader
            displayName={profile && profile.displayName}
          />

          {
            <UserWorkshop
              handelToastCallback={handelToastCallback}
              waitlistedWorkshops={profile && profile.waitlistedWorkshops}
              registeredWorkshops={profile && profile.registeredWorkshops}
              _id={profile && profile._id}
            />
          }
          {
            profile && profile.pastOrders && (
              <OrderTable pastOrders={profile.pastOrders} />)
          }

          <Logout />

          <ToastContainer position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick />
        </>
      )}
    </div>
  );
}

export default Profile;
