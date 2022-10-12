import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rightEventCard:{
    paddingRight:theme.spacing(10)
  },
  leftEventCard:{
    marginLeft:theme.spacing(10)
  },
  card:{
    width:"300px",
    height:"100px",
    margin:"5px"
  }
}));

export default function EventsCards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container  spacing={8}>
        <Grid container justify="center"
          alignItems="center" item xs={12} >

    <Card className={classes.card}>
      <CardActionArea component={RouterLink} to='/Ripple'>
        <CardContent justify="center" style={{backgroundColor:"#033F63", color:"#FDFBE2"}}>
          <Typography gutterBottom variant="h5" component="h2">
            PUBLICITY DRIVE
          </Typography>
          <Typography variant="body2" component="p">
          31 JAN - 8 FEB
          <br/>
          LINKWAY @ ADMIN BUILDING
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.card}>
      <CardActionArea component={RouterLink} to='/Ripple'>
        <CardContent justify="center" style={{backgroundColor:"#D48C8D", color:"#FDFBE2"}}>
          <Typography gutterBottom variant="h5" component="h2">
            NAF CRAFT KIT
          </Typography>
          <Typography variant="body2" component="p">
          31 JAN - 8 FEB
          <br/>
          LINKWAY @ ADMIN BUILDING
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        <Grid container justify="center"
          alignItems="center" item xs={12} >
         <Card className={classes.card}>
      <CardActionArea component={RouterLink} to='/Ripple'>
        <CardContent justify="center" style={{backgroundColor:"#B4B581", color:"#FDFBE2"}}>
          <Typography gutterBottom variant="h5" component="h2">
            STAMP HUNT
          </Typography>
          <Typography variant="body2" component="p">
          31 JAN - 17 FEB
          <br/>
          NTU CAMPUS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.card}>
      <CardActionArea component={RouterLink} to='/Ripple'>
        <CardContent justify="center" style={{backgroundColor:"#28666E", color:"#FDFBE2"}}>
          <Typography gutterBottom variant="h5" component="h2">
            SNAPSHOT SOCIAL WALL
          </Typography>
          <Typography variant="body2" component="p">
          31 JAN - 23 FEB
          <br/>
          CREST AND SURGE
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
         </Grid>
      </Grid>
      </Grid>
    </div>
  );
}
