import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <img
            src="http://naf.sg/wp-content/uploads/2020/02/LOGO-3.png"
            width="100%"
            alt="logo"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography align="center" variant="h2">About Us</Typography>
        </Grid>
        <Grid item xs={3}>
          <img
            src="http://naf.sg/wp-content/uploads/2020/02/LOGO-3.png"
            width="100%"
            alt="logo"
          />
        </Grid>
      </Grid>
    </div>
  );
}
