import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  imptNotice: {
    fontWeight: 'bold',
  },
}));

export default function PaymentSuccess(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Order Details Submitted
      </Typography>
      <Typography paragraph className={classes.imptNotice}>
        You will receive an order confirmation email. Please reply with a 
        screenshot of your transfer as proof of payment within 24 hours. 
        Your order will not be processed if the aforementioned instructions 
        are not heeded.
      </Typography>
      <Typography paragraph>Thank you!</Typography>
    </div>
  );
}
