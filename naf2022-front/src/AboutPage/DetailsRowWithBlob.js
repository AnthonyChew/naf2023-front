import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { ReactComponent as YellowPurpleDropletSVG } from './About Festival SVGs/YellowPurpleDroplet.svg';
import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({
  imgWrapper: {
    [theme.breakpoints.down('lg')]: {
      width: '250px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '300px',
    },
  },
  svgWrapper: {
    [theme.breakpoints.down('lg')]: {
      width: '250px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '300px',
    },
    height: '70px',
  },
  imgResize: {
    width: '100%',
  },

  paddedItem: {
    padding: theme.spacing(3),
  },
  bottomPadded: {
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#7C9885'
  },
  },
  title: {
    paddingBottom: theme.spacing(1),
  },

  description: {
    maxWidth: '50%',
    margin: 'auto',
    textAlign: 'justify',
  },
  [theme.breakpoints.down('sm')]: {
    description: {
      maxWidth: '90%',
    },
  },
}));

function DetailsRow(props) {
  const classes = useStyles();
  return (
    <div className={classes.bottomPadded}>
      <Hidden mdDown>
        <Grid
          container
          item
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Grid align="center" item xs={6}>
            <div className={classes.imgWrapper}>
              <img className={classes.imgResize} src={props.url} />
            </div>
            
          </Grid>
          <Grid item xs={3}>
            <Typography style={{color:'#FDFBE2'}} paragraph>{props.desc}</Typography>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Hidden>

      <Hidden lgUp>
        <Grid
          container
          justify="center"
          alignItems="center"
          item
          xs={12}
        >
          <Grid align="center" item xs={12}>
            <div className={classes.imgWrapper}>
              <img className={classes.imgResize} src={props.url} />
            </div>
           
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography style={{color:'#FDFBE2'}}  paragraph className={classes.description}>
                {props.desc}
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
}

export default DetailsRow;
