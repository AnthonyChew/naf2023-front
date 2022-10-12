import React, { useState, useReducer, useEffect } from 'react';

import CartCard from './CartCard';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
// import logo from 'NAF2022MARKETPLACE.JPG';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import orderService from '../services/orders';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UserLogin from '../Authentication/UserLogin';
import { resetCart } from '../reducers/CartReducer';
import { usePromiseTracker } from 'react-promise-tracker';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import { ReactComponent as BackgroundSVG } from './PaymentSVG/Background.svg';
import { ReactComponent as TopLinesSVG } from './PaymentSVG/TopLines.svg';
import { ReactComponent as MiddleGalaxySVG } from './PaymentSVG/MiddleGalaxy.svg';
import { ReactComponent as BottomLeftGalaxySVG } from './PaymentSVG/BottomLeftGalaxy.svg';
import { ReactComponent as BottomRightStarsSVG } from './PaymentSVG/BottomRightStars.svg';
import { Hidden } from '@material-ui/core';

//import vendorService from '../services/vendors';
import productService from '../services/products';
import FeaturedCard from './FeaturedCard';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    position: 'relative',
    paddingBottom: theme.spacing(100),
  },
  paymentTitle: {
    color: '#033F63',
    marginBottom: theme.spacing(5),
  },
  thankyou: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  container: {
    backgroundColor: '#f0f0f0',
    border: '2px solid purple',
    // display: 'flex',
    padding: theme.spacing(6),

    textAlign: 'left',
    margin: theme.spacing(6),
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      padding: 0,
    },
    container: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      //   textAlign: 'center',
    },
  },
  total: {
    fontWeight: 'bold',
    border: '2px solid orange',
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('md')]: {
    form: {
      marginRight: theme.spacing(2),
    },
  },
  label: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  acknowledgement: {
    fontSize: '0.8rem',
  },
  paymentButton: {
    paddingTop: theme.spacing(2),
  },
}));

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function Payment(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useReducer(formReducer, {});
  const [purchases, setPurchases] = useState([]);
  const [vendorsDelivery, setVendorsDelivery] = useState([]);
  const [collectionTypes, setCollectionTypes] = useState([]);
  const [collectionDates, setCollectionDates] = useState([]);
  const [acknowledgement, setAcknowledgment] = useState(false);
  const { promiseInProgress } = usePromiseTracker();

  const [featuredProducts, setFeaturedProducts] = useState([]);

  const state = useSelector((state) => {
    return state;
  });
  const [total, setTotal] = useState(state.total);

  useEffect(() => {
    const products = state.addedProducts;
    const purchases = products.map((product) => {
      return {
        surcharge: product.vendorSurcharge, //ADD THIS TO STORE
        productId: product._id,
        vendorId: product.vendorId,
        vendorName: product.vendorName,
        quantityBought: product.quantity,
        comments: product.comments,
        name: product.name,
        leadTime: product.leadTime,
        canDeliver: product.canDeliver,
        canCollect: product.canCollect,
        price: product.price,
        totalQty: product.totalQty,
      };
    });
    setPurchases(purchases);
    const emptyArray = new Array(purchases.length).fill(null);
    setCollectionDates(emptyArray);
    setCollectionTypes(emptyArray);
  }, [state.addedProducts]);

  useEffect(() => {
    let newVendorsDelivery = [];
    let newTotal = state.total;
    for (let i = 0; i < collectionTypes.length; i++) {
      if (collectionTypes[i] === 'delivery') {
        if (
          !newVendorsDelivery.some(
            (vendor) => vendor.vendorId === purchases[i].vendorId
          )
        ) {
          const newVendor = {
            vendorId: purchases[i].vendorId,
            vendorName: purchases[i].vendorName,
            vendorSurcharge: purchases[i].surcharge,
          };
          newVendorsDelivery.push(newVendor);
          newTotal += purchases[i].surcharge;
        }
        //Use set?? Dk how to make it immutable though
      }
    }
    setVendorsDelivery(newVendorsDelivery);
    setTotal(newTotal);
  }, [collectionTypes, state.total, purchases]);

  // Fetch & display featured products
  useEffect(() => {
    async function getFeaturedProducts() {
      // Get specific vendor
      /*const vendorId = "61ec64a2f69f4991768c6ba9";
      const res = await trackPromise(vendorService.getVendor(vendorId));
      if (res.status === 200) {
        setFeaturedProducts(res.data.products);
      } else {
        alert('Error getting featured products');
      } */

      // Get specific products
      const productIds = [
        '61f499f917902de7d435eb11',
        '61f4994e17902de7d435eb0f',
        '61f499e217902de7d435eb10',
      ];
      let products = [];
      for (let i = 0; i < productIds.length; ++i) {
        const res = await trackPromise(
          productService.getIndivProduct(productIds[i])
        );
        if (res !== null) {
          products.push(res);
        } else {
          alert('Error getting featured products');
        }
      }
      setFeaturedProducts(products);
    }
    getFeaturedProducts();
  }, []);

  function getFeaturedProducts() {
    return featuredProducts;
    /*// randomly sort the array & fetch N no. products
    let shuffled = featuredProducts.sort(() => 0.5 - Math.random());
    // return only 3 products
    let featuredShow = shuffled.slice(0, 3);

    return featuredShow;*/
  }

  const [helperText, setHelperText] = useState('');
  const [auth, setAuth] = useState(true);

  const addDays = (date, days) => {
    date.setDate(date.getDate() + days);
    return date;
  };

  const submitOrder = async () => {
    purchases.forEach((purchase, i) => {
      purchase['collection'] = collectionTypes[i];
      delete purchase['name'];
      delete purchase['leadTime'];
      delete purchase['canCollect'];
      delete purchase['canDeliver'];
      delete purchase['surcharge'];
      delete purchase['vendorName'];
      delete purchase['price'];
      delete purchase['totalQty'];
      if (collectionTypes[i] === 'delivery')
        purchase['deliveryAddress'] = formData.deliveryAddress;
      else if (collectionTypes[i] === 'selfCollection')
        purchase['collectionDate'] = collectionDates[i];
    });
    delete formData['deliveryAddress'];
    formData.purchases = purchases;
    formData.total = total;
    // console.log(formData);
    const res = await trackPromise(orderService.postOrder(formData));
    if (res.status === 200) {
      dispatch(resetCart());
      history.push('/PaymentSuccess');
    } else if (res.status === 401) {
      // console.log(res);
      setAuth(false);
      alert('Please login to complete your payment');
    } else {
      alert(res.data.error);
    }
  };

  const handleLoginClose = () => {
    setAuth(true);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleCollectionDate = (event) => {
    const index = parseInt(event.target.name);
    const newCollection = collectionDates.map((collection, i) => {
      return i === index ? event.target.value : collection;
    });
    setCollectionDates(newCollection);
  };

  const handleCollectionType = (purchase, event) => {
    const index = parseInt(event.target.name);
    const newCollectionTypes = collectionTypes.map((collection, i) => {
      return i === index ? event.target.value : collection;
    });
    const newCollectionDates = collectionDates.map((collection, i) => {
      return i === index ? null : collection;
    });
    setCollectionTypes(newCollectionTypes);
    setCollectionDates(newCollectionDates);
  };

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();

    //acknowledgment
    if (acknowledgement === false) {
      setHelperText('Please indicate acknowledgement of terms and conditions.');
    } else {
      //ensure collect-related fields are filled
      if (collectionTypes.includes(null)) {
        setHelperText('Please select a Collection Type for all products.');
      } else if (collectionTypes.includes('selfCollection')) {
        let indexesOfSelfCollection = [];
        let missingIndexes = [];
        collectionTypes.forEach((type, i) => {
          if (collectionTypes[i] === 'selfCollection') {
            indexesOfSelfCollection.push(i);
          }
        });
        indexesOfSelfCollection.forEach((index) => {
          if (collectionDates[index] === null) {
            missingIndexes.push(index);
          }
        });
        if (missingIndexes.length === 0) {
          submitOrder();
        } else {
          setHelperText(
            `Please select a date for self collection for all purchased products. Missing for ${missingIndexes.map(
              (index) => purchases[index].name + ', '
            )}`
          );
        }
      } else {
        submitOrder();
      }
    }
  };

  const featProducts = getFeaturedProducts();

  return (
    <>
      {auth ? null : <UserLogin parentCallback={handleLoginClose} />}

      <div className={classes.root}>
        <TopLinesSVG
          style={{ zIndex: -1, top: '25', left: '0%', position: 'absolute' }}
        />
        <MiddleGalaxySVG
          style={{ zIndex: -1, top: '415', left: '0', position: 'absolute' }}
        />
        <BottomLeftGalaxySVG
          style={{ zIndex: -1, top: '1860', left: '5%', position: 'absolute' }}
        />
        <BottomRightStarsSVG
          style={{ zIndex: -1, top: '1460', right: '0', position: 'absolute' }}
        />

        <BackgroundSVG
          data-aos="slide-right"
          data-aos-duration="1000"
          style={{
            zIndex: -999,
            top: -83,
            left: 0,
            position: 'absolute',
          }}
        />
        <form
          autoComplete="off"
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Typography variant="h2" className={classes.paymentTitle}>
            PAYMENT
            <Typography className={classes.thankyou} paragraph>
              Thank you for shopping with us!
            </Typography>
          </Typography>

          <div className={classes.container}>
            <Grid container xs={12}>
              <Grid item md={7} xs={12}>
                <div>
                  <InputLabel className={classes.label} required>
                    Enter your name:
                  </InputLabel>
                  <TextField
                    required
                    name="name"
                    label="Name"
                    type="text"
                    variant="filled"
                    color="secondary"
                    value={formData.name}
                    onChange={handleChange}
                    inputProps={{ maxLength: 64 }}
                    fullWidth
                  />
                </div>

                <div>
                  <InputLabel className={classes.label}>
                    Enter your contact number (e.g. 81234567):
                  </InputLabel>
                  <TextField
                    required
                    name="contactNumber"
                    label="Contact Number"
                    variant="filled"
                    color="secondary"
                    type="tel"
                    inputProps={{
                      pattern: '^[0-9]+$', // accepts digits only
                      maxLength: 15,
                    }} // max possible length of a phone number including the country code
                    value={formData.contactNumber}
                    onChange={handleChange}
                    fullWidth
                  />
                </div>

                <div>
                  <InputLabel className={classes.label} required>
                    Enter your email address:
                  </InputLabel>
                  <TextField
                    name="emailAddress"
                    label="Email"
                    variant="filled"
                    color="secondary"
                    type="email"
                    required
                    //inputProps={{ pattern: '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$' }} // this pattern would allow some invalid gmails e.g. "abc"@gmail.com
                    inputProps={{ maxLength: 64 }}
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                  />
                </div>

                {purchases.map((purchase, i) => {
                  return (
                    <>
                      <Grid container>
                        <Grid item md={5} xs={12}>
                          <FormControl
                            component="fieldset"
                            required
                            style={{ marginTop: 15 }}
                          >
                            <FormLabel component="legend" color="secondary">
                              Select Item Collection Type for {purchase.name}
                            </FormLabel>
                            <RadioGroup
                              aria-label="collection options"
                              name={i}
                              value={collectionTypes[i]}
                              onChange={(evt) =>
                                handleCollectionType(purchase, evt)
                              }
                              required
                            >
                              {purchase.canCollect && (
                                <FormControlLabel
                                  value="selfCollection"
                                  control={<Radio />}
                                  label="Self-Collection at NTU"
                                />
                              )}
                              {purchase.canDeliver && (
                                <FormControlLabel
                                  value="delivery"
                                  control={<Radio />}
                                  label="Delivery"
                                />
                              )}
                            </RadioGroup>
                          </FormControl>
                          <Grid item md={1} xs={0}></Grid>
                          <Hidden smUp>
                            <br></br>
                          </Hidden>
                        </Grid>
                        <Grid item md={6} xs={12}>
                          {collectionTypes[i] === 'selfCollection' && (
                            <FormControl
                              component="fieldset"
                              required
                              style={{ marginTop: 15 }}
                              key={i}
                            >
                              <FormLabel component="legend" color="secondary">
                                Select Item Collection Date for {purchase.name}
                              </FormLabel>
                              <RadioGroup
                                aria-label="collection date options"
                                name={i}
                                value={collectionDates[i]}
                                onChange={handleCollectionDate}
                              >
                                {/* <FormControlLabel
                              value="14febslot1"
                              control={<Radio />}
                              label="14th February (12-2pm) Skydeck @ North Spine"
                              disabled={
                                addDays(new Date(), purchase.leadTime) >
                                new Date('14 February 2022')
                              }
                            />
                            <FormControlLabel
                              value="14febslot2"
                              control={<Radio />}
                              label="14th February (5-6.30pm) Skydeck @ North Spine"
                              disabled={
                                addDays(new Date(), purchase.leadTime) >
                                new Date('14 February 2022')
                              }
                            /> */}
                                <FormControlLabel
                                  value="23febslot1"
                                  control={<Radio />}
                                  label="23rd February (12-4pm) Linkway @ Nanyang Auditorium"
                                  disabled={
                                    addDays(new Date(), purchase.leadTime) >
                                    new Date('23 February 2022')
                                  }
                                />
                                <FormControlLabel
                                  value="09marslot1"
                                  control={<Radio />}
                                  label="9th March (2-6pm) Student Activities Centre @ North Spine"
                                  disabled={
                                    addDays(new Date(), purchase.leadTime) >
                                    new Date('09 March 2022')
                                  }
                                />

                                {/* <FormControlLabel
                              value="18febslot1"
                              control={<Radio />}
                              label="18th February (12-2pm) The Arc TR+07"
                              disabled={
                                addDays(new Date(), purchase.leadTime) >
                                new Date('18 February 2022')
                              }
                            />
                            <FormControlLabel
                              value="18febslot2"
                              control={<Radio />}
                              label="18th February (6-8pm) The Arc TR+07"
                              disabled={
                                addDays(new Date(), purchase.leadTime) >
                                new Date('18 February 2022')
                              }
                            />
                            <FormControlLabel
                              value="11marslot1"
                              control={<Radio />}
                              label="11th March (12-2pm) The Arc TR+27"
                              disabled={
                                addDays(new Date(), purchase.leadTime) >
                                new Date('11 March 2022')
                              }
                            />
                            <FormControlLabel
                              value="11marslot2"
                              control={<Radio />}
                              label="11th March (6-8pm) The Arc TR+27"
                              disabled={
                                addDays(new Date(), purchase.leadTime) >
                                new Date('11 March 2022')
                              }
                            />
                            <FormControlLabel
                              value="25marslot1"
                              control={<Radio />}
                              label="25th March (12-2pm) The Arc TR+04"
                              disabled={
                                addDays(new Date(), purchase.leadTime) >
                                new Date('25 March 2022')
                              }
                            />
                            <FormControlLabel
                              value="25marslot2"
                              control={<Radio />}
                              label="25th March (6-8pm) The Arc TR+04"
                              disabled={
                                addDays(new Date(), purchase.leadTime) >
                                new Date('25 March 2022')
                              }
                            /> */}
                              </RadioGroup>
                            </FormControl>
                          )}
                        </Grid>
                      </Grid>
                      <br></br>
                      <br></br>
                      <br></br>
                    </>
                  );
                })}
                {collectionTypes.includes('delivery') && (
                  <div>
                    <InputLabel className={classes.label} required>
                      Enter your address:
                    </InputLabel>
                    <TextField
                      required
                      name="deliveryAddress"
                      label="Delivery Address"
                      type="text"
                      variant="filled"
                      color="secondary"
                      value={formData.deliveryAddress}
                      onChange={handleChange}
                      inputProps={{ maxLength: 255 }}
                      fullWidth
                    />
                  </div>
                )}
              </Grid>
              <Hidden smDown>
                <Grid item md={1}></Grid>
              </Hidden>
              <Grid
                item
                md={4}
                xs={12}
                justify="space-between"
                style={{ height: '100%' }}
              >
                <img src="NAF2022MARKETPLACE.JPG" alt="QR Code" width="100%" />
                <Typography
                  style={{
                    color: '#7c1a78',
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  Reference No: <br />
                  NAF2022MARKETPLACE
                </Typography>
                <Typography variant="body1" className={classes.label}>
                  You can either:
                  <ul>
                    <li>Pay by PayNow/PayLah to the QR Code above </li>
                    <li>
                      Pay later by scanning the QR Code in the email after you
                      confirm payment below
                    </li>
                  </ul>
                </Typography>
                <Typography variant="body1" className={classes.label}>
                  Total:
                </Typography>
                <Typography className={classes.total} variant="body1">
                  {`$${total.toFixed(2)}`}
                </Typography>
                <TableContainer>
                  <Table className={classes.table} aria-label="table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {purchases &&
                        purchases.map((purchase, index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {purchase.name}
                            </TableCell>
                            <TableCell align="right">
                              {purchase.price
                                ? Number.isInteger(purchase.price)
                                  ? purchase.price
                                  : purchase.price.toFixed(2)
                                : null}
                            </TableCell>
                            <TableCell align="right">
                              {purchase.totalQty}
                            </TableCell>
                            <TableCell align="right">
                              {(purchase.price * purchase.totalQty).toFixed(2)}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <br></br>
                {vendorsDelivery && vendorsDelivery.length > 0 && (
                  <TableContainer>
                    <Table className={classes.table} aria-label="table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Vendor</TableCell>
                          <TableCell align="right">Surcharge</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {vendorsDelivery &&
                          vendorsDelivery.map((vendor, index) => (
                            <TableRow key={index}>
                              <TableCell component="th" scope="row">
                                {vendor.vendorName}
                              </TableCell>
                              <TableCell align="right">
                                {vendor.vendorSurcharge}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Grid>
            </Grid>
            <Grid container className={classes.paymentButton}>
              <Grid item xs={12}>
                Featured Items
                <Grid container xs={12} className={classes.cartCards}>
                  {featProducts &&
                    featProducts.map((product, i) => {
                      return (
                        <Grid item md={4} xs={12}>
                          <FeaturedCard product={product} />
                        </Grid>
                      );
                    })}
                </Grid>
                <FormControl
                  component="fieldset"
                  required
                  style={{
                    marginTop: 15,
                    justifyContent: 'flex-end',
                    flex: 1,
                    marginBottom: 10,
                  }}
                >
                  <FormControlLabel
                    component="legend"
                    color="secondary"
                    control={
                      <Checkbox
                        checked={acknowledgement}
                        onChange={() => setAcknowledgment(!acknowledgement)}
                      />
                    }
                    label={
                      <Typography paragraph className={classes.acknowledgement}>
                        By checking this box, I hereby agree that I will not
                        hold NTU Arts Festival 2022 responsible for any loss or
                        damage incurred to my purchase from the NAF Online
                        Marketplace. I also hereby agree that there will be no
                        refunds or exchanges for my purchase from the NAF Online
                        Marketplace. I acknowledge that I have given consent to
                        the collection, use and disclosure of my personal data
                        by NTU CAC NTU Arts Festival for administrative
                        purposes.
                      </Typography>
                    }
                  />
                </FormControl>
                <FormHelperText style={{ color: 'red' }}>
                  {helperText}
                </FormHelperText>
                <LoadingSpinnerComponent />
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={
                    state.addedProducts.length === 0 || promiseInProgress
                  }
                >
                  Confirm Payment
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    </>
  );
}
