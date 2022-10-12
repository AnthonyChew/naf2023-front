import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PerformanceRow from './PerformanceRow';
import ResponsivePlayer from '../Components/ResponsivePlayer';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Replay from './Replay';
import { ReactComponent as BackPerfSVG } from './SVG/PerfSVG.svg';
import { ReactComponent as StarGreenRight } from './SVG/StarGreenRight.svg';
import { ReactComponent as StarGreenLeft } from './SVG/StarGreenLeft.svg';
import { ReactComponent as StarYellow } from './SVG/StarYellowRight.svg';
import { ReactComponent as Ellipse99 } from './SVG/Ellipse 99.svg';
import { ReactComponent as Ellipse97 } from './SVG/Ellipse 97.svg';
import { ReactComponent as Ellipse95 } from './SVG/Ellipse 95.svg';
import { ReactComponent as Ellipse100 } from './SVG/Ellipse 100.svg';
import { ReactComponent as Vector294 } from './SVG/Vector 294.svg';
import { ReactComponent as Vector291 } from './SVG/Vector 291.svg';
import { ReactComponent as Vector290 } from './SVG/Vector 290.svg';
import { ReactComponent as Vector289 } from './SVG/Vector 289.svg';
import { ReactComponent as Vector293 } from './SVG/Vector 293.svg';
import { ReactComponent as Vector296 } from './SVG/Vector 296.svg';
import { ReactComponent as Vector297 } from './SVG/Vector 297.svg';
import { ReactComponent as Vector298 } from './SVG/Vector 298.svg';

const useStyles = makeStyles((theme) => ({
  paddedItem: {
    padding: '30px',
  },
  title: {
    paddingBottom: '10px',
  },
  bottomPadded: {
    paddingBottom: '50px',
  },
  qrImg: {
    backgroundColor: 'black',
    width: '100%',
  },
  qrImg2: {
    backgroundColor: 'white',
    width: '250px',
    marginTop: '20%',
    maxHeight: '10%',
  },

  qrDesc2: {
    marginBottom: '25px',
  },

  header2: {
    margin: '10%',
    position: 'fsticky',
  },

  firstDescription: {
    maxWidth: '50%',
    margin: 'auto',
    textAlign: 'center',
  },
  description: {
    textAlign: 'justify',
    maxWidth: '50%',
    margin: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    firstDescription: {
      maxWidth: '90%',
    },
    description: {
      maxWidth: '90%',
    },
  },
  absoluteReplay: {
    position: 'absolute',
    marginTop: '420px',
    margin: 'auto',
  },
}));

