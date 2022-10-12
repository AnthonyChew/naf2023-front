import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ImageCarousel from '../HomePage/ImageSlick';
import FestivalGuide from './FestivalGuide';
import DetailsRowReverse from './DetailsRowReverse';
import DetailsRowWithBlob from './DetailsRowWithBlob';
import DetailsRowReverseWithBlob from './DetailsRowReverseWithBlob';
import { Hidden } from '@material-ui/core';
import Button from "@material-ui/core/Button";

import { ReactComponent as About1 } from './About Festival SVGs/about1.svg';
import { ReactComponent as About2 } from './About Festival SVGs/Rainbow.svg';
import { ReactComponent as About3 } from './About Festival SVGs/about3.svg';
import { ReactComponent as About4 } from './About Festival SVGs/about4.svg';
import { ReactComponent as About5 } from './About Festival SVGs/about5.svg';
import { ReactComponent as About6 } from './About Festival SVGs/about6.svg';

const useStyles = makeStyles((theme) => ({
  paddedItem: {
    padding: theme.spacing(3),
  },
  paddedBottomItem: {
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      backgroundColor:'#7C9885'
    }
  },
  aboutTitle: {
    // paddingTop: theme.spacing(6),
    // paddingBottom: theme.spacing(6),
    position: 'relative',
    marginBottom:50
  },
}));

const aboutData = [
  {
    url: 'about-the-fest1.jpg',
    desc:
      "Occurring from January to February 2022, NTU Arts Festival (NAF) 2022 is a Special Project under NTU Cultural Activities Club (CAC) which aims to develop NTU’s potential as a cultural hub and establish itself as a premier event that will be placed on the cultural and arts calendar of Singapore. Involving the 23 CAC Member Clubs and established arts and cultural groups within NTU, NAF 2022 aims to promote the understanding and appreciation of the arts within the NTU community and bring our NTU Arts scene to greater acknowledgement in the wider local arts scene. This year, NAF 2022 will consist of 4 main segments of programmes:",
    list: [
      "Publicity Drive titled Ripple", "Exhibitions and Contests titled Crest", "Workshops titled Oasis", "Internal Showcase titled Surge"
    ],
  },
  {
    url: 'about-the-fest2.jpg',
    desc:
      "The theme for NTU Arts Festival 2022 is Ebb & Flow. Ebb & Flow aims to celebrate the myriad of different art forms in NTU, much like the multiplicity of existent water forms. As NTU Arts Festival 2021's theme Midsummer Medley aimed to strengthen bonds within NTU and promote unity within CAC, Ebb & Flow will follow suit, further building up connections within the different art forms and celebrating both its uniqueness and similarities as one.",
  },
  {
    url: 'about-the-fest3.jpg',
    desc:
      "While previous years highlighted internal cohesion and pushing limits, Ebb & Flow plans to not only represent the art community in NTU, but also its audience; providing and introducing to them a platform to appreciate the different forms of arts all at once. Ebb & Flow embodies all benefactors of NTU Arts Festival - the student body, the performers, the audience - and brings them all together by recognising their distinctive qualities and their similitude.",
  },
];

function About() {
  const classes = useStyles();
  return (
    <div style={{position: "relative"}}>

      
      

      <div id="aboutTitle" className={classes.aboutTitle}>
        <Typography align="center" variant="h2" style={{color:'#033F63'}}>
          About NTU Arts Festival 2022
        </Typography>
      </div>
      
      {/* <Typography align="center" className={classes.paddedItem} paragraph>
        Festival Guide for viewing
      </Typography> */}
      {/* <ImageCarousel></ImageCarousel> */}
      <FestivalGuide />

      <div className={classes.paddedBottomItem} ></div>
      <DetailsRowReverseWithBlob 
        url={aboutData[0].url}
        title={aboutData[0].title}
        desc={aboutData[0].desc}
        list={aboutData[0].list}
      />
      <DetailsRowWithBlob 
        url={aboutData[1].url}
        title={aboutData[1].title}
        desc={aboutData[1].desc}
      />
      <DetailsRowReverse 
        url={aboutData[2].url}
        title={aboutData[2].title}
        desc={aboutData[2].desc}
        
      />
      <Hidden smDown>   
      <About1 style={{ zIndex: 0, top:'25%',left:'75%',position: 'absolute' }} />
      
      <About2 class='AboutSVG'/>
      <About3 style={{ zIndex: -1, top:'850',left:'10%',position: 'absolute' }} />
      <About4 style={{ zIndex: -1, top:'1400',left:'85%',position: 'absolute' }} />
      <About5 style={{ zIndex: -1, top:'1900',left:'7%',position: 'absolute' }} />
      <About6 style={{ zIndex: -1, top:'1200px',position: 'absolute' }} />
      </Hidden>
    </div>
  );
}

export default About;
