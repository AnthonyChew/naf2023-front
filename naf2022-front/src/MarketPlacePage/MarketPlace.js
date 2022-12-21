import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import MarketPlaceHeader from './MarketPlaceHeader';
import ProductListings from './ProductListings';
import VendorCard from './VendorCard';
import SearchBar from './SearchBar';
import Filter from './Filter';
import productService from '../services/products';
import vendorService from '../services/vendors';
import { ReactComponent as BackgroundSVGTop } from './2022SVG/Vector (33).svg';
import { ReactComponent as BackgroundSVGBot } from './2022SVG/Rectangle 101.svg';
import { ReactComponent as TopRightSmallStar } from './2022SVG/TopRightSmallStar.svg';
import { ReactComponent as TopLeftStar } from './2022SVG/TopLeftStar.svg';
import { ReactComponent as Ring } from './2022SVG/Ring.svg';
import { ReactComponent as BigCircle } from './2022SVG/BigCircle.svg';
import { ReactComponent as SmallCircle } from './2022SVG/SmallCircle.svg';
import { ReactComponent as BigStarMid } from './2022SVG/BigStarMid.svg';
import { ReactComponent as StarMid } from './2022SVG/StarMid.svg';
import { ReactComponent as StarMidSmall } from './2022SVG/StarMidSmall.svg';
import Typography from '@material-ui/core/Typography';
import { trackPromise } from 'react-promise-tracker';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';

// create animations https://www.youtube.com/watch?v=JcHLxzrsRS4
const useStyles = makeStyles((theme) => ({
  root: {
    // width: '90%',
    margin: 'auto',
    // maxWidth: '1500px',
    position: 'relative',
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
  vendorView: {
    position: 'relative',
  },
  vendorCards: {
    textAlign: 'center',
  },
  productView: {
    position: 'relative',
  },
}));

function compare(sortType, a, b) {
  //console.log(sortType, a, b);
  // sort by Alphabetical order
  if (sortType === 'A-Z') {
    //console.log("A-Z");
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
  } else if (sortType === 'Z-A') {
    //console.log("Z-A");
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return -1;
    }
  }
  // sort by Recency
  else if (sortType === 'Most to least recent') {
    //console.log("Most to least recent");
    //most recent first
    if (a.date_uploaded > b.date_uploaded) {
      return -1;
    }
    if (a.date_uploaded < b.date_uploaded) {
      return 1;
    }
  } else if (sortType === 'Least to most recent') {
    //console.log("Least to most recent");
    //least recent first
    if (a.date_uploaded > b.date_uploaded) {
      return 1;
    }
    if (a.date_uploaded < b.date_uploaded) {
      return -1;
    }
  }
  // sort by Price
  else if (sortType === 'Price low to high') {
    //console.log("Price low to high");
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
  } else if (sortType === 'Price high to low') {
    //console.log("Price high to low");
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
  }

  // a must be equal to b
  return 0;
}

