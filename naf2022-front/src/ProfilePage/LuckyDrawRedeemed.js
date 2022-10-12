import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(1),
    margin: 'auto',
  },
  paddedItem: {
    padding: theme.spacing(1),
  },
  paper: {
    margin: 'auto',
    height: 50,
    width: 55,
    paddingTop: 10,
  },
}));

export default function LuckyDrawRedeened(props) {
  const classes = useStyles();

  const { points, category } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography style={{ fontWeight: 'bold' }} paragraph>
              {points} pts
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.paddedItem} paragraph>
            From: {category}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
