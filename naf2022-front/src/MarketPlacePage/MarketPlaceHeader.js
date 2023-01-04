import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { ReactComponent as ProductViewYellowAccentSVG } from './SVG/Vector 118.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  content: {
    textAlign: 'center',
    // paddingTop: theme.spacing(10),
    maxWidth: '50%',
    margin: 'auto',
    color: "#033F63"
  },
  [theme.breakpoints.down('sm')]: {
    content: {
      maxWidth: '90%',
    },
  },
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  // [theme.breakpoints.down('xs')]: {
  //   heading: {
  //     fontSize: '3.3rem', //consider moving this to index.html for all h2
  //   },
  // },
  description: {
    marginBottom: theme.spacing(3),
  },
}));

function MarketPlaceHeader(props) {
  const { view } = props;
  const classes = useStyles();

  return (
    <div id="marketplaceHeader" className={classes.root}>
      <div className={classes.content}>
        <Typography className={classes.heading} variant="h2">
          Marketplace
        </Typography>
        <Typography className={classes.heading} variant="h4">
          Welcome to our Marketplace
        </Typography>
        <Typography className={classes.description} paragraph>
          The online marketplace is a platform for small businesses run by NTU
          students and some external vendors to share their creations with you.
          Explore Marketplace's plethora of locally crafted art works such as 
          jewellery, prints, bags, and other goods like thrifted clothes 
          and flower bouquets! 10% of all proceeds will go to
          the Singapore Association for Mental Health. Other than doing
          good, you stand a chance to win our Lucky Draw with every $10 spent.
        </Typography>
      </div>
    </div>
  );
}

export default MarketPlaceHeader;
