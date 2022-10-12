import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import PulseLoader from 'react-spinners/PulseLoader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  spinner: {
    textAlign: 'center',
    margin: theme.spacing(5),
  },
}));

export const LoadingSpinnerComponent = () => {
  const classes = useStyles();

  const { promiseInProgress } = usePromiseTracker();
  return (
    <>
      {promiseInProgress && (
        <div className={classes.spinner}>
          <PulseLoader color="#6c757d" loading={promiseInProgress} />
        </div>
      )}
    </>
  );
};
