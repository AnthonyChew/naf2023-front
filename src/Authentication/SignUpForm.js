import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import vendorService from '../services/vendors';
import FormHelperText from '@material-ui/core/FormHelperText';
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

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function SignUpForm(props) {
  const classes = useStyles();
  const [formData, setFormData] = useReducer(formReducer, {
    showPassword: false,
  });

  const { switchTabs } = props;
  const { promiseInProgress } = usePromiseTracker();
  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    delete formData['showPassword'];
    for (let key in formData) {
      if (formData[key] === '') {
        delete formData[key];
      }
    }
    const res = await trackPromise(vendorService.vendorSignUp(formData));
    if (res.status === 200) {
      alert('Successfully signed up! Please login into your account.');
      switchTabs(1);
    } else {
      // console.log(res.data);
      if (res.data.validation) {
        alert(`${res.data.error}: ${JSON.stringify(res.data.validation)}`);
      } else {
        alert(`${res.data.error}: This email/username has been used before.`);
      }
    }
  };

  const handleClickShowPassword = () => {
    setFormData({
      name: 'showPassword',
      value: !formData.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className={classes.root}>
      <TextField
        name="username"
        label="Username"
        variant="filled"
        color="secondary"
        fullWidth
        required
        value={formData.username}
        onChange={handleChange}
        className={classes.formSection}
        inputProps={{ maxLength: 32 }}
      />
      <FormControl
        className={clsx(classes.margin, classes.textField, classes.formSection)}
        variant="filled"
        color="secondary"
        fullWidth
        required
        // className={classes.formSection}
      >
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          name="password"
          type={formData.showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          inputProps={{ maxLength: 64 }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {formData.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        name="displayName"
        label="Display Name"
        variant="filled"
        color="secondary"
        fullWidth
        required
        value={formData.displayName}
        onChange={handleChange}
        className={classes.formSection}
        inputProps={{ maxLength: 100 }}
      />
      <TextField
        name="emailAddress"
        label="Email Address"
        variant="filled"
        color="secondary"
        required
        fullWidth
        type="email"
        //inputProps={{ pattern: '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$' }} // this pattern would allow some invalid gmails e.g. "abc"@gmail.com
        inputProps={{ maxLength: 64 }}
        value={formData.emailAddress}
        onChange={handleChange}
        className={classes.formSection}
      />
      <FormControl
        required
        variant="filled"
        color="secondary"
        fullWidth
        className={classes.formSection}
      >
        <InputLabel htmlFor="leadTime">Vendor Surcharge</InputLabel>
        <FilledInput
          name="surcharge"
          value={formData.surcharge}
          onChange={handleChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          // labelWidth={130}
          inputProps={{
            min: '0',
            step: '0.01',
            // pattern: '[0-9]*',
          }}
          type="number"
        />
        <FormHelperText>
          Vendor Surcharge indicates the extra charges (on top of price) due to
          delivery/packaging.
        </FormHelperText>
      </FormControl>
      <TextField
        name="description"
        label="Description"
        variant="filled"
        color="secondary"
        fullWidth
        multiline
        rows={2}
        value={formData.description}
        onChange={handleChange}
        className={classes.formSection}
      />
      <TextField
        name="contactNumber"
        label="Contact Number"
        variant="filled"
        color="secondary"
        fullWidth
        type="tel"
        inputProps={{
          pattern: '^[0-9]+$', // accepts digits only
          // maxLength: 15,
          maxLength:8,
          minLength:8,
        }} // max possible length of a phone number including the country code
        value={formData.contactNumber}
        onChange={handleChange}
        className={classes.formSection}
      />

      <TextField
        name="instagramAccount"
        label="Instagram Account"
        variant="filled"
        color="secondary"
        fullWidth
        value={formData.instagramAccount}
        onChange={handleChange}
        className={classes.formSection}
        inputProps={{ maxLength: 30 }}
      />
      <TextField
        name="website"
        label="Website"
        variant="filled"
        color="secondary"
        fullWidth
        type="url"
        value={formData.website}
        onChange={handleChange}
        className={classes.formSection}
        inputProps={{ maxLength: 255 }}
      />

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        disabled={promiseInProgress}
      >
        Submit
      </Button>
      <LoadingSpinnerComponent />
    </form>
  );
}
