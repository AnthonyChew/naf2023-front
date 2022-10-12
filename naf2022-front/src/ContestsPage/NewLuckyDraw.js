import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ButtonBase from '@material-ui/core/ButtonBase';
import { ReactComponent as YellowBigSVG } from './SVG/Group 43.svg';
import { ReactComponent as BottomBackgroundSVG } from './SVG/LuckyDraw/BottomBackground.svg';
import { ReactComponent as StarsTopSVG } from './SVG/LuckyDraw/StarsTop.svg';
import { ReactComponent as StarsMiddleRightSVG } from './SVG/LuckyDraw/StarsMiddleRight.svg';
import { ReactComponent as StarsBottomLeftSVG } from './SVG/LuckyDraw/StarsBottomLeft.svg';
import { ReactComponent as StarsBottomRightSVG } from './SVG/LuckyDraw/StarsBottomRight.svg';
import { ReactComponent as CircleMiddleLeftSVG } from './SVG/LuckyDraw/CircleMiddleLeft.svg';
import { ReactComponent as LinesBottomLeftSVG } from './SVG/LuckyDraw/LinesBottomLeft.svg';
import { relativeTimeRounding, relativeTimeThreshold } from 'moment';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  title: {
    color: '#033F63',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  shapeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  shape: {
    backgroundColor: '#D48C8D',
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  grid: {
    padding: theme.spacing(15),
    margin: 'auto',
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
  bottomPaddedItem: {
    paddingBottom: theme.spacing(2),
  },
  prizetxt: {
    color: 'white',
    backgroundColor: '#D48C8D',
    marginRight: theme.spacing(5),

    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  eachPrizetxt: {
    color: '#B5B682',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em',
    },
  },
  eachWorthtxt: {
    color: '#033F63',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
  },
  prizeNum: {
    marginRight: theme.spacing(5),
  },
  itemtxt: {
    color: 'white',
    backgroundColor: '#D48C8D',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  description: {
    color: 'white',
    textAlign: 'center',
    maxWidth: '50%',
    margin: 'auto',
    paddingBottom: theme.spacing(10),
  },
  consolationtxt: {
    color: '#B5B682',

    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
  },
  [theme.breakpoints.down('xs')]: {
    description: {
      maxWidth: '90%',
    },
  },
  [theme.breakpoints.down('xs')]: {
    prizetxt: {
      marginRight: theme.spacing(1),
    },
  },
  bottomContainer: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#7c9985',
    },
  },
  prizeimg: {
    width: '100%',
    padding: 20,
    [theme.breakpoints.down('xs')]: {
      '&#prize2': {
        width: '80%',
      },
    },
    [theme.breakpoints.up('sm')]: {
      '&#prize2': {
        width: '70%',
        height: '95%',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
      },
      '&#prize6': {
        width: '125%',
        position: 'relative',
        transform: 'translateX(-10%)',
      },
    },
  },
}));

