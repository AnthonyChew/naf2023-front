import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ProductPopup from './ProductPopup';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import LinkButton from '../utils/LinkButton';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    // width: '100%',
    // maxWidth: 300,
    margin: theme.spacing(2),
    textAlign: 'left',
  },
  content: {
    padding: theme.spacing(2),
    wordWrap: 'break-word',
  },
  words: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  thumbnail: {
    width: 260,
    height: 260,
    // width: 300, //'300',
    // height: 300,
    objectFit: 'cover',
    margin: 'auto',
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      width: 270,
      // width: '100%',
    },
    content: {
      padding: theme.spacing(1),
    },
    thumbnail: {
      // width: '100%',
      width: 255,
      height: 255,
    },
  },
}));

const categories = [
  { title: 'NAF Merch', colour: "#7C9885" },
  { title: 'Accessories', colour: '#7C9885' },
  { title: 'Apparel', colour: '#B5B682' },
  { title: 'Illustrations/Prints/Paintings', colour: '#28666E' },
  { title: 'Food and Beverage', colour: '#033F63' },
  { title: 'Bags', colour: '#FEDC97' },
  { title: 'Decor', colour: '#D48C8D' },
  { title: 'Masks', colour: '#BD5F75' },
  { title: 'Stationery', colour: '#90A9A6' },
  { title: 'Others', colour: '#E29E4D' },
];

export default function ProductCard(props) {
  const { product, featured } = props;
  const {
    name,
    images,
    price,
    description,
    alt,
    vendorName,
    category,
    vendorId,
    quantity,
    sizes,
    colours,
  } = product;

  const { vendor } = props;

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const noStock = (colours, sizes, quantity) => {
    //return true if no stock for ALL
    if (sizes.length == 0 && colours.length == 0) {
      if (quantity[0][0] == 0) {
        return true;
      } else return false;
    } else if (colours.length > 0 && sizes.length > 0) {
      for (let i = 0; i < colours.length; i++) {
        for (let j = 0; j < sizes.length; j++) {
          if (quantity[i][j] != 0) {
            return false;
          }
        }
      }
      return true;
    } else if (colours.length > 0 && sizes.length == 0) {
      for (let i = 0; i < colours.length; i++) {
        if (quantity[i][0] != 0) {
          return false;
        }
      }
      return true;
    } else if (sizes.length > 0 && colours.length == 0) {
      for (let i = 0; i < sizes.length; i++) {
        if (quantity[0][i] != 0) {
          return false;
        }
      }
      return true;
    }

    return false;
  };

  return (
    <div>
      <Card
        className={classes.root}
        onClick={handleClickOpen}
        style={{
          height: '540px',
          backgroundColor: '#FDFBE4',
          color: '#033F63',
        }}
      >
        <CardActionArea className={classes.content}>
          {featured && (
            <Typography
              variant="h4"
              align="center"
              style={{ '-webkit-text-stroke-width': 1 }}
            >
              FEATURED
            </Typography>
          )}
          <CardMedia
            component="img"
            alt={alt}
            // height="140"
            src={images && images[0]}
            title={alt}
            className={classes.thumbnail}
          />
          <CardContent className={classes.words} style={{ height: '400px' }}>
            <Typography gutterBottom variant="h4" component="h2" noWrap>
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${Number.isInteger(price) ? price : price.toFixed(2)}
            </Typography>
            {/*<Typography variant="body2" color="textSecondary">
              Sold by: {vendorName} 
            </Typography>*/}

            <LinkButton
              size="small"
              to={`/vendorpage/${vendorId}`}
              className={classes.actionButton}
              style={{
                position: 'relative',
                left: '-5px',
                align: 'left',
                opacity: '0.6',
              }}
              noWrap
            >
              More From : {vendorName}
            </LinkButton>

            <Typography
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                height: '73px',
              }}
            >
              {description}
            </Typography>

            {noStock(colours, sizes, quantity) ? (
              <Typography style={{ fontWeight: 'bold', color: '#800020' }}>
                OUT OF STOCK
              </Typography>
            ) : (
              <Typography>
                <br />{' '}
              </Typography>
            )}
            {category && (
              <Chip
                color="secondary"
                label={category}
                size="small"
                style={{
                  marginTop: 3,
                  backgroundColor: categories.find((x) => x.title === category)
                    .colour,
                  color: '#FDFBE2',
                }}
              />
            )}
          </CardContent>
        </CardActionArea>
      </Card>
      {open && (
        <ProductPopup
          //callback
          parentCallback={handleClose}
          product={product}
          images={images}
        />
      )}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    vendorSurcharge: PropTypes.number.isRequired,
    description: PropTypes.string,
    vendorName: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    attribute1: PropTypes.string.isRequired,
    attribute2: PropTypes.string.isRequired,
    canCollect: PropTypes.bool.isRequired,
    canDeliver: PropTypes.bool.isRequired,
    colours: PropTypes.array.isRequired,
    isPreOrder: PropTypes.bool.isRequired,
    sizes: PropTypes.array.isRequired,
    quantity: PropTypes.array.isRequired,
    leadTime: PropTypes.number.isRequired,
    vendorName: PropTypes.object.isRequired,
  }),
};
