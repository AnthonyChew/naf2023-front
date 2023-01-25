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
import PicrewImageManage from './PicrewImageManage';
import Select from 'react-select';
import authService from '../services/auth';
import AdminImageUpload from './AdminImageUpload'

import FileDownload from 'js-file-download';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from 'react-promise-tracker';
import VerifyWorkshops from './VerifyWorkshops';
import Modal from 'react-modal';
import Input from '../utils/Input';
import ProfileBg from '../ProfilePage/svgs/profilebg.svg'

function AdminManage(props) {
  const history = useNavigate();
  const [orders, setOrders] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [auth, setAuth] = useState(true);
  const [checked, setChecked] = useState(false);
  const [state, setState] = useState({
    emailAddress: '',
    points: 0,
    category: '',
  });
  const [selfCollDate, setSelfCollDate] = useState('23febslot1');
  const [vendors, setVendors] = useState([]);

  const handleChange = (event) => {
    setChecked(event);
  };

  const handleSelfCollChange = (event) => {
    setSelfCollDate(event);
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));
  useEffect(() => {
    async function fetchWorkshopData() {
      //console.log('Fetch workshops');
      await delay(2000);
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

  const downloadOrders = async () => {
    //console.log(workshops);
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

  const sendEmails = async (event) => {
    event.preventDefault();
    const res = await trackPromise(adminService.sendEmails(selfCollDate));
    if (res.status === 200) {
      alert('Successfully sent!');
    } else {
      alert(res.data.error);
    }
  };

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
  };

  const date = [
    { value: '23febslot1', label: '23 February 12-4pm' },
    { value: '09marslot1', label: '9th March 2-6pm' }
  ];

  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });

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
              <form autoComplete="off" onSubmit={logIn}>
                <Input
                  label="Enter your username/email"
                  id="username"
                  onChange={handleFormChange('username')}
                  wrapperClassName="border-2 border-black w-full rounded-2xl mb-2"
                  required
                />
                <div
                  class='border-2 border-black rounded-2xl mb-2'
                >
                  <div class="flex flex-row pb-1">
                    <Input
                      label="Enter your password"
                      ref={inputRef}
                      type={values.showPassword ? 'text' : 'password'}
                      name="password"
                      required
                      onChange={handleFormChange('password')}
                      wrapperClassName="w-full"
                      id="password"
                      placeholder=""
                    />
                    <button
                      type="button"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      class="w-fit h-fit self-end pr-2 pb-1"
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
                  class="w-fit ml-auto mr-auto text-xl bg-blue-600 text-white border-4 border-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
        <div class='flex justify-center pt-32 pb-32 min-h-screen bg-orange-400 bg-cover overflow-hidden bg-center ' style={{ backgroundImage: `url(${ProfileBg})` }}>
          <div class='flex flex-col w-2/3 bg-gray-400/95 p-5 rounded-xl border-black border-2'>

            <Logout />

            <div class='border-black border-2 mt-2 p-2 rounded-xl mb-2'>
              <p class='text-2xl font-syne underline decoration-solid'>
                {checked === true ? 'Verified Orders' : 'Unverified Orders'}
              </p>
              <div class='mb-2'>
                <Switch
                  checked={checked}
                  value={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>

              <AdminOrderTable rows={orders} setAuthParentCallbackFalse={setAuthParentCallbackFalse} />
            </div>

            <div class='flex flex-row flex-wrap gap-5 border-black border-2 p-2 rounded-xl mb-2'>
              {vendors &&
                vendors.map((vendor, index) => (
                  <>
                    <button
                      class="w-fit text-white border-4 border-black bg-[#0071C6] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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

            <div class='flex w-full justify-center'>
              <button
                onClick={downloadOrders}
                disabled={promiseInProgress}
                class="w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mb-2"
              >
                Download Orders
              </button>
            </div>

            <div class='border-black border-2 p-2 rounded-xl mb-2'>
              <p class='text-2xl font-syne underline decoration-solid'>
                Send Reminder Emails
              </p>
              <form
                autoComplete="off"
                onSubmit={sendEmails}
              >
                <p class='text-xl font-syne underline decoration-solid mb-1'>
                  Product Category:
                </p>
                <Select
                  id="product-category"
                  name="category"
                  required
                  options={date}
                  value={selfCollDate}
                  onChange={handleSelfCollChange}>
                </Select>
                <div class='flex w-full justify-center'>
                  <button type="submit" class="w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2">
                    Send Email
                  </button>
                </div>
              </form>
            </div>

            <div class='flex flex-col justify-center items-center border-black border-2 p-2 rounded-xl mb-2 gap-2'>
              <p class='text-2xl font-syne underline decoration-solid'>
                Workshops
              </p>
              <button
                onClick={bumpWorkshopWaitlist}
                class="w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2"
              >
                Bump Workshop Waitlist
              </button>

              <AdminWorkshopTable rows={workshops} setAuthParentCallbackFalse={setAuthParentCallbackFalse} />

              <button
                onClick={downloadWorkshops}
                class="w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2"
              >
                Download All Workshop Sign Ups
              </button>

              <VerifyWorkshops
                setAuthParentCallbackFalse={setAuthParentCallbackFalse}
                workshops={workshops}
              />
            </div>

            <PicrewImageManage />
            <AdminImageUpload />
            {/* <div class='flex flex-col justify-center items-center border-black border-2 p-2 rounded-xl mb-2 gap-2'>
              <p class='text-2xl font-syne underline decoration-solid'>
                Event Photos
              </p>
              <Select
                id="product-category"
                name="category"
                required
                options={events}
                value={event}
                onChange={handleEventChange}>
              </Select>
            </div> */}


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
        </div>
      ) : null
      }
    </>

  );
}

export default AdminManage;
