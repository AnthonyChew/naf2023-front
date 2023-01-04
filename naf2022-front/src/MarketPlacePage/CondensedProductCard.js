import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ProductPopup from './ProductPopup';
import config from '../config/env';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 180,
    margin: theme.spacing(2),
    textAlign: 'center',
    // display: 'inline-block',
  },
  [theme.breakpoints.down('md')]: {
    root: {
      width: 'auto',
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      // maxHeight: 100,
    },
    cardImg: {
      maxHeight: 100,
      width: 'auto',
      maxWidth: 100,
    },
  },
}));

export default function CondensedProductCard(props) {
  const { product } = props;
  const { name, images, price } = product;
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Card onClick={handleClickOpen}>
        <CardActionArea className={classes.content}>
          <CardMedia
            component="img"
            alt={name}
            // height="140"
            src={images && images[0]}
            title={name}
            classes={{ media: classes.cardImg }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              ${Number.isInteger(price) ? price : price.toFixed(2)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {open && (
        <ProductPopup
          //callback
          product={product}
          images={images}
          parentCallback={handleClose}
        />
      )}
    </div>
  );
}
