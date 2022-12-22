import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import PulseLoader from 'react-spinners/PulseLoader';


export const LoadingSpinnerComponent = () => {

  const { promiseInProgress } = usePromiseTracker();
  return (
    <>
      {promiseInProgress && (
        <div>
          <PulseLoader color="#6c757d" loading={promiseInProgress} />
        </div>
      )}
    </>
  );
};