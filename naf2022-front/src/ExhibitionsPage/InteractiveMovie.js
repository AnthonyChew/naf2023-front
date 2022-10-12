import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ResponsivePlayer from '../Components/ResponsivePlayer'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({
  paddedItem: {
    padding: theme.spacing(3),
  },
  title: {
    paddingBottom: theme.spacing(1),
  },
  cardImg: {
    backgroundImage: "url(https://i.ytimg.com/vi/trYqU6kShPA/maxresdefault.jpg)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    width:"75%",
    paddingTop: "56.25%",
  },
  cardImg2: {
    backgroundImage: "url(https://i.ytimg.com/vi/trYqU6kShPA/maxresdefault.jpg)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    width:'320px',
    height:'180px',
  },
}));


function InteractiveMovie(props) {
  const classes = useStyles();
  return (
      <div>
           
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography className={classes.paddedItem} align="center" variant="h3">Interactive Movie</Typography>
            </Grid>
            
            <Grid container justify="center"
          alignItems="center" item xs={12}>
                <Container >
                    <Typography  className={classes.title} variant="h5">A Heist with Markiplier</Typography>
                    <ResponsivePlayer url='https://youtu.be/9TjfkXmwbTs' />
                </Container>
            </Grid>
           
            <Hidden smDown>
                <Grid align="right" item xs={3}>
                    <Paper className={classes.cardImg}/>
                </Grid>
                <Grid item xs = {8}>
            
                <Typography  variant="h6" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                </Typography>
                </Grid>
            </Hidden>
                
            <Hidden mdUp>
            <Grid container justify="center"
          alignItems="center" item xs={12}>
            <Grid align="center" item xs={12}>
                    <Paper className={classes.cardImg2}/>
                </Grid>
                <Grid item xs = {11}>
            
                <Typography  variant="h6" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                </Typography>
                </Grid>
             </Grid>
            </Hidden>

            
        </Grid>
      </div>
   
    
  );
}

export default InteractiveMovie;
