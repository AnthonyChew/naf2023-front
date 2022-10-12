import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    // border: '3px solid #F2874C',
    backgroundColor: '#FED92F',
    borderRadius: 20,
  },
}));

function calculateDifference(endDate) {
  let currentDate = new Date();
  let difference = endDate - currentDate;
  let timeRemaining = {};

  if (difference > 0) {
    timeRemaining = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24), //find difference in terms of hours, calculate remainder after days
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeRemaining;
}

//https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
export default function Countdown(props) {
  const classes = useStyles();
  const { endDate } = props;
  // let endDate = new Date('2021-03-01T20:00:00');
  //   let endDate = new Date();

  const [timeRemaining, setTimeRemaining] = useState(
    calculateDifference(endDate)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(calculateDifference(endDate));
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeRemaining).forEach((interval) => {
    timerComponents.push(
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          textAlign: 'center',
          padding: 10,
        }}
      >
        <Typography variant="h5">{timeRemaining[interval]}</Typography>
        <Typography>{interval}</Typography>
      </div>
    );
  });

  return <Typography className={classes.root}>{timerComponents}</Typography>;
}
