import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LinkButton from '../utils/LinkButton';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'center',

    maxHeight: 225,
    margin: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
      width: 300,
      height: 200,
    },
    [theme.breakpoints.up('lg')]: {
      width: 345,
      height: 230,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardImg: (props) => ({
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),${props.cardImg}`,
  }),
  pos: {
    marginBottom: 12,
  },
  orangeButton: {
    color: theme.palette.common.white,
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
  },
  whiteText: {
    color: theme.palette.common.white,
  },
}));

export default function WorkShopCard(props) {
  const classes = useStyles(props);
  return (
    <Card className={`${classes.root} ${classes.cardImg}`} variant="outlined">
      <CardContent>
        <Typography
          style={{ paddingTop: '25%' }}
          variant="h6"
          component="h2"
          className={classes.whiteText}
        >
          {props.cardTitle}
        </Typography>
        {/* <Typography variant="body2" component="p" className={classes.whiteText}>
          {props.cardDesc}
        </Typography> */}
      </CardContent>
      <CardActions>
        <LinkButton to={'/Oasis'} className={classes.orangeButton}>
          View More
        </LinkButton>
      </CardActions>
    </Card>
  );
}
