import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Star6} from './SVG/star6.svg';
import { ReactComponent as Star7} from './SVG/star7.svg';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) => ({

  container :{
    position: 'relative',
    overflow: 'hidden',
    width:'100%',
    paddingTop: '56.25%',
    marginRight:'10%',
    marginLeft:'10%'
  },
  
  /* Then style the iframe to fit in the container div with full height and width */
  responsiveframe :{
    position: 'absolute',
  top: 0,
  left: 0,
  border: 0,
  width: '100%',
  height: '100%',
  }
}));

export default function Sticker3() {
  const classes = useStyles();
  return (
      <div>
        <Hidden smDown>   
            <Star6 style={{ zIndex: 0, top:'350%',left:'0%', position: 'absolute'}}/>
            <Star7 style={{ zIndex: 0, top:'350%',right:'0%', position: 'absolute'}}/>
        </Hidden>
          
          <Grid container align="center" xs={12}  alignItems="center"
          justify="center"
          style={{backgroundColor:'#B5B682'}}
          >
              
                  <Grid align='center' item xs={12} >
                      <Typography variant='h2' style={{color:'#FDFBE2',fontWeight: "normal",marginBottom:25,marginTop:50}}>
                          SUBMIT YOUR DESIGNS
                      </Typography>
                      <Typography variant='h7' style={{color:'#FDFBE2',fontWeight: "normal",marginBottom:25}}>
                          Disclaimer: Do login to your NTU Outlook account on your browser so you can see this form.
                      </Typography>
                  </Grid>    

                  {/* <Grid className={classes.container}  item xs={12}>
                  <iframe className={classes.responsiveframe} src= "https://forms.office.com/Pages/ResponsePage.aspx?id=SJPOFSq-K0aPwOF2WpsgSpC0bhj6LQVIkxg19Sfdy_VUQUg4RDhIQzc1TFdITkozSUtXQkRIRlpHRi4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
                  </Grid>  */}
              <div className={classes.container} >
              <iframe className={classes.responsiveframe}  src= "https://forms.office.com/Pages/ResponsePage.aspx?id=SJPOFSq-K0aPwOF2WpsgSpC0bhj6LQVIkxg19Sfdy_VUQUg4RDhIQzc1TFdITkozSUtXQkRIRlpHRi4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
              </div>
              </Grid>    

              
          
      </div>
  );
}     