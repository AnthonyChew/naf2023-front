import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SocialLogin from './SocialLogin';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    maxWidth: '90%',
    margin: 'auto',
  },
}));

const DialogContent = withStyles((theme) => ({
  root: {
    position: 'relative',
    margin: theme.spacing(3),
    // padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
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

function UserLogin(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(true);

  const { parentCallback } = props;

  const handleClose = () => {
    setOpen(false);
    parentCallback();
  };

  return (
    <div className={classes.root}>
      <Dialog onClose={handleClose} open={open} className={classes.root}>
        <DialogContent>
          <div>
            {/* <Typography paragraph>
              Having issues signing in? <br />
              Check out the{' '}
              <Link to="/FAQ" variant="contained">
                FAQ Page
              </Link>
            </Typography> */}
            <SocialLogin />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UserLogin;
