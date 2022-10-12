import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as CraftStar } from './SVG/CraftStar.svg';
import { ReactComponent as CraftStarBottom } from './SVG/CraftStarBottom.svg';
import { ReactComponent as Vector272 } from './SVG/Vector 272.svg';
import { ReactComponent as Ellipse101 } from './SVG/Ellipse 101.svg';
import { ReactComponent as Ellipse95 } from './SVG/Ellipse 95.svg';
import { ReactComponent as Ellipse98 } from './SVG/Ellipse 98.svg';

const useStyles = makeStyles((theme) => ({
    eventHeadSpace:{
        marginBottom: '15px'
    },
    pubBoothGrid: {
        marginLeft: "10%" ,
    },
}));

export default function CraftKit() {
    const classes = useStyles();
    return (
        <div>

            <Hidden smDown>
                <CraftStar style={{ zIndex:0, position:'absolute', left:"0px", top:"1044px"}} />
                <CraftStarBottom style={{ zIndex:0, position:'absolute', right:"350px", top:"1300px"}} />
                <Ellipse101 style={{ zIndex:0, position:'absolute', right:"360px", top:"1390px"}} />
                <Ellipse95 style={{ zIndex:0, position:'absolute', right:"480px", top:"1450px"}} />
                <Ellipse98 style={{ zIndex:0, position:'absolute', right:"370px", top:"1480px"}} />
                <Vector272 style={{ zIndex:0, position:'absolute', left:"0px", top:"1350px"}} />
            </Hidden>
            
            
            
            

            <Grid container xs={12} style={{backgroundColor:"#D48C8D"}}>
                <Grid container align="left" xs={6} 
                className = {classes.pubBoothGrid} 
                style={{color:"white" ,
                        paddingTop:"109px",
                        paddingBottom:"109px",
                        }}>
                    <Grid item xs={12} >
                        <Typography variant='h4' className={classes.eventHeadSpace} style={{fontSize:"1.8rem"}}>
                            NAF CRAFT KIT
                        </Typography>
                    </Grid>    
                    <Grid item xs={12} >
                        <Typography variant='h4' style={{fontWeight: "normal"}}>
                            31 JAN - 8 FEB
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} >
                        <Typography variant='h4' className={classes.eventHeadSpace} style={{fontWeight: "normal"}}>
                            LOCATION: LINKWAY @ ADMIN BUILDING
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} >
                        <Typography className={classes.eventHeadSpace}>
                        Here at the publicity booth, there will be a NAFCRAFT Kit (of two choices!) 
                        up for grabs for you and… you can make a lovely gift for your friend! 
                        All you need to do is this:
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} >
                        <Typography className={classes.paddedItem3}>
                        Step 1: Follow @ntuartsfestival on IG and Facebook 
                        <br />
                        Step 2: Sign-up for a Workshop on NAF website 
                        <br />
                        Step 3: Get a NAFCRAFT Kit!
                        </Typography>
                    </Grid>
                </Grid>     
        </Grid>
        </div>    
    );
}       

            