import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  playerWrapper: {
    position: 'relative',
    paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */,
  },

  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));

export default function ResponsivePlayer(props) {
  const classes = useStyles();
  //const { isHomeVideo } = props;
  return (
    <div className={classes.playerWrapper}>
      <ReactPlayer
        className={classes.reactPlayer}
        url={props.url}
        width="100%"
        height="100%"
        controls
        muted={props.muted}
        playing={props.playing}
        loop={props.loop}
        onEnded = {props.onEnded}
      />
    </div>
  );
}
