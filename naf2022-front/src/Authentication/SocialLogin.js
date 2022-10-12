import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import googleSignIn from './assets/google_signin.jpg';
import facebookSignIn from './assets/facebook_signin.png';
import config from '../config/env';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  loginButton: {
    maxWidth: '200px',
    width: '100%',
  },
}));





export default function LoginForm() {
  const classes = useStyles();
  const googleUrl = `${config.backendUrl}/api/auth/google/login`;
  const facebookUrl = `${config.backendUrl}/api/auth/facebook/login`;
  let history = useHistory();

  return (
    <div>
      

      <div>
        <Button variant="contained" color="success" onClick={history.goBack}>Return to Previous Page</Button>
        <br></br>
        <br></br>
      </div>
      <a href={googleUrl}>
        <img
          src={googleSignIn}
          alt="Sign up and Login with Google"
          className={classes.loginButton}
        />
      </a>
      {/* <p>
        <a href={facebookUrl}>
          <img
            className={classes.loginButton}
            src={facebookSignIn}
            alt="Sign up and Login with Facebook"
          />
        </a>
      </p> */}
    </div>
  );
}
