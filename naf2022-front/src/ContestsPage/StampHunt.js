import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as MiddleBackground } from "./SVG/StampHunt/MiddleBackground.svg";
import { ReactComponent as StarsTop } from "./SVG/StampHunt/StarsTop.svg";
import { ReactComponent as MiddleLines } from "./SVG/StampHunt/MiddleLines.svg";
import { ReactComponent as StarsMiddleLeft } from "./SVG/StampHunt/StarsMiddleLeft.svg";
import { ReactComponent as ThreeDotsMiddleRight } from "./SVG/StampHunt/ThreeDotsMiddleRight.svg";

import { ReactComponent as FrameBottomLeft } from "./SVG/StampHunt/FrameBottomLeft.svg";
import { ReactComponent as FrameBottomRight } from "./SVG/StampHunt/FrameBottomRight.svg";
import Hidden from "@material-ui/core/Hidden";

import { ScatterPlot } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  content: {
    width: "60%",
    maxWidth: 1000,
    margin: "auto",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
  },
  topTxtWrapper: {
    color: "#033F63",
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  section: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    textAlign: "center",
  },
  pamphletTitle: {
    color: "white",
    width: "100%",
    textAlign: "center",
    marginBottom: theme.spacing(2),
    zIndex: "5",
  },
  locationsimg: {
    maxWidth: "100%",
    width: 500,
    objectFit: "cover",
  },
  officeFormSection: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    paddingTop: "56.25%",
    marginRight: "10%",
    marginLeft: "10%",
  },
  responsiveframe: {
    position: "absolute",
    top: 0,
    left: 0,
    border: 0,
    width: "100%",
    height: "100%",
  },
  prizesWrapper: {
    width: "60%",
    color: "white",
    maxWidth: 1000,
    margin: "auto",
    marginBottom: theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
  },
  prizeWrapper: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    zIndex: "5",
    padding: "5px",
  },
  prizeTitle: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  prizeSubtitle: {
    textAlign: "center",
  },
  prizeCaption: {
    textAlign: "center",
  },
  prizeImg: {
    width: "100%",
    maxHeight: 500,
    maxWidth: 1200,
    objectFit: "contain",
  },
  [theme.breakpoints.down("xs")]: {
    content: {
      width: "90%",
    },
  },
}));

function StampHunt(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.content}
        data-aos="fade"
        data-aos-duration="1000"
      >
        {/* Introduction start */}
        <Grid item xs={12} md={10} className={classes.topTxtWrapper}>
          <Typography align="center" variant="h2" className={classes.title}>
            STAMP HUNT
          </Typography>
          <Typography paragraph className={classes.section}>
            For this year's NAF, we have a fun, mini trail waiting for you!
            Explore and collect some awesome and cute stamp designs on a
            pamphlet that you can collect around the campus! Curious? Come drop
            by and pick up a pamphlet from our publicity booth! Submit a photo
            of your completed pamphlet and stand a chance to win a staycation at
            our NAF Lucky Draw!
          </Typography>
          <Grid className={classes.section}>
            <img
              src="stamphunt_locations.png"
              alt="locations"
              className={classes.locationsimg}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Stamp Hunt Pamphlet start */}
      <Grid
        xs={12}
        style={{ backgroundColor: "#7C9885", position: "relative" }}
      >
        <Hidden smDown>
          <MiddleBackground
            style={{
              top: -80,
              position: "absolute",
              overflowY: "hidden",
            }}
          />
          <StarsTop
            style={{
              zIndex: 0,
              top: "-175",
              right: "5%",
              position: "absolute",
            }}
          />
          <MiddleLines
            style={{ zIndex: 0, top: "165", position: "absolute" }}
          />
          <StarsMiddleLeft
            style={{ zIndex: 0, top: "348", left: "5%", position: "absolute" }}
          />
          <ThreeDotsMiddleRight
            style={{
              zIndex: 0,
              top: "420",
              right: "17%",
              position: "absolute",
            }}
          />
        </Hidden>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <Grid container item justify="center" alignItems="center" xs={12}>
            <Typography variant="h4" className={classes.pamphletTitle}>
              Stamp Hunt Pamphlet
            </Typography>
          </Grid>
          <Grid item md={5} xs={12} className={classes.prizeWrapper}>
            <Grid style={{ textAlign: "center" }}>
              <img
                src="PlaceholderPamphlet-Front.png"
                alt="pamphletFront"
                className={classes.prizeImg}
              />
            </Grid>
          </Grid>
          <Grid item md={5} xs={12} className={classes.prizeWrapper}>
            <Grid style={{ textAlign: "center" }}>
              <img
                src="PlaceholderPamphlet-Back.png"
                alt="pamphletBack"
                className={classes.prizeImg}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Stamp Hunt Pamphlet end */}

      {/* Prizes start */}

      <Grid
        xs={12}
        style={{ backgroundColor: "#D48C8D", position: "relative" }}
      >
        <Hidden smDown>
          <FrameBottomRight
            style={{ zIndex: 0, top: "0", right: "0%", position: "absolute" }}
          />
          <FrameBottomLeft
            style={{ zIndex: 0, bottom: "0", left: "0%", position: "absolute" }}
          />
        </Hidden>
        <Grid container item justify="center" alignItems="center" xs={12}>
          <Typography variant="h4" className={classes.pamphletTitle}>
            Complete the Stamp Hunt Pamphlet for a chance to win attractive
            prizes!
          </Typography>
          <Grid container item xs={12} alignItems="center" justify="center">
            <Typography className={classes.pamphletTitle}>
              Submit your completed Stamp Pamphlet in the Form below!
            </Typography>
            <Typography className={classes.pamphletTitle}>
              Disclaimer: Do login to your NTU Outlook account on your browser
              so you can see this form.
            </Typography>
            <Grid
              align="center"
              item
              xs={12}
              className={classes.officeFormSection}
            >
              <div className={classes.container}>
                <iframe
                  className={classes.responsiveframe}
                  src="https://forms.office.com/Pages/ResponsePage.aspx?id=SJPOFSq-K0aPwOF2WpsgSqIgFm-cK4pCpRZgXjiyyJlUMUhISUZRVzROSFdUUDAwOUFaWllJTkNOTy4u&embed=true"
                  frameborder="0"
                  marginwidth="0"
                  marginheight="0"
                  allowfullscreen
                  webkitallowfullscreen
                  mozallowfullscreen
                  msallowfullscreen
                >
                  {" "}
                </iframe>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Prizes end */}
    </div>
  );
}

export default StampHunt;
