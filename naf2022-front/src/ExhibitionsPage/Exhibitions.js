import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExhibitionsTab from "../Components/ToggleTabs";
import InteractiveMovie from "./InteractiveMovie";
import Cascade from "./Cascade";
import ArtLabelInstallation from "./ArtLabelInstallation";
import Hidden from '@material-ui/core/Hidden';
import SnapshotSocialWall from "./SnapshotSocialWall";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
}));

const navItems = [
  // {
  //   text: 'INTERACTIVE MOVIE',
  //   route: 'interactiveMovie',
  // },
  {
    text: "CASCADE",
    route: "Cascade",
  },
  {
    text: "ART LABEL INSTALLATION",
    route: "ArtLabelInstallation",
  },
  {
    text: "SNAPSHOT SOCIAL WALL",
    route: "SnapshotSocialWall",
  },
];

function GetExhibitionTab(exhibitionsTab) {
  switch (exhibitionsTab) {
    // case 'interactiveMovie':
    //   return <InteractiveMovie />;
    case "Cascade":
      return <Cascade />;
    case "ArtLabelInstallation":
      return <ArtLabelInstallation />;
    case "SnapshotSocialWall":
      return <SnapshotSocialWall />;
    default:
    // code block
  }
}

function ExhibitionTitle(exhibitionsTab) {
  switch (exhibitionsTab) {
    default:
      return "CREST";
  }
}

function ExhibitionDesc(exhibitionsTab) {
  switch (exhibitionsTab) {
    default:
      return "Our Exhibitions and Contests segment of NAF, Crest, aims to bring fresh perspectives through exciting interactive exhibitions and contests to you. Explore the various installations and exhibitions and indulge yourself in the visual arts!";
  }
}

function nameTitle(exhibitionsTab) {
  switch (exhibitionsTab) {
    case "Cascade":
      return "CASCADE: VISUAL ARTS SHOWCASE";
    case "ArtLabelInstallation":
      return "ART LABEL INSTALLATION";
    case "SnapshotSocialWall":
      return "SNAPSHOT SOCIAL WALL";
    default:
    // code block
  }
}

function secondTitle(exhibitionsTab) {
  switch (exhibitionsTab) {
    default:
    // code block
  }
}

function nameDesc(exhibitionsTab) {
  switch (exhibitionsTab) {
    case "Cascade":
      return "NAF’s visual arts exhibition, Cascade, brings to you a diverse array of artworks of people from all walks of life. Cascade explores the central themes of ‘Ebb & Flow’ and ‘Relationships’ to deliver an exhibition showcasing how these themes are reflected through the lenses of our artists; children, migrant workers, service users and budding talents.";
    case "ArtLabelInstallation":
      return "The Art Label Installation aims to promote sustainability along with the well-being of staff and students of NTU through various activities. You are encouraged to bring unused labels and stickers from your home to decorate the installation! The end product promotes unity through the diversity of our participants who played a part in decorating the large letters. Additionally, you can choose to “throw” away your regrets and leave notes of encouragement for other exhibition goers. Come on over to Skydeck @ North Spine to find out more!";
    case "SnapshotSocialWall":
      return "Displayed at our physical locations of the Ripple Publicity Booth and Surge Marketplace Showcase, the Snapshot Social Wall features posts from service users of the Singapore Association for Mental Health. These posts are dedicated to capturing and sharing the moments where the service users find relief from their anxieties by engaging in a meaning activity. You are invited to share your thoughts and responses too!";
    default:
    // code block
  }
}

function Exhibitions(props) {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="h2"
          style={{ color: "#033F63" }}
          className={classes.paddedItem}
        >
          {ExhibitionTitle(props.match.params.exhibitionsTab)}
        </Typography>
      </Grid>

      <Hidden smDown>
        <Grid item xs={6} style={{ margin: "auto" }}>
          <Typography align="center">
            {ExhibitionDesc(props.match.params.exhibitionsTab)}
          </Typography>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid item xs={10} style={{ margin: "auto" }}>
          <Typography align="center">
            {ExhibitionDesc(props.match.params.exhibitionsTab)}
          </Typography>
        </Grid>
      </Hidden>

      <Grid align="center" item xs={12}>
        <ExhibitionsTab
          navItems={navItems}
          tab={props.match.params.exhibitionsTab}
        />
        {//heading
} 
        <Typography
          align="center"
          variant="h2"
          style={{ color: "#033F63" }}
          className={classes.paddedItem}
        >
          {nameTitle(props.match.params.exhibitionsTab)}
          <br />
          {secondTitle(props.match.params.exhibitionsTab)}
        </Typography>

        <Hidden smDown>
          <Grid xs={9}>
            <Typography align="center">
              {nameDesc(props.match.params.exhibitionsTab)}
            </Typography>
          </Grid>
        </Hidden>

        <Hidden mdUp>
          <Grid xs={11}>
            <Typography align="center">
              {nameDesc(props.match.params.exhibitionsTab)}
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item xs={12}>
        {GetExhibitionTab(props.match.params.exhibitionsTab)}
      </Grid>
    </Grid>
  );
}

export default Exhibitions;
