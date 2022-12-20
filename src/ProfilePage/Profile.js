import React, { useState, useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import UserWorkshop from './UserWorkshop';
import UserLogin from '../Authentication/UserLogin';
import OrderTable from '../Marketplace/OrderTable';
import studentSevice from '../services/students';
import { ReactComponent as PurpleGreenSVG } from './SVG/Group 1.svg';
import Logout from '../Authentication/Logout';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';

// create animations https://www.youtube.com/watch?v=JcHLxzrsRS4
function Profile() {
  const [profile, setProfile] = useState(null);
  const [auth, setAuth] = useState(true);

  // console.log(profile);
  // console.log(auth);

  useEffect(() => {
    async function fetchProfileData() {
      const res = await trackPromise(studentSevice.getUser());
      if (res.status === 200) {
        setProfile(res.data);
      } else {
        setAuth(false);
      }
    }
    fetchProfileData();
  }, [auth]);

  const handleLoginClose = () => {
    setAuth(true);
  };

  return (
    <div>
      <LoadingSpinnerComponent />
      {!auth && <UserLogin parentCallback={handleLoginClose} isOpen={true}  />}
      {/* {auth ? (
        <>
          <ProfileHeader
            displayName={profile && profile.displayName}
            image={'ProfilePic.png'}
            email={profile && profile.email}
          />
          <Logout />
          <UserWorkshop
            waitlistedWorkshops={profile && profile.waitlistedWorkshops}
            registeredWorkshops={profile && profile.registeredWorkshops}
          />
          {profile && profile.pastOrders && (
            <OrderTable rows={profile.pastOrders} />
          )}

          <PurpleGreenSVG
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-anchor="#workshopsList"
            style={{
              zIndex: -999,
              top: 800,
              left: 0,
              position: 'absolute',
              overflowY: 'hidden',
            }}
          />
        </>
      ) : null} */}
    </div>
  );
}

export default Profile;
