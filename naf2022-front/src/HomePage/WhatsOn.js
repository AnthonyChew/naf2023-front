import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCarousel from './ImageCarousel.js';
import ImageSlick from './ImageSlick.js';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Star1 } from './NAFSVG/Group 48.svg';
import { ReactComponent as Star2 } from './NAFSVG/Group 49.svg';
import { ReactComponent as Star3 } from './NAFSVG/Group 50.svg';
import Hidden from '@material-ui/core/Hidden';
import LinkButton from '../utils/LinkButton';
import Grid from '@material-ui/core/Grid';

const cardList = [
  // {
  //   title: 'Online Scavenger Hunt',
  //   desc:
  //     'Join us on an exciting adventure to find out more about NTU Arts Festival and win attractive prizes!',
  //   imgPath: 'svaghunt.jpg',
  //   path: 'contests/scavengerHunt',
  // },
  {
    title: 'Sticker Olympia Contest',
    desc:
      'Interested in designing stickers and showing them off? Wait no more and come participate!',
    imgPath: 'moments2021.png',
    path: 'contests/stickerOlympia',
  },
  // {
  //   title: 'Virtual Busking',
  //   desc:
  //     'Are you longing for some sick beats to end off a weary and dreary day at school? Look no further!',
  //   imgPath: 'busking.jpg',
  //   path: 'performances',
  // },
  {
    title: 'NAF Marketplace',
    desc:
      'A platform for small businesses by students and external vendors to share their creations with you.',
    imgPath: 'mktplace.PNG',
    path: 'marketplace',
  },
  {
    title: 'Exhibitions',
    desc:
      'Come immerse in the Arts through various interactive activities that stimulate different senses!',
    imgPath: 'exhibitions.png',
    path: 'Crest/Cascade',
  },
  {
    title: 'Surge: The Stream (Coming Soon!)',
    desc:
      'Join us for a vibrant night filled with music, dancing and more from the comfort of your own home!',
    imgPath: 'artverse.jpg',
    path: 'Surge',
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 400,
    paddingTop: 100,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      paddingTop: 20,
      marginTop: 80,
    },
  },
  qrImg: {
    backgroundColor: 'black',
    width: '100%',
  },
  card: {
    width: '30vw',
    height: '20em',
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#FFFFFF',
    // color: theme.palette.text.secondary,
  },
}));

