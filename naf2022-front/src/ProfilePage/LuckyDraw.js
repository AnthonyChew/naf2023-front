import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import React from 'react';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import LuckyDrawRedeened from './LuckyDrawRedeemed';
import { Link } from 'react-router-dom';

// create animations https://www.youtube.com/watch?v=JcHLxzrsRS4
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(3),
    maxWidth: 400,
    margin: 'auto',
  },
  paddedItem: {
    padding: theme.spacing(1),
  },
}));

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
      alignItems: 'center',
      textAlign: 'center',
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#fffef2',
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    backgroundColor: '#E5E5E5',
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function LuckyDraw(props) {
  const classes = useStyles();

  const { totalPoints, purchasePoints, otherPoints } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.paddedItem} variant="h4">
        LUCKY DRAW!
      </Typography>
      <Typography className={classes.paddedItem} paragraph>
        For more information about our lucky draw, click{' '}
        <Link to="/contests/luckyDraw" variant="contained">
          here
        </Link>
        !
      </Typography>
      <Typography className={classes.paddedItem} paragraph>
        TOTAL POINTS: {totalPoints}
      </Typography>
      <Accordion
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                variant="caption"
                color="secondary"
                style={{ textDecorationLine: 'underline' }}
              >
                DETAILS OF CHANCES GAINED
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography className={classes.paddedItem} variant="h5">
                CHANCES REDEEMED
              </Typography>
            </Grid>
            {otherPoints &&
              otherPoints.map((row, index) => (
                <LuckyDrawRedeened
                  key={index}
                  points={row.points}
                  category={row.category}
                />
              ))}
            {purchasePoints !== 0 && (
              <LuckyDrawRedeened points={purchasePoints} category="purchases" />
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default LuckyDraw;
