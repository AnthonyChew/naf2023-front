import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    textAlign: 'left',
  },
  paper: {
    margin: 'auto',
    maxWidth: 500,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ContestCard(props) {
  const { name, image } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <img className={classes.img} src={image} alt={name} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="h2">
              {name}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
