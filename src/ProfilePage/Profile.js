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
        console.log(profile.registeredWorkshops);
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

  function handelToastCallback() {
    toast("Workshop canceled!");
  }

  return (
    <div class="relative h-fit pt-32 pb-32 min-h-screen bg-NAFPurple bg-cover overflow-hidden bg-center" style={{ backgroundImage: `url(${ProfileBg})` }}>
      <LoadingSpinnerComponent />
      {/* <Modal
        isOpen={!auth}
        onRequestClose={closeModal}
      >
        <SocialLogin />
      </Modal> */}
      {(
        <>
          <ProfileHeader
            displayName={profile && profile.displayName}
          />

          {
            <UserWorkshop
              handelToastCallback={handelToastCallback}
              waitlistedWorkshops={profile.waitlistedWorkshops}
              registeredWorkshops={profile.registeredWorkshops}
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
