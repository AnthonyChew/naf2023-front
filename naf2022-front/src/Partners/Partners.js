import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { ReactComponent as Star1 } from './SVG/star1.svg';
import { ReactComponent as Star2 } from './SVG/star2.svg';
import { ReactComponent as Star3 } from './SVG/star3.svg';
import { ReactComponent as Star4 } from './SVG/star4.svg';
import { ReactComponent as Dot1 } from './SVG/dot1.svg';
import { ReactComponent as Dot2 } from './SVG/dot2.svg';
import { ReactComponent as Line1 } from './SVG/Vector 267.svg';
import { ReactComponent as Line2 } from './SVG/Vector 266.svg';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  paddedItem: {
    padding: theme.spacing(5),
    color: '#033F63',
  },
  img1: {
    maxWidth: '150px',
    width: '100%',
    maxHeight: '150px',
  },
  img2: {
    maxWidth: '500px',
    width: '100%',
  },
  img3: {
    maxWidth: '200px',
    maxHeight: '200px',
    width: '100%',
  },
  img4: {
    maxWidth: '200px',
    maxHeight: '200px',
    width: '100%',
  },
  img5: {
    maxWidth: '400px',
    width: '100%',
  },
  img6: {
    maxWidth: '700px',
    width: '100%',
  },
  img7: {
    maxWidth: '700px',
    width: '100%',
  },
  grid: {
    // margin: 'auto',
    marginBottom: theme.spacing(10),
  },
  gridTop: {
    margin: 'auto',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    backgroundImage: 'url(/partnerbg.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  description: {
    textAlign: 'center',
    maxWidth: '50%',
    margin: 'auto',
    color: '#033F63',
  },
  [theme.breakpoints.down('xs')]: {
    description: {
      maxWidth: '90%',
    },
  },
}));

function Partners() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Star1
          style={{ zIndex: 1, top: '10%', left: '10%', position: 'absolute' }}
        />
        <Star2
          style={{ zIndex: 1, top: '20%', left: '30%', position: 'absolute' }}
        />
        <Star3
          style={{ zIndex: 1, top: '13%', right: '0%', position: 'absolute' }}
        />
        <Dot1
          style={{ zIndex: 1, top: '16%', left: '10%', position: 'absolute' }}
        />
        <Dot2
          style={{ zIndex: 1, top: '18%', left: '15%', position: 'absolute' }}
        />
        <Line1
          style={{ zIndex: 1, top: '58.5%', left: '0%', position: 'absolute' }}
        />
        <Line2
          style={{ zIndex: 1, top: '64%', left: '0%', position: 'absolute' }}
        />
        <Star4
          style={{ zIndex: 1, top: '83%', right: '3%', position: 'absolute' }}
        />
      </Hidden>

      <Typography className={classes.paddedItem} align="center" variant="h2">
        {'Sponsors & Supporters'}
      </Typography>
      <Typography align="center" paragraph className={classes.description}>
        A big thank you to all our valued sponsors and supporters for your
        contributions!
      </Typography>

      <Grid
        data-aos="fade"
        data-aos-duration="1000"
        container
        item
        justify="center"
        alignItems="flex-start"
        xs={12}
        spacing={3}
        className={classes.gridTop}
      >
        <Grid
          align="center"
          item
          xs={12}
          className={classes.grid}
          style={{ paddingTop: 50 }}
        >
          <Typography
            variant="h4"
            style={{ color: '#033F63', fontWeight: 'bold' }}
          >
            ORGANISED BY
          </Typography>
          <img className={classes.img1} src="cac-logo-original.png" />
        </Grid>

        <Grid align="center" item xs={12} className={classes.grid}>
          <Typography
            variant="h4"
            style={{ color: '#033F63', fontWeight: 'bold' }}
          >
            POWERED BY <br />
            <br />
          </Typography>
          <img className={classes.img2} src="POWERED.png" />
        </Grid>

        <Grid align="center" item xs={6} className={classes.grid}>
          <Typography
            variant="h4"
            style={{ color: '#033F63', fontWeight: 'bold' }}
          >
            SUPPORTED BY <br />
            <br />
          </Typography>
          <img className={classes.img3} src="SUPPORT.png" />
        </Grid>

        <Grid align="center" item xs={6} className={classes.grid}>
          <Typography
            variant="h4"
            style={{ color: '#033F63', fontWeight: 'bold' }}
          >
            OFFICAL PRODUCTION PARTNER <br />
            <br />
          </Typography>
          <img className={classes.img4} src="PRODUCTION.png" />
        </Grid>

        <Grid align="center" item xs={12} className={classes.grid}>
          <Typography
            variant="h4"
            style={{ color: '#033F63', fontWeight: 'bold' }}
          >
            {' '}
            SPONSORED BY <br />
          </Typography>
          <br></br>
          <br></br>
          <Grid
            style={{ zIndex: 5 }}
            container
            justify="center"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid style={{ zIndex: 5 }} item xs={12}>
              <Typography
                variant="h4"
                style={{
                  color: '#033F63',
                  textDecoration: 'underline',
                  fontWeight: 'normal',
                }}
              >
                Platinum Sponsors
                <br />
              </Typography>
              <img
                className={classes.img5}
                style={{ zIndex: 5 }}
                src="PLATINUM.png"
              />
            </Grid>
            <Grid style={{ zIndex: 5 }} item xs={12}>
              <Typography
                variant="h4"
                style={{
                  color: '#033F63',
                  textDecoration: 'underline',
                  fontWeight: 'normal',
                }}
              >
                Gold Sponsors
                <br />
              </Typography>
              <img
                className={classes.img6}
                style={{ zIndex: 5 }}
                src="GOLD.png"
              />
            </Grid>
            <Grid style={{ zIndex: 5 }} item xs={12}>
              <Typography
                variant="h4"
                style={{
                  color: '#033F63',
                  textDecoration: 'underline',
                  fontWeight: 'normal',
                }}
              >
                Silver Sponsors
                <br />
              </Typography>
              <img
                className={classes.img7}
                style={{ zIndex: 5 }}
                src="NAF SILVER SPONSORS-01.png"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Partners;
