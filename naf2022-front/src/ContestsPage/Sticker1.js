import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Star} from './SVG/star.svg';
import { ReactComponent as Star2} from './SVG/star2.svg';
import { ReactComponent as Dot1} from './SVG/dot1.svg';
import { ReactComponent as Dot2} from './SVG/dot2.svg';
import { CenterFocusStrong } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({

  textbox:{
    backgroundColor:'#033F63',
    marginBottom:100,


},
  text:{
    paddingTop:50,
    paddingBottom:50,
    width:'70%'

  }
}));

export default function Sticker1() {
  const classes = useStyles();
  return (
      <div>
       
        <Hidden smDown>   
        <Star style={{ zIndex: 0, top:'850px',left:'80%', position: 'absolute'}}/>
        <Star2 style={{ zIndex: 0, top:'860px',left:'20%', position: 'absolute'}}/>
        <Star2 style={{ zIndex: 0, top:'1020px',left:'5%', position: 'absolute'}}/>
        <Dot1 style={{ zIndex: 0, top:'870px',left:'92%', position: 'absolute'}}/>
        <Dot2 style={{ zIndex: 0, top:'855px',left:'25%', position: 'absolute'}}/>
        <Dot2 style={{ zIndex: 0, top:'1015px',left:'9%', position: 'absolute'}}/>
        </Hidden>

          <Grid container align="center" xs={12}  alignItems="center"
          justify="center"
          style={{backgroundColor:'#28666E',width:'100%'}}
          >
              
                  <Grid align='center' item xs={12} >
                      <Typography variant='h2' style={{color:'#FDFBE2',fontWeight: "normal",marginBottom:50,marginTop:50}}>
                          EVENT TIMELINE
                      </Typography>
                  </Grid>    

                  <Grid className={classes.textbox} item xs={12} >
                      <Typography variant='h4' className={classes.text} style={{color:'#FEDC97'}}>
                      24 Jan - 4 Feb 2022 | Submission period of sticker designs
                      </Typography>
                  </Grid> 

                  <Grid className={classes.textbox} item xs={12} >
                      <Typography variant='h4' className={classes.text} style={{color:'#FEDC97'}}>
                      5 Feb - 6 Feb 2022 | Judging period for sticker designs
                      </Typography>
                  </Grid> 
                  
                  <Grid className={classes.textbox} item xs={12} >
                      <Typography variant='h4' className={classes.text} style={{color:'#FEDC97'}}>
                      7 Feb 2022 | Winners will be contacted 
                      </Typography>
                  </Grid> 

              </Grid>    
          
      </div>
  );
}     