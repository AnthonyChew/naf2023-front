import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    maxWidth: "90%",
    margin: "auto",
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const DialogContent = withStyles((theme) => ({
  root: {
    position: "relative",
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    // maxHeight: '60vh',
    overflowY: "auto",
  },
  [theme.breakpoints.down("md")]: {
    root: {
      // backgroundColor: 'pink',
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
  [theme.breakpoints.down("xs")]: {
    root: {
      // backgroundColor: 'orange',
      maxWidth: "lg",
    },
  },
}))(MuiDialogContent);

function VendorLogin(props) {
  const classes = useStyles();
  const [subTab, setSubTab] = useState(0);
  const [open, setOpen] = useState(true);

  const { parentCallback } = props;

  const handleSubTabChange = (event, newValue) => {
    setSubTab(newValue);
  };

  const handleClose = () => {
    setOpen(false);
    parentCallback();
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  let history = useHistory();

  return (
    <div className={classes.root}>
      <Dialog
        onClose={handleClose}
        open={open}
        className={classes.root}
        scroll="paper"
      >
        <div>
          <br></br>
          <br></br>
          <Button variant="contained" color="success" onClick={history.goBack}>Return to Previous Page</Button>
          <br></br>
          <br></br>
        </div>


        <DialogTitle>
          <AppBar position="static">
            <Tabs
              value={subTab}
              onChange={handleSubTabChange}
              aria-label="signup login tab"
              centered
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Sign Up" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
        </DialogTitle>
        <DialogContent
          style={{ alignItems: "flex-start", margin: 0, padding: 0 }}
        >
          <TabPanel value={subTab} index={0}>
            <LoginForm user="vendor" switchTabs={setSubTab} />
          </TabPanel>
          <TabPanel value={subTab} index={1}>
            <SignUpForm />
          </TabPanel>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default VendorLogin;
