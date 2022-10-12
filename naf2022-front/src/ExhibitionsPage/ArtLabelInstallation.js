import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Vector285 } from './SVG/Vector 285.svg';
import { ReactComponent as Vector286 } from './SVG/Vector 286.svg';
import { ReactComponent as Vector287 } from './SVG/Vector 287.svg';
import { ReactComponent as Group87 } from './SVG/Group 87.svg';
import { ReactComponent as Group89 } from './SVG/Group 89.svg';
import { ReactComponent as Ellipse113 } from './SVG/Ellipse 113.svg';
import { ReactComponent as Ellipse115 } from './SVG/Ellipse 115.svg';
import { ReactComponent as UnityStarRight } from './SVG/UnityStarRight.svg';
import { ReactComponent as UnityStarGreen } from './SVG/UnityStarGreen.svg';
import { ReactComponent as UnityStarGreenSmall } from './SVG/UnityStarGreenSmall.svg';
import { ReactComponent as UnityStarGreenLeft } from './SVG/UnityStarGreenLeft.svg';
import { ReactComponent as UnityStarLeft } from './SVG/UnityStarLeft.svg';
import { ReactComponent as UnitySmallStarLeft } from './SVG/UnitySmallStarLeft.svg';

const useStyles = makeStyles((theme) => ({
  paddedItem: {
    padding: theme.spacing(3),
  },
  description: {
    margin: 'auto',
    width: '50%',
  },
  [theme.breakpoints.down('sm')]: {
    description: {
      width: '90%',
    },
  },
  section: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  actionButton: {
    textAlign: 'center',
  },
}));

function ArtLabelInstallation(props) {
  const classes = useStyles();

  return (
    <div>

      <Vector285 style={{ zIndex:-1, position:'absolute', left:"0px", top:"770px"}}/>
      <Vector286 style={{ zIndex:-1, position:'absolute', left:"0px", top:"1110px"}}/>
      <Vector287 style={{ zIndex:-1, position:'absolute', left:"0px", top:"1150px"}}/>

      <Hidden smDown>
        <Group89 style={{ zIndex:-1, position:'absolute', left:"0px", top:"440px"}}/>
        <UnityStarRight style={{ zIndex:-1, position:'absolute', right:"60px", top:"500px"}}/>
        <UnityStarLeft style={{ zIndex:-1, position:'absolute', left:"20px", top:"540px"}}/>
        <Ellipse113 style={{ zIndex:-1, position:'absolute', right:"30px", top:"677px"}}/>
        <UnitySmallStarLeft style={{ zIndex:-1, position:'absolute', left:"220px", top:"445px"}}/>
      </Hidden>

      

      <Group87 style={{ zIndex:-1, position:'absolute', left:"0px", top:"753px"}}/>
      <UnityStarGreen style={{ zIndex:-1, position:'absolute', right:"290px", top:"790px"}}/>
      <UnityStarGreenLeft style={{ zIndex:-1, position:'absolute', left:"350px", top:"1120px"}}/>
      <Ellipse115 style={{ zIndex:-1, position:'absolute', left:"320px", top:"1070px"}}/>
      <Ellipse115 style={{ zIndex:-1, position:'absolute', left:"260px", top:"1050px"}}/>
      <Ellipse115 style={{ zIndex:-1, position:'absolute', right:"390px", top:"1020px"}}/>
      <UnityStarGreenSmall style={{ zIndex:-1, position:'absolute', left:"330px", top:"1030px"}}/>

      <Hidden smDown>
        <Grid container xs={5} style={{margin:"auto", paddingTop:"30px", paddingBottom:"80px"}}>
          {/* <img src='yachtprize.png' style={{width:"100%"}}/> */}
          <Typography variant="h3" style={{width: "100%", textAlign: "center"}}>Coming Soon</Typography>
        </Grid>

        <Grid container xs={12}>
          <Grid container xs={5} 
          style={{margin:"auto", 
                  paddingTop:"30px",
                  paddingBottom:"200px"
                  }}>
            <img src="stickers.png" style={{width:"100%"}}/>
          </Grid>
        </Grid>
        
        <Grid xs={12} style={{backgroundColor:"#033F63" }}>
          <Grid container xs={8} 
                style={{margin:"auto",
                        
                        paddingBottom:"100px",
                        color:"#FFFEF2"}} >
            <Grid container xs={4} style={{margin:"auto"}}>
              {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate 
                enim nulla aliquet porttitor. Amet cursus sit amet dictum sit amet.
              </Typography>
            </Grid>
            <Grid container xs={4} style={{margin:"auto"}}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate 
                enim nulla aliquet porttitor. Amet cursus sit amet dictum sit amet.
              </Typography> */}
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid container xs={11} style={{margin:"auto", paddingTop:"30px", paddingBottom:"80px", textAlign: "center"}}>
          {/* <img src='yachtprize.png' style={{width:"100%", maxHeight:"300px"}}/> */}
          <Typography variant="h3" style={{width: "100%", textAlign: "center"}} >Coming Soon</Typography>


        </Grid>

        <Grid container xs={12}>
          <Grid container xs={11} 
          style={{margin:"auto", 
                  paddingTop:"30px",
                  paddingBottom:"120px"
                  }}>
            <img src="stickers.png" style={{width:"100%", maxHeight:"200px"}}/>
          </Grid>
        </Grid>

        <Grid container xs={12} style={{backgroundColor:"#033F63"}}>
          <Grid container xs={11} 
                style={{margin:"auto",
                        paddingTop:"20px",
                        paddingBottom:"40px",
                       color:"#FFFEF2"
                        }} >
            <Grid container xs={5} style={{margin:"auto"}}>
              {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate 
                enim nulla aliquet porttitor. Amet cursus sit amet dictum sit amet.
              </Typography>
            </Grid>
            <Grid container xs={5} style={{margin:"auto"}}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate 
                enim nulla aliquet porttitor. Amet cursus sit amet dictum sit amet.
              </Typography> */}
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

    </div>
  );
}

export default ArtLabelInstallation;
