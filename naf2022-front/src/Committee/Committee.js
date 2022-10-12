import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DetailsRow from './DetailsRow';
import DetailsRowReverse from './DetailsRowReverse';
import { ReactComponent as Svg1 } from './SVG/svg1.svg';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paddedItem: {
    padding: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
}));

const committeeData = [
  {
    urls: ['top4.png'],
    title: 'Top 4',
    desc:'Leading a 30-men team is never easy, but these four individuals bravely took on the role of Top 4! They serve as pillars of support for the NAF committee, as we strive hard to make this event a success.',
    color:'#FDFBE2',
    text:'#033F63'
    
    },
  {
    urls: ['proggie.png'],
    title: 'Programmers',
    desc:'The brains behind the event segments, our programmers work day and night to ensure the smooth planning and execution of our activities.',
    color:'#033F63',
    text:'#FDFBE2',
    background:'url(/progbg.png)'
  },
  {
    urls: ['bizmag.png'],
    title: 'Business Managers',
    desc:'Our source of money, and more! These are the warriors who work tirelessly to secure our wonderful goodie bag items and external funding.',
    color:'#7C9885',
    text:'#FDFBE2',
    background:'url(/bizbg.png)'

    },
  {
    // urls: ['tech.png']['tech.png', 'techsubcomm.png'],
    urls: ['tech.png'],
    title: 'Digital Logistics',
    desc:'From coding to handling all things tech, meet the ones in charge of the NAF virtual content - the Digital Logistics Team! With them, NAF has been able to smoothly transit into a hybrid event – with both the marketplace and concert being accessible on our very own website.',
    color:'#B5B682',
    text:'#FDFBE2',
    background:"url(/techbg.png)"
    },
  {
    urls: ['pnp.png'],
    title: 'Publicity & Publications',
    desc:'Without them, our event wouldn’t be known! Our P&P team publicises our event NTU-wide via both online platforms and thoughtfully designed physical materials.',
    color:'#D48C8D',
    text:'#FDFBE2',
    background:"url(/pnpbg.png)"
    },

  {
    urls: ['EXOFF.png'],
    title: 'Ex-Officios',
    desc:'Our two ex-officios work tirelessly to advise and guide the NAF team on the right track. There is no question to their commitment to the festival’s success!',
    color:'#28666E',
    text:'#FDFBE2',
    background:'url(/exbg.png)'
    },
  
  
  
  
];

function Committee() {
  const classes = useStyles();
  return (
    <div className={classes.main} >
      <Hidden smDown>   
      <Svg1 style={{ zIndex: 0, top:'1000px',left:'500px',position: 'absolute' }} />
      
      </Hidden>
      <Typography className={classes.paddedItem} align="center" variant="h2" style={{color:'#033F63'}}>
        The Committee
      </Typography>
      {committeeData.map((item, index) =>
        index % 2 === 1 ? (
          <DetailsRow
            key={'perf' + index}
            urls={item.urls}
            title={item.title}
            desc={item.desc}
            color={item.color}
            textcolor={item.text}
            background={item.background}
          ></DetailsRow>
        ) : (
          <DetailsRowReverse
            key={'perf' + index}
            urls={item.urls}
            title={item.title}
            desc={item.desc}
            color={item.color}
            textcolor={item.text}
            background={item.background}
          ></DetailsRowReverse>
        )
      )}
    </div>
  );
}

export default Committee;
