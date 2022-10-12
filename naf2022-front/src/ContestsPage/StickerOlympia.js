import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Hidden from '@material-ui/core/Hidden';
import Sticker1 from './Sticker1'
import Sticker2 from './Sticker2'
import Sticker3 from './Sticker3'
const useStyles = makeStyles((theme) => ({
    paddedItem: {
        paddingBottom: theme.spacing(5),
        marginTop: theme.spacing(5)
      },

    
}));

function StickerOlympia(props) {
  const classes = useStyles();
  return (
    <div>
     
    <Grid data-aos="fade" data-aos-duration="1000" container>
        <Grid item xs={12}  >
          <Typography
            align="center"
            variant="h2"
            style={{color:"#033F63"}}
          >
            STICKER OLYMPIA CONTEST
          </Typography>
        </Grid>

        <Grid item xs ={7}
            style={{margin:"auto" ,color:"#033F63"}}
            align = "center">
            <Typography align="center" className={classes.paddedItem}>
            Have you always wanted to express yourself through design? Curious to create your own sticker? 
            Look no further! NAF invites you as long as you have the creativity and individuality! 
            Create a sticker (traditional or digital art) to represent our theme, Ebb & Flow and stand 
            a chance to win attractive prizes! What’s more, the Top 6 sticker designs chosen will be 
            immortalised as part of the NAF Sticker Pack available for all in our very own NAF Goodie Bags 
            (while stocks last!). Fret not, the Top 12 designs will also be featured on NAF’s Telegram Sticker 
            Pack! You have a chance to vote for your personal favourites too! Come join us in this contest 
            and perhaps create a meme-worthy sticker!
            <br/>
            <br/>
            Students are welcome to create a sticker representing NAF’s theme this year: Ebb & Flow and 
            submit their designs by uploading it onto the Microsoft Forms below by 4 February 2022, 2359.
            </Typography>
        </Grid>
    </Grid>
  
    <Sticker1/>
    <Sticker2/>
    <Sticker3/>
     
    </div>
  );
}

export default StickerOlympia;