import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { DialogActions } from '@material-ui/core';

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
}))(MuiDialogContent);

export default function WorkshopOverPopup(props) {
  const { parentCallback } = props;
  const classes = useStyles();

  //DIALOG ACTIONS
  const handleClose = () => {
    parentCallback();
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="workshop over popup"
        open={true}
        className={classes.root}
        maxWidth="md" //or "lg"
        scroll="body"
        marginBottom="5"
      >
        <DialogContent>
            <Typography
              className={classes.bottomSeparator}
              variant="h5"
            >
              Sign up for this workshop has closed!
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button
              className={classes.actionButton}
              variant="contained"
              color="primary"
              onClick={handleClose}
            >
              Close
            </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