export default function WhatsOn() {
  const classes = useStyles();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div
      id="whatson"
      // data-aos-duration="1000"
      // data-aos="fade-up"
      className={classes.root}
      style={{ backgroundColor: '#28666E' }}
    >
      {/* <OrangeLineSVG
        data-aos-duration="1500"
        data-aos="slide-right"
        data-aos-anchor="#whatson"
        style={{
          overflow: 'hidden',
          zIndex: -998,
          top: 0,
          position: 'absolute',
        }}
      /> */}
      {/* <BgSVG style={{ zIndex: -999, top: 0, position: 'absolute' }} /> */}

      <Hidden smDown>
        <Star2
          style={{ zIndex: 0, top: '10%', left: '25%', position: 'absolute' }}
        />
        <Star3
          style={{ zIndex: 0, top: '5%', left: '70%', position: 'absolute' }}
        />
        <Star1
          style={{ zIndex: 0, top: '30%', left: '5%', position: 'absolute' }}
        />
      </Hidden>

      <Hidden smDown>
        <Grid xs={12} style={{ paddingTop: '50px' }}>
          <Grid
            style={{
              backgroundColor: '#FCDB96',
              margin: 'auto',
              marginBottom: '70px',
            }}
            data-aos="fade"
            data-aos-duration="1000"
            container
            align="center"
            item
            xs={10}
            spacing={3}
          >
            <Grid
              container
              padding="20px"
              align="left"
              item
              xs={2}
              style={{ zIndex: 999, minWidth: '243px' }}
            >
              <img className={classes.qrImg} src="SQRSUCACNAFCLOSEDSURGE.png" />
              <Typography
                style={{
                  color: '#7c1a78',
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                Reference No: <br />
                SQRSUCACNAFCLOSEDSURGE
              </Typography>
            </Grid>
            <Grid item xs={8} align="left" style={{ margin: 'auto  ' }}>
              <Typography
                style={{
                  color: '#063970',
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                LUCKY DRAW WINNERS
                <br />
                1st - Hotel G 2D1N Package Staycation | fo*******ee@gmail.com
                <br />
                2nd - Air Fryer | ra*******kt@gmail.com
                <br />
                3rd - Handheld Vacuum Cleaner | qq********74@gmail.com
                <br />
                4th - JBL Wireless And Waterproof Speaker |
                sh******ng@gmail.com
                <br />
                5th - $30 Capitaland Voucher | ma**********t4@gmail.com
                <br />
                Consolation (5 prizes) - NAF T-Shirt | yu*****na@gmail.com;
                vi*********th@gmail.com; sa********ia@gmail.com;
                be********22@gmail.com; ac**************01@gmail.com;
                <br />
                TO CLAIM: Reply Winning Email in 48 Hours
                <br />
              </Typography>
              <Typography paragraph style={{ color: '#033F63' }}>
                If you are enjoying the performances, do consider donating any
                amount of money via PayLah!/PayNow by scanning the QR code. All
                donations will go to our beneficiary, the Singapore Association
                for Mental Health!
                <br />
                <br />
                Please indicate your mobile number/email address in the
                transaction remarks if you want an acknowledgment of your
                donation. We will provide the acknowledgment within 7 days of
                your donation.
                <br />
              </Typography>
            </Grid>
            <LinkButton
              size="small"
              to={`/Surge`}
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#D48C8D',
                color: '#FFFFFF',
              }}
            >
              View Surge Performance Lineup
            </LinkButton>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid
          style={{ backgroundColor: '#FCDB96', margin: 'auto' }}
          data-aos="fade"
          data-aos-duration="1000"
          container
          padding="20px"
          justify="center"
          alignItems="center"
          item
          xs={12}
        >
          <Grid
            align="center"
            item
            xs={2}
            container
            justify="center"
            style={{ paddingBottom: '20px', paddingTop: '20px' }}
          >
            <img
              alignItems="flex-start"
              style={{
                backgroundColor: 'white',
                width: '250px',
                marginTop: '20%',
                maxHeight: '250px',
              }}
              src="SQRSUCACNAFCLOSEDSURGE.png"
            />
          </Grid>
          <Grid item xs={11}>
            <Typography
              style={{ color: '#033F63' }}
              className={classes.qrDesc2}
            >
              <Typography
                style={{
                  color: '#7c1a78',
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                Reference No: <br />
                SQRSUCACNAFCLOSEDSURGE
              </Typography>
              <br />
              If you are enjoying the performances, do consider donating any
              amount of money via PayLah!/PayNow by scanning the QR code. All
              donations will go to our beneficiary, the Singapore Association
              for Mental Health!
              <br />
              <br />
              Please indicate your mobile number/email address in the
              transaction remarks if you want an acknowledgment of your
              donation. We will provide the acknowledgment within 7 days of your
              donation.
            </Typography>
            <Typography
              style={{
                color: '#063970',
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
              }}
            >
              LUCKY DRAW WINNERS
              <br />
              1st - Hotel G 2D1N Package Staycation | fo*******ee@gmail.com
              <br />
              2nd - Air Fryer | ra*******kt@gmail.com
              <br />
              3rd - Handheld Vacuum Cleaner | qq********74@gmail.com
              <br />
              4th - JBL Wireless And Waterproof Speaker |
              sh******ng@gmail.com
              <br />
              5th - $30 Capitaland Voucher | ma**********t4@gmail.com
              <br />
              Consolation (5 prizes) - NAF T-Shirt | yu*****na@gmail.com;
              vi*********th@gmail.com; sa********ia@gmail.com;
              be********22@gmail.com; ac**************01@gmail.com;
              <br />
              TO CLAIM: Reply Winning Email in 48 Hours
              <br />
            </Typography>
          </Grid>
          <LinkButton
            size="small"
            to={`/Surge`}
            style={{
              position: 'relative',
              backgroundColor: '#D48C8D',
              color: '#FFFFFF',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            View Surge Performance Lineup
          </LinkButton>
        </Grid>
      </Hidden>

      <div style={{ paddingBottom: 100, paddingTop: 20 }}>
        <Typography align="center" variant="h2" style={{ color: '#FFFFFF' }}>
          WHAT'S ON
        </Typography>
      </div>

      <ImageSlick
        imgPaddingTop="30%"
        isGreyedOut
        cardList={cardList}
      ></ImageSlick>
    </div>
  );
}
