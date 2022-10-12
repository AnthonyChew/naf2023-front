import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ResponsivePlayer from '../Components/ResponsivePlayer';
import Container from '@material-ui/core/Container';
import { ReactComponent as CurvyPubSVG } from './SVG/Group 78.svg';
import Hidden from '@material-ui/core/Hidden';
import CraftKit from './CraftKit';
import StampHuntComp from './StampHuntComp';
import PubBooth from './PubBooth';
import SocialWall from './SocialWall';

const useStyles = makeStyles((theme) => ({
    header1: {
        paddingBottom: "15px",
    },

    paddedItem: {
        paddingBottom: theme.spacing(25),
      },

    paddedItem2: {
        paddingBottom: theme.spacing(33),
      },  

    paddedItem3: {
        paddingBottom: theme.spacing(32),
      }, 

    paddedItem4: {
        paddingBottom: theme.spacing(48),
      },   

    paddedItem5: {
        paddingBottom: theme.spacing(20),
      },   

    paddedItem6: {
        paddingBottom: theme.spacing(5),
      },  

    pubBoothGrid: {
        marginLeft: "10%" ,
        
    },
    eventHeadSpace:{
        marginBottom: '15px'
    },

    eventDetailSpace:{
        marginBottom: '10px'
    }
}));

function PublicityDrive(props) {
  const classes = useStyles();
  return (
    <div>
    <Hidden smDown>
      <CurvyPubSVG
        style={{
          zIndex: -999,
          left: 0,
          top: "200px",
          position: 'absolute',
          overflowY: 'hidden',
        }}
      />
    </Hidden>
    

    <Grid data-aos="fade" data-aos-duration="1000" container>
        <Grid item xs={12}  >
          <Typography
            align="center"
            variant="h2"
            style={{color:"#033F63"}}
          >
            RIPPLE
          </Typography>
          <Typography
            className= {classes.header1}
            align= "center"
            variant='h5'
            style={{color:"#033F63"}}>  
            
            Publicity Drive
          </Typography> 
        </Grid>

        <Hidden smDown>
          <Grid item xs ={7}
              style={{margin:"auto"}}
              align = "center">
              <Typography align="center" className={classes.paddedItem}>
              Ripple marks the launch of NAF, a kickstart to promote the variety of programmes we have lined up for you in NAF. There will be interactive activities both online and physically, aimed at highlighting what NAF has to offer. Come join us!
              </Typography>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs ={10}
              style={{margin:"auto"}}
              align = "center">
              <Typography align="center" className={classes.paddedItem6}>
Ripple marks the launch of NAF, a kickstart to promote the variety of programmes we have lined up for you in NAF. There will be interactive activities both online and physically, aimed at highlighting what NAF has to offer. Come join us!
              </Typography>
          </Grid>
        </Hidden>
    </Grid>
  
    <PubBooth/>
    <CraftKit/>
    <StampHuntComp/>
    <SocialWall/>
     
    </div>
  );
}

export default PublicityDrive;
