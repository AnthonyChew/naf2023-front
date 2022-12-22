import axios from 'axios';
import config from '../config/env';
import { useState, useCallback, useMemo, useEffect } from 'react';
// Next we make an 'instance' of it
const axiosConfig = axios.create({
  // .. where we make our configurations
  baseURL: `${config.backendUrl}/api`,
  withCredentials: true,
});

const useAxiosLoader = () => {
  const [counter, setCounter] = useState(0);
  const inc = useCallback(() => setCounter((counter) => counter + 1), [
    setCounter,
  ]); // add to counter
  const dec = useCallback(() => setCounter((counter) => counter - 1), [
    setCounter,
  ]); // remove from counter

  const interceptors = useMemo(
    () => ({
      request: (config) => (inc(), config),
      response: (response) => (dec(), response),
      error: (error) => (dec(), Promise.reject(error)),
    }),
    [inc, dec]
  ); // create the interceptors

  useEffect(() => {
    // add request interceptors
    const reqInterceptor = axiosConfig.interceptors.request.use(
      interceptors.request,
      interceptors.error
    );
    // add response interceptors
    const resInterceptor = axiosConfig.interceptors.response.use(
      interceptors.response,
      interceptors.error
    );
    return () => {
      // remove all intercepts when done
      axiosConfig.interceptors.request.eject(reqInterceptor);
      axiosConfig.interceptors.response.eject(resInterceptor);
    };
  }, [interceptors]);

  return [counter > 0];
};

export { axiosConfig, useAxiosLoader };
