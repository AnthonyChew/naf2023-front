import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as SnapStar } from './SVG/SnapStar.svg';
import { ReactComponent as SnapStarSmall } from './SVG/SnapStarSmall.svg';
import { ReactComponent as SnapStarLeft } from './SVG/SnapStarLeft.svg';
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


export default function SocialWall() {
    const classes = useStyles();
    return (
        <div>
            <Hidden smDown>
                <SnapStarSmall style={{ zIndex:0, position:'absolute', right:"90px", top:"2100px"}} />
                <SnapStarLeft style={{ zIndex:0, position:'absolute', left:"10px", top:"2030px"}} />
                
            </Hidden>

            
           
            <Grid container xs={12} style={{backgroundColor:"#28666E"}}>
                <Grid container align="left" xs={8} 
                        className = {classes.pubBoothGrid} 
                        style={{color:"white",
                                paddingTop:"109px",
                                paddingBottom:"109px",}}>
                    <Grid item xs={12} >
                        <Typography variant='h4' className={classes.eventHeadSpace} style={{fontSize:"1.8rem"}}>
                            SNAPSHOT SOCIAL WALL
                        </Typography>
                    </Grid>    
                    <Grid item xs={12} >
                        <Typography variant='h4' style={{fontWeight: "normal"}}>
                            31 JAN - 23 FEB
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} >
                        <Typography variant='h4' className={classes.eventHeadSpace} style={{fontWeight: "normal"}}>
                            LOCATION: Crest Publicity Booth & Surge Marketplace Showcase
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} >
                        <Typography className={classes.eventHeadSpace}>
                        Displayed at our physical locations of the Crest Publicity Booth and Surge Marketplace Showcase, the Snapshot Social Wall features posts from service users of the Singapore Association for Mental Health. These posts are dedicated to capturing and sharing the moments where the service users find relief from their anxieties by engaging in a meaning activity. You are invited to share your thoughts and responses too!
                        </Typography>
                        <Button
                            variant="contained"
                            component={Link}
                            to="/Crest/SnapshotSocialWall"
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