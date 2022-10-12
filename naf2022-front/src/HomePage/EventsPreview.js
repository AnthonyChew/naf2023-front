import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EventsCards from './EventsCards';
import Hidden from '@material-ui/core/Hidden';
import { ReactComponent as Star3} from './NAFSVG/star3.svg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // padding: theme.spacing(2),
    position: 'relative',
    paddingBottom:theme.spacing(10),
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function EventsPreview() {
  const classes = useStyles();

  return (
    <div id="eventsPreview"  data-aos-duration="1000" data-aos="fade-up" className={classes.root}  
    style={{backgroundColor:'#FEDC97'}}>
      {/* <EventSVG1 data-aos="slide-left"  data-aos-duration="1000" data-aos-anchor="#eventsPreview" style={{ zIndex: -999,top: 0,
        position: 'absolute' }}/>
      <PurpleSVG data-aos="slide-right"  data-aos-duration="1000" data-aos-anchor="#eventsPreview" style={{ zIndex: -999,bottom:0, left:300,
        position: 'absolute' }}/> */}
      {/* <EventsSVG style={{ zIndex: -999, top: 50,position: 'absolute' }} /> */}
      <Hidden smDown>   
      <Star3 style={{ zIndex: -999, top:'0',right:'0%', position: 'absolute'}}/>
      </Hidden>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <br></br>
          <br></br>
          <Typography align="center" variant="h2" style={{color:"#033F63"}} >Events</Typography>
        </Grid>
        <Grid item xs={12}>
          <EventsCards />
        </Grid>

      </Grid>
    </div>
  );
}