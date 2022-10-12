import React, { useState, useReducer, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import photoService from '../services/photog';
import UserLogin from '../Authentication/UserLogin';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from 'react-promise-tracker';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  formSection: {
    marginBottom: theme.spacing(3),
  },
  actionButton: {
    display: 'block',
    textAlign: 'center',
  },
  section: {
    marginTop: 15,
    marginBottom: 55,
  },
}));

const DialogContent = withStyles((theme) => ({
  root: {
    // position: 'relative',
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      maxWidth: 'lg',
    },
  },
}))(MuiDialogContent);

const formReducer = (state, event) => {
  if (event.name === 'category' && event.value === 'open') {
    if (typeof state.matric !== 'undefined') {
      delete state.matric;
    }
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

const voteReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.checked,
  };
};

export default function PhotogContestPopup(props) {
  const classes = useStyles();
  const { curPeriod, parentCallback } = props;

  //DIALOG ACTIONS
  const handleClose = (isSubmitted) => {
    parentCallback(isSubmitted);
  };

  const [formData, setFormData] = useReducer(formReducer, { category: 'open' });
  const [NTUVoteData, setNTUVoteData] = useState([]);
  const [OpenVoteData, setOpenVoteData] = useState([]);
  const [auth, setAuth] = useState(true);
  const { promiseInProgress } = usePromiseTracker();

  const [numVotes, setNumVotes] = useState(0);

  useEffect(() => {
    async function fetchOpenPhotoData() {
      const res = await trackPromise(photoService.getShortlistedOpenPhotos());
      if (res.status === 200) {
        setOpenVoteData(res.data);
      } else {
        alert(res.data.error);
      }
    }
    fetchOpenPhotoData();
  }, []);

  useEffect(() => {
    async function fetchNTUPhotoData() {
      const res = await trackPromise(photoService.getShortlistedNTUPhotos());
      if (res.status === 200) {
        setNTUVoteData(res.data);
      } else {
        alert(res.data.error);
      }
    }
    fetchNTUPhotoData();
  }, []);

  const handleLoginClose = () => {
    setAuth(true);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    // console.log(formData);
    event.preventDefault();
    const res = await trackPromise(photoService.submitPhoto(formData));
    if (res.status === 200) {
      // alert('Photo successfully submitted for the competition.');
      handleClose(true);
    } else if (res.status === 401) {
      setAuth(false);
    } else {
      alert(res.data.error);
    }
  };

  const handleVote = async (event) => {
    event.preventDefault();
    const checked = checkedNTU.concat(checkedOpen);
    const res = await trackPromise(photoService.votePhoto({ photos: checked }));
    if (res.status === 200) {
      // alert('Voted successfully');
      handleClose(true);
    } else if (res.status === 401) {
      setAuth(false);
    } else {
      alert(res.data.error);
    }
  };

  //checked.length is the number of votes
  const [checkedNTU, setCheckedNTU] = useState([]);
  const [checkedOpen, setCheckedOpen] = useState([]);
  const handleToggleNTU = (value) => () => {
    const currentIndex = checkedNTU.indexOf(value);
    const newChecked = [...checkedNTU];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedNTU(newChecked);
  };

  const handleToggleOpen = (value) => () => {
    const currentIndex = checkedOpen.indexOf(value);
    const newChecked = [...checkedOpen];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedOpen(newChecked);
  };

  return (
    <>
      {!auth && <UserLogin parentCallback={handleLoginClose} />}
      <Dialog
        onClose={() => handleClose(false)}
        aria-labelledby="form popup"
        open={true}
        className={classes.root}
        fullWidth={true}
        maxWidth="md" //or "lg"
        scroll="body"
      >
        <DialogTitle id="title">
          {curPeriod === 'Submit'
            ? 'Submit a Photo'
            : curPeriod === 'Vote'
            ? 'Vote'
            : null}
        </DialogTitle>
        <DialogContent dividers>
          {curPeriod === 'Submit' ? (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Name"
                variant="filled"
                color="secondary"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
                className={classes.formSection}
                inputProps={{ maxLength: 64 }}
              />
              <TextField
                name="phoneNumber"
                label="Phone Number"
                variant="filled"
                color="secondary"
                type="tel"
                inputProps={{
                  pattern: '^[0-9]+$', // accepts digits only
                  maxLength: 15,
                }} // max possible length of a phone number including the country code
                fullWidth
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className={classes.formSection}
              />
              <TextField
                name="emailAddress"
                label="Email Address"
                variant="filled"
                color="secondary"
                type="email"
                fullWidth
                required
                value={formData.emailAddress}
                onChange={handleChange}
                className={classes.formSection}
                inputProps={{ maxLength: 64 }}
              />
              <TextField
                name="description"
                label="Description (max. 3000 chars)"
                variant="filled"
                color="secondary"
                fullWidth
                required
                value={formData.description}
                onChange={handleChange}
                className={classes.formSection}
                inputProps={{ maxLength: 3000 }}
              />
              <FormControl
                component="fieldset"
                required
                className={classes.formSection}
              >
                <FormLabel component="legend" color="secondary">
                  Category
                </FormLabel>
                <RadioGroup
                  aria-label="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="open"
                    control={<Radio />}
                    label="Open"
                  />
                  <FormControlLabel
                    value="ntu"
                    control={<Radio />}
                    label="NTU student/staff"
                  />
                </RadioGroup>
                {formData.category === 'ntu' && (
                  <TextField
                    name="matric"
                    label="Matric No./Staff ID"
                    variant="filled"
                    color="secondary"
                    //inputProps={{ pattern: '^U[0-9]{7}[A-Z]$' }} // accepts 'U' as the first character, then 7 [0-9] characters, then a character
                    inputProps={{
                      pattern: '^[a-zA-Z0-9]+$', // alphanumeric characters only
                      maxLength: 15,
                    }} // how long is a staff id lmao
                    required={formData.category === 'ntu'}
                    value={formData.matric}
                    onChange={handleChange}
                  />
                )}
              </FormControl>
              <TextField
                name="submissionLink"
                label="Submission Link"
                variant="filled"
                color="secondary"
                type="url"
                fullWidth
                required
                value={formData.submissionLink}
                onChange={handleChange}
                className={classes.formSection}
                inputProps={{ maxLength: 255 }}
              />
              <div className={classes.actionButton}>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  disabled={promiseInProgress}
                >
                  Submit
                </Button>
                <LoadingSpinnerComponent />
              </div>
            </form>
          ) : (
            <form autoComplete="off" onSubmit={handleVote}>
              <FormControl
                required
                component="fieldset"
                className={classes.formSection}
                fullWidth
              >
                <FormLabel component="legend">
                  Select at most two submissions per category to vote for:
                </FormLabel>
                <div className={classes.section}>
                  <Typography
                    variant="h5"
                    style={{ fontWeight: 'bold' }}
                    align="center"
                  >
                    NTU Category
                  </Typography>
                  <FormGroup>
                    {NTUVoteData.map((entry) => (
                      <FormControlLabel
                        key={entry._id}
                        control={
                          <Checkbox
                            onChange={handleToggleNTU(`${entry._id}`)}
                            checked={checkedNTU.indexOf(`${entry._id}`) !== -1}
                            inputProps={{ 'aria-labelledby': entry.name }}
                          />
                        }
                        label={`${entry.name} (${entry.submissionId})`}
                      />
                    ))}
                  </FormGroup>
                </div>
                <Typography
                  variant="h5"
                  style={{ fontWeight: 'bold' }}
                  align="center"
                >
                  Open Category
                </Typography>
                <FormGroup>
                  {OpenVoteData.map((entry) => (
                    <FormControlLabel
                      key={entry._id}
                      control={
                        <Checkbox
                          onChange={handleToggleOpen(`${entry._id}`)}
                          checked={checkedOpen.indexOf(`${entry._id}`) !== -1}
                          inputProps={{ 'aria-labelledby': entry.name }}
                        />
                      }
                      label={`${entry.name} (${entry.submissionId})`}
                    />
                  ))}
                </FormGroup>
                {(checkedNTU.length > 2 ||
                  checkedOpen.length > 2 ||
                  (checkedNTU.length === 0 && checkedOpen.length === 0)) && (
                  <FormHelperText>
                    Select one or two entries to vote for per category (Max 4
                    votes).
                  </FormHelperText>
                )}
              </FormControl>

              <div className={classes.actionButton}>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  disabled={
                    checkedNTU.length > 2 ||
                    checkedOpen.length > 2 ||
                    (checkedNTU.length === 0 && checkedOpen.length === 0) ||
                    promiseInProgress
                  }
                >
                  Vote
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
