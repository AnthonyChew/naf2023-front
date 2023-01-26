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

function Profile() {
  const [profile, setProfile] = useState(null);
  const [auth, setAuth] = useState(null);
  // console.log(profile);
  // console.log(auth);

  useEffect(() => {
    async function fetchProfileData() {
      const res = await trackPromise(studentSevice.getUser());
      if (res.status === 200) {
        setProfile(res.data);
        setAuth(true);
        console.log(profile);
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
      <LoadingSpinnerComponent />
      <Modal
        isOpen={!auth}
        onRequestClose={closeModal}
      >
        <SocialLogin parentReturnCallBack={parentReturnCallBack} />
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
              _id={profile && profile._id["$oid"]}
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
