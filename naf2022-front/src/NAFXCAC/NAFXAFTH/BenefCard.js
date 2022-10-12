import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 370,
    height: 370,
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
        variant="h5"
        component="h2"
      >
        {props.cardTitle}
      </Typography>
      <img
        className={classes.logoImg}
        src={props.cardLogo}
      ></img>
      <Typography
        align="center"
        className={classes.cardText}
        variant="body2"
        component="p"
      >
        {props.cardDesc}<br/>
        Read more:<br/><a href={props.cardReadMore}>{props.cardReadMore}</a>
      </Typography>
    </Paper>
  );
}
