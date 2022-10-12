import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ContestsTab from '../Components/ToggleTabs';
import LuckyDraw from './LuckyDraw';
import NewLuckyDraw from './NewLuckyDraw';
import StampHunt from './StampHunt';
import Grid from '@material-ui/core/Grid';
import StickerOlympia from './StickerOlympia'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(10)
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
}));

const navItems = [
  {
    text: 'Sticker Olympia',
    route: 'stickerOlympia',
  },
  {
    text: 'Stamp Hunt',
    route: 'stampHunt',
  },
  {
    text: 'LUCKY DRAW',
    route: 'luckyDraw',
  },
];

function GetContestsTab(contestsTab) {
  // console.log(contestsTab);
  switch (contestsTab) {
    case 'stickerOlympia':
      return <StickerOlympia/>;
    case 'stampHunt':
      return <StampHunt />;
    case 'luckyDraw':
      return <NewLuckyDraw />;
    default:
    // code block
  }
}

function Contests(props) {
  const classes = useStyles();
  // console.log('Load contests');
  return (
    <Grid className={classes.root} container>
      <Grid item xs={12}>
        <Typography align="center" variant="h2" style={{color : "#033F63"}}>
          CONTESTS
        </Typography>
      </Grid>
      {/* <Grid item xs={12}>
        <Typography
          align="center"
          variant="h6"
          color="textSecondary"
          component="p"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          <br /> tempor incididunt ut labore et dolore magna aliqua. Mattis
          vulputate
          <br /> enim nulla aliquet portitor. Amet cursus sit amet dictum sit
          amet.{' '}
        </Typography>
      </Grid> */}
      <Grid align="center" item xs={12}>
        <ContestsTab navItems={navItems} tab={props.match.params.contestsTab} />
      </Grid>
      <Grid item xs={12}>
        {GetContestsTab(props.match.params.contestsTab)}
      </Grid>
    </Grid>
  );
}

export default Contests;
