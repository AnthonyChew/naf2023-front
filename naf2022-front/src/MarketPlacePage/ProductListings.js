import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProductCard from './ProductCard';
import MobileProductCard from './MobileProductCard';
import Pagination from '@material-ui/lab/Pagination';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  listings: {
    // width: '80%',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'hidden',
  },
  
  featuredProducts: {
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mobileFeatured: {
    margin: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mobileListings: {
    // width: '80%',
    margin: 'auto',
    display:"flex",
    width:"100%",
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'hidden',
  },

  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },
  [theme.breakpoints.up('lg')]: {
    listings: {
      width: '80%',
    },
    featuredProducts: {
      width: '80%',
      margin: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));

export default function ProductListings(props) {
  const numListingsPerPage = 15;
  const classes = useStyles();
  const { products, featured } = props;
  const [page, setPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);

    //https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far
    const yOffset = -120;
    const pdtListingsTop = document.getElementById('productListings');
    const y =
      pdtListingsTop.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    // let pdtListingsTop = document.getElementById('productListings');
    // pdtListingsTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // document.getElementById('productListings').scrollTop -= 100;
  };

  //reset page back to 1 when products rerender
  useEffect(() => setPage(1), [products]);

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div>
      <Hidden smDown>
        {featured && (
            <Grid className={classes.listings}>
              {featured &&
                featured.map((pdt, index) => (
                  <ProductCard key={index} product={pdt} featured={true} />
                ))}
            </Grid>
        )}

        <div
          id="productListings"
          data-aos-duration="300"
          data-aos="zoom-in-up"
          className={classes.listings}
        >
          {products &&
            products
              .slice(
                (page - 1) * numListingsPerPage,
                (page - 1) * numListingsPerPage + numListingsPerPage
              )
              .map((pdt) => (
                <>
                  <ProductCard product={pdt} />
                </>
              ))}
        </div>
      </Hidden>

      <Hidden mdUp>
        {featured && (
            <Grid className={classes.mobileListings}>
              {featured &&
                featured.map((pdt, index) => (
                  <ProductCard key={index} product={pdt} featured={true} />
                ))}
            </Grid>
        )}

        <div
          id="productListings"
          data-aos-duration="300"
          data-aos="zoom-in-up"
          className={classes.mobileListings}
        >
          {products &&
            products
              .slice(
                (page - 1) * numListingsPerPage,
                (page - 1) * numListingsPerPage + numListingsPerPage
              )
              .map((pdt) => (
                <>
                  <ProductCard product={pdt} />
                </>
              ))}
        </div>
      </Hidden>


      <div className={classes.pagination} style={{paddingBottom:"30px"}}>
        <Pagination
          count={products && Math.ceil(products.length / numListingsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="secondary"
          size={isXsScreen ? 'small' : 'medium'}
        />
      </div>
    </div>
  );
}