function MarketPlace() {
  const [products, setProducts] = useState([]);
  const [vendors, setVendors] = useState([]);
  const featuredVendors = ['NAFOfficial'];

  useEffect(() => {
    async function fetchData() {
      let res;
      res = await trackPromise(productService.getAllProducts());
      if (res.status === 200) {
        setProducts(res.data);
      }
      // }else {
      //   alert('Error loading products :(');
      // }
      res = await trackPromise(vendorService.getAllVendors());
      if (res.status === 200) {
        setVendors(res.data);
      }
      //  else {
      //   alert('Error loading vendors :(');
      // }
      // setLoading(false);
    }
    fetchData();
  }, []);

  const classes = useStyles();

  const [filter, setFilter] = useState([]); // array of filters chosen
  const [sort, setSort] = useState(false); //"A-Z, Recency, Popularity"
  const [view, setView] = useState('products'); // "products", "vendors"

  function setFilterViews(settingsData) {
    setFilter(settingsData[0]);
    setSort(settingsData[1]);
    setView(settingsData[2]);
  }

  function getFeaturedProducts() {
    let featuredProducts = [];
    for (let i = 0; i < featuredVendors.length; i++) {
      let filteredProducts = products.filter(
        (pdt) => pdt.vendorName === featuredVendors[i]
      );
      if (filteredProducts.length > 0) {
        featuredProducts = featuredProducts.concat(filteredProducts);
      }
    }
    return featuredProducts;
  }

  function getProducts() {
    let orderedProducts;
    if (filter.length !== 0) {
      orderedProducts = products.filter((product) =>
        filter.includes(product.category)
      );
    } else {
      orderedProducts = products;
    }

    //filter out featured products
    for (let i = 0; i < featuredVendors.length; i++) {
      orderedProducts = orderedProducts.filter(
        (pdt) => pdt.vendorName !== featuredVendors[i]
      );
    }

    if (sort === false) {
      return orderedProducts;
    } else {
      return orderedProducts.sort((a, b) => compare(sort, a, b));
    }
  }

  return (
    <div className={classes.root}>

      <MarketPlaceHeader view={view} />
      {view !== 'vendors' && (
        <SearchBar searchCallback={(products) => setProducts(products)} />
      )}
      <Filter isVendorLogin={false} parentCallback={setFilterViews} />
      {/* isVendorPage={false} */}
      <LoadingSpinnerComponent />
      {view === 'vendors' ? (
        <div className={classes.vendorView}>
          <div className={classes.vendorCards}>
            {vendors &&
              vendors.map((vendor) => (
                <VendorCard key={vendor._id} vendor={vendor} />
              ))}
          </div>
        </div>
      ) : (
        <div className={classes.productView}>
          <BackgroundSVGTop style={{ zIndex:-1, position:'absolute', left:"0px", top:"-100px"}} />
          <BackgroundSVGBot style={{ zIndex:-1, position:'absolute', left:"0px", top:"400px"}} />
          <TopLeftStar style={{ zIndex:0, position:'absolute', left:"0px", top:"100px"}} />
          <Ring style={{ zIndex:0, position:'absolute', left:"0px", top:"160px"}} />
          <BigCircle style={{ zIndex:0, position:'absolute', left:"130px", top:"320px"}} />
          <SmallCircle style={{ zIndex:0, position:'absolute', left:"120px", top:"440px"}} />
          <SmallCircle style={{ zIndex:0, position:'absolute', left:"80px", top:"580px"}} />
          <SmallCircle style={{ zIndex:0, position:'absolute', right:"80px", top:"790px"}} />
          <SmallCircle style={{ zIndex:0, position:'absolute', right:"30px", top:"910px"}} />
          <BigCircle style={{ zIndex:0, position:'absolute', right:"55px", top:"970px"}} />
          <BigStarMid style={{ zIndex:0, position:'absolute', right:"0px", top:"910px"}} />
          <StarMid style={{ zIndex:0, position:'absolute', right:"20px", top:"1900px"}} />
          <StarMidSmall style={{ zIndex:0, position:'absolute', right:"90px", top:"2050px"}} />
          <TopLeftStar style={{ zIndex:0, position:'absolute', left:"0px", top:"2020px"}} />
          <Ring style={{ zIndex:0, position:'absolute', left:"0px", top:"2080px"}} />
          <BigCircle style={{ zIndex:0, position:'absolute', left:"130px", top:"2240px"}} />
          <SmallCircle style={{ zIndex:0, position:'absolute', left:"120px", top:"2360px"}} />
          <SmallCircle style={{ zIndex:0, position:'absolute', left:"80px", top:"2500px"}} />
          <SmallCircle style={{ zIndex:0, position:'absolute', right:"80px", top:"2710px"}} />
          <SmallCircle style={{ zIndex:0, position:'absolute', right:"30px", top:"2830px"}} />
          <BigCircle style={{ zIndex:0, position:'absolute', right:"55px", top:"2890px"}} />
          <BigStarMid style={{ zIndex:0, position:'absolute', right:"0px", top:"2830px"}} />
          <ProductListings
            products={getProducts()}
            featured={getFeaturedProducts()}
          />
        </div>
      )}
      {/* <Typography variant="h1">heading 1</Typography>
      <Typography variant="h2">heading 2</Typography>
      <Typography variant="h3">heading 3</Typography>
      <Typography variant="h4">heading 4</Typography>
      <Typography variant="h5">heading 5</Typography>
      <Typography variant="h6">heading 6</Typography>
      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>
      <Typography variant="body1">body 1</Typography>
      <Typography variant="body2">body 2</Typography>
      <Typography variant="caption">caption</Typography>
      <Typography variant="button">button</Typography> */}
    </div>
  );
}

export default MarketPlace;
