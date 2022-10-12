import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ResponsivePlayer from "../../Components/ResponsivePlayer";
import Container from "@material-ui/core/Container";
import ImageGallery from "../../Components/ImageGallery";
const useStyles = makeStyles((theme) => ({
  imgResize: {
    width: 200,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
  about: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(1),
  },
  subheader: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(1),
  },
  title: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(1),
  },
  paddingBottom: {
    paddingBottom: theme.spacing(12),
  },
  img: {
    width: "300px",
  },
  description: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "auto",
  },
}));
const cardList = [
  {
    imgPath: "NAFxTOP1.jpg",
    path: 'https://naf.sg/NAFxTOP1.jpg',
  },
  {
    imgPath: "NAFxTOP2.jpg",
    path: 'https://naf.sg/NAFxTOP2.jpg',
  },
  {
    imgPath: "NAFxTOP3.jpg",
    path: 'https://naf.sg/NAFxTOP3.jpg',
  },
  {
    imgPath: "NAFxTOP4.jpg",
    path: 'https://naf.sg/NAFxTOP4.jpg',
  },
  {
    imgPath: "NAFxTOP5.jpg",
    path: 'https://naf.sg/NAFxTOP5.jpg',
  },
  {
    imgPath: "NAFxTOP6.jpg",
    path: 'https://naf.sg/NAFxTOP6.jpg',
  },
  {
    imgPath: "NAFxTOP7.jpg",
    path: 'https://naf.sg/NAFxTOP7.jpg',
  },
  {
    imgPath: "NAFxTOP8.jpg",
    path: 'https://naf.sg/NAFxTOP8.jpg',
  },
  {
    imgPath: "NAFxTOP9.jpg",
    path: 'https://naf.sg/NAFxTOP9.jpg',
  },
  {
    imgPath: "NAFxTOP10.jpg",
    path: 'https://naf.sg/NAFxTOP10.jpg',
  },
  {
    imgPath: "NAFxTOP11.jpg",
    path: 'https://naf.sg/NAFxTOP11.jpg',
  },
];
function NAFxJDC() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.paddedItem} style={{color:"#033F63"}} align="center" variant="h2">
        NAF X TOP
      </Typography>
      <Typography className={classes.about} align="center" variant="h4">
        About Transition & Orientation Programme (TOP)
      </Typography>
      <div data-aos="fade" data-aos-duration="1000" align="center">
        <img className={classes.imgResize} src="naf_top_logo.png" />
      </div>
      <Typography
        className={classes.description}
        align="center"
        variant="body1"
        component="p"
      >
        CAC TOP, one of NTU's big 4 orientations, aims to welcome freshmen into
        university life and kick start their NTU journey. Every year, CAC TOP
        attempts to reach out to over 3000 new undergraduates joining the NTU
        Family. We help these freshmen smoothly integrate into university life
        as they make their 1st group of friends.
      </Typography>
      <Typography
        className={classes.description}
        align="center"
        variant="body1"
        component="p"
      >
        In light of COVID-19, CAC TOP was held virtually for the past 2 years.
        However, this did not stop our passion of helping freshemen forge
        meaningful friendships and memories. With the ever-changing Safe
        Management Measures (SMMs), we adapted quickly and managed to carry out
        CAC TOP successfully. Despite facing these challenges, CAC TOP was
        well-received by our participants.
      </Typography>
      <Typography
        className={classes.description}
        align="center"
        variant="body1"
        component="p"
      >
        We aim to hold CAC TOP physically on campus this August 2022 as we
        create great experiences while introducing our CAC Family to the
        freshmen.
      </Typography>
      <Typography
        className={classes.description}
        align="center"
        variant="body1"
        component="p"
      >
        Disclaimer: CAC TOP is only open to current NTU students
      </Typography>
      <Typography className={classes.title} align="center" variant="h4">
        CAC TOP Beach Day Trial Video
      </Typography>
      <Container maxWidth="md">
        <ResponsivePlayer url="https://youtu.be/VjjGUtGUfvM" />
      </Container>
      <ImageGallery
        imgPaddingTop="50%"
        title="TOP Gallery"
        cardList={cardList}
      ></ImageGallery>
      <Typography className={classes.subheader} align="center" variant="h4">
        Contact Us
      </Typography>
      <Typography align="center" variant="body1" component="p">
        Email:{" "}
        <a href="mailto:cac-orientation@e.ntu.edu.sg">
          cac-orientation@e.ntu.edu.sg
        </a>
        <br />
        Instagram: @ntucactop
        <br />
        Facebook: NTU CAC TOP
      </Typography>
    </div>
  );
}

export default NAFxJDC;
