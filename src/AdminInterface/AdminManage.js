import React, { useState, useEffect } from 'react';
import adminService from '../services/admin';
import orderService from '../services/orders';
import workshopService from '../services/workshops';
import photoService from '../services/photog';
import donationService from '../services/donations';
import vendorService from '../services/vendors';
import AdminLogin from '../Authentication/AdminLogin';
import Logout from '../Authentication/Logout';


import FileDownload from 'js-file-download';
import { useHistory } from 'react-router-dom';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from 'react-promise-tracker';
import VerifyWorkshops from './VerifyWorkshops';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
  formSection: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'block',
  },
}));

function AdminManage(props) {
  const classes = useStyles();
  const history = useHistory();
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
  const [openDelete, setOpenDelete] = useState(false);
  const [openVerify, setOpenVerify] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [orderToDelete, setDeleteOrder] = useState(null);
  const [orderToVerify, setVerifyOrder] = useState(null);
  const [workshopEmail, setEmailWorkshop] = useState(null);
  const [vendors, setVendors] = useState([]);

  //donation tracker states
  const [donations, setDonations] = useState([]);
  const [donationUpdate, setDonationUpdate] = useState({ name: '', amount: 0 });

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
    setChecked(event.target.checked);
  };

  const handleSelfCollChange = (event) => {
    setSelfCollDate(event.target.value);
  };

  const handleInputChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleDonationInputChange = (prop) => (event) => {
    setDonationUpdate({ ...donationUpdate, [prop]: event.target.value });
  };

  const handleLoginClose = () => {
    setAuth(true);
  };

  const handleNotAuth = () => {
    setAuth(false);
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

  useEffect(() => {
    async function fetchData() {
      const res = await donationService.getDonations();
      if (res.status === 200) {
        setDonations(res.data);
      }
      //  else {
      //   alert('Error loading donations :(');
      // }
    }
    fetchData();
  }, []);

  const handleConfirmVerify = (order_id) => {
    setVerifyOrder(order_id);
    setOpenVerify(true);
  };

  const handleConfirmDelete = (order_id) => {
    setDeleteOrder(order_id);
    setOpenDelete(true);
  };

  const handleConfirmEmail = (workshop_id) => {
    setEmailWorkshop(workshop_id);
    setOpenEmail(true);
  };

  const handleDialogResult = (continueAction) => {
    if (openDelete) {
      setOpenDelete(false);
      if (continueAction) {
        deleteOrder();
      }
    } else if (openVerify) {
      setOpenVerify(false);
      if (continueAction) {
        verifyOrder();
      }
    } else if (openEmail) {
      setOpenEmail(false);
      if (continueAction) {
        workshopSendReminder();
      }
    }
  };
  const verifyOrder = async () => {
    if (orderToVerify == null) {
      alert('No order selected to be verified!');
    } else {
      const res = await trackPromise(adminService.verifyOrder(orderToVerify));
      // console.log(auth);
      if (res.status === 200) {
        history.go(0);
      } else if (res.status === 401) {
        setAuth(false);
      } else {
        alert(res.data.error);
      }
    }
  };

  const deleteOrder = async () => {
    if (orderToDelete == null) {
      alert('No order selected to be deleted!');
    } else {
      const res = await orderService.deleteOrder(orderToDelete);
      if (res.status === 200) {
        history.go(0);
      } else if (res.status === 401) {
        setAuth(false);
      } else {
        alert(`${res.status}, ${JSON.stringify(res.data)}`);
      }
    }
  };

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

  const downloadIndivWorkshop = async (workshopId, workshopName) => {
    const res = await workshopService.downloadIndivWorkshop(workshopId);
    if (res.status === 200) {
      FileDownload(res.data, `${workshopName}.csv`);
    } else if (res.status === 401) {
      setAuth(false);
    } else {
      alert(res.data.error);
    }
  };

  const downloadPhotos = async () => {
    const res = await photoService.downloadPhotos();
    if (res.status === 200) {
      FileDownload(res.data, 'photos.csv');
    } else if (res.status === 401) {
      setAuth(false);
    } else {
      alert(res.data.error);
    }
  };

  const downloadLuckyDraw = async () => {
    const res = await adminService.downloadLuckyDraw();
    if (res.status === 200) {
      FileDownload(res.data, 'luckydraw.csv');
    } else if (res.status === 401) {
      setAuth(false);
    } else {
      alert(res.data);
    }
  };

  const downloadVotes = async () => {
    const res = await adminService.downloadVotes();
    if (res.status === 200) {
      FileDownload(res.data, 'photovotes.csv');
    } else if (res.status === 401) {
      setAuth(false);
    } else {
      alert(res.data);
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

  const workshopSendReminder = async () => {
    if (workshopEmail == null) {
      alert('No workshop selected to email!');
    }
    const res = await trackPromise(
      adminService.sendWorkshopReminderEmails(workshopEmail)
    );
    if (res.status === 200) {
      alert('Successfully sent!');
    } else {
      alert(`${res.status}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newInput = {
      points: state.points,
      category: state.category,
    };
    const res = await adminService.addPoints(newInput, state.emailAddress);
    if (res.status === 200) {
      alert('Added points successfully');
    } else {
      alert('Error while adding points');
    }
  };

  const handleDonationSubmit = async (event) => {
    event.preventDefault();
    const newInput = {
      amount: parseFloat(donationUpdate.amount),
    };
    const res = await donationService.updateDonations(
      donationUpdate.name,
      newInput
    );
    if (res.status === 200) {
      alert('Updated donation tracker successfully');
    } else {
      alert('Error while updating donation tracker');
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

  return (
    <>
      <LoadingSpinnerComponent />
      {!auth && <AdminLogin parentCallback={handleLoginClose} />}
      {auth ? (
        <div className={classes.root}>
          <Typography className={classes.paddedItem} variant="h4">
            {checked === true ? 'Verified Orders' : 'Unverified Orders'}
          </Typography>
          <Logout />
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          {openDelete && (
            <ConfirmationDialog
              //callback
              title="Delete Order?"
              content={'Are you sure you want to remove this order?'}
              parentCallback={handleDialogResult}
            />
          )}
          {openVerify && (
            <ConfirmationDialog
              //callback
              title="Verify Order?"
              content={'Are you sure you want to verify this order?'}
              parentCallback={handleDialogResult}
            />
          )}
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="table">
              <TableHead>
                <TableRow>
                  <TableCell>Order Number</TableCell>
                  <TableCell align="right">Buyer</TableCell>
                  <TableCell align="right">Email Address</TableCell>
                  <TableCell align="right">Contact number</TableCell>
                  <TableCell align="right">Total</TableCell>
                  <TableCell align="right">Date time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders &&
                  orders.map((order, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {order.orderNumber}
                      </TableCell>
                      <TableCell align="right">{order.name}</TableCell>
                      <TableCell align="right">{order.emailAddress}</TableCell>
                      <TableCell align="right">{order.contactNumber}</TableCell>
                      <TableCell align="right">
                        {Number.isInteger(order.total)
                          ? order.total
                          : order.total.toFixed(2)}
                      </TableCell>
                      <TableCell align="right">{order.datetime}</TableCell>
                      {!checked && (
                        <>
                          <IconButton
                            edge="end"
                            aria-label="download"
                            disabled={promiseInProgress}
                          >
                            <DoneIcon
                              onClick={() => handleConfirmVerify(order._id)}
                            />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            disabled={promiseInProgress}
                          >
                            <DeleteIcon
                              onClick={() => handleConfirmDelete(order._id)}
                            />
                          </IconButton>
                        </>
                      )}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          {vendors &&
            vendors.map((vendor, index) => (
              <>
                <Button
                  key={index}
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<GetAppIcon />}
                  onClick={() =>
                    downloadVendorOrders(vendor._id, vendor.displayName)
                  }
                  disabled={promiseInProgress}
                >
                  Download {vendor.displayName} orders
                </Button>
                <br></br>
              </>
            ))}
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<GetAppIcon />}
            onClick={downloadOrders}
            disabled={promiseInProgress}
          >
            Download Orders
          </Button>
          <Typography className={classes.paddedItem} variant="h4">
            Send Reminder Emails
          </Typography>
          <form
            className={classes.form}
            autoComplete="off"
            onSubmit={sendEmails}
          >
            <FormControl color="secondary" className={classes.formSection}>
              <InputLabel>Self Collection Date</InputLabel>
              <Select value={selfCollDate} onChange={handleSelfCollChange}>
                {/* <MenuItem value={'18febslot1'}>18 February 12-2pm</MenuItem>
                <MenuItem value={'18febslot2'}>18 February 6-8pm</MenuItem>
                <MenuItem value={'11marslot1'}>11 March 12-2pm</MenuItem>
                <MenuItem value={'11marslot2'}>11 March 6-8pm</MenuItem>
                <MenuItem value={'25marslot1'}>25 March 12-2pm</MenuItem>
                <MenuItem value={'25marslot2'}>25 March 6-8pm</MenuItem> */}
                {/* <MenuItem value={'14febslot1'}>14 February 12-2pm</MenuItem>
                <MenuItem value={'14febslot2'}>14 February 5-6.30pm</MenuItem> */}
                <MenuItem value={'23febslot1'}>23 February 12-4pm</MenuItem>
                <MenuItem value={'09marslot1'}>9th March 2-6pm</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<MailIcon />}
            >
              Send Email
            </Button>
          </form>
          <Typography className={classes.paddedItem} variant="h4">
            Workshops
          </Typography>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<GetAppIcon />}
            onClick={bumpWorkshopWaitlist}
          >
            Bump Workshop Waitlist
          </Button>

          {openEmail && (
            <ConfirmationDialog
              //callback
              title="Send Email?"
              content={'Are you sure you want to send emails?'}
              parentCallback={handleDialogResult}
            />
          )}
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="table">
              <TableHead>
                <TableRow>
                  <TableCell>Workshop</TableCell>
                  <TableCell align="right">Sign Ups</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {workshops &&
                  workshops.map((workshop, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {workshop.name}
                      </TableCell>
                      <TableCell align="right">{`${workshop.registeredParticipants.length}/${workshop.maxParticipants}`}</TableCell>
                      <IconButton edge="end" aria-label="download">
                        <GetAppIcon
                          onClick={() =>
                            downloadIndivWorkshop(workshop._id, workshop.name)
                          }
                        />
                      </IconButton>
                      <IconButton edge="end" aria-label="emails">
                        <MailIcon
                          onClick={() => handleConfirmEmail(workshop._id)}
                        />
                      </IconButton>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<GetAppIcon />}
            onClick={downloadWorkshops}
          >
            Download All Workshop Sign Ups
          </Button>
          <br></br>
          <VerifyWorkshops
            handleNotAuth={handleNotAuth}
            workshops={workshops}
          />
          <Typography className={classes.paddedItem} variant="h4">
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
          <br></br>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<GetAppIcon />}
            onClick={downloadLuckyDraw}
            disabled={promiseInProgress}
          >
            Download Lucky Draw Data
          </Button>
          <Typography className={classes.paddedItem} variant="h4">
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
          </form>
        </div>
      ) : null}
    </>
  );
}

export default AdminManage;
