import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    margin: 'auto',
  },
}));

export default function WaitlistedWorkshops(props) {
  const classes = useStyles();
  const [select, setSelect] = useState(0);
  const selectWorkshop = (index) => {
    setSelect(index);
  };

  const { workshops, parentCallback } = props;

  const handleClose = (toBump) => {
    if (toBump) {
      parentCallback(workshops[select]._id);
    } else {
      parentCallback(null);
    }
  };

  return (
    <div className={classes.root}>
      <Dialog
        aria-labelledby="form popup"
        open={true}
        className={classes.root}
        fullWidth={true}
        maxWidth="md" //or "lg"
        scroll="body"
      >
        <DialogTitle id="title">
          Do you wish to bump up any of these waitlisted workshops? (Subjected
          to vacancy)
        </DialogTitle>
        <Typography variant="body2" component="p"></Typography>
        <DialogContent dividers>
          <List>
            {workshops &&
              workshops.map((workshop, i) => (
                <>
                  <ListItem
                    button
                    disabled={
                      workshop.numRegistered >= workshop.maxParticipants
                    }
                    selected={i === select}
                    onClick={() => selectWorkshop(i)}
                  >
                    <ListItemText primary={workshop.name} />
                    <ListItemText
                      primary={`${workshop.numRegistered}/${workshop.maxParticipants}`}
                    />
                  </ListItem>
                </>
              ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(true)}>Yes</Button>
          <Button onClick={() => handleClose(false)}>No</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
