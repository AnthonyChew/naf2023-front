import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmationDialog(props) {
  const { title, content, parentCallback } = props;

  //TO USE, include the following the your component:
  //   const [open, setOpen] = useState(false);
  // const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleDialogResult = (continueAction) => {
  //     setOpen(false);
  //     if (continueAction) {
  //         //complete action
  //     }
  //   };
  //   {open && (
  //     <ConfirmationDialog
  //       //callback
  //       title={}
  //       content={}
  //       parentCallback={handleDialogResult}
  //     />
  //   )}

  const handleClose = () => {
    parentCallback(false);
  };

  const handleConfirm = () => {
    parentCallback(true);
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
          color="secondary"
          variant="contained"
          autoFocus
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
