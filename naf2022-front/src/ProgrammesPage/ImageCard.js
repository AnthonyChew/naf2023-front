import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
    paddingTop: '30%',
  },
  cardImg: props => ({
    backgroundImage: props.cardImg,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
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
}));


export default function OutlinedCard(props) {
  const classes = useStyles(props);


  return (
    <Card className={`${classes.root} ${classes.cardImg}`} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2" >
          {props.cardTitle}
        </Typography>
        <Typography variant="body2" component="p">
          {props.cardDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.orangeButton}>View</Button>
      </CardActions>
    </Card>
  );
}