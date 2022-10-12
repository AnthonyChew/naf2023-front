import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ResponsivePlayer from '../Components/ResponsivePlayer';
import ImageGallery from '../Components/ImageGallery';
import CoverFlow from './CoverFlow';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Vector281 } from './SVG/Vector 281.svg';
import { ReactComponent as StarLeft } from './SVG/StarLeft.svg';
import { ReactComponent as StarLeftSmall } from './SVG/StarLeftSmall.svg';
import { ReactComponent as Vector264 } from './SVG/Vector 264.svg';
import { ReactComponent as Vector276 } from './SVG/Vector 276.svg';
import OdyseeRow from './CascadeRow';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(15),
    margin: 'auto',
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
  bottomPaddedItem: {
    paddingBottom: theme.spacing(3),
  },
  description: {
    textAlign: 'center',
    maxWidth: '50%',
    margin: 'auto',
    paddingBottom: theme.spacing(1),
  },
  pictures: {
    backgroundColor: 'white',
    width: '250px',
    marginTop: '20%',
  },
  [theme.breakpoints.down('xs')]: {
    description: {
      maxWidth: '90%',
    },
  },
  topPaddedItem: {
    marginTop: theme.spacing(20),
  },
}));
const kidsworld = [
  {
    imgPath: 'LHR-G1-Draw-it.png',
    path: 'https://naf.sg/LHR-G1-Draw-it.png',
  },
  {
    imgPath: 'NH-G3-Draw-it.jpg',
    path: 'https://naf.sg/NH-G3-Draw-it.jpg',
  },
  {
    imgPath: 'LHR-G3-Draw-it.png',
    path: 'https://naf.sg/LHR-G3-Draw-it.png',
  },
  // {
  //   imgPath: 'LHR-G4-Draw-it.png',
  //   path: 'https://naf.sg/LHR-G4-Draw-it.png',
  // },
  // {
  //   imgPath: 'LHR-G5-Draw-it.png',
  //   path: 'https://naf.sg/LHR-G5-Draw-it.png',
  // },
];

const items = [
  {
    imgPath: 'LHR-G4-Draw-it.png',
    path: 'https://naf.sg/LHR-G4-Draw-it.png',
  },
  {
    imgPath: 'LHR-G5-Draw-it.png',
    path: 'https://naf.sg/LHR-G5-Draw-it.png',
  },
  // {
  //   imgPath: 'LHR-G3-Draw-it.png',
  //   path: 'https://naf.sg/LHR-G3-Draw-it.png',
  // },
  // {
  //   imgPath: 'NH-G3-Draw-it.jpg',
  //   path: 'https://naf.sg/NH-G3-Draw-it.jpg',
  // },
  // {
  //   imgPath: 'LHR-G1-Draw-it.png',
  //   path: 'https://naf.sg/LHR-G1-Draw-it.png',
  // },
];

const rowData = {
  url: 'odysseeprof.jpg',
  title: 'Dance Film by Contemp{minated}',
  desc:
    'Dr Kym Campbell is a Senior lecturer at the Wee Kim Wee School of Communication and Information. Prior to the introduction of ODYSSEE in 2018, there was only one module that gave students a chance to immerse in overseas journalism. However, Dr Kym Campbell had hoped to offer students the opportunity to tell stories that engage both the heart and the intellect in film about society, culture and people. Short documentaries that would be a true “odyssey of the mind”.  This strong desire eventually led to the introduction of ODYSSEE." Overseas Short Documentaries You Should See!',
};

function Cascade(props) {
  const classes = useStyles();
  return (
    <div>
      <Vector281
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-anchor="#exhibitions"
        style={{
          zIndex: -999,

          right: 0,
          position: 'absolute',
          overflowY: 'hidden',
        }}
      />
      <Hidden smDown>
        <StarLeft
          style={{ zIndex: 0, position: 'absolute', left: '0px', top: '670px' }}
        />
        <StarLeftSmall
          style={{
            zIndex: 0,
            position: 'absolute',
            left: '20px',
            top: '910px',
          }}
        />
        <Vector264
          style={{
            zIndex: -1,
            position: 'absolute',
            left: '0px',
            top: '935px',
          }}
        />
        <Vector276
          style={{ zIndex: 0, position: 'absolute', left: '0px', top: '970px' }}
        />
      </Hidden>
      <Grid item xs={4} style={{ paddingTop: '100px' }}>
        <Grid item xs={12}>
          <Typography
            align="center"
            variant="h3"
            style={{ paddingTop: '90px' }}
          >
            Kids' World
          </Typography>
        </Grid>
      </Grid>
      <Grid style={{ paddingTop: '30px', paddingBottom: '50px' }}>
        <ImageGallery imgPaddingTop="50%" cardList={kidsworld}></ImageGallery>
      </Grid>
      <Grid style={{ paddingTop: '30px', paddingBottom: '50px' }}>
        <ImageGallery imgPaddingTop="50%" cardList={items}></ImageGallery>
      </Grid>
    </div>
  );
}

export default Cascade;
