import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { DialogActions } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import UserLogin from '../Authentication/UserLogin';
import workshopService from '../services/workshops';
import Checkbox from '@material-ui/core/Checkbox';
import { trackPromise } from 'react-promise-tracker';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { usePromiseTracker } from 'react-promise-tracker';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  bottomSeparator: {
    marginBottom: theme.spacing(3),
  },
  actionButton: {
    display: 'inline-block',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  acknowledgement: {
    fontSize: '0.8rem',
  },
}));

const DialogContent = withStyles((theme) => ({
  root: {
    position: 'relative',
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    // maxHeight: '60vh',
    overflowY: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    root: {
      // backgroundColor: 'pink',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      // backgroundColor: 'orange',
      maxWidth: 'lg',
    },
  },
}))(MuiDialogContent);

export default function SignupPopup(props) {
  const { workshop, parentCallback } = props;
  const classes = useStyles();
  const [state, setState] = useState({
    name: '',
    contactNumber: '',
    emailAddress: '',
    matricNumber: '',
  });
  const [auth, setAuth] = useState(true);
  const [acknowledgement, setAcknowledgment] = useState(false);
  const [helperText, setHelperText] = useState('');
  const { promiseInProgress } = usePromiseTracker();

  //DIALOG ACTIONS
  const handleClose = (isSuccess) => {
    parentCallback(isSuccess);
  };

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleLoginClose = () => {
    setAuth(true);
  };

  const signUpWorkshop = async (event) => {
    event.preventDefault();
    if (acknowledgement === false) {
      setHelperText('Please indicate acknowledgement of terms and conditions.');
    } else {
      const res = await trackPromise(
        workshopService.signUpWorkshop(workshop._id, state)
      );
      if (res.status === 200) {
        handleClose(true);
      } else if (res.status === 401) {
        setAuth(false);
      } else if (res.status === 400) {
        // console.log(res.data);
        alert(res.data.error);
      }
    }
  };

  return (
    <>
      {!auth && <UserLogin parentCallback={handleLoginClose} />}
      <Dialog
        onClose={() => handleClose(false)}
        aria-labelledby="signup popup"
        open={true}
        className={classes.root}
        fullWidth={true}
        maxWidth="md" //or "lg"
        scroll="body"
        marginBottom="5"
      >
        <DialogContent dividers>
          <form autoComplete="off" onSubmit={signUpWorkshop}>
            <Typography
              className={classes.bottomSeparator}
              variant="h5"
              component="h1"
            >
              {workshop && workshop.name}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl
                  autoFocus
                  fullWidth
                  color="secondary"
                  required
                  id="standard-required"
                >
                  <InputLabel
                    shrink
                    htmlFor="component-simple"
                    color="secondary"
                  >
                    Full Name
                  </InputLabel>
                  <Input
                    id="component-simple"
                    color="secondary"
                    value={state.name}
                    onChange={handleChange('name')}
                    inputProps={{ maxLength: 64 }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  autoFocus
                  fullWidth
                  color="secondary"
                  required
                  id="standard-required"
                >
                  <InputLabel shrink htmlFor="component-simple">
                    Contact No.
                  </InputLabel>
                  <Input
                    id="component-simple"
                    type="tel"
                    inputProps={{
                      pattern: '^[0-9]+$', // accepts digits only
                      maxLength: 15,
                    }} // max possible length of a phone number including the country code
                    value={state.contactNumber}
                    onChange={handleChange('contactNumber')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  autoFocus
                  fullWidth
                  color="secondary"
                  required
                  id="standard-required"
                >
                  <InputLabel shrink htmlFor="component-simple">
                    Email Address
                  </InputLabel>
                  <Input
                    id="component-simple"
                    type="email"
                    //inputProps={{ pattern: '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$' }} // this pattern would allow some invalid gmails e.g. "abc"@gmail.com
                    inputProps={{ maxLength: 64 }}
                    value={state.emailAddress}
                    onChange={handleChange('emailAddress')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  autoFocus
                  fullWidth
                  color="secondary"
                  required
                  id="standard-required"
                >
                  <InputLabel shrink htmlFor="component-simple">
                    Matriculation Number/Staff ID
                  </InputLabel>
                  <Input
                    id="component-simple"
                    //inputProps={{ pattern: '^U[0-9]{7}[A-Z]$' }} // accepts 'U' as the first character, then 7 [0-9] characters, then a character
                    inputProps={{
                      pattern: '^[a-zA-Z0-9]+$', // alphanumeric characters only
                      maxLength: 15,
                    }} // how long is a staff id lmao
                    value={state.matricNumber}
                    onChange={handleChange('matricNumber')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography paragraph>
                  *This workshop is only available for NTU students/staff. Your
                  identity will be confirmed on the day of the workshop.
                </Typography>
              </Grid>
            </Grid>
            <FormControl
              component="fieldset"
              required
              style={{ marginTop: 15 }}
            >
              <FormControlLabel
                component="legend"
                color="secondary"
                control={
                  <Checkbox
                    checked={acknowledgement}
                    onChange={() => setAcknowledgment(!acknowledgement)}
                  />
                }
                label={
                  <Typography paragraph className={classes.acknowledgement}>
                    By submitting this form, I hereby agree that NTU Arts
                    Festival may collect, obtain, store, process and share (with
                    relevant third party) my personal data, that I provide in
                    this form, for the purpose of their event.
                  </Typography>
                }
              />
            </FormControl>
            <FormHelperText style={{ color: 'red' }}>
              {helperText}
            </FormHelperText>
            <div>
              <Button
                className={classes.actionButton}
                type="submit"
                variant="contained"
                color="secondary"
                disabled={promiseInProgress}
              >
                Sign Up
              </Button>
              <LoadingSpinnerComponent />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <div>
            <Button
              className={classes.actionButton}
              variant="contained"
              color="primary"
              onClick={() => handleClose(false)}
              disabled={promiseInProgress}
            >
              Cancel
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}
