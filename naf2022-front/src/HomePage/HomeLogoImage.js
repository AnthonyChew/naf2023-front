import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ResponsivePlayer from '../Components/ResponsivePlayer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as HomeSVG } from './NAFSVG/WhatsOn.svg';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  offset: {
    backgroundAttachment: 'fixed',
    backgroundOrigin: 'padding-box',
    backgroundSize: 'contain',
    backgroundPosition: `50% ${theme.mixins.toolbar.minHeight}px`,
  },
  offset2: {
    backgroundAttachment: 'fixed',
    backgroundOrigin: 'padding-box',
    backgroundSize: 'contain',
    backgroundPosition: `50% ${theme.mixins.toolbar.minHeight}px`,
  },
}));
const HomeLogoImage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      console.log(
        `${Math.floor(window.innerWidth * (157 / 250)).toString()}pix`
      );
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div
      // className={windowWidth < 800 ? classes.offset2 : classes.offset}
      // style={{
      //   textAlign: 'center',
      //   fontSize: '50px',
      //   width: '100%',
      //   height: `${Math.floor(windowWidth * (157 / 250)).toString()}px`,
      // }}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      {' '}
      <Hidden smDown>
        <HomeSVG class="HomeSVG" />
      </Hidden>
      <Grid
        className={windowWidth < 800 ? classes.offset2 : classes.offset}
        style={{
          textAlign: 'center',
          fontSize: '50px',
          width: '100%',
          maxWidth: 1000,
          // height: `${Math.floor(windowWidth * (157 / 250)).toString()}px`,
          height: `${Math.floor(windowWidth * (100 / 250)).toString()}px`,
          zIndex: 1,
        }}
        container
        justify="center"
        alignItems="flex-start"
        item
        xs={12}
      >
        <Container>
          <ResponsivePlayer
            url="https://www.youtube.com/watch?v=g9m6pNoTkwM"
            // playing
            // muted
            // loop
          />
        </Container>
      </Grid>
    </div>
  );
};
export default HomeLogoImage;
