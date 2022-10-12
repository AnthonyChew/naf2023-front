import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ResponsivePlayer from '../Components/ResponsivePlayer';

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
  nextMargin: {
    marginRight: theme.spacing(1),
  },
  videoDiv: {
    margin: theme.spacing(5),
    marginLeft: theme.spacing(15),
  },
  videoDivMobile: {
    margin: theme.spacing(5),
  },
  videoDiv2: {
    marginTop: theme.spacing(5),
  },
  vidNextTitle: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(7),
    marginTop: theme.spacing(1),
  },
}));

const videos = [
  {
    vidId: 'g9m6pNoTkwM',
    url: 'https://www.youtube.com/watch?v=g9m6pNoTkwM',
    title: 'NAF 2022 Surge Livestream',
  },
];

function Playlist() {
  const classes = useStyles();
  const [currentVidIndex, setCurrentVidIndex] = useState(0);
  return (
    <div data-aos="fade" data-aos-duration="1000">
      <Hidden smDown>
        <Grid container item justify="center" xs={12}>
          <Grid align="center" item xs={8}>
            <div className={classes.videoDiv}>
              <Typography className={classes.about} align="left" variant="h4">
                Surge Livestream and Behind the Scenes Videos
              </Typography>
              <ResponsivePlayer
                playing
                muted
                url={videos[currentVidIndex].url}
                onEnded={() => {
                  setCurrentVidIndex((currentVidIndex + 1) % videos.length);
                }}
              ></ResponsivePlayer>
            </div>
          </Grid>
          <Grid align="left" item xs={4}>
            <div className={classes.videoDiv2}>
              <Typography className={classes.about} align="left" variant="h4">
                Next:
              </Typography>
              <Grid container direction="row">
                <Grid
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setCurrentVidIndex((currentVidIndex + 1) % videos.length);
                  }}
                  xs={4}
                >
                  <div>
                    <img
                      width="100%"
                      src={`https://img.youtube.com/vi/${
                        videos[(currentVidIndex + 1) % videos.length].vidId
                      }/0.jpg`}
                    />
                  </div>
                </Grid>
                <Grid xs={8}>
                  <Typography
                    className={classes.vidNextTitle}
                    align="left"
                    variant="h5"
                  >
                    {videos[(currentVidIndex + 1) % videos.length].title}
                  </Typography>
                </Grid>

                <Grid
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setCurrentVidIndex((currentVidIndex + 2) % videos.length);
                  }}
                  xs={4}
                >
                  <div>
                    <img
                      width="100%"
                      src={`https://img.youtube.com/vi/${
                        videos[(currentVidIndex + 2) % videos.length].vidId
                      }/0.jpg`}
                    />
                  </div>
                </Grid>
                <Grid xs={8}>
                  <Typography
                    className={classes.vidNextTitle}
                    align="left"
                    variant="h5"
                  >
                    {videos[(currentVidIndex + 2) % videos.length].title}
                  </Typography>
                </Grid>

                <Grid
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setCurrentVidIndex((currentVidIndex + 3) % videos.length);
                  }}
                  xs={4}
                >
                  <div>
                    <img
                      width="100%"
                      src={`https://img.youtube.com/vi/${
                        videos[(currentVidIndex + 3) % videos.length].vidId
                      }/0.jpg`}
                    />
                  </div>
                </Grid>
                <Grid xs={8}>
                  <Typography
                    className={classes.vidNextTitle}
                    align="left"
                    variant="h5"
                  >
                    {videos[(currentVidIndex + 3) % videos.length].title}
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
            Surge Livestream and Behind the Scenes Videos
          </Typography>
          <ResponsivePlayer
            playing
            muted
            url={videos[currentVidIndex].url}
            onEnded={() => {
              setCurrentVidIndex((currentVidIndex + 1) % videos.length);
            }}
          ></ResponsivePlayer>
        </div>
      </Hidden>
    </div>
  );
}

export default Playlist;
