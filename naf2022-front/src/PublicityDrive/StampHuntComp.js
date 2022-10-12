import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Vector271 } from './SVG/Vector 271.svg';
import { ReactComponent as Ellipse97 } from './SVG/Ellipse 97.svg';
import { ReactComponent as Ellipse98 } from './SVG/Ellipse 98.svg';
import { ReactComponent as StampStarBottomRight } from './SVG/StampStarBottomRight.svg';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    eventHeadSpace:{
        marginBottom: '15px'
    },
    pubBoothGrid: {
        marginLeft: "10%" ,
    },
}));

export default function StampHuntComp() {
    const classes = useStyles();
    return (
        <div>
            <Hidden smDown>
                <Vector271 style={{ zIndex:0, position:'absolute', right:"0", top:"1580px"}} />
                <Ellipse97 style={{ zIndex:0, position:'absolute', left:"90px", top:"1780px"}} />
                <Ellipse98 style={{ zIndex:0, position:'absolute', left:"140px", top:"1820px"}} />
                <StampStarBottomRight style={{ zIndex:0, position:'absolute', right:"10px", top:"1730px"}} />
            </Hidden>

            
            
            <Grid container xs={12} style={{backgroundColor:"#B4B581"}}>
                <Grid container align="left" xs={8} 
                className = {classes.pubBoothGrid} 
                style={{color:"white",
                        paddingTop:"109px",
                        paddingBottom:"109px",}}>
                    <Grid item xs={12} >
                        <Typography variant='h4' className={classes.eventHeadSpace} style={{fontSize:"1.8rem"}}>
                            STAMP HUNT
                        </Typography>
                    </Grid>    
                    <Grid item xs={12} >
                        <Typography variant='h4' style={{fontWeight: "normal"}}>
                            31 JAN - 17 FEB
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} >
                        <Typography variant='h4' className={classes.eventHeadSpace} style={{fontWeight: "normal"}}>
                            LOCATION: NTU CAMPUS
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} >
                        <Typography className={classes.eventHeadSpace}>
                        For this year's NAF, we have a fun, mini trail waiting for you! Explore and collect some awesome and cute stamp designs on a pamphlet that you can collect around the campus! Curious? Come drop by and pick up a pamphlet from our publicity booth! Submit a photo of your completed pamphlet and stand a chance to win a staycation at our NAF Lucky Draw!
                        </Typography>

                    </Grid> 
                    <Grid item xs={12} >
                        <Button
                            variant="contained"
                            component={Link}
                            to="/contests/stampHunt"
                            style={{}}
                            >
                            Find out more
                            </Button>
                    </Grid> 
                </Grid>   
            </Grid>
        </div>    
    );
}       
