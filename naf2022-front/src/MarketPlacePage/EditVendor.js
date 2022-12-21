import React, { useReducer } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { DialogActions } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import vendorService from '../services/vendors';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  formSection: {
    marginBottom: theme.spacing(3),
  },
  bottomSeparator: {
    marginBottom: theme.spacing(3),
  },
  actionButton: {
    display: 'inline-block',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
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

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function EditVendor(props) {
  const { vendor, parentCallback } = props;
  const classes = useStyles();
  const history = useHistory();

  const [formData, setFormData] = useReducer(formReducer, {
    //required fields in sign up were: username, password, displayName, emailAddress, surcharge(or assigned a default value)
    username: vendor.username,
    displayName: vendor.displayName,
    description:
      typeof vendor.description === 'undefined' ? '' : vendor.description,
    contactNumber:
      typeof vendor.contactNumber === 'undefined' ? '' : vendor.contactNumber,
    instagramAccount:
      typeof vendor.instagramAccount === 'undefined'
        ? ''
        : vendor.instagramAccount,
    website: typeof vendor.website === 'undefined' ? '' : vendor.website,
    surcharge: vendor.surcharge,
  });

  //DIALOG ACTIONS
  const handleClose = () => {
    parentCallback();
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const saveChanges = async (event) => {
    event.preventDefault();
    const res = await vendorService.editVendor(formData);
    if (res.status === 200) {
      history.go(0);
    } else if (res.status === 401) {
      alert('You are not authorized.');
    } else {
      alert(res.data.error);
    }
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="edit popup"
        open={true}
        className={classes.root}
        fullWidth={true}
        maxWidth="md" //or "lg"
        scroll="body"
        marginBottom="5"
      >
        <DialogContent dividers>
          <div>
            <Typography
              className={classes.bottomSeparator}
              variant="h5"
              component="h1"
            >
              Edit Vendor Profile
            </Typography>
            <form
              autoComplete="off"
              onSubmit={saveChanges}
              className={classes.root}
            >
              <TextField
                name="username"
                label="Username"
                color="secondary"
                fullWidth
                required
                defaultValue={formData.username}
                onChange={handleChange}
                className={classes.formSection}
                inputProps={ {maxLength:32} }
              />

              <TextField
                name="displayName"
                label="Display Name"
                color="secondary"
                fullWidth
                required
                defaultValue={formData.displayName}
                onChange={handleChange}
                className={classes.formSection}
                inputProps={ {maxLength:100} }
              />
              <FormControl
                required
                color="secondary"
                fullWidth
                className={classes.formSection}
              >
                <InputLabel htmlFor="leadTime">Vendor Surcharge</InputLabel>
                <Input
                  name="surcharge"
                  defaultValue={formData.surcharge}
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  // labelWidth={130}
                  inputProps={{
                    min: '0',
                    step: '0.01',
                    // pattern: '[0-9]*',
                  }}
                  type="number"
                />
                <FormHelperText>
                  Vendor Surcharge indicates the extra charges (on top of price)
                  due to delivery/packaging.
                </FormHelperText>
              </FormControl>
              <TextField
                name="description"
                label="Description"
                color="secondary"
                fullWidth
                multiline
                rows={2}
                defaultValue={formData.description}
                onChange={handleChange}
                className={classes.formSection}
              />
              <TextField
                name="contactNumber"
                label="Contact Number"
                color="secondary"
                fullWidth
                type="tel"
                inputProps={{ pattern: '^[689][0-9]{7}$' }} // accepts '6', '8' or '9' as the first character, then 7 more [0-9] characters
                defaultValue={formData.contactNumber}
                onChange={handleChange}
                className={classes.formSection}
              />

              <TextField
                name="instagramAccount"
                label="Instagram Account"
                color="secondary"
                fullWidth
                defaultValue={formData.instagramAccount}
                onChange={handleChange}
                className={classes.formSection}
                inputProps={ {maxLength:30} }
              />
              <TextField
                name="website"
                label="Website"
                color="secondary"
                fullWidth
                type="url"
                defaultValue={formData.website}
                onChange={handleChange}
                className={classes.formSection}
                inputProps={ {maxLength:255} }
              />
              <Button
                className={classes.actionButton}
                variant="contained"
                color="secondary"
                type="submit"
              >
                Save Changes
              </Button>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <div>
            <Button
              className={classes.actionButton}
              variant="contained"
              color="primary"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}
