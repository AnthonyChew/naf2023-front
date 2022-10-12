import React, { useState } from 'react';
import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import '../HomePage/ReactSlick.css';
import Hidden from '@material-ui/core/Hidden';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ResponsivePlayer from '../Components/ResponsivePlayer';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
  },
  modal: {
    maxWidth: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vidModal: {
    width: '80%',
  },
  descBox: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    textAlign: 'center',
    fontSize: '.9vw',
    color: 'white',
    padding: '5px',
    overflow: 'hidden',
    background: 'rgba(0, 0, 0, 0.6)',
  },
  stepperDots: {
    bottom: '0px !important',
    position: 'relative',
    display: 'block',
    width: '100%',
    listStyle: 'none',
    textAlign: 'center',
  },
  paddedItem: {
    padding: theme.spacing(3),
  },

  cardImg: {
    width: '100%',
    backgroundImage: 'url(https://img.youtube.com/vi/DPYu8NJ3Ae4/0.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
  img: {
    maxWidth: '100%',
  },
  orangeButton: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
  },

  orangeIcon: {
    transform: 'scale(2)',
    color: orange[500],
    '&:hover': {
      color: orange[700],
    },
  },
}));

function CoverFlow(props) {
  const classes = useStyles();
  const [activeMedia, setActive] = useState(props.items.length / 2);
  const [open, setOpen] = useState(false);
  const [currentURL, setCurrentURL] = useState(
    'https://www.youtube.com/watch?v=DR7TAC0yAGk&feature=youtu.be'
  );
  const handleOpen = (index) => {
    if (index == activeMedia) {
      setCurrentURL(props.items[index].url);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyleRoot className={classes.root}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.vidModal}>
            {console.log(currentURL)}
            {/* <iframe
              width="560"
              height="315"
              src={currentURL}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={currentURL}
            ></iframe> */}
            <ResponsivePlayer url={currentURL} />
          </div>
        </Fade>
      </Modal>
      <Coverflow
        displayQuantityOfSide={2}
        navigation={false}
        infiniteScroll
        enableHeading={false}
        active={activeMedia}
        currentFigureScale={1.1}
        enableScroll={false}
        media={{
          '@media (max-width: 900px)': {
            width: '90%',
            height: '200px',
          },
          '@media (min-width: 900px)': {
            width: '960px',
            height: '450px',
          },
        }}
      >
        {props.items.map((item, index) => (
          <div
            onClick={() => {
              setActive(index);
            }}
            key={index}
            alt={item.title}
            style={{ backgroundColor: 'black' }}
          >
            <img
              className={classes.img}
              src={item.coverImg}
              alt={item.title}
              //data-action={item.url}
              onClick={() => {
                handleOpen(index);
              }}
            />
            <IconButton
              size="medium"
              className={classes.orangeButton}
              aria-label="play"
              target="_blank"
              onClick={() => {
                handleOpen(index);
              }}
            >
              <PlayCircleOutlineIcon
                fontSize="inherit"
                className={classes.orangeIcon}
              />
            </IconButton>

            <div className={classes.descBox}>{item.title}</div>
          </div>
        ))}
      </Coverflow>
      <div>
        <ul className={'slick-dots' + ' ' + classes.stepperDots}>
          {props.items.map((item, index) =>
            index == activeMedia ? (
              <li className="slick-active">
                <button
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  {' '}
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  {' '}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </StyleRoot>
  );
}

export default CoverFlow;
