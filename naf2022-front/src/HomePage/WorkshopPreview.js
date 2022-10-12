import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WorkShopsCards from './WorkShopsCards';
import { ReactComponent as Workshop1} from './NAFSVG/workshop1.svg';
import { ReactComponent as Workshop2} from './NAFSVG/workshop2.svg';
import homeService from '../services/home';
import Hidden from '@material-ui/core/Hidden';
import { ReactComponent as Star4} from './NAFSVG/star4.svg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    paddingBottom: theme.spacing(35),
    maxWidth: '100vw',
    margin: 'auto',
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

export default function WorkshopPreview() {
  const classes = useStyles();
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await homeService.getWorkshops();
      if (res.status === 200) {
        setWorkshops(res.data);
      }
      //  else {
      //   alert('Error loading workshops :(');
      // }
    }
    fetchData();
  }, []);
  return (
    <div
      id="workshopPreview"
      className={classes.root}
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{backgroundColor:'#D48C8D'}}
    >

      <Hidden smDown>   
      <Workshop1 style={{ zIndex: -999, top:'0%',right:'0%', position: 'absolute'}}/>
      <Workshop2
      style={{ zIndex:-999, bottom:'0%',left:'0%', position: 'absolute'}}/>
      </Hidden>
    
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography align="center" variant="h2" style={{color:"#FFFFFF",marginTop:'50px'}}>
            Workshops
          </Typography>
          <Typography paragraph className={classes.description} style={{color:"#FFFFFF"}}>
            Explore our professionally-led and diverse workshops and discover your
            hidden artistic talents.<br/>Click more to explore all of our available
            workshops and find the one perfect for you.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <WorkShopsCards workshops={workshops} />
        </Grid>
      </Grid>
    </div>
  );
}
