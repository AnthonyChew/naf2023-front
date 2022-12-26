import React, { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
//import ProductTable from './ProductTable';

import VendorAuth from '../Authentication/VendorLogin';
import vendorService from '../services/vendors';
import ordersService from '../services/orders';
import FileDownload from 'js-file-download';
import Logout from '../Authentication/Logout';
//import EditVendor from './EditVendor';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import Modal from 'react-modal';
import './VendorLoginStyle.css'

function VendorLogin() {
  // const products = useSelector((state) => state.products);
  const [profile, setProfile] = useState(null);
  const [auth, setAuth] = useState(null);
  // console.log(profile);
  const contactNumber = profile && profile.contactNumber;
  const emailAddress = profile && profile.emailAddress;
  const instagramAccount = profile && profile.instagramAccount;
  const website = profile && profile.website;

  useEffect(() => {
    async function fetchProfileData() {
      const res = await trackPromise(vendorService.getVendorProfile());
      console.log(res)
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


  //ADD PRODUCT DIALOG
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setEdit(false);
  };

  function closeModal() {
    setAuth(false);
  }

  //EDIT VENDOR DIALOG
  const [edit, setEdit] = useState(false);

  const editProfile = () => {
    setEdit(true);
  };

  const downloadOrders = async () => {
    const res = await trackPromise(ordersService.downloadOrders());
    if (res.status === 200) {
      FileDownload(res.data, 'orders.csv');
    } else if (res.status === 404) {
      alert('There are no orders to be downloaded.');
    } else {
      alert('There is a problem with downloading orders.');
    }
  };

  return (
    <div class="relative pt-32 pb-32 min-h-screen bg-NAFPurple bg-cover overflow-hidden bg-center" >
      <LoadingSpinnerComponent />
      {auth ? (
        <div >

          <div >
            <h2 >
              VENDOR LOGIN
            </h2>
            <p >
              Welcome back, {profile && profile.displayName}!
            </p>
            <p>
              {profile && profile.description}
            </p>
            {contactNumber ? (
              <p>
                Contact number: {contactNumber}
              </p>
            ) : null}
            {emailAddress ? (
              <p >
                Email address: {emailAddress}
              </p>
            ) : null}
            {instagramAccount ? (
              <p>
                Social media: {instagramAccount}
              </p>
            ) : null}
            {website ? (
              <p>
                Website: {website}
              </p>
            ) : null}
            <Logout />
            <button onClick={editProfile}>
              Edit Profile
            </button>

            {/* {edit && (
              <EditVendor
                //callback
                parentCallback={handleClose}
                vendor={profile}
              />
            )} */}

            <div>
              <div class="relative pt-10 flex flex-end items-center gap-3">

                <div class="relative">
                  <button
                    onClick={handleClickOpen}
                    id="addProduct"
                  >
                    Add Product
                  </button>


                  <Modal isOpen={open} parentCallback={handleClose} onRequestClose={handleClose}>
                    <AddProduct  type="add" />
                  </Modal>
                </div>
              </div>
              {/* <ProductTable rows={profile && profile.products} isNested={false} /> */}
              <div textAlign="center" >
                <button variant="contained" onClick={downloadOrders}>
                  Download orders
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Modal isOpen={!auth} onRequestClose={closeModal}>
          < VendorAuth parentCallBack={closeModal} />
        </Modal>

      )}
    </div>
  );
}

export default VendorLogin;
