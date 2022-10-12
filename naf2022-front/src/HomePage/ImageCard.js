import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    minWidth: 250,
    height: 300,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingTop: props.imgPaddingTop,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
  cardImg: (props) => ({
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', //'100% 100%',
    backgroundPosition: 'center',
    background: props.isGreyedOut
      ? `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),${props.cardImg}`
      : props.cardImg,
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

export default function OutlinedCard(props) {
  const classes = useStyles(props);

  const history = useHistory();

  const redirect = () => {
    let path = props.path;
    if (path === 'http://bit.ly/ArtsAlive2021' || path.startsWith("http")) {
      window.open(path);
    } else {
      history.push(path);
    }  
  };

  return (
    <Card className={`${classes.root} ${classes.cardImg}`} variant="outlined">
      <CardContent>
        <Typography className={classes.whiteText} variant="h5" component="h2">
          {props.cardTitle}
        </Typography>
        <Typography className={classes.whiteText} variant="body2" component="p">
          {props.cardDesc}
        </Typography>
      </CardContent>
      <CardActions>
        {props.path && (
          <Button className={classes.orangeButton} onClick={redirect}>
            View
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
