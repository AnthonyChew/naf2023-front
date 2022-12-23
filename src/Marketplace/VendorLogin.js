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
import { Hidden } from '@material-ui/core';

function VendorLogin() {
  // const products = useSelector((state) => state.products);
  const [profile, setProfile] = useState(null);
  const [auth, setAuth] = useState(true);
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
        // console.log(res.data);
      } else {
        setAuth(false);
      }
    }
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

  const handleLoginClose = () => {
    setAuth(true);
  };

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
    <>
      <LoadingSpinnerComponent />
      {/* {auth ? (
        <div className={classes.root}>

          <div className={classes.content}>
            <Typography className={classes.vendorLoginTitle} variant="h2">
              VENDOR LOGIN
            </Typography>
            <Typography className={classes.welcome} paragraph>
              Welcome back, {profile && profile.displayName}!
            </Typography>
            <Typography paragraph className={classes.description}>
              {profile && profile.description}
            </Typography>
            {contactNumber ? (
              <Typography paragraph className={classes.contactDetails}>
                Contact number: {contactNumber}
              </Typography>
            ) : null}
            {emailAddress ? (
              <Typography paragraph className={classes.contactDetails}>
                Email address: {emailAddress}
              </Typography>
            ) : null}
            {instagramAccount ? (
              <Typography paragraph className={classes.contactDetails}>
                Social media: {instagramAccount}
              </Typography>
            ) : null}
            {website ? (
              <Typography paragraph className={classes.contactDetails}>
                Website: {website}
              </Typography>
            ) : null}
            <Logout />
            <Box textAlign="center" className={classes.button}>
              <Button onClick={editProfile} variant="contained">
                Edit Profile
              </Button>
            </Box>
            {edit && (
              <EditVendor
                //callback
                parentCallback={handleClose}
                vendor={profile}
              />
            )}
            <Grid className={classes.myProductWrapper}>

           
            <Grid
              container
              justify="flex-end"
              alignItems="center"
              spacing={3}
              style={{position: 'relative', paddingTop: 20}}
            >
              <Grid item xs={12} sm={4} style={{ position: 'relative' }}>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleClickOpen}
                  id="addProduct"
                >
                  Add Product
                </Button>
                {open && (
                  <AddProduct
                    //callback
                    parentCallback={handleClose}
                    type="add"
                  />
                )}
              </Grid>
              </Grid>
            <ProductTable rows={profile && profile.products} isNested={false} />
            <Box textAlign="center" >
              <Button variant="contained" onClick={downloadOrders}>
                Download orders
              </Button>
            </Box>
            </Grid>
          </div>
        </div>
      ) : (
        <VendorAuth parentCallback={handleLoginClose} />
      )} */}
       <VendorAuth parentCallback={handleLoginClose} />
    </>
  );
}

export default VendorLogin;
