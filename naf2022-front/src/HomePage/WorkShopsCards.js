import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WorkShopCard from './WorkShopCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function WorkShopsCards(props) {
  const classes = useStyles();
  const { workshops } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container justify="center" alignItems="center" item xs={12}>
          {workshops && workshops[0] && (
            <WorkShopCard
              cardImg={`url(${workshops[0].images[0]})`}
              cardTitle={workshops[0].name}
              // cardDesc={workshops[0].description}
            />
          )}
          {workshops && workshops[1] && (
            <WorkShopCard
              cardImg={`url(${workshops[1].images[0]})`}
              cardTitle={workshops[1].name}
              // cardDesc={workshops[1].description}
            />
          )}
        </Grid>
        <Grid container justify="center" alignItems="center" item xs={12}>
          {workshops && workshops[2] && (
            <WorkShopCard
              cardImg={`url(${workshops[2].images[0]})`}
              cardTitle={workshops[2].name}
              // cardDesc={workshops[2].description}
            />
          )}
          {workshops && workshops[3] && (
            <WorkShopCard
              cardImg={`url(${workshops[3].images[0]})`}
              cardTitle={workshops[3].name}
              // cardDesc={workshops[3].description}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
