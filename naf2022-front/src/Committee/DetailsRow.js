import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({
  imgWrapper: {
    [theme.breakpoints.down('lg')]: {
      width: '500px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '550px',
    },
  },
  imgResize: {
    width: '90%',
  },

  paddedItem: {
    padding: theme.spacing(3),
  },
  bottomPadded: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    
  },
  title: {
    paddingBottom: theme.spacing(1),
  },
  description: {
    textAlign: 'center',
    maxWidth: '50%',
    margin: 'auto',
  },
  [theme.breakpoints.down('xs')]: {
    description: {
      maxWidth: '90%',
    },
  },
}));

function DetailsRow(props) {
  const classes = useStyles();
  const { urls, title, desc, color, textcolor, background} = props;
  return (
    <div className={classes.bottomPadded} style={{backgroundImage:background,backgroundSize:'cover',backgroundPosition:'center', backgroundRepeat: 'no-repeat'}}>
      <Hidden mdDown>
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
          <Grid align="center" item xs={5}>
            {/* <div className={classes.imgWrapper}> */}
            {urls.map((url) => (
              <img
                key={url}
                alt={title}
                className={classes.imgResize}
                src={url}
              />
            ))}
            {/* </div> */}
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h4" style={{color:textcolor}}>{title}</Typography>
            <Typography style={{color:textcolor}} paragraph>{desc}</Typography>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden lgUp>
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
            {/* <div className={classes.imgWrapper}> */}
            {urls.map((url) => (
              <img
                key={url}
                alt={title}
                className={classes.imgResize}
                src={url}
              />
            ))}
            {/* </div> */}
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography variant="h4" style={{ textAlign: 'center' ,color:textcolor}}>
                {title}
              </Typography>
              <Typography style={{color:textcolor}} paragraph className={classes.description}>
                {desc}
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
}

export default DetailsRow;
