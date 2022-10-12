import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Quantity from '../utils/Quantity';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import { useConfirm } from 'material-ui-confirm';
import ConfirmationDialog from '../Components/ConfirmationDialog';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import {
  removeProductFromCart,
  changeQtyInCart,
} from '../reducers/CartReducer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    maxWidth: 900,
    margin: 'auto',
    border: '2px solid',
    borderColor: '#b35699',
    color: '#033F63',
    backgroundColor: "#F0F0F0",
    textAlign: 'right', //align close button
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  [theme.breakpoints.down('xs')]: {
    content: {
      flexDirection: 'column',
    },
  },
  closeButton: {
    padding: 0,
  },
  cover: {
    width: '30%',
    maxWidth: 250,
    width: '80%',
    margin: 'auto',
  },
  details: {
    padding: theme.spacing(2),
    // flexDirection: 'column',
    color: "#033F63",
    gridRow: 2,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'repeat(5, auto)',
    rowGap: '6px',
    justifyItems: 'start',
  },
  pdtName: {
    gridColumn: '1 / 4',
    gridRow: 1,
  },
  pdtOptionName: {
    gridColumn: 1,
    gridRow: 2,
  },
  pdtOptionQty: {
    gridColumn: 2,
    gridRow: 2,
    justifySelf: 'center',
  },
  pdtOptionPrice: {
    gridColumn: 3,
    gridRow: 2,
    justifySelf: 'end',
  },
  pdtSize: {
    gridColumn: '1 / 4',
    gridRow: 3,
  },
  pdtQty: {
    gridColumn: '1 / 4',
    gridRow: 4,
    display: 'flex',
    alignItems: 'center',
  },
  pdtSubtotal: {
    gridColumn: 3,
    gridRow: 5,
    justifySelf: 'end',
    borderTop: '1px solid',
    paddingTop: '5px',
  },
  buttonStyling: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      width: '100%',
    },
  },
}));

export default function CartCard(props) {
  const { product } = props;
  // console.log(product);
  const {
    _id,
    quantity,
    name,
    size,
    colour,
    image,
    price,
    attribute1,
    attribute2,
  } = product;
  const stock = props.stock;
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [subTotal, setSubTotal] = useState('');

  useEffect(() => {
    const subTotal = (price * quantity).toFixed(2);
    setSubTotal(subTotal);
  }, [price, quantity]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDialogResult = (continueAction) => {
    setOpen(false);
    if (continueAction) {
      removeItem();
    }
  };

  const setQuantity = (type) => {
    if (type === 'DECREASE' && product.quantity === 1) {
      handleClickOpen(); //open confirmation dialog
    } else {
      dispatch(changeQtyInCart(product, type, stock));
    }
  };

  const removeItem = () => {
    dispatch(removeProductFromCart(_id, size, colour));
  };

  return (
    <Card className={classes.root} variant="outlined">
      <IconButton
        aria-label="remove item from cart"
        className={classes.closeButton}
        onClick={handleClickOpen}
      >
        <CloseIcon />
      </IconButton>
      {open && (
        <ConfirmationDialog
          //callback
          title="Remove product from cart?"
          content={`Are you sure you want to remove "${quantity}x ${name} ${
            attribute1.length !== 0 ? `with ${attribute1}: ${colour}` : ''
          }${
            attribute2.length !== 0 ? ` and ${attribute2}: ${size}` : ''
          }" from your cart?`}
          parentCallback={handleDialogResult}
        />
      )}
      <div className={classes.content}>
        <CardMedia
          component="img"
          className={classes.cover}
          alt={name}
          src={image}
          title={name}
        />
        <CardContent className={classes.details}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.pdtName}
          >
            {name}
          </Typography>

          {colour && (
            <Typography
              variant="body2"
              component="p"
              className={classes.pdtOptionName}
            >
              {attribute1}: {colour} ($
              {Number.isInteger(price) ? price : price.toFixed(2)})
            </Typography>
          )}
          <Typography
            variant="body2"
            component="p"
            className={classes.pdtOptionQty}
          >
            x{quantity}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.pdtOptionPrice}
          >
            ${subTotal}
          </Typography>
          {size && (
            <Typography
              variant="body2"
              component="p"
              className={classes.pdtSize}
            >
              {attribute2}: {size}
            </Typography>
          )}
          <Quantity
            quantity={quantity}
            changeRedux={(type) => setQuantity(type)}
          />

          <Typography
            variant="body2"
            className={classes.pdtSubtotal}
            component="h5"
          >
            Subtotal: ${subTotal}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
