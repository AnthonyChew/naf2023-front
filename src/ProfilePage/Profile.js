import React, { useState, useEffect, useRef } from 'react';
import ProfileHeader from './ProfileHeader';
import UserWorkshop from './UserWorkshop';
import UserLogin from '../Authentication/UserLogin';
import OrderTable from '../Marketplace/OrderTable';
import studentSevice from '../services/students';
import Logout from '../Authentication/Logout';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import ProfileBg from './svgs/profilebg.svg'
import SocialLogin from '../Authentication/SocialLogin';
import Modal from 'react-modal';

import ProfileMockData from './profileData.json';
import PurchaseMockDate from './tableData.json';

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
      }
      else {
        setAuth(false);
      }
    }
    Modal.setAppElement('body');
    fetchProfileData();
  }, [auth]);

  function handleParentCallback() {
    setAuth(true);
  }

  return (
    <div class="relative h-fit pt-32 pb-32 min-h-screen bg-NAFPurple bg-cover overflow-hidden bg-center" style={{ backgroundImage: `url(${ProfileBg})` }}>
      <LoadingSpinnerComponent />
      <UserLogin isOpen={!auth} parentCallback={handleParentCallback}/>
      {auth ? (
        <>
          <ProfileHeader
            displayName={profile && profile.displayName}
            image={'ProfilePic.png'}
            email={profile && profile.email}
          />
          {<UserWorkshop
            waitlistedWorkshops={profile && profile.waitlistedWorkshops}
            registeredWorkshops={profile && profile.registeredWorkshops}
          />}
          {
            profile && profile.pastOrders && (
              <OrderTable pastOrders={profile.pastOrders} />
              /*<OrderTable data={PurchaseMockDate} />*/
            )}

          <Logout />
        </>
      ) : null}
    </div>
  );
}

export default Profile;