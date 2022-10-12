// import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import HomeLogoImage from './HomeLogoImage';
import WorkshopPreview from './WorkshopPreview';
import ProductPreview from './ProductPreview';
import WhatsOn from './WhatsOn';
import DonationTracker from './DonationTracker';
import Typography from '@material-ui/core/Typography';
import EventsPreview from './EventsPreview'
import Hidden from '@material-ui/core/Hidden';

// create animations https://www.youtube.com/watch?v=JcHLxzrsRS4
// const useStyles = makeStyles((theme) => ({
//   paddedItem: {
//     padding: theme.spacing(3),
//   },
// }));

import { Alert, AlertTitle } from '@material-ui/lab';

function Home() {
  // const classes = useStyles();
  return (
    <div>

     
      {/* <DonationTracker /> */}
      {/* <Typography align="center" variant="h4">
        Art-Verse Livestream
      </Typography>
      <Typography align="center" variant="h5">
        Streamed live on 25 Mar 2021
      </Typography> */}
      {/* <HomeSVG style={{ zIndex: -999, top:'60%',position: 'absolute' }} /> */}
      <Alert variant="filled" severity="info">
        <AlertTitle>
          <strong>Thank you!!!</strong>
        </AlertTitle>
        Thank you for joining us for NAF2022! The website is currently under maintenance - stay tuned for NAF2023!
      </Alert>
      <HomeLogoImage />
      <WhatsOn />
     {/* <DonationTracker /> */}
      <EventsPreview/>
      <ProductPreview />
      <WorkshopPreview />
    </div>
  );
}

export default Home;
