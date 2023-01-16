import React, { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import ProductTable from './ProductTable';

import VendorAuth from '../Authentication/VendorLogin';
import vendorService from '../services/vendors';
import ordersService from '../services/orders';
import FileDownload from 'js-file-download';
import Logout from '../Authentication/Logout';
import EditVendor from './EditVendor';
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
      if (res.status === 200) {
        setProfile(res.data);
        setAuth(true);
        //console.log(res.data)
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

  useEffect(() => {
    if (open || edit) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open, edit]);


  return (
    <div class="relative pt-32 pb-32 min-h-screen bg-NAFPurple bg-cover overflow-hidden bg-center" >
      <LoadingSpinnerComponent />
      {auth ? (
        <div class='flex flex-col justify-center items-center gap-5'>  00r6                                                                                                   
          <p class='text-2xl font-syne underline decoration-solid'>
            VENDOR MANAGEMENT
          </p>
          <p class='text-2xl font-syne underline decoration-solid'>
            Welcome back, {profile && profile.displayName}!
          </p>
          <p class='text-2xl font-syne underline decoration-solid'>
            {profile && profile.description}
          </p>
          {contactNumber ? (
            <p class='text-2xl font-syne underline decoration-solid'>
              Contact number: {contactNumber}
            </p>
          ) : null}
          {emailAddress ? (
            <p class='text-2xl font-syne underline decoration-solid'>
              Email address: {emailAddress}
            </p>
          ) : null}
          {instagramAccount ? (
            <p class='text-2xl font-syne underline decoration-solid'>
              Social media: {instagramAccount}
            </p>
          ) : null}
          {website ? (
            <p class='text-2xl font-syne underline decoration-solid'>
              Website: {website}
            </p>
          ) : null}
          <Logout />

          <>
            <button
              class="w-fit text-white border-4 border-black bg-[#0071C6] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={editProfile}
            >
              <p class="flex-1 text-2xl font-syne text-center">  Edit Profile </p>
            </button>
            <Modal isOpen={edit} onRequestClose={handleClose}>
                <EditVendor
                  //callback
                  parentCallback={handleClose}
                  vendor={profile}
                />
            </Modal>
          </>

          <>
            <button
              class="w-fit text-white border-4 border-black bg-[#0071C6] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleClickOpen}
              id="addProduct"
            >
              <p class="flex-1 text-2xl font-syne text-center"> Add Product </p>
            </button>

            <Modal isOpen={open} onRequestClose={handleClose}>
              <div class="relative w-full h-full overflow-y-auto" >
                <AddProduct parentCallback={handleClose} type="add" />
              </div>
            </Modal>
          </>
          <ProductTable rows={profile && profile.products} />
          <div  >
            <button
              class="w-fit text-white border-4 border-black bg-[#0071C6] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={downloadOrders}>
              <p class="flex-1 text-2xl font-syne text-center"> Download orders </p>
            </button>
          </div>
        </div>
      ) : (
        <Modal isOpen={!auth}>
          < VendorAuth parentCallBack={closeModal} />
        </Modal>

      )}
    </div>
  );
}

export default VendorLogin;
