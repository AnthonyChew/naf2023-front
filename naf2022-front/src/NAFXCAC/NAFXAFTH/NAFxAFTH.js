import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ResponsivePlayer from '../../Components/ResponsivePlayer';
import Container from '@material-ui/core/Container';
import ImageGallery from '../../Components/ImageGallery';
import BenefCard from './BenefCard';
import BuyShirtCard from './BuyShirtCard';
import ShirtGallery from './ShirtGallery';
import DonationTracker from '../../HomePage/DonationTracker';

const useStyles = makeStyles((theme) => ({
  imgResize: {
    width: 300,
    paddingTop: theme.spacing(2),
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
  about: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(1),
  },
  contactUs: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(1),
  },
  title: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(2),
  },
  paddingBottom: {
    paddingBottom: theme.spacing(12),
  },
  paddingBottom2: {
    paddingBottom: theme.spacing(2),
  },
  description: {
    textAlign: 'center',
    maxWidth: '80%',
    margin: 'auto',
    paddingBottom: theme.spacing(12),
  },
}));
const cardList = [
  {
    imgPath: 'AFTHPhoto1.jpg',
    path: 'https://naf.sg/AFTHPhoto1.jpg',
  },
  {
    imgPath: 'AFTHPhoto2.jpg',
    path: 'https://naf.sg/AFTHPhoto2.jpg',
  },
  {
    imgPath: 'AFTHPhoto3.jpg',
    path: 'https://naf.sg/AFTHPhoto3.jpg',
  },
  {
    imgPath: 'AFTHPhoto4.jpg',
    path: 'https://naf.sg/AFTHPhoto4.jpg',
  },
  {
    imgPath: 'AFTHPhoto5.jpg',
    path: 'https://naf.sg/AFTHPhoto5.jpg',
  },
  {
    imgPath: 'AFTHPhoto6.jpg',
    path: 'https://naf.sg/AFTHPhoto6.jpg',
  },
  {
    imgPath: 'AFTHPhoto7.jpg',
    path: 'https://naf.sg/AFTHPhoto7.jpg',
  },
  {
    imgPath: 'AFTHPhoto8.jpg',
    path: 'https://naf.sg/AFTHPhoto8.jpg',
  },
  {
    imgPath: 'AFTHPhoto9.jpg',
    path: 'https://naf.sg/AFTHPhoto9.jpg',
  },
];
function NAFxAFTH() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.paddedItem} style = {{color:"#033F63"}} align="center" variant="h2">
        NAF X AFTH
      </Typography>
      <Typography className={classes.about} align="center" variant="h4">
        About Arts From the Heart (AFTH)
      </Typography>
      <div data-aos="fade" data-aos-duration="1000" align="center">
        <img className={classes.imgResize} src="naf_afth_logo.png" />
      </div>
      <Typography
        className={classes.description}
        align="center"
        variant="body1"
        component="p"
      >
        Our primary aim is to help the less fortunate and do our part for the society. 
        In addition, we hope to promote the Arts through performances by our 23 CAC Member Clubs. 
        The AFTH Carnival is an annual event which NTU CAC Arts From The Heart holds to raise funds 
        for our beneficiary. The AFTH Carnival 2019 was successfully pulled off and $17,000 was raised 
        and donated to the Singapore Cancer Society (SCS). We are also honoured to be awarded People’s Choice 
        for the Social Impact Week 2020 exhibition. In view of the precautionary measures taken to tackle COVID-19, 
        we organised our first ever digital AFTH Carnival 2021: On Air! We are humbled to announce that about $7,500 
        has been raised for SCS and Singapore Association for Mental Health (SAMH) through our fundraising efforts in 
        2021. Through our efforts, we seek to not only promote the arts, but also to raise funds and increase awareness 
        for our beneficiaries. This year we are continuing our partnership with SAMH for the second consecutive year, 
        and will be having Samaritans of Singapore (SOS) on board with us as our second partner beneficiary.
      </Typography>
      <ImageGallery
        imgPaddingTop="50%"
        title="AFTH Gallery"
        cardList={cardList}
      ></ImageGallery>

      <Typography className={classes.title} align="center" variant="h4">
        Beneficiaries
      </Typography>
      <Hidden smDown>
        <Grid container>
          <Grid item align="right" xs={6}>
            <BenefCard
              cardImg={'url(https://via.placeholder.com/300x300)'}
              cardLogo="samhLogo.jpg"
              cardTitle="SAMH"
              cardDesc="This year, AFTH is partnering Singapore Association for Mental Health for the second consecutive year. We believe that with continual partnership, we can create a greater impact to our beneficiary."
              cardReadMore="https://cacafth.com/samh/"
            ></BenefCard>
          </Grid>
          <Grid item align="left" xs={6}>
            <BenefCard
              cardImg={'url(https://via.placeholder.com/300x300)'}
              cardTitle="SOS"
              cardLogo="SOSLOGO.png"
              cardDesc="This year, AFTH is glad to have Samaritans of Singapore on board with us as our partner beneficiary. With uncertainty during tough times comes a rise of mental health issues. We believe that awareness on mental health issues should be more prevalent during such periods and would love to play a part in mapping the road to resilience."
              cardReadMore="https://cacafth.com/sos/"
            ></BenefCard>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid container>
          <Grid className={classes.paddingBottom2} item align="center" xs={12}>
            <BenefCard
             cardImg={'url(https://via.placeholder.com/300x300)'}
             cardLogo="samhLogo.jpg"
             cardTitle="SAMH"
             cardDesc="This year, AFTH is partnering Singapore Association for Mental Health for the second consecutive year. We believe that with continual partnership, we can create a greater impact to our beneficiary."
             cardReadMore="https://cacafth.com/samh/"
            ></BenefCard>
          </Grid>
          <Grid item align="center" xs={12}>
          <BenefCard
              cardImg={'url(https://via.placeholder.com/300x300)'}
              cardTitle="SOS"
              cardLogo="SOSLOGO.png"
              cardDesc="This year, AFTH is glad to have Samaritans of Singapore on board with us as our partner beneficiary. With uncertainty during tough times comes a rise of mental health issues. We believe that awareness on mental health issues should be more prevalent during such periods and would love to play a part in mapping the road to resilience."
              cardReadMore="https://cacafth.com/sos/"
            ></BenefCard>
          </Grid>
        </Grid>
      </Hidden>

      <Typography className={classes.title} align="center" variant="h4">
        Year of the Year Merchandise
      </Typography>
      <Hidden smDown>
        <Grid container>
          <Grid item align="right" xs={6}>
            <ShirtGallery></ShirtGallery>
          </Grid>
          <Grid item align="left" xs={6}>
            <BuyShirtCard
              cardImg={'url(https://via.placeholder.com/300x300)'}
              cardDesc="Cultural Activities Club (CAC) Arts From The Heart is back with our annual Year-Of-The-Year sale! This year, expect a greater variety of products such as T-shirts, stickers and socks!"
            ></BuyShirtCard>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container>
          <Grid className={classes.paddingBottom2} item align="center" xs={12}>
            <ShirtGallery></ShirtGallery>
          </Grid>
          <Grid item align="center" xs={12}>
            <BuyShirtCard
              cardImg={'url(https://via.placeholder.com/300x300)'}
              cardDesc="Cultural Activities Club (CAC) Arts From The Heart is back with our annual Year-Of-The-Year sale! This year, expect a greater variety of products such as T-shirts, stickers and socks!"
            ></BuyShirtCard>
          </Grid>
        </Grid>
      </Hidden>

      <Typography className={classes.contactUs} align="center" variant="h4">
        Contact Us
      </Typography>
      <Typography align="center" variant="body1" component="p">
        cac-afth@e.ntu.edu.sg
        <br />
        Instagram: @cac_afth
        <br />
        Facebook: cacafth
        <br />
        YouTube: NTU CAC Arts From The Heart
      </Typography>
    </div>
  );
}

export default NAFxAFTH;
