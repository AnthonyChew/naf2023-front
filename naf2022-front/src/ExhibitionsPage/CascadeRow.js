import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({
  grid: {
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(10),
  },
  imgWrapper: {
    [theme.breakpoints.down('lg')]: {
      width: '200px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '200px',
    },
  },
  imgResize: {
    width: '100%',
  },

  paddedItem: {
    padding: theme.spacing(3),
  },
  bottomPadded: {
    paddingBottom: theme.spacing(5),
    backgroundColor:'#FEDC97'
  },
  TopPadded: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  title: {
    paddingBottom: theme.spacing(1),
  },
  description: {
    textAlign: 'justify',
    maxWidth: '50%',
    margin: 'auto',
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
      <Hidden smDown >
        <Grid container xs={12} style={{backgroundColor:"#FEDC97", paddingBottom:"100px"}}>
          <Grid
            xs={11}
            className={classes.grid}
            data-aos="fade"
            data-aos-duration="1000"
            container
            item
            style={{margin:"auto",}}
          >
            
            <Grid align="center" item xs={4}>
              <div className={classes.imgWrapper}>
                <img className={classes.imgResize} src={props.url} />
              </div>
            </Grid>
            <Grid item xs={7}>
              <Typography paragraph style={{ textAlign: 'justify' }}>
                {props.desc}
              </Typography>
            </Grid>
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
          <Grid className={classes.TopPadded} align="center" item xs={12}>
            <div className={classes.imgWrapper}>
              <img className={classes.imgResize} src={props.url} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography paragraph className={classes.description}>
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
