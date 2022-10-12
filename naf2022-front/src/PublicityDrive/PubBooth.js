import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as PubBoothStar } from './SVG/PubBoothStarRight.svg';
import { ReactComponent as PubBoothStarLeft } from './SVG/PubBoothStarLeft.svg';
import { ReactComponent as LineRightRight } from './SVG/LineRightRight.svg';
import { ReactComponent as LineRightLeft } from './SVG/LineRightLeft.svg';
import { ReactComponent as Ellipse102 } from './SVG/Ellipse 102.svg';
import { ReactComponent as Ellipse106 } from './SVG/Ellipse 106.svg';
import { ReactComponent as Vector270} from './SVG/Vector 270.svg';

const useStyles = makeStyles((theme) => ({
    eventHeadSpace:{
        marginBottom: '15px'
    },
    pubBoothGrid: {
        marginLeft: "10%" ,
    },
    eventDetailSpace:{
        marginBottom: '10px'
    }
}));

export default function PubBooth() {
    const classes = useStyles();
    return (
        <div>
            
            <Hidden smDown>
                <Vector270 style={{ zIndex:0, position:'absolute', left:"0", top:"664px"}} />
                <PubBoothStarLeft style={{ zIndex:0, position:'absolute', left:"120px", top:"850px"}} />
                <Ellipse106 style={{ zIndex:0, position:'absolute', left:"50px", top:"670px"}} />
                <Ellipse106 style={{ zIndex:0, position:'absolute', left:"8px", top:"710px"}} />
                <PubBoothStar style={{ zIndex:0, position:'absolute', right:'0', top:"470px"}} />
            <LineRightRight style={{ zIndex:0, position:'absolute', right:"0"}} />
            <LineRightLeft style={{ zIndex:0, position:'absolute', right:"0px", top:"550px"}} />
            <Ellipse102 style={{ zIndex:0, position:'absolute', right:"100px", top:"850px"}} />
            </Hidden>

            <Grid container xs={12} 
            style={{backgroundColor:'#033F63'}}
            >
                <Grid container align="left" xs={6} 
                className = {classes.pubBoothGrid} 
                style={{color:"white" ,
                        paddingTop:"109px",
                        paddingBottom:"109px",
                }}>
                    <Grid item xs={12} >
                        <Typography variant='h4' className={classes.eventHeadSpace} style={{fontSize:"1.8rem"}}>
                            PUBLICITY BOOTH
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
                        <Typography className={classes.paddedItem3}>
                            Except PH and Weekends
                        </Typography>
                    </Grid> 
                </Grid>    
            </Grid>
        </div>
    );
}     