import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import MarketPlaceHeader from './MarketPlaceHeader';
import ProductListings from './ProductListings';
import SearchBar from './SearchBar';
// import Filter from './Filter';
import Avatar from '@material-ui/core/Avatar';
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
import vendorService from '../services/vendors';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';

// create animations https://www.youtube.com/watch?v=JcHLxzrsRS4
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
  vendorDetails: {
    position: 'relative',
  },
  vendorDetailsContent: {
    width: '60%',
    maxWidth: '900px',
    marginTop: theme.spacing(6),
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  productListings: {
    position: 'relative',
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));

function VendorPage(props) {
  const classes = useStyles();
  const [vendor, setVendor] = useState(null);

  // const [view, setView] = useState('products'); // "products", "vendors"

  // function setViews(settingsData) {
  //   // console.log(settingsData);
  //   // setFilter(settingsData[0]);
  //   setView(settingsData[1]);
  // }
  const contactNumber = vendor && vendor.contactNumber;
  const emailAddress = vendor && vendor.emailAddress;
  const instagramAccount = vendor && vendor.instagramAccount;
  const website = vendor && vendor.website;

  useEffect(() => {
    async function getVendorData() {
      const vendorId = props.match.params.id;
      const res = await trackPromise(vendorService.getVendor(vendorId));
      if (res.status === 200) {
        setVendor(res.data);
      } else {
        alert('Error getting vendor data');
      }
    }
    getVendorData();
  }, []);
  return (
    <div className={classes.root}>


      <MarketPlaceHeader view="vendorpage" />
      <SearchBar />
      {/* <Filter isVendorPage={true} parentCallback={setViews} /> */}
      <LoadingSpinnerComponent/>
      <div id="vendorDetails" className={classes.vendorDetails}>
        <div className={classes.vendorDetailsContent}>
          {/* <div style={{ display: 'inline-block' }}>
            <Avatar
              alt="Vendor Avatar"
              src={require('../img/FinalNAF2021Logo_TransparentBG.png')}
              className={classes.avatar}
            />
          </div> */}

          <Typography
            className={classes.paddedItem}
            variant="h5"
            component="h3"
            align="center"
          >
            {vendor && vendor.displayName}
          </Typography>
          <Typography paragraph>{vendor && vendor.description}</Typography>
          {contactNumber ? (
            <Typography paragraph>Contact number: {contactNumber}</Typography>
          ) : null}
          {emailAddress ? (
            <Typography paragraph>Email address: {emailAddress}</Typography>
          ) : null}
          {instagramAccount ? (
            <Typography paragraph>Social media: {instagramAccount}</Typography>
          ) : null}
          
        </div>
      </div>
      <div className={classes.productListings}>
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
          id="productListings"
          products={vendor && vendor.products}
        />
        
      </div>
    </div>
  );
}

export default VendorPage;
