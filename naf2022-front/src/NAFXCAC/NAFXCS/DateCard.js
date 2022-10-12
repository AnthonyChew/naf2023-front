import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

function DateCard(props) {
  const classes = useStyles();
  return (
  <Card className={classes.root}>
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {props.datetime}
      </Typography>
      <Typography gutterBottom variant="h5" component="h2">
        {props.eventName}
      </Typography>
    </CardContent>
  </Card>
  );
}

export default DateCard;
