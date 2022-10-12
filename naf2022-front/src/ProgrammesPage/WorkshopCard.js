import React, { useState } from 'react';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Slider from 'react-slick';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SignupPopup from './SignupPopup';
import WorkshopOverPopup from './WorkshopOverPopup';
import UserLogin from '../Authentication/UserLogin';
import authService from '../services/auth';
import moment from 'moment';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'left',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    margin: 'auto',
  },
}));

const Accordion = withStyles({
  root: {
    boxShadow: 1,
    // border: '1px solid rgba(0, 0, 0, .125)',
    '&:not(:last-child)': {
      borderBottom: 0,
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
    // backgroundColor: '#fffef2',
    marginBottom: -10,
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
    padding: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}))(MuiAccordionDetails);

export default function WorkshopCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { workshop } = props;
  const {
    name,
    organizer,
    description,
    category,
    date,
    startTime,
    duration,
    images,
    location,
    maxParticipants,
    numRegistered,
  } = workshop;

  const classes = useStyles();

  const theme = useTheme();
  const dialogSize = useMediaQuery(theme.breakpoints.down('xs'));

  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(true);

  //Every time they click

  const checkAuth = async () => {
    const res = await authService.checkAuthStudent();
    if (res.status === 401) {
      setAuth(false);
    } else if (res.status === 200) {
      handleClickOpen();
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (isSuccess) => {
    setOpen(false);
    if (isSuccess) {
      handleOpenSnackbar();
    }
  };

  const handleLoginClose = () => {
    setAuth(true);
  };

  //snackbar for signing up for workshop
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleOpenSnackbar = () => {
    console.log('opening snackbar');
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    console.log('closing snackbar');
    setSnackbarOpen(false);
  };

  const current_date = moment().format('YYYY-MM-DD');

  const settings = {
    dots: dialogSize ? false : true,
    dotsClass: `slick-dots ${classes.dots}`,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
  };

  function calculateEndTime(startTime, duration) {
    let time = new Date();
    let timeSplit = startTime.split(':');
    time.setHours(parseInt(timeSplit[0]));
    time.setMinutes(parseInt(timeSplit[1]));

    let newTime = new Date(time.getTime() + duration * 60000); // 60,000 ms

    return (
      newTime.getHours().toString() +
      ':' +
      (newTime.getMinutes() < 10 ? '0' : '') +
      newTime.getMinutes().toString()
    );
  }

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Grid container spacing={3} alignItems="center" justify="center">
            {/* <Grid item xs={1}></Grid> */}
            <Grid item xs={6}>
              <img
                src={images && images[0]}
                alt={name}
                className={classes.thumbnail}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body2"
                style={{ color: '#033F63' }}
                component="p"
              >
                <br />
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                style={{ color: '#033F63' }}
                component="h2"
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                style={{ color: '#033F63' }}
                component="p"
              >
                Category: {category}
              </Typography>
              <Typography
                variant="body2"
                style={{ color: '#033F63' }}
                component="p"
              >
                Organizer: {organizer}
              </Typography>
              <Typography
                variant="body2"
                style={{ color: '#033F63' }}
                component="p"
              >
                Date: {date && date.substr(0, 10)}
              </Typography>
              <Typography
                variant="body2"
                style={{ color: '#033F63' }}
                component="p"
              >
                Time: {startTime} - {calculateEndTime(startTime, duration)}
              </Typography>
              <Typography
                variant="body2"
                style={{ color: '#033F63' }}
                component="p"
              >
                Duration: {duration} minutes
              </Typography>
              <Typography
                variant="body2"
                style={{ color: '#033F63' }}
                component="p"
              >
                Vacancies:{' '}
                {maxParticipants - numRegistered > 1000
                  ? 'Unlimited'
                  : maxParticipants - numRegistered}
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            {/* <Grid item xs={6}>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <img
                    key={index}
                    className={classes.img}
                    src={image}
                    alt={name}
                  />
                ))}
              </Slider>
            </Grid> */}
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    {description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <br />
                    Location: {location}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={checkAuth}
                    className={classes.actionButton}
                    variant="contained"
                    color="secondary"
                    disabled={
                      new Date().getTime() <
                        new Date('30 January 2022').getTime() ||
                      new Date().getTime() >=
                        new Date('12 February 2022 00:00:00').getTime()
                    }
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={
          'You have successfully signed up for the workshop! View your workshops at your profile page.'
        }
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      {!auth && <UserLogin parentCallback={handleLoginClose} />}
      {open && current_date <= { date } && (
        <SignupPopup
          //callback
          workshop={workshop}
          parentCallback={handleClose}
        />
      )}
      {open && current_date > { date } && (
        <WorkshopOverPopup
          //callback
          parentCallback={handleClose}
        />
      )}
    </div>
  );
}
