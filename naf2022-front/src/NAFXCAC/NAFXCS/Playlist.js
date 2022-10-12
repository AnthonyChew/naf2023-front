import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ResponsivePlayer from '../../Components/ResponsivePlayer';

const useStyles = makeStyles((theme) => ({
  paddedItem: {
    padding: theme.spacing(3),
  },
  about: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(1),
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
  nextMargin:{
    marginRight:theme.spacing(1)
  },
  videoDiv:{
      margin:theme.spacing(5),
      marginLeft:theme.spacing(15)
  },
  videoDivMobile:{
    margin:theme.spacing(5),
  },
  videoDiv2:{
    marginTop:theme.spacing(5),
    },
    vidNextTitle:{
        marginLeft:theme.spacing(1),
        marginRight:theme.spacing(7),
        marginTop:theme.spacing(1)
    },
}));

const videos = [
    {
        vidId:"wv1f3o2n_bc&ab_channel=CACCenterStage",
        url:"https://www.youtube.com/watch?v=wv1f3o2n_bc&ab_channel=CACCenterStage",
        title:"NTU CAC 2021 Trailer" 
    },
    {
        vidId:"FvBwE4iK8d8",
        url:"https://www.youtube.com/watch?v=FvBwE4iK8d8",
        title:"NTU CAC CenterStage Corporate Video 2021"
    },
    {
        vidId:"YcjILdSh948",
        url:"https://www.youtube.com/watch?v=YcjILdSh948",
        title:"NTU CAC CenterStage Corporate Video 2020"
    },
    {
        vidId:"RkSh6Zzn1M8",
        url:"https://www.youtube.com/watch?v=RkSh6Zzn1M8",
        title:"NTU CAC CenterStage 2019 Grand Finals Publicity Video"
    },
    {
        vidId:"VnoSRfa8X0o",
        url:"https://www.youtube.com/watch?v=VnoSRfa8X0o",
        title:"NTU CAC CenterStage 2019 Campus Publicity Video"
    },
    {
        vidId:"vHelelNRf3g",
        url:"https://www.youtube.com/watch?v=vHelelNRf3g",
        title:"NTU CAC CenterStage Corporate Video 2019"
    },
]

function Playlist() {
  const classes = useStyles();
  const [currentVidIndex, setCurrentVidIndex] = useState(0);
  return (
    <div data-aos="fade"
    data-aos-duration="1000">
      <Hidden smDown>
        <Grid container item justify="center"  xs={12}>
            <Grid
            align="center"
            item
            xs={8}
            >
            
                <div className={classes.videoDiv}>
                    <Typography className={classes.about} align="left" variant="h4">
                        NTU CAC CenterStage Talent Showcase Trailer
                    </Typography>
                    <ResponsivePlayer playing muted url={videos[currentVidIndex].url}
                    onEnded = {()=>{setCurrentVidIndex((currentVidIndex +1)% videos.length)}}
                    ></ResponsivePlayer>
                </div>
                
            </Grid>
            <Grid
            align="left"
            item
            xs={4}
            
            >
                <div  className={classes.videoDiv2}>
                    <Typography className={classes.about} align="left" variant="h4">
                    Next:
                    </Typography>
                    <Grid container direction="row">
                        
                        <Grid style={{cursor:"pointer"}} onClick={()=>{setCurrentVidIndex((currentVidIndex+1) %videos.length)}} xs={4}>
                            <div>
                                <img width="100%" src={`https://img.youtube.com/vi/${videos[(currentVidIndex +1)% videos.length].vidId}/0.jpg`} />
                            </div>
                        </Grid>
                        <Grid xs={8}>
                            <Typography className={classes.vidNextTitle} align="left" variant="h5">
                                {videos[(currentVidIndex +1)% videos.length].title}
                            </Typography>
                        </Grid>

                        <Grid style={{cursor:"pointer"}} onClick={()=>{setCurrentVidIndex((currentVidIndex+2) %videos.length)}} xs={4}>
                            <div>
                                <img width="100%" src={`https://img.youtube.com/vi/${videos[(currentVidIndex +2)% videos.length].vidId}/0.jpg`} />
                            </div>
                        </Grid>
                        <Grid xs={8}>
                            <Typography className={classes.vidNextTitle} align="left" variant="h5">
                                {videos[(currentVidIndex +2)% videos.length].title}
                            </Typography>
                        </Grid>

                        <Grid style={{cursor:"pointer"}} onClick={()=>{setCurrentVidIndex((currentVidIndex+3) %videos.length)}} xs={4}>
                            <div>
                                <img width="100%" src={`https://img.youtube.com/vi/${videos[(currentVidIndex +3)% videos.length].vidId}/0.jpg`} />
                            </div>
                        </Grid>
                        <Grid xs={8}>
                            <Typography className={classes.vidNextTitle} align="left" variant="h5">
                                {videos[(currentVidIndex +3)% videos.length].title}
                            </Typography>
                        </Grid>
                    </Grid>
                    
                </div>
            </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.videoDivMobile}>
            <Typography className={classes.about} align="left" variant="h4">
                Talents of NTU Series
            </Typography>
            <ResponsivePlayer playing muted url={videos[currentVidIndex].url}
            onEnded = {()=>{setCurrentVidIndex((currentVidIndex +1)% videos.length)}}
            ></ResponsivePlayer>
        </div>
      </Hidden>
    </div>
  );
}

export default Playlist;
