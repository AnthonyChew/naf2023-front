import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ContestCard from './ContestCard';

// create animations https://www.youtube.com/watch?v=JcHLxzrsRS4
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(3),
    maxWidth: '80%',
    margin: 'auto',
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
}));

function UserContest(props) {
  const classes = useStyles();

  const { contests } = props;

  return (
    <div className={classes.root}>
      <Typography className={classes.paddedItem} variant="h4">
        CONTEST PARTICIPATED
      </Typography>
      {contests &&
        contests.map((contest, index) => (
          <ContestCard
            key={index}
            name={contest.name}
            image={contest.image}
            desc={contest.desc}
          />
        ))}
    </div>
  );
}

export default UserContest;
