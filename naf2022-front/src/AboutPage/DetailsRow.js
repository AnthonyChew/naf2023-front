import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({
    imgWrapper:{
        [theme.breakpoints.down('lg')]: {
            width:"250px",
          },
        [theme.breakpoints.up('lg')]: {
            width:'300px',
          },
    },
    imgResize :{
        width:'100%',
        },
        
    paddedItem: {
        padding: theme.spacing(3),
    },
    bottomPadded: {
        paddingBottom: theme.spacing(5),
      },
    title: {
        paddingBottom: theme.spacing(1),
    },
    
}));


function DetailsRow(props) {
  const classes = useStyles();
  return (
      <div className ={classes.bottomPadded}>
        <Hidden mdDown>
            <Grid container item justify="center" spacing={3} xs={12} >
                        <Grid align='center'  item xs={5}>
                            <div className={classes.imgWrapper}>
                                <img className={classes.imgResize} src={props.url}/>
                            </div>
                        </Grid>
                        <Grid item xs = {5}>
                            <Typography  variant="body1" style={{color:'#FDFBE2'}} component="p">
                            {props.desc}
                            </Typography>
                        </Grid>
            </Grid>
                        
        </Hidden>

        <Hidden lgUp>
            <Grid  container justify="center"
        alignItems="center" item xs={12}>
                <Grid align="center" item xs={12}>
                    <div className={classes.imgWrapper}>
                        <img className={classes.imgResize} src={props.url} />
                    </div>
                </Grid>
                <Grid item xs = {12}>
                    <Container>
                        <Typography  variant="body1" style={{color:'#FDFBE2'}}  component="p">
                        {props.desc}
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </Hidden>
      </div>
      
    
  );
}

export default DetailsRow;
