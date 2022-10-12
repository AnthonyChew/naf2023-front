import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ResponsivePlayer from '../Components/ResponsivePlayer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ButtonBase from '@material-ui/core/ButtonBase';

import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({
  playerWrapper: {
    [theme.breakpoints.down('md')]: {
      width: '320px',
      height: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '352px',
      height: '198px',
    },

    position: 'relative',
  },

  [theme.breakpoints.down('lg')]: {
    imgWrapper: {
      maxWidth: '500px',
    },
    imgResize: {
      width: '90%',
    },
  },
  [theme.breakpoints.up('lg')]: {
    imgResize: {
      width: '80%',
      margin: 'auto',
    },
    imgWrapper: {
      width: '550px',
    },
  },

  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
  bottomPadded: {
    paddingBottom: theme.spacing(5),
  },
  title: {
    paddingBottom: theme.spacing(1),
  },
  cardImg: {
    backgroundImage:
      'url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/444px-QR_code_for_mobile_English_Wikipedia.svg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    width: '75%',
    paddingTop: '56.25%',
  },
  description: {
    textAlign: 'justify',
    maxWidth: '50%',
    margin: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    title: {
      textAlign: 'center',
    },
    description: {
      maxWidth: '90%',
    },
  },
}));

function PerformanceRow(props) {
  const classes = useStyles();

  return (
    <div className={classes.bottomPadded}>
      <Hidden smDown>
        <Grid
          data-aos="fade"
          data-aos-duration="1000"
          container
          item
          justify="center"
          alignItems="center"
          spacing={3}
          xs={12}
        >
          <Grid item xs={4}>
            <div className={classes.imgWrapper}>
              {!props.url && (
                <img
                  className={classes.imgResize}
                  src={props.image}
                  alt="Performance"
                />
              )}
              {props.url && <ResponsivePlayer url={props.url} />}
            </div>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h4">{props.title}</Typography>
            <Typography variant="h5">{props.datetime}</Typography>
            <Typography paragraph>{props.desc}</Typography>
            {typeof props.desc2 !== 'undefined' && (
              <Typography paragraph>{props.desc2}</Typography>
            )}
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid
          data-aos="fade"
          data-aos-duration="1000"
          container
          justify="center"
          alignItems="center"
          item
          xs={12}
        >
          <Grid align="center" item xs={12}>
            <div className={classes.playerWrapper}>
              <div className={classes.imgWrapper}>
                {!props.url && (
                  <img
                    className={classes.imgResize}
                    src={props.image}
                    alt="Performance"
                  />
                )}
                {props.url && (
                  <ReactPlayer
                    className={classes.reactPlayer}
                    url={props.url}
                    width="100%"
                    height="100%"
                    controls
                  />
                )}
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography variant="h4" className={classes.title}>
                {props.title}
              </Typography>
              <Typography variant="h5" style={{ textAlign: 'center' }}>
                {props.datetime}
              </Typography>
              <Typography paragraph className={classes.description}>
                {props.desc}
              </Typography>
              {typeof props.desc2 !== 'undefined' && (
                <Typography paragraph className={classes.description}>
                  <br /> {props.desc2}
                </Typography>
              )}
            </Container>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
}

export default PerformanceRow;
