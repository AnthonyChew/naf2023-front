import { lighten, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
// import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import AddProduct from './AddProduct';
import ProductTable from './ProductTable';
import OrderTable from './OrderTable';
import { ReactComponent as OrangeAccentSVG } from './SVG/Vector 98.svg';
import { ReactComponent as PurpleOrangeAccentSVG } from './SVG/Group 7.svg';
import { ReactComponent as LineAndPurpleSVG } from './SVG/Group 1 Green.svg';
import { ReactComponent as GreenYellowSVG } from './SVG/Group 24.svg';
import { ReactComponent as LinesLeft } from './2022SVG/VendorLogin/LinesLeft.svg';
import { ReactComponent as StarsTop } from './2022SVG/VendorLogin/StarTop.svg';
import { ReactComponent as StarsBottom } from './2022SVG/VendorLogin/StarBottom.svg';
import { ReactComponent as LinesRight } from './2022SVG/VendorLogin/LinesRight.svg';
import { ReactComponent as Background } from './2022SVG/VendorLogin/Background.svg';

import VendorAuth from '../Authentication/VendorLogin';
import vendorService from '../services/vendors';
import ordersService from '../services/orders';
import FileDownload from 'js-file-download';
import Logout from '../Authentication/Logout';
import EditVendor from './EditVendor';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    position: 'relative',
  },
  content: {
    width: '90%',
    margin: 'auto',
    textAlign: 'center',
  },
  vendorLoginTitle: {
    color: "#033F63",
    marginTop: theme.spacing(3),
  },
  welcome: {
    color: "#033F63",
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  description: {
    width: '50%',
    margin: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    content: {
      width: '100%',
    },
    description: {
      width: '90%',
    },
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'auto',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  pdtAndImg: {
    display: 'flex',
    alignItems: 'center',
  },
  pdtImg: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    maxHeight: 70,
  },
  button: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
}));

function VendorLogin() {
  const classes = useStyles();
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
      {auth ? (
        <div className={classes.root}>
          <StarsTop style={{ zIndex: 0, top: '33%', left: '0%', position: 'absolute' }} />
          <LinesLeft style={{ zIndex: 0, top: '80%', left: '0%', position: 'absolute' }} />
          <StarsBottom style={{ zIndex: 0, top: '110%', right: '0%', position: 'absolute' }} />
          <LinesRight style={{ zIndex: 0, top: '45%', right: '0%', position: 'absolute' }} />
          <Background
            data-aos="slide-right"
            data-aos-duration="1000"
            style={{
              zIndex: -999,
              top: 300,
              position: 'absolute',
              overflowY: 'hidden',
            }}
          />
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
            <Grid
              container
              justify="flex-end"
              alignItems="center"
              spacing={3}
              style={{ paddingTop: 20 }}
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
                {/* <PurpleOrangeAccentSVG
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-anchor="#addProduct"
                  style={{ zIndex: -999, position: 'absolute' }}
                /> */}
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
            <Box textAlign="center">
              <Button variant="contained" onClick={downloadOrders}>
                Download orders
              </Button>
            </Box>
          </div>
        </div>
      ) : (
        <VendorAuth parentCallback={handleLoginClose} />
      )}
    </>
  );
}

export default VendorLogin;
