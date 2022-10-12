import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as BG } from './SVG/BG.svg';
import { ReactComponent as Ellipse106 } from './SVG/Ellipse 106.svg';
import { ReactComponent as Vector32 } from './SVG/Vector (32).svg';

const useStyles = makeStyles((theme) => ({
  paddedItem: {
    padding: theme.spacing(3),
  },
  content: {
    width: '90%', //70%
    maxWidth: 1000,
    margin: 'auto',
    marginBottom: theme.spacing(5),
  },
  img: {
    maxWidth: '100%',
    objectFit: 'cover',
  },
  description: {
    textAlign: 'justify',
    maxWidth: '50%',
    margin: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    description: {
      maxWidth: '90%',
    },
  },
}));

function SnapshotSocial(props) {
  const classes = useStyles();

  return (
    <div>
      
      <Ellipse106 style={{ zIndex:-1, position:'absolute', right:"150px", top:"1000px" }} />
      <Grid xs={10} style={{margin:'auto', paddingTop:"50px", paddingBottom:"50px"}} >
        <iframe src='https://www.juicer.io/api/feeds/cantgetenaf/iframe' frameborder='0' marginwidth= "0" marginheight= "0" 
        style={{  
                  overflow:"hidden",
                  paddingLeft:"10px",
                  top: 0,
                  left: 0,
                  border: 0,
                  width: '100%',
                  height: '1000px',}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen></iframe>
      </Grid>
      <BG style={{ zIndex:-1, position:'relative', right:"0px", bottom:"0px" }} />
    </div>
  );
}

export default SnapshotSocial;
