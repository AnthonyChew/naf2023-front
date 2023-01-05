import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../reducers/CartReducer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Quantity from '../utils/Quantity';
import Slider from 'react-slick';
import LinkButton from '../utils/LinkButton';
import ConfirmationDialog from '../Components/ConfirmationDialog';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { ReactComponent as Vector303 } from './2022SVG/Vector 303.svg';
import { ReactComponent as Vector304 } from './2022SVG/Vector 304.svg';
import { ReactComponent as Vector305 } from './2022SVG/Vector 305.svg';
import { ReactComponent as Vector306 } from './2022SVG/Vector 306.svg';
import { ReactComponent as Vector307 } from './2022SVG/Vector 307.svg';
import { ReactComponent as Vector308 } from './2022SVG/Vector 308.svg';
import { alpha } from '@material-ui/core/styles/colorManipulator';
import { isValid } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },

  bottomSeparator: {
    marginBottom: theme.spacing(3),
  },
  pdtOptions: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
  },
  actionButton: {
    display: 'inline-block',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  carousel: {
    flexBasis: 0,
    flexShrink: 1,
    flexGrow: 1,
    minHeight: 0,
    minWidth: 0,
    paddingRight: theme.spacing(3),
    // alignSelf: 'flex-start',
  },
  pdtDetails: {
    flexBasis: 0,
    flexShrink: 1,
    flexGrow: 1,
  },
  img: {
    // display: 'block',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    objectFit: 'cover',
    width: '100%',
  },
  dots: {
    position: 'static',
  },
  [theme.breakpoints.down('xs')]: {
    carousel: {
      flexBasis: 'auto',
      paddingRight: 0,
      paddingBottom: theme.spacing(3),
    },
    pdtDetails: {
      flexBasis: 'auto',
    },
  },
}));

const DialogContent = withStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    // maxHeight: '60vh',
    overflowY: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    root: {
      // backgroundColor: 'pink',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      // backgroundColor: 'orange',
      maxWidth: 'lg',
      margin: theme.spacing(1),
      padding: theme.spacing(2),
    },
  },
}))(MuiDialogContent);

