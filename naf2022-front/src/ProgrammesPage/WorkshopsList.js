import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WorkshopCard from './WorkshopCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    // overflow: 'hidden',
    backgroundImage: 'url(/workshopbg.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
}));

export default function WorkshopsList(props) {
  const classes = useStyles();

  const { workshops } = props;

  return (
    <div className={classes.root}>
      {workshops &&
        workshops.map((workshop) => (
          <WorkshopCard key={workshop._id} workshop={workshop} />
        ))}
    </div>
  );
}
