import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CartCard from './CartCard';
import { ReactComponent as BackgroundSVG } from './CartSVG/Background.svg';
import { ReactComponent as LinesSVG } from './CartSVG/Lines.svg';
import { ReactComponent as BottomGalaxySVG } from './CartSVG/BottomGalaxy.svg';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { orange } from '@material-ui/core/colors';
import authService from '../services/auth';
import { resetCart } from '../reducers/CartReducer';
import { useHistory, Link } from 'react-router-dom';
import ConfirmationDialog from '../Components/ConfirmationDialog';
import UserLogin from '../Authentication/UserLogin';

// create animations https://www.youtube.com/watch?v=JcHLxzrsRS4
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  content: {
    textAlign: 'center',
    width: '90%',
    margin: 'auto',
    paddingTop: theme.spacing(16),
  },
  header: {
    color: "#033F63",
    marginBottom: theme.spacing(10),
  },
  cartCards: {
    marginTop: theme.spacing(2),
  },
  total: {
    flexGrow: 1,
    padding: theme.spacing(2),
    position: 'relative',
    paddingBottom: theme.spacing(10),
  },
  totalText: {
    paddingRight: '5%',
    color: "#fff",
  },
  button: {
    marginRight: '5%',
    fontWeight: "bold",
    color: theme.palette.common.white,
    backgroundColor: "#D48C8D",
    '&:hover': {
      backgroundColor: "##d46667",
    },
    float: 'right',
  },
  subtitles: {
    color: "#fff"
  }
}));

function ShoppingCart() {
  const classes = useStyles();
  const state = useSelector((state) => {
    // console.log(state);
    return state;
  });
  const dispatch = useDispatch();
  const products = state.addedProducts;
  const total = state.total.toFixed(2);
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(true);
  const history = useHistory();

  const postOrder = async () => {
    const res = await authService.checkAuthStudent();
    if (res.status === 401) {
      setAuth(false);
    } else if (res.status === 200) {
      history.push('/Payment');
    }
  };

  const handleLoginClose = () => {
    setAuth(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDialogResult = (continueAction) => {
    setOpen(false);
    if (continueAction) {
      clearCart();
    }
  };

  const clearCart = () => {
    dispatch(resetCart());
  };

  return (
    <div className={classes.root}>
      {!auth && <UserLogin parentCallback={handleLoginClose} />}

        <LinesSVG style={{ zIndex: -1, top: '350', left: '0%', position: 'absolute' }} />
        <BottomGalaxySVG style={{ zIndex: -1, top: '1300', left: '5%', position: 'absolute' }} />
        <BackgroundSVG
            data-aos="slide-right"
            data-aos-duration="1000"
            style={{
              zIndex: -999,
              top: 65,
              left: 0,
              position: 'absolute',
              overflowY: 'hidden',
            }}
        />
      <div className={classes.content}>
        <header className={classes.header}>
          <Typography variant="h2">YOUR CART</Typography>
          <Typography variant="h5" paragraph style={{fontWeight:"bolder"}}>
          ARE YOU READY TO CHECK OUT YOUR ITEMS?
        </Typography>
        </header>
        <Typography paragraph className={classes.subtitles}>
          You have {products.length} item(s) in your cart.
        </Typography>
        {products.length === 0 && (
          <Typography paragraph className={classes.subtitles}>
            Take a look at our{' '}
            <Link to="/marketplace" variant="contained">
              marketplace
            </Link>
            !
          </Typography>
        )}
        <Button
          variant="contained"
          disabled={products.length === 0}
          onClick={handleClickOpen}
        >
          Clear Cart
        </Button>
        {open && (
          <ConfirmationDialog
            //callback
            title="Remove all products from your cart?"
            content="All products will be removed from your cart. This action cannot be undone"
            parentCallback={handleDialogResult}
          />
        )}
        <Button
          variant="contained"
          component={Link}
          to="/marketplace"
          style={{marginLeft: 10}}
        >
          Back to Marketplace
        </Button>
        <Grid container spacing={2} className={classes.cartCards}>
          {products &&
            products.map((product, i) => {
              return product.variations.map((variation, j) => (
                <CartCard
                  key={i * product.variations.length + j}
                  product={variation}
                  stock={product.stock}
                />
              ));
            })}
        </Grid>
      </div>
      <div id="total" className={classes.total}>
        <Typography className={classes.totalText} align="right" variant="h4">
          Total: ${total}
        </Typography>
        <Button
          variant="contained"
          className={classes.button}
          disabled={products.length === 0}
          onClick={postOrder}
        >
          Checkout
        </Button>

      </div>
    </div>
  );
}

export default ShoppingCart;
