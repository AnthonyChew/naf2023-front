import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    position: 'relative',
    align: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    maxWidth: '100%',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ color: '#033F63' }}>
      <Grid xs={12} align="center">
        <h1>Frequently Asked Questions (FAQ)</h1>
      </Grid>

      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Help! I have issues logging in :(
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            Our website makes use of third-party cookies for authentication
            purposes. Sometimes, this is disabled by default. To solve this
            problem, please follow the instructions below. If you are unable to
            find the approach relevant to you, please check out{' '}
            <a href="https://support.panopto.com/s/article/How-to-Enable-Third-Party-Cookies-in-Supported-Browsers">
              here
            </a>{' '}
            or{' '}
            <a href="https://akohubteam.medium.com/how-to-enable-third-party-cookies-on-your-browsers-f9a8143b8cc5">
              here.
            </a>{' '}
            There are also official instructions for{' '}
            <a href="https://support.google.com/chrome/answer/95647">Chrome</a>,{' '}
            <a href="https://support.apple.com/en-sg/guide/safari/sfri11471/mac">
              Safari
            </a>
            ,{' '}
            <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US">
              Firefox
            </a>{' '}
            and{' '}
            <a href="https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
              Internet Explorer
            </a>
            , Thank you and we apologise for any inconvenience caused.
            <h3>Desktop Safari Browser</h3>
            <ol>
              <li>
                Go to the <b>Safari</b> button in the upper-righthand corner.
              </li>
              <li>
                Open <b>Preferences</b> {'>'} <b>Privacy</b>.
              </li>
              <li>
                Uncheck the checkbox for the{' '}
                <b>Prevent cross-site tracking setting</b>
              </li>
            </ol>
            <img
              src="safari-cross-site.png"
              alt="settings"
              className={classes.image}
            ></img>
            <h3>Mobile iOS devices</h3>
            <ol>
              <li>
                Go to <b>Settings</b> {'>'} <b>Safari</b>.
              </li>
              <li>
                Scroll down to the <b>Privacy</b> & <b>Security</b> section.
              </li>
              <li>
                Toggle the <b>Prevent Cross-Site Tracking</b> setting to off.
              </li>
            </ol>
            <img
              src="mobile-safari.jpg"
              alt="settings"
              className={classes.image}
            ></img>
            <h3>Chrome Users</h3>
            <ol>
              <li>On your computer, open Chrome.</li>
              <li>
                At the top right, click More{' '}
                <img
                  src="//lh3.googleusercontent.com/E2q6Vj9j60Dw0Z6NZFEx5vSB9yoZJp7C8suuvQXVA_2weMCXstGD7JEvNrzX3wuQrPtL=w36-h36"
                  alt="More"
                  title="More"
                ></img>{' '}
                <img
                  src="//lh3.googleusercontent.com/M1clyx8CUPwAH1XgxPTgbMx6sSwblyKIw2QAVv1HG_JrI2KCL4aMsSCCwq3zT1X2bm_n=h36"
                  alt="and then"
                  title="and then"
                ></img>{' '}
                <strong>Settings</strong>.
              </li>
              <li>
                Under "Privacy and security", click{' '}
                <strong>Cookies and other site data</strong>.
              </li>
              <li>
                Select the option “Allow all cookies” or "Block third-party
                cookies in Incognito" (Only if you are not using incognito)
              </li>
            </ol>
            <img
              src="chrome-desktop.PNG"
              alt="settings"
              className={classes.image}
            ></img>
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            How long is NAF 2022?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            The festival will run from 31st January to 23rd February 2022.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            What can I do at NAF 2022?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            We have a bunch of exciting segments for you to explore: our
            Publicity Booth under Ripple, Cascade: Visual Arts Showcase under
            Crest, various Workshops under Oasis, and the Online Marketplace and
            Surge: The Stream under Surge. Check out more under our Programmes
            tab.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            Where can I sign up for Stamp Hunt?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            The Stamp Hunt pamphlet can be obtained at our publicity booth, but
            if you missed that you can collect one at the Skydeck @ North Spine.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            How do I submit my completed stamp hunt sheet?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            Scan the QR code on the back of the pamphlet which will lead you to
            the submission page.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            Can I submit multiple completed copies of the stamp hunt sheet?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            Only one submission per person please!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            How can I participate in the Lucky Draw?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            There are four ways for you to participate in our Lucky Draw:
            <br />- Complete a Stamp hunt pamphlet and submit it online
            <br />- Sign up for and attend a workshop
            <br />- Spend a minimum of $10 at our Marketplace
            <br />- Submit an entry for the Sticker Olympia Contest
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            I did not know I can only sign up for one workshop and have already
            signed up, but I prefer a different workshop!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            Please head to your user profile page by clicking the <PersonIcon />{' '}
            icon at the navigation bar. You can view the workshops you have been
            registered/waitlisted for and cancel the one you have already signed
            up for. You will also have the option to bump a waitlisted workshop
            when cancelling a confirmed workshop (subjected to vacancies).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            I was waitlisted for the workshops, when will I know if I get a
            slot?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            Slots will be allocated to waitlisted individuals on a
            first-come-first-serve basis, do check your email regularly in case
            a slot has been freed up for you!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            I am unable to make it for my workshop session, how do I release my
            booking?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            Please inform up at least A DAY before your workshop date so that we
            may give others on the waitlist a chance to attend the workshop.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            Help! I don’t know where my workshop session is located.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            You may either refer to our website for the workshop locations, or
            consult NTU Maps{' '}
            <a href="https://maps.ntu.edu.sg/" style={{ color: '#3393FF' }}>
              here
            </a>
            .
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11a-content"
          id="panel11a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            How do I know my order/delivery status for purchase(s) made on the
            Online Marketplace?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            The status of your purchases will be updated through notification
            emails. Please note that deliveries will be handled by the
            respective vendors.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel12a-content"
          id="panel12a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            What if I cannot come down to collect the items personally?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            You may assign a proxy to collect the items for you. Please ensure
            that the proxy has a copy of the confirmation email as proof of
            purchase. No goods will be released for collection unless the
            confirmation email is shown.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel13a-content"
          id="panel13a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            I really like this workshop but I have been waitlisted, can I be
            given priority on the workshop waitlisted?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            Please note that slots will be allocated strictly on a first come
            first serve basis, and no bumping up will be entertained.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel14a-content"
          id="panel14a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            I want a refund for the purchase made.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            No refunds will be entertained. Please check your cart before
            confirming your order.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel15a-content"
          id="panel15a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            How can I contribute to SAMH, the beneficiary for NAF this year?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            You may contribute to SAMH through a variety of our programmes, such
            as through our Pay-as-you-wish interactive installation at the
            Skydeck @ North Spine, attending our workshops and buying tokens of
            appreciation, or through making a purchase at our marketplace.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel16a-content"
          id="panel16a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontWeight: 'bold' }}
          >
            What data is being collected from users?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            Please head to over to our{' '}
            <Link to="/privacypolicy" variant="contained">
              privacy policy
            </Link>{' '}
            to read up more.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
