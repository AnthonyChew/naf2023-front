import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as Star3 } from "./SVG/star3.svg";
import { ReactComponent as Star4 } from "./SVG/star4.svg";
import { ReactComponent as Star5 } from "./SVG/star5.svg";
import { ReactComponent as Dot3 } from "./SVG/dot3.svg";
import { ReactComponent as Dot4 } from "./SVG/dot4.svg";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  textbox: {
    marginBottom: 50,
  },
  text: {
    paddingTop: 20,
    paddingBottom: 20,
    width: "70%",
  },
}));

export default function Sticker2() {
  const classes = useStyles();
  return (
    <div>
      <Hidden smDown>
        
        <Star4
          style={{ zIndex: 0, top: "250%", right: "0%", position: "absolute" }}
        />
        <Star5
          style={{ zIndex: 0, top: "300%", left: "10%", position: "absolute" }}
        />
        <Dot3
          style={{ zIndex: 0, top: "255%", left: "92%", position: "absolute" }}
        />
        <Dot4
          style={{ zIndex: 0, top: "300%", left: "13%", position: "absolute" }}
        />
        <Dot4
          style={{ zIndex: 0, top: "310%", left: "8%", position: "absolute" }}
        />
        <Dot4
          style={{ zIndex: 0, top: "250%", left: "85%", position: "absolute" }}
        />
      </Hidden>

      <Grid
        container
        align="center"
        xs={12}
        alignItems="center"
        justify="center"
        style={{ backgroundColor: "#7C9885" }}
      >
        <Grid align="center" item xs={12}>
          <Typography
            variant="h2"
            style={{
              color: "#FDFBE2",
              fontWeight: "normal",
              marginBottom: 50,
              marginTop: 50,
            }}
          >
            SUBMISSION GUIDELINES
          </Typography>
        </Grid>

        <Grid className={classes.textbox} item xs={12}>
          <Typography
            className={classes.text}
            variant="h3"
            align="center"
            style={{ color: "#FEDC97", textDecorationLine: "underline" }}
          >
            Info
          </Typography>
          <Typography
            className={classes.text}
            paragraph
            style={{ color: "#FEDC97", fontWeight: "normal" }}
            variant="h4"
          >
            Submit your sticker designs for NAF 2022’s Sticker Olympia Contest
            and stand a chance to have them included in our exclusive NAF
            sticker pack! Artists need to submit their designs by uploading it
            onto the provided Microsoft Forms below by{" "}
            <b>4 February 2022, 2359</b>.
          </Typography>
        </Grid>

        <Grid className={classes.textbox} item xs={12}>
          <Typography
            className={classes.text}
            variant="h3"
            align="center"
            style={{ color: "#FEDC97", textDecorationLine: "underline" }}
          >
            Format
          </Typography>
          <Typography
            className={classes.text}
            paragraph
            style={{ color: "#FEDC97", fontWeight: "normal" }}
            variant="h4"
          >
            - Submission of up to 2 works per artist
            <br></br>- Different mediums are accepted, but only to be exported
            in .png/JPEG formats. (1080 x 1080)
            <br></br>- Photo based submissions should not contain recognisable
            faces and will be disqualified.
          </Typography>
        </Grid>

        <Grid className={classes.textbox} item xs={12}>
          <Typography
            className={classes.text}
            variant="h3"
            align="center"
            style={{ color: "#FEDC97", textDecorationLine: "underline" }}
          >
            Judging Criteria
          </Typography>
          <Typography
            className={classes.text}
            paragraph
            style={{ color: "#FEDC97", fontWeight: "normal" }}
            variant="h4"
          >
            Aesthetics - 25%
            <br></br>
            Embodiment of Theme - 50%
            <br></br>
            Relatability to students - 25%
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
