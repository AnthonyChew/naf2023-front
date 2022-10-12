import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'yoty',
    imgPath:
      'yoty.png',
  },
  {
    label: 'yoty2',
    imgPath:
      'yoty2.png',
  },
   {
    label: 'yoty3',
    imgPath:
      'yoty3.png',
  },
  {
    label: 'yoty4',
    imgPath:
      'yoty4.png',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    flexGrow: 1,
  },
  stepperDots: {
    bottom: '0px !important',
    position: 'relative',
    display: 'block',
    width: '100%',
    listStyle: 'none',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 300,
    display: 'block',
    maxWidth: 300,
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div>
        <ul className={'slick-dots' + ' ' + classes.stepperDots}>
          {tutorialSteps.map((item, index) =>
            index == activeStep ? (
              <li className="slick-active">
                <button
                  onClick={() => {
                    handleStepChange(index);
                  }}
                >
                  {' '}
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => {
                    handleStepChange(index);
                  }}
                >
                  {' '}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default SwipeableTextMobileStepper;
