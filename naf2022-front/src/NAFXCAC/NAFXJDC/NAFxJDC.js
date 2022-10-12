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
  contactUs: {
    paddingBottom: theme.spacing(1),
    paddingTop:theme.spacing(10),
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
    imgPath: "jdcPhoto1.jpg",
    path: 'https://naf.sg/jdcPhoto1.jpg',
  },
  {
    imgPath: "jdcPhoto2.jpg",
    path: 'https://naf.sg/jdcPhoto2.jpg',
  },
  {
    imgPath: "jdcPhoto3.jpg",
    path: 'https://naf.sg/jdcPhoto3.jpg',
  },
  {
    imgPath: "jdcPhoto4.jpg",
    path: 'https://naf.sg/jdcPhoto4.jpg',
  },
  {
    imgPath: "jdcPhoto5.jpg",
    path: 'https://naf.sg/jdcPhoto5.jpg',
  },
  {
    imgPath: "jdcPhoto6.jpg",
    path: 'https://naf.sg/jdcPhoto6.jpg',
  },
  {
    imgPath: "jdcPhoto7.jpg",
    path: 'https://naf.sg/jdcPhoto7.jpg',
  },
  {
    imgPath: "jdcPhoto8.jpg",
    path: 'https://naf.sg/jdcPhoto8.jpg',
  },
  {
    imgPath: "jdcPhoto9.jpg",
    path: 'https://naf.sg/jdcPhoto9.jpg',
  },
  {
    imgPath: "jdcPhoto10.jpg",
    path: 'https://naf.sg/jdcPhoto10.jpg',
  },
  {
    imgPath: "jdcPhoto11.jpg",
    path: 'https://naf.sg/jdcPhoto11.jpg',
  },
  {
    imgPath: "jdcPhoto12.jpg",
    path: 'https://naf.sg/jdcPhoto12.jpg',
  },
  {
    imgPath: "jdcPhoto13.jpg",
    path: 'https://naf.sg/jdcPhoto13.jpg',
  },
  {
    imgPath: "jdcPhoto14.jpg",
    path: 'https://naf.sg/jdcPhoto14.jpg',
  },
  {
    imgPath: "jdcPhoto15.jpg",
    path: 'https://naf.sg/jdcPhoto15.jpg',
  },
  {
    imgPath: "jdcPhoto16.jpg",
    path: 'https://naf.sg/jdcPhoto16.jpg',
  },
  {
    imgPath: "jdcPhoto17.jpg",
    path: 'https://naf.sg/jdcPhoto17.jpg',
  },
  {
    imgPath: "jdcPhoto18.jpg",
    path: 'https://naf.sg/jdcPhoto18.jpg',
  },
  {
    imgPath: "jdcPhoto19.jpg",
    path: 'https://naf.sg/jdcPhoto19.jpg',
  },
  {
    imgPath: "jdcPhoto20.jpg",
    path: 'https://naf.sg/jdcPhoto20.jpg',
  },
];
function NAFxJDC() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.paddedItem} style= {{color:"#033F63"}} align="center" variant="h2">
        NAF X JDC
      </Typography>
      <Typography className={classes.about} align="center" variant="h4">
        About Joint Dance Concert (JDC)
      </Typography>
      <div data-aos="fade" data-aos-duration="1000" align="center">
        <img className={classes.imgResize} src="naf_jdc_logo.png" />
      </div>
      <Typography
        className={classes.description}
        align="center"
        variant="body1"
        component="p"
      >
        Joint Dance Concert (JDC) is an annual dance concert featuring the 9
        major dance clubs in NTU and prestigious guest performers. As one of the
        most highly anticipated annual events in NTU, the JDC main committee
        works with the dance clubs to provide an unforgettable concert for the
        dancers and the audience.
      </Typography>
      <Typography className={classes.title} align="center" variant="h4">
        Trailer Video
      </Typography>
      <Container maxWidth="md">
        <ResponsivePlayer url="https://www.youtube.com/watch?v=E_PTV-Aojgs" />
      </Container>
      <Typography className={classes.about} align="center" variant="h4">
        About JDC 21/22 Storyline
      </Typography>
      <Typography
        className={[classes.description, classes.paddingBottom]}
        align="center"
        variant="body1"
        component="p"
      >
Gangstars. Two gangs, the Passione Mafia and the Silk Path Triad. Years of battle and bloodshed. A feud from the past haunting the present. Galileo and Amelia. The forbidden love affair of a homeless boy and a sheltered girl. But what happens when they meet? Follow Galileo and Amelia as they struggle to defy the decades old system, or risk losing.
      </Typography>
      <ImageGallery
        imgPaddingTop="50%"
        title="JDC Gallery"
        cardList={cardList}
      ></ImageGallery>
      <Typography className={classes.contactUs} align="center" variant="h4">
        Contact Us
      </Typography>
      <Typography align="center" variant="body1" component="p">
        http://www.cac-jdc.com/
        <br />
        Instagram: @ntucacjdc
        <br />
        Facebook: JointDanceConcert
        <br />
        YouTube: NTUCACJDC
      </Typography>
    </div>
  );
}

export default NAFxJDC;
