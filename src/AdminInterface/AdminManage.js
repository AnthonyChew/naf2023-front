import React, { useState, useEffect, useRef } from 'react';
import adminService from '../services/admin';
import orderService from '../services/orders';
import workshopService from '../services/workshops';
import photoService from '../services/photog';
// import donationService from '../services/donations';
import vendorService from '../services/vendors';
import Logout from '../Authentication/Logout';
import Switch from "react-switch";
import AdminOrderTable from './AdminOrderTable';
import AdminWorkshopTable from './AdminWorkshopTable';
import Select from 'react-select';
import authService from '../services/auth';

import FileDownload from 'js-file-download';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from 'react-promise-tracker';
import VerifyWorkshops from './VerifyWorkshops';
import Modal from 'react-modal';
import Input from '../utils/Input';


function AdminManage(props) {
  const history = useNavigate();
  const [orders, setOrders] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [auth, setAuth] = useState(null);
  const [checked, setChecked] = useState(false);
  const [state, setState] = useState({
    emailAddress: '',
    points: 0,
    category: '',
  });
  const [selfCollDate, setSelfCollDate] = useState('23febslot1');
  const [vendors, setVendors] = useState([]);

  //donation tracker states
  // const [donations, setDonations] = useState([]);
  // const [donationUpdate, setDonationUpdate] = useState({ name: '', amount: 0 });

  const categories = [
    // '#IMADETHISwNAF',
    // 'Workshop',
    // 'Virtual Busking Quiz',
    // 'Art-Verse Quiz',
    'Workshop',
    'Stamp Hunt Submission',
    'Sticker Olympia Submission',
  ];

  const handleChange = (event) => {
    setChecked(event);
  };

  const handleSelfCollChange = (event) => {
    setSelfCollDate(event.target.value);
  };

  const handleInputChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  // const handleDonationInputChange = (prop) => (event) => {
  //   setDonationUpdate({ ...donationUpdate, [prop]: event.target.value });
  // };

  const handleLoginClose = () => {
    setAuth(false);
  };

  const downloadWorkshops = async () => {
    const res = await workshopService.downloadWorkshops();
    // console.log(auth);
    if (res.status === 200) {
      FileDownload(res.data, 'workshops.csv');
    } else if (res.status === 401) {
      setAuth(false);
    } else {
      alert(res.data.error);
    }
  };

  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    // console.log('Fetch orders');
    async function fetchOrderData() {
      const res = await orderService.getOrders(checked, false);
      if (res.status === 200) {
        setOrders(res.data);
      } else if (res.status === 401) {
        setAuth(false);
      } else {
        alert('Issues with fetching orders');
      }
    }
    fetchOrderData();
  }, [checked, auth]);

  useEffect(() => {
    // console.log('Fetch orders');
    async function fetchVendorData() {
      const res = await vendorService.getAllVendors();
      if (res.status === 200) {
        setVendors(res.data);
      } else if (res.status === 401) {
        setAuth(false);
      } else {
        alert('Issues with fetching vendors');
      }
    }
    fetchVendorData();
  }, [checked, auth]);

  useEffect(() => {
    async function fetchWorkshopData() {
      console.log('Fetch workshops');
      const res = await adminService.getWorkshops(); //this line not getting workshops.
      if (res.status === 200) {
        setWorkshops(res.data);
      } else if (res.status === 401) {
        setAuth(false);
      } else {
        alert('Issues with fetching workshops');
      }
    }
    fetchWorkshopData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await donationService.getDonations();
  //     if (res.status === 200) {
  //       setDonations(res.data);
  //     }
  //     //  else {
  //     //   alert('Error loading donations :(');
  //     // }
  //   }
  //   fetchData();
  // }, []);

  const downloadOrders = async () => {
    console.log(workshops);
    const res = await orderService.downloadOrdersAdmin();
    // console.log(auth);
    if (res.status === 200) {
      FileDownload(res.data, 'orders.csv');
    } else if (res.status === 401) {
      setAuth(false);
    } else {
      alert(res.data.error);
    }
  };

  const downloadVendorOrders = async (vendor_id, vendor_name) => {
    const res = await orderService.downloadOrdersVendor(vendor_id);
    // console.log(auth);
    if (res.status === 200) {
      FileDownload(res.data, `${vendor_name}.csv`);
    } else if (res.status === 401) {
      setAuth(false);
    } else {
      alert(res.data.error);
    }
  };

  // const downloadPhotos = async () => {
  //   const res = await photoService.downloadPhotos();
  //   if (res.status === 200) {
  //     FileDownload(res.data, 'photos.csv');
  //   } else if (res.status === 401) {
  //     setAuth(false);
  //   } else {
  //     alert(res.data.error);
  //   }
  // };

  // const downloadLuckyDraw = async () => {
  //   const res = await adminService.downloadLuckyDraw();
  //   if (res.status === 200) {
  //     FileDownload(res.data, 'luckydraw.csv');
  //   } else if (res.status === 401) {
  //     setAuth(false);
  //   } else {
  //     alert(res.data);
  //   }
  // };

  // const downloadVotes = async () => {
  //   const res = await adminService.downloadVotes();
  //   if (res.status === 200) {
  //     FileDownload(res.data, 'photovotes.csv');
  //   } else if (res.status === 401) {
  //     setAuth(false);
  //   } else {
  //     alert(res.data);
  //   }
  // };

  const sendEmails = async (event) => {
    event.preventDefault();
    const res = await trackPromise(adminService.sendEmails(selfCollDate));
    if (res.status === 200) {
      alert('Successfully sent!');
    } else {
      alert(res.data.error);
    }
  };

  // const handleDonationSubmit = async (event) => {
  //   event.preventDefault();
  //   const newInput = {
  //     amount: parseFloat(donationUpdate.amount),
  //   };
  //   const res = await donationService.updateDonations(
  //     donationUpdate.name,
  //     newInput
  //   );
  //   if (res.status === 200) {
  //     alert('Updated donation tracker successfully');
  //   } else {
  //     alert('Error while updating donation tracker');
  //   }
  // };

  // function to bump workshop waitlist
  const bumpWorkshopWaitlist = async () => {
    // TBD: any checks necessary??
    // TBD: not sure if trackPromise required or not
    const res = await trackPromise(adminService.bumpWaitlist());
    if (res.status === 200) {
      alert('Successfully bumped waitlist.');
    } else {
      alert(`${res.status}`);
    }
  };

  function setAuthParentCallbackFalse() {
    setAuth(false);
  }

  const [open, setOpen] = useState(true);

  const date = [
    { value: '23febslot1', label: '23 February 12-4pm' },
    { value: '09marslot1', label: '9th March 2-6pm' }
  ];

  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });
  const { user } = props;
  const { parentCallBack } = props;

  const handleFormChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const logIn = async (event) => {
    event.preventDefault();

    let res = null;
    res = await trackPromise(
      authService.adminLogin(values.username, values.password)
    );

    if (res.status === 200) {
      setAuth(true);
    } else {
      alert(JSON.stringify(res.data.errors));
    }

  };

  const inputRef = useRef();

  return (
    <>
      <LoadingSpinnerComponent />
      <Modal isOpen={!auth}>
        <div class="h-full flex flex-col items-center justify-center">
          <div class="flex flex-col items-center justify-center bg-white p-5 gap-8 border-4 border-black rounded-lg">
            <button type="button" class="w-fit ml-auto mr-auto text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => history(-1)}>
              <p class="flex-1 text-xl font-syne text-center"> Return to Previous Page </p>
            </button>

            <div class="p-2">
              <p>Admin Login</p>

              <form autoComplete="off" onSubmit={logIn}>
                <Input
                  label="Enter your username/email"
                  id="username"
                  onChange={handleFormChange('username')}
                  color="secondary"
                  required
                />
                <div
                  onClick={() => inputRef.current.focus()}
                >
                  <label
                    htmlFor="password"
                    className='text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5'
                  >
                    Enter your password {<span className='text-red-500'>*</span>}
                  </label>
                  <div class="flex flex-row">
                    <input
                      ref={inputRef}
                      type={values.showPassword ? 'text' : 'password'}
                      name="password"
                      onChange={handleFormChange('password')}
                      className='w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md'
                      id="password"
                      placeholder=""
                    />
                    <button
                      type="button"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      class="w-fit h-fit"
                    >
                      {
                        values.showPassword ?
                          <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
                          </svg>
                          : <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z" />
                          </svg>
                      }
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={promiseInProgress}
                >
                  Log in
                </button>
                <LoadingSpinnerComponent />
              </form>
            </div>
          </div >
        </div >
      </Modal>
      {auth ? (
        <div>
          <p>
            {checked === true ? 'Verified Orders' : 'Unverified Orders'}
          </p>
          <Logout />
          <Switch
            checked={checked}
            value={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />

          <AdminOrderTable rows={orders} setAuthParentCallbackFalse={setAuthParentCallbackFalse} />

          <div class='flex flex-row flex-wrap gap-5'>
            {vendors &&
              vendors.map((vendor, index) => (
                <>
                  <button
                    class="w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    key={index}
                    onClick={() =>
                      downloadVendorOrders(vendor._id, vendor.displayName)
                    }
                    disabled={promiseInProgress}
                  >
                    Download {vendor.displayName} orders
                  </button>
                </>
              ))}
          </div>

          <button
            onClick={downloadOrders}
            disabled={promiseInProgress}
          >
            Download Orders
          </button>

          <p>
            Send Reminder Emails
          </p>
          <form
            autoComplete="off"
            onSubmit={sendEmails}
          >
            <label>
              Product Category:
              <Select
                id="product-category"
                name="category"
                required
                options={date}
                value={selfCollDate}
                onChange={handleSelfCollChange}>
              </Select>
            </label>
            <button type="submit" >
              Send Email
            </button>
          </form>

          <p>
            Workshops
          </p>
          <button
            onClick={bumpWorkshopWaitlist}
          >
            Bump Workshop Waitlist
          </button>

          <AdminWorkshopTable rows={workshops} setAuthParentCallbackFalse={setAuthParentCallbackFalse} />

          <button
            onClick={downloadWorkshops}
          >
            Download All Workshop Sign Ups
          </button>
          <br></br>

          <VerifyWorkshops
            setAuthParentCallbackFalse={setAuthParentCallbackFalse}
            workshops={workshops}
          />

          {/* <Typography className={classes.paddedItem} variant="h4">
            Photos
          </Typography>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<GetAppIcon />}
            onClick={downloadPhotos}
            disabled={promiseInProgress}
          >
            Download Photos
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<GetAppIcon />}
            onClick={downloadVotes}
            disabled={promiseInProgress}
          >
            Download Votes Data
          </Button>
          <Typography className={classes.paddedItem} variant="h4">
            Add Lucky Draw Points
          </Typography>
          <form
            className={classes.form}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              id="email-address"
              label="Email Address"
              type="text"
              variant="outlined"
              color="secondary"
              onChange={handleInputChange('emailAddress')}
            />
            <FormControl
              required
              variant="outlined"
              color="secondary"
              className={classes.formSection}
            >
              <InputLabel htmlFor="points">Points</InputLabel>
              <OutlinedInput
                id="points"
                onChange={handleInputChange('points')}
                labelWidth={60}
                inputProps={{
                  pattern: '[0-9]*',
                }}
                type="number"
              />
            </FormControl>
            <FormControl
              required
              variant="outlined"
              color="secondary"
              className={classes.formSection}
            >
              <Autocomplete
                id="points-category"
                options={categories}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                onChange={(event, newInputValue) => {
                  setState({ ...state, category: newInputValue });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    color="secondary"
                    label="Category"
                    variant="outlined"
                    value={state.category}
                  />
                )}
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="default"
              className={classes.button}
              endIcon={<AddIcon />}
            >
              Add Points
            </Button>
          </form>
          <br></br> */}
          {/* <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<GetAppIcon />}
            onClick={downloadLuckyDraw}
            disabled={promiseInProgress}
          >
            Download Lucky Draw Data
          </Button> */}
          {/* <Typography className={classes.paddedItem} variant="h4">
            Update Donation Tracker
          </Typography>
          <form
            className={classes.form}
            autoComplete="off"
            onSubmit={handleDonationSubmit}
          >
            <FormControl
              required
              variant="outlined"
              color="secondary"
              className={classes.formSection}
            >
              <Autocomplete
                id="select-donation-category"
                options={[...donations.map((donation) => donation.name)]}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                name="name"
                onChange={(event, newName) => {
                  setDonationUpdate({ ...donationUpdate, name: newName });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    color="secondary"
                    label="Category"
                    variant="outlined"
                    value={donationUpdate.name}
                  />
                )}
              />
            </FormControl>
            <Typography style={{ paddingBottom: 20 }}>
              {donationUpdate.name !== '' &&
                donationUpdate.name !== null &&
                `Current amount for ${donationUpdate.name}: $
              ${
                donations.find(
                  (donation) => donation.name === donationUpdate.name
                )
                  ? donations.find(
                      (donation) => donation.name === donationUpdate.name
                    ).amount
                  : 0
              }`}
            </Typography>
            <FormControl
              required
              variant="outlined"
              color="secondary"
              name="amount"
              style={{
                display: 'block',
                maxWidth: 300,
                paddingBottom: 10,
              }}
            >
              <InputLabel htmlFor="donation amount">
                New Donation Amount
              </InputLabel>
              <OutlinedInput
                id="price"
                value={donationUpdate.amount}
                name="amount"
                onChange={handleDonationInputChange('amount')}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                fullWidth
                labelWidth={170}
                inputProps={{
                  min: '0',
                  step: '0.01',
                  // pattern: '[0-9]*',
                }}
                type="number"
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Update Donation Tracker
            </Button>
          </form> */}
        </div>
      ) : null}
    </>
  );
}

export default AdminManage;
