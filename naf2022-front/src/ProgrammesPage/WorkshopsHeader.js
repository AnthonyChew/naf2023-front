import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

// create animations https://www.youtube.com/watch?v=JcHLxzrsRS4
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    // paddingTop: theme.spacing(10),
    // maxWidth: '80%',
    margin: 'auto',
  },
  alert: {
    textAlign: 'left',
    margin: 'auto',
  },
  paddedItem: {
    paddingTop: theme.spacing(3),
    color: '#033F63',
  },
  description: {
    textAlign: 'center',
    maxWidth: '50%',
    margin: 'auto',
    color: '#033F63',
  },
  [theme.breakpoints.down('xs')]: {
    description: {
      maxWidth: '90%',
    },
  },
}));

function WorkshopsHeader() {
  const classes = useStyles();

  return (
    <div className={classes.alert}>
      <Alert variant="filled" severity="info">
        <AlertTitle>
          <strong>Oasis Workshops Sign Ups have Closed</strong>
        </AlertTitle>
        Please note that sign ups for Oasis Workshops have closed, please check your profile for your registration status.
      </Alert>
      <div className={classes.root}>
        <Typography className={classes.paddedItem} variant="h2">
          OASIS
        </Typography>
        <Typography
          style={{ color: '#033F63', paddingBottom: '20px' }}
          variant="h4"
        >
          Workshops
        </Typography>
        <Typography className={classes.description} paragraph>
          For Workshops titled Oasis this year, NAF 2022 collaborates with NIE
          and various CAC Member Clubs and arts and cultural groups within NTU
          to bring a variety of workshops ranging from visual arts to music and
          dance to the NTU students. We hope to bring insightful and fresh
          workshops to the NTU community, with every participant leaving with
          something new!
          <br /> <br />
          {/* <b>
          Registration for our workshops are now closed. Thank you for your support.
        </b> */}
        </Typography>
      </div>
    </div>
  );
}

export default WorkshopsHeader;
