import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(3),
    maxWidth: '80%',
    maxHeight: 60,
    margin: 'auto',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: 60,
  },
}));

export default function OrderGrid(props) {
  const classes = useStyles();

  const { order } = props;
  const { name, email, collection, payment, total, datetime } = order;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography paragraph color="secondary">
            {datetime}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography paragraph color="secondary">
            {name}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography paragraph>
            {name} {email}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography paragraph>
            {collection} {payment}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography paragraph>Total: {total}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
