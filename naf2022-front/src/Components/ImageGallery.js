import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageSlick from '../HomePage/ImageSlick.js';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  card:{
    width:'30vw',
    height:'20em'
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function WhatsOn(props) {
  const classes = useStyles();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div id="whatson"  data-aos-duration="1000" data-aos="fade-up" className={classes.root}>
   
      <div>
        <Typography align="center" variant="h4">{props.title}</Typography>
      </div>

      <ImageSlick imgPaddingTop={props.imgPaddingTop} cardList={props.cardList} isGreyedOut={props.isGreyedOut}></ImageSlick>


    </div>
  );
}
