import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20px',
    marginRight: '20px',
  },
  cardImg: (props) => ({
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  }),
  pos: {
    marginBottom: 12,
  },
  logoImg: {
    width: '80px',
  },
  orangeButton: {
    color: theme.palette.common.white,
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
  },
  cardText: {
    color: theme.palette.common.black,
    padding: theme.spacing(1),
  },
}));

export default function OutlinedCard(props) {
  const classes = useStyles(props);

  return (
    <Paper className={`${classes.root} ${classes.cardImg}`} variant="outlined">
      <Typography
        align="center"
        className={classes.cardText}
        variant="body2"
        component="p"
      >
        {props.cardDesc}
      </Typography>
      <Button color="black" variant="outlined" href="https://cacafth.com/shop/">
        Buy Now
      </Button>
    </Paper>
  );
}