const upcomingPerformanceData = [
  {
    image: 'NTU Breakers.jpg',
    title: 'NTU BREAKERS',
    datetime: '25 March 6-9pm',
    desc:
      'Established in 2006, Breakers have been practicing its own art form known as breaking globally. Breaking is well-known to be more athletic in its dance which comprises 4 elements in its dance, 1) Top-rocking, 2) Footwork, 3) Freezes and 4) Power moves. In Breakers, we strive to build a vibrant community for both bboys and bgirls to share passions and knowledge of breaking.',
  },

  {
    image: 'Chinese Drums.jpg',
    title: 'NTU CHINESE DRUMS',
    datetime: '25 March 6-9pm',
    desc:
      'NTU Chinese Drums Club was formed in the year 2001, by a group of NTU students passionate in the unique performing art of 二十四节令鼓，also known as “24 Festive Drums”. Originating from Johor, Malaysia, this drumming style traditionally involves 24 performers and drums, with dance-like choreography that marvellously incorporates traditional martial arts elements with rhythm to create a captivating drum performance. For the past two decades, the club has continuously strived for excellence in this art and aims to spread the love for the traditional Chinese Culture and the 24 Festive Drums to the school and the larger community in Singapore.',
  },

  {
    image: 'Harmonix.jpg',
    title: 'HARMONIX',
    datetime: '25 March 6-9pm',
    desc:
      'NTU Harmonix is a vibrant and thriving family with members who have the passion to share their love for music using only their voices. Harmonix has been working towards bringing a different sound to the college community as well as the local A capella scene. With the blend of different personalities and colourful vocals, they strive to showcase a coherent and sophisticated sound and sensational harmonies to engage and entertain audiences. ',
  },

  {
    image: 'Contemp{minated}.png',
    title: 'Contemp{minated}',
    datetime: '25 March 6-9pm',
    desc:
      'Since inception, Contemp{minated} has developed our artistic flair through a repertoire of performances aimed at engaging and captivating our audience. Having grown and diversified with dancers of various backgrounds, Contemp{minated} prides itself in providing a safe space for members to explore while expressing their individuality and creativity. The club strives to continually push the boundaries of growth as we embark on new chapters with our resident instructor, Shannon Choo. With the combined experiences of our current members and alumni, Contemp{minated} hopes to further nurture and guide dancers in their journey of self-discovery, through a fine balance of artistic movements and techniques. ',
  },
  {
    image: 'Jazz and Blues.jpg',
    title: 'JAZZ AND BLUES',
    datetime: '25 March 6-9pm',
    desc:
      "NTU CAC Jazz & Blues has always been about the people and making music. During COVID-19, we have been relegated to smaller groups, but our members stay headstrong and vibrant. While we can't share our music in our live performances, this has allowed us to grow as a club and explore the digital world of studio recordings and audio mixing to bring our music online for people to enjoy in the comforts of their own homes. We love doing what we do, and will always be creating memories by chillin', jammin', and bustin' out some great music with lovely people.",
  },
  {
    image: 'WingItWednesday.png',
    title: 'WING IT WEDNESDAY',
    datetime: '25 March 6-9pm',
    desc:
      "One of Pioneer Hall's jam bands and the name came about as they... (pause) wing it on Wednesdays! They are made of multi talented musicians from different backgrounds, coming together to share their love for music. Their goal is simple, to play great music and enjoy themselves!",
  },
  {
    image: 'Friends of Tama.jpg',
    title: 'FRIENDS OF TAMA',
    datetime: '25 March 6-9pm',
    desc:
      "Coming from diverse musical backgrounds and all walks of life, but united under one goal: to enjoy making music! Presenting to you Tamarind Hall's FRIENDS OF TAMA! with Isaac on the drums, Benson on the bass/keys, Opus Renegade the rapper, John on vocals and Kae and Elvin on the guitar, we hope to bless your ears with wonderful, beautiful hits!",
  },
  {
    image: 'Crescendo.jpg',
    title: 'CRESCENDO',
    datetime: '25 March 6-9pm',
    desc:
      'Crescendo is a band made up of passionate musicians from different music backgrounds who love to just come together and make music. We love to explore a variety of genres from pop to funk and even jazz. Our participating band will consist of 4 instrumentalists and 2 vocalists, and we will be performing 2 songs from popular music.',
  },
  {
    image: 'Crespion Acapella.jpg',
    title: 'CRESPION ACAPELLA',
    datetime: '25 March 6-9pm',
    desc:
      'Hello! We are a subgroup from Crespion Acapella, consisting of Chong Han, Swati, Kar Man, Yu Yun and Peiyao. Chong Han’s our resident male voice and the rest of us are sopranos and altos.',
  },
];

