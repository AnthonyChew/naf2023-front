import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

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

function ProfileHeader(props) {
  const classes = useStyles();

  const { displayName, image, email } = props;

  return (
    <div className={classes.root}>
      <img src={image} alt={displayName} height="100" />
      <Typography className={classes.paddedItem} paragraph>
        {displayName}
      </Typography>
      <Typography className={classes.paddedItem} paragraph>
        {email}
      </Typography>
    </div>
  );
}

export default ProfileHeader;
