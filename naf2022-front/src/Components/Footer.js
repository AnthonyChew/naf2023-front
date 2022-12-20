import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(5),
  },
  divider: {
    backgroundColor: '#FDFBE1',
    paddingTop: theme.spacing(0.3),
    marginBottom: theme.spacing(2),
  },
  footerContent: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    '& > *': {
      flexGrow: 1,
    },
  },
  sponsorSection: {
    display: 'flex',
    // flexGrow: 1,
    justifyContent: 'space-around',
    color:'#033F63'
  },
  footerSection: {
    textAlign: 'center',
    padding: theme.spacing(1),
  },
  logo: {
    margin: theme.spacing(0),
    maxHeight: 90,
  },
  [theme.breakpoints.down('sm')]: {
    footerContent: {
      flexDirection: 'column',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'grey',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider className={classes.divider} />
      <div className={classes.footerContent}>
        <div className={classes.sponsorSection}>
          <div className={classes.footerSection}>
            <Typography variant="subtitle2" style={{color:'#033F63'}}>Organised by</Typography>
            <img
              src="cac-logo-original.png"
              alt="CAC"
              className={classes.logo}
            />
          </div>
          <div className={classes.footerSection}>
            <Typography variant="subtitle2" style={{color:'#033F63'}}>Powered by</Typography>
            <img width="200"
              src="POWERED.png"
              alt="powered by arts for good, student community engagement, colab4good, dorothy cheung memorial fund"
              className={classes.logo}
            />
          </div>
        </div>

        <div className={classes.footerSection}>
          <a href="/#/PrivacyPolicy" className={classes.link}>
            Privacy Policy
          </a>
          <Typography align="center" color="textSecondary">
            NTU NAF, 2022 © All rights reserved.
          </Typography>
        </div>
        <div className={classes.footerSection}>
          <Typography variant="subtitle2" style={{color:'#033F63'}}>Social Media</Typography>
          <a
            href="https://www.facebook.com/ntuartsfestival/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="50" height="50"
              src="FB LOGO.png"
              alt="NAF on facebook"
              className={classes.logo}
            />
          </a>
          <a
            href="https://www.instagram.com/ntuartsfestival/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="50" height="50"
              src="IG LOGO.png"
              alt="NAF on instagram"
              className={classes.logo}
            />
          </a>
          <a href="mailto:NAF-PARTICIPANTS@E.NTU.EDU.SG">
            <img width="50" height="50"
              src="EMAIL LOGO.png"
              alt="NAF on mail"
              className={classes.logo}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