function Performances(props) {
  const classes = useStyles();
  return (
    <div>
      {/* <BackPerfSVG 
        style={{
          zIndex: -999,
          left: 0,
          position: 'absolute',
          overflowY: 'hidden',
        }}
      /> */}

      <Vector291
        style={{ zIndex: -1, position: 'absolute', right: '0px', top: '540px' }}
      />
      <Vector290
        style={{ zIndex: -2, position: 'absolute', right: '0px', top: '510px' }}
      />
      <Vector289
        style={{ zIndex: -3, position: 'absolute', right: '0px', top: '480px' }}
      />

      <StarGreenRight
        style={{ zIndex: 0, position: 'absolute', right: '0px', top: '700px' }}
      />
      <Ellipse99
        style={{ zIndex: 0, position: 'absolute', right: '23px', top: '850px' }}
      />
      <StarGreenLeft
        style={{ zIndex: 0, position: 'absolute', left: '0px', top: '800px' }}
      />

      <Ellipse95
        style={{ zIndex: 0, position: 'absolute', right: '0px', top: '2120px' }}
      />
      <Ellipse97
        style={{
          zIndex: 0,
          position: 'absolute',
          right: '30px',
          top: '2140px',
        }}
      />
      <Ellipse97
        style={{
          zIndex: 0,
          position: 'absolute',
          right: '45px',
          top: '2170px',
        }}
      />

      <Hidden smDown>
        <Ellipse97
          style={{
            zIndex: 1,
            position: 'absolute',
            right: '80px',
            top: '2160px',
          }}
        />
        <Ellipse97
          style={{
            zIndex: 1,
            position: 'absolute',
            left: '100px',
            top: '1850px',
          }}
        />
        <Vector294
          style={{
            zIndex: 1,
            position: 'absolute',
            left: '-20px',
            top: '2200px',
          }}
        />
        <Vector293
          style={{
            zIndex: 1,
            position: 'absolute',
            left: '0px',
            top: '2240px',
          }}
        />

        {/*<Vector296 style={{ zIndex:1, position:'absolute', right:"0px", bottom:"2490px"}} /> 
        <Vector297 style={{ zIndex:1, position:'absolute', right:"0px", top:"2540px"}} /> 
        <Vector298 style={{ zIndex:1, position:'absolute', right:"0px", top:"2590px"}} /> 
        <StarYellow style={{ zIndex:1, position:'absolute', right:"270px", top:"2640px"}} />
        <Ellipse100 style={{ zIndex:1, position:'absolute', right:"50px", top:"2660px"}} />
        <Ellipse97 style={{ zIndex:1, position:'absolute', right:"100px", top:"2720px"}} />
    */}
      </Hidden>

      <Grid
        data-aos="fade"
        data-aos-duration="1000"
        style={{ zIndex: 999, paddingBottom: '10px' }}
        container
      >
        <Grid item xs={12} style={{ color: '#033F63' }}>
          <br></br>
          <br></br>
          <Typography
            // className={classes.paddedItem}
            align="center"
            variant="h2"
          >
            SURGE
          </Typography>
        </Grid>

        <Hidden smDown>
          <Grid item xs={7} style={{ margin: 'auto' }} align="center">
            <Typography
              align="center"
              style={{ color: '#033F63' }}
              className={classes.paddedItem}
            >
              The Internal Showcase titled Surge this year, is the finale
              segment of NAF 2022, held within NTU. To tie up the 4 weeks of NAF
              2022 on a high note, the festival will present various
              performances, activities and booths, allowing the NTU community to
              be more involved in and gain exposure to our arts scene.
            </Typography>
          </Grid>
        </Hidden>

        <Hidden mdUp>
          <Grid item xs={11} style={{ margin: 'auto' }} align="center">
            <Typography
              align="center"
              style={{ color: '#033F63' }}
              className={classes.paddedItem}
            >
              The Internal Showcase titled Surge this year, is the finale
              segment of NAF 2022, held within NTU. To tie up the 4 weeks of NAF
              2022 on a high note, the festival will present various
              performances, activities and booths, allowing the NTU community to
              be more involved in and gain exposure to our arts scene.
            </Typography>
          </Grid>
        </Hidden>

        <Hidden smDown>
          <Grid
            data-aos="fade"
            data-aos-duration="1000"
            container
            justify="center"
            alignItems="center"
            item
            xs={8}
            style={{ paddingBottom: 40, margin: 'auto' }}
          >
            <Container>
              <ResponsivePlayer url="https://www.youtube.com/watch?v=g9m6pNoTkwM" />
            </Container>
          </Grid>
        </Hidden>

        <Hidden mdUp>
          <Grid
            data-aos="fade"
            data-aos-duration="1000"
            container
            justify="center"
            alignItems="center"
            item
            xs={11}
            style={{ paddingBottom: 40, margin: 'auto' }}
          >
            <Container>
              <ResponsivePlayer url="https://www.youtube.com/watch?v=g9m6pNoTkwM" />
            </Container>
          </Grid>
        </Hidden>

        <Hidden smDown>
          <Grid
            xs={12}
            style={{ backgroundColor: '#7C9784', paddingTop: '50px' }}
          >
            <Grid
              style={{
                backgroundColor: '#FCDB96',
                margin: 'auto',
                marginBottom: '70px',
              }}
              data-aos="fade"
              data-aos-duration="1000"
              container
              align="center"
              item
              xs={10}
              spacing={3}
            >
              <Grid
                container
                padding="20px"
                align="left"
                item
                xs={2}
                style={{ zIndex: 999, minWidth: '243px' }}
              >
                <img className={classes.qrImg} src="SQRSUCACNAFCLOSEDSURGE.png" />
                <Typography
                  style={{
                    color: '#7c1a78',
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  Reference No: <br />
                  SQRSUCACNAFCLOSEDSURGE
                </Typography>
              </Grid>
              <Grid item xs={8} align="left" style={{ margin: 'auto  ' }}>
                <Typography
                  style={{
                    color: '#063970',
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  LUCKY DRAW WINNERS
                  <br />
                  1st - Hotel G 2D1N Package Staycation | fo*******ee@gmail.com
                  <br />
                  2nd - Air Fryer | ra*******kt@gmail.com
                  <br />
                  3rd - Handheld Vacuum Cleaner | qq********74@gmail.com
                  <br />
                  4th - JBL Wireless And Waterproof Speaker |
                  sh******ng@gmail.com
                  <br />
                  5th - $30 Capitaland Voucher | ma**********t4@gmail.com
                  <br />
                  Consolation (5 prizes) - NAF T-Shirt | yu*****na@gmail.com;
                  vi*********th@gmail.com; sa********ia@gmail.com;
                  be********22@gmail.com; ac**************01@gmail.com;
                  <br />
                  TO CLAIM: Reply Winning Email in 48 Hours
                  <br />
                </Typography>
                <Typography paragraph style={{ color: '#033F63' }}>
                  <br />
                  If you are enjoying the performances, do consider donating any
                  amount of money via PayLah!/PayNow by scanning the QR code.
                  All donations will go to our beneficiary, the Singapore
                  Association for Mental Health!
                  <br />
                  <br />
                  Please indicate your mobile number/email address in the
                  transaction remarks if you want an acknowledgment of your
                  donation. We will provide the acknowledgment within 7 days of
                  your donation.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        <Hidden mdUp>
          <Grid
            style={{ backgroundColor: '#FCDB96', margin: 'auto' }}
            data-aos="fade"
            data-aos-duration="1000"
            container
            padding="20px"
            justify="center"
            alignItems="center"
            item
            xs={12}
          >
            <Grid
              align="center"
              item
              xs={2}
              container
              justify="center"
              style={{ paddingBottom: '20px', paddingTop: '20px' }}
            >
              <img
                alignItems="flex-start"
                style={{
                  backgroundColor: 'white',
                  width: '250px',
                  marginTop: '20%',
                  maxHeight: '250px',
                }}
                src="SQRSUCACNAFCLOSEDSURGE.png"
              />
            </Grid>
            <Grid item xs={11}>
              <Typography
                style={{ color: '#033F63' }}
                className={classes.qrDesc2}
              >
                <Typography
                  style={{
                    color: '#7c1a78',
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  Reference No: <br />
                  SQRSUCACNAFCLOSEDSURGE
                </Typography>
                <br />
                If you are enjoying the performances, do consider donating any
                amount of money via PayLah!/PayNow by scanning the QR code. All
                donations will go to our beneficiary, the Singapore Association
                for Mental Health!
                <br />
                <br />
                Please indicate your mobile number/email address in the
                transaction remarks if you want an acknowledgment of your
                donation. We will provide the acknowledgment within 7 days of
                your donation.
              </Typography>
              <Typography
                style={{
                  color: '#063970',
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                LUCKY DRAW WINNERS
                <br />
                1st - Hotel G 2D1N Package Staycation | fo*******ee@gmail.com
                <br />
                2nd - Air Fryer | ra*******kt@gmail.com
                <br />
                3rd - Handheld Vacuum Cleaner | qq********74@gmail.com
                <br />
                4th - JBL Wireless And Waterproof Speaker |
                sh******ng@gmail.com
                <br />
                5th - $30 Capitaland Voucher | ma**********t4@gmail.com
                <br />
                Consolation (5 prizes) - NAF T-Shirt | yu*****na@gmail.com;
                vi*********th@gmail.com; sa********ia@gmail.com;
                be********22@gmail.com; ac**************01@gmail.com;
                <br />
                TO CLAIM: Reply Winning Email in 48 Hours
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Hidden>

        <Grid
          container
          xs={12}
          style={{
            backgroundColor: '#FCDB96',
            color: '#033F63',
            paddingTop: '70px',
            paddingBottom: '70px',
          }}
        >
          <Typography
            data-aos="fade"
            data-aos-duration="1000"
            align="center"
            variant="h3"
            style={{ margin: 'auto', paddingBottom: '50px' }}
          >
            Upcoming Performances
          </Typography>
          {upcomingPerformanceData.map((item, index) => (
            <PerformanceRow
              key={'perf' + index}
              image={item.image}
              title={item.title}
              desc={item.desc}
            ></PerformanceRow>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Performances;
