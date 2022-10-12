import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Playlist from './Playlist';
import DateCard from './DateCard';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
  paddedItem: {
    padding: theme.spacing(3),
  },
  about: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(1),
  },
  img: {
    maxWidth:'500px',
    width:'90%',
   
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  imgResize: {
    width: 200,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  description: {
    textAlign: 'center',
    maxWidth: '70%',
    margin: 'auto',
    paddingBottom: theme.spacing(10),
  },
  dates: {
    paddingBottom: theme.spacing(10),
  },
  subheader: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(1),
  },
}));

function NAFxCS() {
  const classes = useStyles();
  return (
    <div>
      <Typography data-aos="fade" data-aos-duration="1000" className={classes.paddedItem} style={{color:"#033F63"}} align="center" variant="h2">
        NAF X CS
      </Typography>
      <Playlist></Playlist>
      <Typography data-aos="fade" data-aos-duration="1000" className={classes.about} align="center" variant="h4">
        About CenterStage (CS)
      </Typography>
      <div data-aos="fade" data-aos-duration="1000" align="center">
        <img className={classes.imgResize} src="cropped-cs-new-logo.png" />
      </div>
      <Typography data-aos="fade" data-aos-duration="1000" className={classes.description} align="center" variant="body1" component="p">
     
      Incepted since 2017, CenterStage is a non-profit NTU talent search competition organised by the NTU Cultural Activities Club (CAC) to provide NTU students with an accessible platform to not only showcase their talents but also to gain exposure to similar professional stages and grow their talents in a professional setting. Participants may join as a group or as an individual, with no restrictions on the talent that they are allowed to showcase.
      </Typography>
      <Typography data-aos="fade" data-aos-duration="1000" className={classes.description} align="center" variant="body1" component="p">
      In light of the ever-evolving COVID-19 situation, CenterStage has revamped itself from a competition that's similar to the 'Got Talent' franchise to a Talent Showcase, where we provide opportunities for talents to continue performing and increase their stage presence despite these tough times.
      </Typography>
      <Typography data-aos="fade" data-aos-duration="1000" className={classes.description} align="center" variant="body1" component="p">
      The Grand Showcase will be pre-recorded and live streamed on CenterStage's YouTube channel. Not only will the participants get to perform on a beautiful stage, the audience will also get to witness the participants express themselves in the comfort and safety of their homes!
      </Typography>
      
      {/* <Typography data-aos="fade" data-aos-duration="1000" className={classes.subheader} align="center" variant="h4">
        Important Dates
      </Typography>
      <div data-aos="fade" data-aos-duration="1000" className={classes.dates} align="center">
        <DateCard eventName="Premiere Date" datetime="2021-03-26 7.30PM" />
      </div> */}

      <Typography data-aos="fade" data-aos-duration="1000" className={classes.subheader} align="center" variant="h4">
        Contact Us
      </Typography>
      <Typography data-aos="fade" data-aos-duration="1000" className={classes.description} align="center" variant="body1" component="p">
        Check us out on Instagram <Link color="blue" href="https://www.instagram.com/ntucenterstage/" target="_blank">@ntucenterstage</Link>
        <br></br>
        Check us out on TikTok <Link color="blue" href="https://www.tiktok.com/@ntucenterstage/?" target="_blank">@ntucenterstage</Link>
        <br></br>
        Check us out on Youtube <Link color="blue" href="https://www.youtube.com/channel/UCJ43nf7d_15ur6zplxNLR6A" target="_blank">CAC CenterStage</Link>
      </Typography>



      <Grid container item justify="center" xs={12}>
        <Grid
          data-aos="fade"
          data-aos-duration="1000"
          align="center"
          item
          xs={12}
        >
          <img
            className={classes.img}
            src="DSC6889.jpg"
          />
          <img
            className={classes.img}
            src="2019 GF.jpeg"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default NAFxCS;
