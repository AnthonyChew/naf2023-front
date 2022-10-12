import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageSlick from './ImageSlick.js';
import Typography from '@material-ui/core/Typography';
import homeService from '../services/home';
import Hidden from '@material-ui/core/Hidden';
import { ReactComponent as Star4} from './NAFSVG/star4.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 400,
    paddingTop: 100,
    position: 'relative',
  },
  card: {
    width: '30vw',
    height: '20em',
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  description: {
    textAlign: 'center',
    maxWidth: '50%',
    margin: 'auto',
  },
  [theme.breakpoints.down('xs')]: {
    description: {
      maxWidth: '90%',
    },
  },
}));

export default function WhatsOn() {
  const classes = useStyles();
  const [featuredPdts, setFeaturedPdts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await homeService.getProducts();
      if (res.status === 200) {
        const products = res.data;
        // console.log(products);
        const NAFProductIndex = products.findIndex(
          (product) => product.title === 'NAFOfficial'
        );
        const NAFProduct = products[NAFProductIndex];
        delete products[NAFProductIndex];
        products.unshift(NAFProduct);
        setFeaturedPdts(products);
      }
      //  else {
      //   alert('Error loading products :(');
      // }
    }
    fetchData();
  }, []);
  return (
    <div
      id="whatson"
      data-aos-duration="1000"
      data-aos="fade-up"
      className={classes.root}
      style={{backgroundColor:'#B5B682'}}
    >

      <Hidden smDown>   
        <Star4
        style={{ zIndex:-999, top:'0%',left:'0%', position: 'absolute'}}/>
      </Hidden>
      <div style={{ paddingBottom: 100, paddingTop: 20 }}>
        <Typography align="center" variant="h2" style={{color:'#FFFFFF'}}>
          Online Marketplace
        </Typography>
        <Typography align="center"  className={classes.description} style={{color:'#FFFFFF'}} paragraph>
          Check our array of artistic creations specially curated by NTU
          entrepreneurs and external vendors! Every $10 spent entitles you
          to a chance at a lucky draw!
        </Typography>
      </div>

      <ImageSlick
        imgPaddingTop="30%"
        isGreyedOut
        cardList={featuredPdts}
      ></ImageSlick>
    </div>
  );
}
