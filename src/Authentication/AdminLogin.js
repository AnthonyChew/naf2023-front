import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LoginForm from './LoginForm';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

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
    padding: theme.spacing(3),
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

function AdminLogin(props) {
  let history = useHistory();

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const { parentCallback } = props;

  const handleClose = () => {
    setOpen(false);
    parentCallback();
  };



  return (
    <div className={classes.root}>
      <Dialog
        onClose={handleClose}
        open={open}
        className={classes.root}
        scroll="paper"
      >
        <DialogTitle>Admin Login</DialogTitle>

        <div>
      <Button variant="contained" color="success" onClick={history.goBack}>Return to Previous Page</Button>
      <br></br>
      <br></br>
      </div>

        <DialogContent
          style={{ alignItems: 'flex-start', margin: 0, padding: 0 }}
        >
          <LoginForm user="admin" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AdminLogin;
