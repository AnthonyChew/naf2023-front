import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { ReactComponent as GreenSVG } from './SVG/Vector 119.svg';

// create animations https://www.youtube.com/watch?v=JcHLxzrsRS4
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(10),
    maxWidth: '80%',
    margin: 'auto',
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
}));

function EventsHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.paddedItem} variant="h2">
        Events
      </Typography>
      <Typography className={classes.paddedItem} paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
        facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
        tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
        consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
        hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
        tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
        nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
        accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
      </Typography>
      <GreenSVG
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        data-aos-anchor="#eventsHeader"
        style={{ zIndex: -999, top: 145, left: 500, position: 'absolute' }}
      />
    </div>
  );
}

export default EventsHeader;
