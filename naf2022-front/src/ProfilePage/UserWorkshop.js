import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import ContestCard from './ContestCard';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import workshopService from '../services/workshops';
import WaitlistedWorkshops from './WaitlistedWorkshops';
import { useHistory, Link } from 'react-router-dom';
import ConfirmationDialog from '../Components/ConfirmationDialog';
// import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from 'react-promise-tracker';

// create animations https://www.youtube.com/watch?v=JcHLxzrsRS4
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(3),
    maxWidth: '80%',
    margin: 'auto',
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
}));

function UserWorkshop(props) {
  const classes = useStyles();
  const history = useHistory();
  const { waitlistedWorkshops, registeredWorkshops } = props;
  const [open, setOpen] = useState(false);
  const [regWorkshop, setWorkshopCancel] = useState(null);

  const handleClickOpen = (workshopId) => {
    setWorkshopCancel(workshopId);
    setOpen(true);
  };
  //FIXME rename to workshop card
  const handleClose = (workshopIdBump) => {
    setOpen(false);
    cancelRegisteredWorkshop(regWorkshop, workshopIdBump);
  };

  const cancelWaitlistedWorkshop = async (workshopId) => {
    const res = await trackPromise(
      workshopService.unregisterWaitlistWorkshop(workshopId)
    );
    if (res.status === 200) {
      history.go(0);
    }
  };

  const cancelRegisteredWorkshop = async (regWorkshop, workshopToBump) => {
    const res = await trackPromise(
      workshopService.unregisterRegisterWorkshop(regWorkshop, workshopToBump)
    );
    if (res.status === 200) {
      history.go(0);
    } else {
      alert(res.data.error);
    }
  };

  const [confirmCancel, setConfirmCancel] = useState(false);

  const handleConfirmCancel = () => {
    setConfirmCancel(true);
  };

  const [selectedWorkshop, setSelectedWorkshop] = useState(false);

  const handleSelectWorkshop = (workshop) => {
    setSelectedWorkshop(workshop);
  };

  const [registered, setRegistered] = useState(false);

  const { promiseInProgress } = usePromiseTracker();

  const handleRegistered = (type) => {
    setRegistered(type);
  };

  const handleDialogResult = (continueAction) => {
    setConfirmCancel(false);
    if (continueAction) {
      if (registered) {
        if (
          waitlistedWorkshops.length === 0 ||
          selectedWorkshop.name.substring(0, 24) ===
            'Arts Community Open Talk' ||
          !waitlistedWorkshops.find(
            (workshop) => workshop.numRegistered < workshop.maxParticipants
          )
        ) {
          cancelRegisteredWorkshop(selectedWorkshop._id, null);
        } else {
          handleClickOpen(selectedWorkshop._id);
        }
      } else {
        cancelWaitlistedWorkshop(selectedWorkshop._id);
      }
    }
  };

  function onClickCancelReg(workshop) {
    handleConfirmCancel();
    handleSelectWorkshop(workshop);
    handleRegistered(true);
  }

  function onClickCancelWait(workshop) {
    handleConfirmCancel();
    handleSelectWorkshop(workshop);
    handleRegistered(false);
  }

  return (
    <div className={classes.root}>
      {open && (
        <WaitlistedWorkshops
          parentCallback={handleClose}
          workshops={waitlistedWorkshops}
        />
      )}
      {confirmCancel && (
        <ConfirmationDialog
          //callback
          title="Cancel Workshop?"
          content="You will be removed from this workshop. This action cannot be undone."
          parentCallback={handleDialogResult}
        />
      )}
      <Typography className={classes.paddedItem} variant="h4">
        CONFIRMED WORKSHOPS
      </Typography>
      {registeredWorkshops && registeredWorkshops.length === 0 ? (
        <Typography paragraph>
          You have not registered for any workshops. <br></br>Take a look at our
          available workshops{' '}
          <Link to="/Oasis" variant="contained">
            here
          </Link>
          !
        </Typography>
      ) : (
        registeredWorkshops &&
        registeredWorkshops.map((workshop, index) => {
          let imageFile;
          if (workshop.images.length > 0) {
            imageFile = workshop.images[0];
          }
          return (
            <>
              <ContestCard key={index} name={workshop.name} image={imageFile} />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => onClickCancelReg(workshop)}
                disabled={promiseInProgress}
              >
                Cancel
              </Button>
            </>
          );
        })
      )}
      <Typography className={classes.paddedItem} variant="h4">
        WAITLISTED WORKSHOPS
      </Typography>
      {waitlistedWorkshops && waitlistedWorkshops.length === 0 ? (
        <Typography paragraph>
          You are not waitlisted for any workshops.
        </Typography>
      ) : (
        waitlistedWorkshops &&
        waitlistedWorkshops.map((workshop, index) => {
          let imageFile;
          if (workshop.images.length > 0) {
            imageFile = workshop.images[0];
          }
          return (
            <>
              <ContestCard key={index} name={workshop.name} image={imageFile} />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => onClickCancelWait(workshop)}
                disabled={promiseInProgress}
              >
                Cancel
              </Button>
            </>
          );
        })
      )}
    </div>
  );
}

export default UserWorkshop;
