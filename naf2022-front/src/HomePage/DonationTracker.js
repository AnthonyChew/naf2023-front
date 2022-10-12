import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import donationService from '../services/donations';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    position: 'relative',
    paddingBottom: 100,
  },
  bar: {
    width: '95vw',
    display: 'inline-flex',
    borderRadius: '50px',
    overflow: 'hidden',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  section: {
    '&:hover': {
      filter: 'brightness(105%)',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    bar: {
      flexDirection: 'column',
      height: '140vh',
      width: '50vw',
    },
  },
  [theme.breakpoints.up('lg')]: {
    bar: {
      width: '80vw',
    },
  },
}));

export default function DonationTracker(props) {
  const classes = useStyles();
  const [sections, setSections] = useState([]);
  let colours = [
    '#FED92F',
    '#F8B03E',
    '#F2874C',
    '#D2536A',
    '#B11F87',
    '#5F497D',
    '#0C7373',
    '#228080',
  ];

  useEffect(() => {
    async function fetchData() {
      const res = await donationService.getDonations();
      if (res.status === 200) {
        setSections(res.data);
      }
      //  else {
      //   alert('Error loading donations :(');
      // }
    }
    fetchData();
  }, []);

  const total = sections.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.amount;
  }, 0);

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function dynamicStyling(section, index) {
    return isSmScreen
      ? {
          height: `${(section.amount / total) * 200}%`,
          backgroundColor: colours[index],
          textAlign: 'center',
        }
      : {
          width: `${(section.amount / total) * 100}%`,
          backgroundColor: colours[index],
          textAlign: 'center',
        };
  }

  // https://stackoverflow.com/questions/36577205/what-is-the-elegant-way-to-get-the-latest-date-from-array-of-objects-in-client-s
  const lastUpdated = new Date(
    Math.max(...sections.map((section) => new Date(section.last_updated)))
  );

  return (
    <div className={classes.root} style={{paddingTop:"120px"}}>
      <Typography align="center" variant="h4">
        Total Donations Collected:
      </Typography>
      <Typography variant="h5">${total.toFixed(2)}</Typography>
      <div className={classes.bar}>
        {sections.map((section, index) => (
          <>
            {section.amount > 0 && (
              <Tooltip
                title={section.description}
                aria-label={section.description}
                key={index}
              >
                <div
                  className={classes.section}
                  style={dynamicStyling(section, index)}
                >
                  <Typography
                    variant="subtitle1"
                    style={{ fontWeight: 'bold' }}
                  >
                    {section.name}
                  </Typography>
                  <Typography variant="subtitle2">
                    ${section.amount.toFixed(2)}
                  </Typography>
                </div>
              </Tooltip>
            )}
          </>
        ))}
      </div>
      <Typography variant="subtitle1">
        Updated as of: {lastUpdated.toLocaleString('en-GB')}
      </Typography>
    </div>
  );
}
