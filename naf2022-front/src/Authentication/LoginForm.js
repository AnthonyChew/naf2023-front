import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilledInput from '@material-ui/core/FilledInput';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import authService from '../services/auth';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { trackPromise } from 'react-promise-tracker';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { usePromiseTracker } from 'react-promise-tracker';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  formSection: {
    marginBottom: theme.spacing(3),
  },
}));
export default function LoginForm(props) {
  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });
  const { user } = props;
  const history = useHistory();
  const { promiseInProgress } = usePromiseTracker();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const logIn = async (event) => {
    event.preventDefault();
    let res = null;
    if (user === 'vendor') {
      res = await trackPromise(
        authService.vendorLogin(values.username, values.password)
      );
    } else if (user === 'admin') {
      res = await trackPromise(
        authService.adminLogin(values.username, values.password)
      );
    }
    if (res.status === 200) {
      history.go(0);
    } else {
      alert(JSON.stringify(res.data.errors));
    }
  };

  const classes = useStyles();
  return (
    <form autoComplete="off" onSubmit={logIn} className={classes.root}>
      <TextField
        label="Enter your username/email"
        id="username"
        variant="filled"
        fullWidth
        onChange={handleChange('username')}
        className={classes.formSection}
        color="secondary"
        inputProps={{ maxLength: 64 }}
        required
      />
      <FormControl
        className={clsx(classes.formSection)}
        variant="filled"
        fullWidth
        color="secondary"
        required
      >
        <InputLabel>Enter your password</InputLabel>
        <FilledInput
          id="password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          inputProps={{ maxLength: 64 }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        disabled={promiseInProgress}
      >
        Log in
      </Button>
      <LoadingSpinnerComponent />
    </form>
  );
}