const items = [
  {
    prize: '1st',
    itemtxt: 'Hotel G 2D1N Package Staycation',
    itemWorthtxt: 'Worth $357++',
    itemImgURL: 'ld_hotel.png',
    itemImgAlt: 'prize1',
  },
  {
    prize: '2nd',
    itemtxt: 'Air Fryer',
    itemWorthtxt: '',
    itemImgURL: 'ld_airfryer.png',
    itemImgAlt: 'prize2',
  },
  {
    prize: '3rd',
    itemtxt: 'Handheld Vacuum Cleaner',
    itemWorthtxt: '',
    itemImgURL: 'ld_vacuum.png',
    itemImgAlt: 'prize3',
  },
  {
    prize: '4th',
    itemtxt: 'JBL Wireless & Waterproof Speaker',
    itemWorthtxt: '',
    itemImgURL: 'ld_jbl.png',
    itemImgAlt: 'prize4',
  },
  {
    prize: '5th',
    itemtxt: '$30 Capitaland Voucher',
    itemWorthtxt: '',
    itemImgURL: 'ld_voucher.png',
    itemImgAlt: 'prize5',
  },
];
const tShirt = {
  prize: 'Consolation Prizes',
  itemtxt: 'NAF T-Shirt',
  itemWorthtxt: '',
  itemImgURL: 'ld_tshirt.png',
  itemImgAlt: 'prize6',
};
function LuckyDraw(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden mdDown>
        <CircleMiddleLeftSVG
          style={{
            zIndex: 0,
            top: '990',
            left: '13%',
            transform: 'scale(1.5)',
            position: 'absolute',
          }}
        />
        <StarsTopSVG
          style={{ zIndex: 0, top: '-200', left: '0%', position: 'absolute' }}
        />
        <StarsMiddleRightSVG
          style={{
            zIndex: 0,
            top: '350',
            right: '8%',
            transform: 'scale(1.5)',
            position: 'absolute',
          }}
        />
      </Hidden>

      <Typography align="center" variant="h2" className={classes.title}>
        LUCKY DRAW
      </Typography>
      {/* <Typography className={classes.description} paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor. Amet cursus sit amet dictum sit amet.
      </Typography> */}

      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={3}>
            <Typography align="center" className={classes.prizetxt}>
              Prize
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography align="center" className={classes.itemtxt}>
              Item
            </Typography>
          </Grid>
          {items.map((item, index) => {
            return (
              <>
                <Grid item xs={3}>
                  <Typography
                    align="center"
                    variant="h3"
                    className={classes.eachPrizetxt}
                  >
                    {item.prize}
                  </Typography>
                </Grid>
                <Grid container item xs={9}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    item
                    xs={6}
                  >
                    <Typography
                      align="center"
                      variant="h4"
                      className={classes.eachWorthtxt}
                    >
                      {item.itemtxt}
                    </Typography>
                    <Typography
                      align="center"
                      variant="subtitle1"
                      className={classes.eachWorthtxt}
                    >
                      {item.itemWorthtxt}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: 'center' }}>
                    <img
                      id={item.itemImgAlt}
                      src={item.itemImgURL}
                      alt={item.itemImgAlt}
                      className={classes.prizeimg}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  {' '}
                  <Divider />
                </Grid>
              </>
            );
          })}
          <Grid item xs={3}>
            <Typography
              align="center"
              variant="h4"
              className={classes.consolationtxt}
            >
              {tShirt.prize}
            </Typography>
          </Grid>
          <Grid container item xs={9}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              item
              xs={6}
            >
              <Typography
                align="center"
                variant="h4"
                className={classes.eachWorthtxt}
              >
                {tShirt.itemtxt}
              </Typography>
              <Typography
                align="center"
                variant="subtitle1"
                className={classes.eachWorthtxt}
              >
                {tShirt.itemWorthtxt}
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'center' }}>
              <img
                id={tShirt.itemImgAlt}
                src={tShirt.itemImgURL}
                alt={tShirt.itemImgAlt}
                className={classes.prizeimg}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <div id="rightOrange" className={classes.bottomContainer}>
        <Hidden smDown>
          <BottomBackgroundSVG
            data-aos="slide-right"
            data-aos-duration="1000"
            style={{
              zIndex: -1,
              top: 20,
              height: 1250,
              position: 'absolute',
              overflowY: 'hidden',
            }}
          />
          <StarsBottomLeftSVG
            style={{
              zIndex: -1,
              bottom: '58',
              left: '1%',
              position: 'absolute',
            }}
          />
          <StarsBottomRightSVG
            style={{
              zIndex: -1,
              top: '130',
              right: '0%',
              position: 'absolute',
            }}
          />

          <LinesBottomLeftSVG
            style={{
              zIndex: -1,
              bottom: '-44',
              left: '-1%',
              position: 'absolute',
            }}
          />
        </Hidden>
        <div style={{ paddingTop: '10em' }}></div>
        {/* <YellowBigSVG
          style={{
            overflow: 'hidden',
            zIndex: -998,
            top: 0,
            left: 0,
            position: 'absolute',
          }}
        /> */}

        <Container maxWidth="md" style={{ zIndex: 2, paddingBottom: '10em' }}>
          <div className={classes.shapeContainer}>
            <div className={classes.shape}>
              <Typography align="center" color="primary" variant="h4">
                1
              </Typography>
            </div>
          </div>
          <Typography className={classes.description} paragraph>
            <br />
            <b>
              Every workshop attended will entitle you to 1 chance in the Lucky
              Draw
            </b>
          </Typography>

          <div className={classes.shapeContainer}>
            <div className={classes.shape}>
              <Typography align="center" color="primary" variant="h4">
                2
              </Typography>
            </div>
          </div>
          <Typography className={classes.description} paragraph>
            <br />
            <b>
              Successful completion and submission of Stamp Hunt pamphlets will
              entitle you to a maximum of 1 chance per pax in the Lucky Draw.{' '}
            </b>
          </Typography>

          <div className={classes.shapeContainer}>
            <div className={classes.shape}>
              <Typography align="center" color="primary" variant="h4">
                3
              </Typography>
            </div>
          </div>
          <Typography className={classes.description} paragraph>
            <br />
            <b>
              Every $10 spent in the Online Marketplace will entitle you to 1
              chance in the Lucky Draw
            </b>
            <br />
            <br />
            Please note that only purchases made before 5.30 pm on 23 February
            2022 will be considered.
          </Typography>

          <div className={classes.shapeContainer}>
            <div className={classes.shape}>
              <Typography align="center" color="primary" variant="h4">
                4
              </Typography>
            </div>
          </div>
          <Typography className={classes.description} paragraph>
            <br />
            <b>
              Every sticker design submission for Sticker Olympia Contest will
              entitle you to 1 chance in the Lucky Draw.
            </b>
          </Typography>
        </Container>
      </div>
    </div>
  );
}

export default LuckyDraw;