export default function ProductPopup(props) {
  const { product, parentCallback, images } = props;
  const {
    _id,
    name,
    alt,
    price,
    description,
    quantity,
    attribute1,
    attribute2,
    canCollect,
    canDeliver,
    sizes,
    colours,
    vendorId,
    vendorName,
    additionalPurchases,
    leadTime,
  } = product;
  const classes = useStyles();
  const dispatch = useDispatch();

  // TODO: Test if having No size/no colour will produce error
  //DIALOG ACTIONS
  const handleClose = () => {
    parentCallback();
  };
  //PRODUCT OPTIONS STATES
  const [colour, setColour] = useState(colours.length > 0 ? colours[0] : null);
  const [size, setSize] = useState(sizes.length > 0 ? sizes[0] : null);
  const [quantityBought, setQuantity] = useState(1);
  const [indivQuantity, setIndivQuantity] = useState(null);
  const allProductsInCart = useSelector((state) => {
    return state.addedProducts;
  });
  const [varNumInCart, setVarInCart] = useState(0);

  useEffect(() => {
    if (allProductsInCart === undefined) return;
    else {
      const relevantPdt = allProductsInCart.find(
        (product) => product._id === _id
      );
      // console.log(relevantPdt);
      if (relevantPdt) {
        const varExists = relevantPdt.variations.find(
          (pdt) => pdt.colour === colour && pdt.size === size
        );
        // console.log(varExists);
        if (varExists) {
          setVarInCart(varExists.quantity);
        } else {
          setVarInCart(0);
        }
      } else {
        setVarInCart(0);
      }
    }
  }, [allProductsInCart, _id, colour, size]);

  const addToCart = () => {
    // console.log('ADD TO CART');
    const newProduct = {
      ...product,
      _id: _id,
      image: images.length > 0 ? images[0] : null,
      quantity: quantityBought,
      stock: quantity,
      size: size,
      colour: colour,
    };
    delete newProduct['images'];
    delete newProduct['description'];
    delete newProduct['quantitySold'];
    // console.log(newProduct);
    dispatch(addProductToCart(newProduct));
  };

  //confirmation dialog for add to cart
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDialogResult = (continueAction) => {
    setOpen(false);
    if (continueAction) {
      addToCart();
      handleOpenSnackbar();
    }
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleOpenSnackbar = () => {
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    let indivQuantity = null;
    let i = 0;
    let j = 0;
    if (colour !== null) {
      const row = colours.indexOf(colour);
      i = row;
      if (size !== null) {
        const col = sizes.indexOf(size);
        indivQuantity = quantity[row][col];
        j = col;
      } else if (sizes.length === 0) {
        //no sizes, only colours (1st element of the array)
        indivQuantity = quantity[row][0];
        j = 0;
      }
    } else if (size !== null) {
      const col = sizes.indexOf(size);
      i = 0;
      if (colours.length === 0) {
        //no colours, only sizes
        indivQuantity = quantity[0][col];
        j = col;
      }
    } else {
      indivQuantity = quantity[0][0];
      j = 0;
    }
    if (additionalPurchases != null) {
      for (let additionalPurchase of additionalPurchases) {
        indivQuantity -= additionalPurchase[i][j];
      }
    }
    setIndivQuantity(indivQuantity);
  }, [colour, colours, quantity, size, sizes, additionalPurchases]);

  const setColourHandler = (event, newColour) => {
    if (newColour !== null) {
      setColour(newColour);
    }
  };

  const setSizeHandler = (event, newSize) => {
    if (newSize !== null) {
      setSize(newSize);
    }
  };

  // const theme = useTheme();
  // const dialogSize = useMediaQuery(theme.breakpoints.down('xs'));

  const settings = {
    dots: true, //dialogSize ? false : true,
    dotsClass: `slick-dots ${classes.dots}`,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const date1 = '14 February 2022'; 
  const date2 = '23 February 2022';

  const isValidPurchase = (date,leadTime) => { 
    const dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + leadTime);
  if (dateObj > new Date(date)) {
    return false;
  }
  return true;
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="product popup"
      open={true}
      className={classes.root}
      fullWidth={true}
      maxWidth="md" //or "lg"
      // fullScreen={dialogSize}
      scroll="body"

    >
      
      <DialogContent dividers style={{backgroundColor:"#FDFBE2",}}>
        {/* {dialogSize && (
          <Toolbar style={{ width: '100%', justifyContent: 'flex-end' }}>
            <IconButton
              edge="end"
              color="secondary"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        )} */}

        {/*
        <Vector306 style={{ zIndex:0, position:'absolute', left:"0px", bottom:"0px"}} />
        <Vector307 style={{ zIndex:0, position:'absolute', left:"0px", bottom:"0px"}} />
        <Vector308 style={{ zIndex:0, position:'absolute', left:"0px", bottom:"0px"}} />
        <Vector303 style={{ zIndex:0, position:'absolute', right:"0px", bottom:"0px"}} />
        <Vector304 style={{ zIndex:0, position:'absolute', right:"0px", bottom:"0px"}} />
        <Vector305 style={{ zIndex:0, position:'absolute', right:"0px", bottom:"0px"}} /> */}

        <Hidden smUp>
            <Grid xs={12}>
              <Typography>
                <br/>
              </Typography>
              <IconButton onClick={handleClose} style={{position:"absolute", top:"0px", right:"0px"}}>
                <CloseIcon />
              </IconButton>
            </Grid>
        </Hidden>
        
        <div className={classes.carousel}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <img key={index} className={classes.img} src={image} alt={alt} style={{zIndex:1}}/>
            ))}
          </Slider>
        </div>
        <div className={classes.pdtDetails} style={{ zIndex:"1" ,color:"#033F63",}}>
          <Hidden xsDown>
            <Grid xs={12}>
              <IconButton onClick={handleClose} style={{position:"absolute", top:"0px", right:"0px"}}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid xs={11} style={{zIndex:0 }}>
            <Typography
              // className={classes.bottomSeparator}
              variant="h4"
              component="h1"
            >
              {name}
            </Typography>
            <Typography paragraph>{description}</Typography>

            <Typography gutterBottom variant="h5" component="h2">
              ${Number.isInteger(price) ? price : price.toFixed(2)}
            </Typography>
            <div className={classes.bottomSeparator}>
              {colours.length > 0 && (
                <>
                  <Typography
                    variant="body1"
                    component="h2"
                    className={classes.pdtOptions}
                  >
                    {attribute1}
                  </Typography>
                  <ToggleButtonGroup
                    value={colour}
                    exclusive
                    onChange={setColourHandler}
                    aria-label="select attribute1 option"
                    size="small"
                  >
                    {colours.map((colour, index) => (
                      <ToggleButton key={index} value={colour}>
                        {colour}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </>
              )}
              {sizes.length > 0 && (
                <>
                  <Typography
                    variant="body1"
                    component="h2"
                    className={classes.pdtOptions}
                  >
                    {attribute2}
                  </Typography>
                  <ToggleButtonGroup
                    value={size}
                    exclusive
                    onChange={setSizeHandler}
                    aria-label="select attribute2 option"
                    size="small"
                  >
                    {sizes.map((size, index) => (
                      <ToggleButton key={index} value={size}>
                        {size}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </>
              )}
            </div>
            <Quantity
              quantity={quantityBought}
              changeState={(quantity) => setQuantity(quantity)}
            />
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
              {canCollect && canDeliver
                ? 'You can receive this product via self-collection or delivery.'
                : canCollect
                ? 'This product must be self-collected.'
                : 'This product must be delivered.'}
            </Typography>
            <br></br>

            <Typography variant="body1">
              Lead Time: {leadTime} days (For self-collection) <br></br>
              
              {/* {isValidPurchase(date1,leadTime) ? 'This product is available for collection on 14 Feb.' : 'This product is not available for collection on 14 Feb.'}
              <br></br>
              {isValidPurchase(date2,leadTime) ? 'This product is available for collection on 23 Feb.' : 'This product is not available for collection on 23 Feb.'} */}

              {/* Lead time refers to the amount of days the vendor needs to prepare the product. <br></br>
              Thus, the latest possible date of purchase will be the number of days before your indicated self-collection date.  */}

            </Typography>

            {isValidPurchase(date1,leadTime) ? <Typography style={{color:'#00FF00'}}>This product is available for collection on 14 Feb.</Typography> : <Typography style={{color:'#FF0000'}}>This product is not available for collection on 14 Feb.</Typography>}
            {isValidPurchase(date2,leadTime) ? <Typography style={{color:'#00FF00'}}>This product is available for collection on 23 Feb.</Typography> : <Typography style={{color:'#FF0000'}}>This product is not available for collection on 23 Feb.</Typography>}

            <div>
              <Grid container xs={12} style={{paddingBottom:"10px"}}>
                <Typography xs={6}>
                  <LinkButton
                    to={`/vendorpage/${vendorId}`}
                    className={classes.actionButton}
                    variant="contained"
                    style={{backgroundColor:"#28666E", color:"#FDFBE2"}}
                  >
                    View Vendor
                  </LinkButton>
                </Typography>
                <Grid xs={6} style={{minWidth:"180px"}}>
                  <Button
                    className={classes.actionButton}
                    variant="contained"
                    color="secondary"
                    onClick={handleClickOpen} //confirmation before adding to cart
                    disabled={quantityBought + varNumInCart > indivQuantity}
                    
                    // disabled
                  >
                    Add to Cart
                  </Button>
                </Grid>
              </Grid>
              


              {open && (
                <ConfirmationDialog
                  //callback
                  title="Add this product to cart?"
                  content={`${quantityBought}x ${name} ${
                    attribute1.length !== 0 ? `with ${attribute1}: ${colour}` : ''
                  } ${
                    attribute2.length !== 0 ? `and ${attribute2}: ${size}` : ''
                  }`}
                  parentCallback={handleDialogResult}
                />
              )}
              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={`${quantityBought}x ${name} ${
                  attribute1.length !== 0 ? `with ${attribute1}: ${colour}` : ''
                } ${
                  attribute2.length !== 0 ? `and ${attribute2}: ${size}` : ''
                } has been added to your cart.`}
                action={
                  <React.Fragment>
                    <IconButton
                      size="small"
                      aria-label="close"
                      color="inherit"
                      onClick={handleCloseSnackbar}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
              />
            </div>
            <Typography variant="subtitle2" component="p">
              There {indivQuantity === 1 ? 'is' : 'are'} currently{' '}
              {indivQuantity > 100 ? 'many' : indivQuantity} in stock.
            </Typography>
            <Typography variant="subtitle2" component="p">
              There {varNumInCart === 1 ? 'is' : 'are'} currently {varNumInCart}{' '}
              in your cart.
            </Typography>
          </Grid>
        </div>
      </DialogContent>
    </Dialog>
  );
}
