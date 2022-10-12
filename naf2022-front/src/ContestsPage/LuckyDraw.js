import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as SplashSVG } from './SVG/Group 7.svg';
import { ReactComponent as PurpleGreenSVG } from './SVG/Group 12.svg';
import { ReactComponent as LineAndGreenSVG } from './SVG/Group 11.svg';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  content: {
    width: '60%',
    maxWidth: 1500,
    margin: 'auto',
    // textAlign: 'justify',
  },
  [theme.breakpoints.down('xs')]: {
    content: {
      width: '90%',
    },
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
  title: {
    paddingBottom: theme.spacing(1),
  },
  section: {
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
  },
  img: {
    maxWidth: '100%',
    width: 500,
    objectFit: 'cover',
  },
  button: {
    cursor: 'default',
  },
  buttonRoot: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 20,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

function LuckyDraw(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div>
      <SplashSVG
        data-aos="slide-left"
        data-aos-duration="1000"
        data-aos-anchor="#contests"
        style={{ zIndex: -999, top: 280, right: 300, position: 'absolute' }}
      />
      <LineAndGreenSVG
        data-aos="slide-right"
        data-aos-duration="1000"
        data-aos-anchor="#contests"
        style={{
          zIndex: -999,
          top: 750,
          left: 0,
          position: 'absolute',
          overflowY: 'hidden',
        }}
      />
      <PurpleGreenSVG
        data-aos="slide-left"
        data-aos-duration="1000"
        data-aos-anchor="#contests"
        style={{
          zIndex: -999,
          top: 500,
          right: 0,
          position: 'absolute',
          overflowY: 'hidden',
        }}
      />
      <Grid
        container
        spacing={3}
        justify="center"
        className={classes.content}
        data-aos="fade"
        data-aos-duration="1000"
      >
        <Grid item xs={12}>
          <Typography
            className={classes.paddedItem}
            align="center"
            variant="h3"
          >
            Lucky Draw
          </Typography>
        </Grid>

        <Grid
          container
          item
          xs={12}
          alignItems="flex-start"
          className={classes.section}
          spacing={2}
        >
          <Typography variant="h4" className={classes.sectionTitle}>
            Prizes
          </Typography>
          <Grid container item xs={12} justify="space-between" spacing={2}>
            <Grid item md={3} xs={12}>
              <Typography paragraph>
                1st Prize: <br /> Yacht Trip for 2
              </Typography>
              <ClickAwayListener onClickAway={handleClickAway}>
                <div className={classes.buttonRoot}>
                  <ButtonBase
                    onClick={handleClick}
                    className={classes.button}
                    disableRipple
                  >
                    <img
                      src="yachtprize.png"
                      alt="prize1"
                      className={classes.img}
                    />
                  </ButtonBase>
                  {open ? (
                    <div className={classes.dropdown}>
                      On which date will Art-Verse Livestream take place? Visit
                      the performances page on our website to find out! To get
                      the next clue, simply click on the answer in the page.
                    </div>
                  ) : null}
                </div>
              </ClickAwayListener>
            </Grid>
            <Grid item md={3} xs={12}>
              <Typography paragraph>
                2nd Prize: <br /> Yacht Trip for 2
              </Typography>
              <img src="yachtprize.png" alt="prize2" className={classes.img} />
            </Grid>
            <Grid item md={3} xs={12}>
              <Typography paragraph>
                3rd Prize: <br /> LG 22MN430 22-inch FHD IPS LED Monitor
              </Typography>
              <img
                src="monitorprize.png"
                alt="prize3"
                className={classes.img}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} justify="space-between" spacing={2}>
            <Grid item md={3} xs={12}>
              <Typography paragraph>
                4th Prize: <br /> Powerpac Air Fryer
              </Typography>
              <img
                src="airfryerprize.png"
                alt="prize1"
                className={classes.img}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <Typography paragraph>
                5th Prize: <br /> Powerpac Cordless Wet and Dry Vacuum Cleaner
              </Typography>
              <img src="vacuumprize.png" alt="prize2" className={classes.img} />
            </Grid>
            <Grid item md={3} xs={12}>
              <Typography paragraph>
                6th Prize: <br /> Consolation Prizes: 3 Igave Goodie Bags and 3
                NAF shirt
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.section}
        >
          <Typography variant="h4" className={classes.sectionTitle}>
            Rules
          </Typography>
          <ol>
            <Typography variant="body1">
              <li>
                Participation in the Totebag or Shrink Art Kit along with a
                photograph sharing via Instagram and tagging of @NTUartsfestival
                will entitle you to a maximum of 1 chance in the Lucky Draw per
                pax.
              </li>
              <ul>
                <li>
                  To participate in the Lucky Draw, you are required to create
                  an account and fill in your personal particulars on the NAF
                  2021 website.
                </li>
                <li>
                  Your Instagram profile must be set to public for verification
                  purposes.
                </li>
              </ul>
              <li>
                Every $10 spent in the Online Marketplace will entitle you to 1
                chance.
              </li>
              <li>
                Every correct answer during Virtual Busking and Art-Verse
                quizzes will entitle you to 1 chance in the Lucky Draw.
              </li>
              <ul>
                <li>
                  For valid participation in the Lucky Draw, you are required to
                  create an account and fill in your personal particulars on the
                  NAF 2021 website.
                </li>
                <li>Submissions are only valid during the live session.</li>
              </ul>
              <li>
                Every workshop attended will entitle you to 1 chance in the
                Lucky Draw.
              </li>
            </Typography>
          </ol>
        </Grid>
      </Grid>
    </div>
  );
}

export default LuckyDraw;
