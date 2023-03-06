import React, { useState, useEffect } from 'react';
import workshopService from '../services/workshops';
import WaitlistedWorkshops from './WaitlistedWorkshops';
import { useNavigate } from 'react-router-dom';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from 'react-promise-tracker';
import Modal from 'react-modal';
import ContestCard from './ContestCard';
import { Link } from "react-router-dom";
import { useDropzone } from 'react-dropzone';
import QRCode from '../ProfilePage/svgs/WORKSHOPQR.JPG'

function UserWorkshop(props) {
  const history = useNavigate();
  const { waitlistedWorkshops, registeredWorkshops, handelToastCallback, _id } = props;
  const [open, setOpen] = useState(false);
  const [regWorkshop, setWorkshopCancel] = useState(null);

  const handleClickOpen = (workshopId) => {
    setWorkshopCancel(workshopId);
    setOpen(true);
  };
  //FIXME rename to workshop card
  const handleClose = (workshopIdBump) => {
    setOpen(false);
    cancelRegisteredWorkshop(regWorkshop, workshopIdBump);
  };

  const cancelWaitlistedWorkshop = async (workshopId) => {
    const res = await trackPromise(
      workshopService.unregisterWaitlistWorkshop(workshopId)
    );
    if (res.status === 200) {
      history(0);
    }
  };

  const cancelRegisteredWorkshop = async (regWorkshop, workshopToBump) => {
    const res = await trackPromise(
      workshopService.unregisterRegisterWorkshop(regWorkshop, workshopToBump)
    );
    if (res.status === 200) {
      history(0);
    } else {
      alert(res.data.error);
    }
  };

  const [confirmCancel, setConfirmCancel] = useState(false);
  const [payment, setPayment] = useState(false);

  const handleConfirmCancel = () => {
    setConfirmCancel(true);
  };

  const [selectedWorkshop, setSelectedWorkshop] = useState(false);

  const handleSelectWorkshop = (workshop) => {
    setSelectedWorkshop(workshop);
  };

  const [registered, setRegistered] = useState(false);

  const { promiseInProgress } = usePromiseTracker();

  const handleRegistered = (type) => {
    setRegistered(type);
  };

  const handleDialogResult = (continueAction) => {
    setConfirmCancel(false);
    if (continueAction) {
      if (registered) {
        if (
          waitlistedWorkshops.length === 0 ||
          !waitlistedWorkshops.find(
            (workshop) => workshop.numRegistered < workshop.maxParticipants
          )
        ) {
          handelToastCallback("Workshop canceled!");
          cancelRegisteredWorkshop(selectedWorkshop._id, null);
        } else {
          handleClickOpen(selectedWorkshop._id);
        }
      } else {
        handelToastCallback("Workshop canceled!");
        cancelWaitlistedWorkshop(selectedWorkshop._id);
      }
    }
  };

  function closeModal() {
    setConfirmCancel(false);
    setPayment(false);
  }

  function onClickCancelReg(workshop) {
    handleConfirmCancel();
    handleSelectWorkshop(workshop);
    handleRegistered(true);
  }

  function onClickCancelWait(workshop) {
    handleConfirmCancel();
    handleSelectWorkshop(workshop);
    handleRegistered(false);
  }

  function onClickPayment(workshop) {
    handlePayment();
    handleSelectWorkshop(workshop);
  }

  const handlePayment = () => {
    setPayment(true);
  };

  const handlePaymentUpload = async () => {

    const newImage = new FormData();
    newImage.append('newImages', images[0]);

    const res = await trackPromise(
      workshopService.uploadPaymentWorkshop(selectedWorkshop._id, newImage)
    );
    if (res.status === 200) {
      handelToastCallback("Image uploaded!");
      history(0);
    }
    else {
      // console.log(res.data);
      alert(res.data.error);
    }
  }

  const [images, setImages] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.jpeg', '.png', '.jpg']
    },
    onDrop: (acceptedFiles) => {
      let allFiles = images;
      acceptedFiles.forEach((file) => allFiles.push(file));

      setImages(
        allFiles.map((file) =>
          typeof file.name === 'string'
            ? Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
            : file
        )
      );
    },
    multiple: false
  });

  useEffect(() => {
    if (payment || confirmCancel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [payment, confirmCancel]);

  return (
    <div class="flex relative flex-col items-center justify-center pb-5 px-1 lg:px-0">
      {open && (
        <WaitlistedWorkshops parentCallback={handleClose} workshops={waitlistedWorkshops} />
      )}

      <Modal isOpen={confirmCancel} onRequestClose={closeModal}>
        <div class="w-full h-full" onClick={closeModal}>
          <div class="w-fit top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="font-syneBold text-subheader leading-normal text-gray-800" >
                Cancel Workshop?
              </h5>
            </div>
            <div class="modal-body font-syne relative p-4 md:text-paragraph_Desktop text-Mobile">
              <p>You will be removed from this workshop. This action cannot be undone.</p>
            </div>
            <div class="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button type="button"
                class="inline-block px-6 font-syne py-2.5 bg-blue-600 text-white md:text-buttonText_Desktop text-Mobile leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                onClick={() => handleDialogResult(true)}>
                Yes
              </button>
              <button type="button"
                class="inline-block px-6 font-syne py-2.5 bg-purple-600 text-white md:text-buttonText_Desktop text-Mobile leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                onClick={() => handleDialogResult(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={payment} onRequestClose={closeModal}>
        <div class=" w-full h-full border-4 border-black rounded-md overflow-y-auto bg-white">
          <div class="top-[90%] md:top-[65%] left-1/2 right-auto  h-fit bottom-auto -translate-x-1/2 -translate-y-1/2 relative flex flex-col w-full pointer-events-auto  bg-clip-padding outline-none text-current md:pl-5 md:pr-5 pl-1 pr-1">
            <div class='md:pr-5 md:pt-5'>
              <button class='float-right' onClick={() => closeModal()}>
                <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <p class='text-center text-subheader font-syneBold'>Payment Proof</p>
            <p class='text-center md:text-paragraph_Desktop text-Mobile font-syne'>Scan the QR Code below for payment and upload a screenshot once you’re done.</p>
            <div class="flex flex-col md:flex-row mt-20 lg:my-12 flex-wrap gap-10 mb-10 min-h-fit max-w-full justify-around md:pl-0 md:pr-0 pl-1 pr-1">
              <img class='basis-1/3' src={QRCode}></img>
              {images.length <= 0 ?
                <div class="border-dashed border-gray-400 border-2 rounded-lg flex items-center justify-center min-h-full pl-10 pr-10" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p class="md:text-paragraph_Desktop text-Mobile">
                    Drag and drop your product images here, or click to select {<br />}
                    files (Squared images are preferred)
                  </p>
                </div> :
                <div class="flex md:flex-row flex-col relative items-end min-h-full pl-10 pr-10 md:max-w-[50%]">
                  <button class="absolute self-start right-0" onClick={() => setImages([])}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" /></svg>
                  </button>
                  <img class='flex-around self-center' src={images && images[0].preview} />
                </div>
              }
            </div>

            <hr class='bg-black h-1' />
            <div class='flex mb-12 mt-6 lg:mb-12 lg:mt-12'>
              <p class="font-syne basis-3/4 text-2xl lg:text-4xl ">Total:</p>
              <p class="font-syne basis-1/4 text-end text-2xl lg:text-4xl whitespace-nowrap"> $ {selectedWorkshop.price}</p>
            </div>
            {
              images.length > 0 &&
              <div class="flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
                <button type="button"
                  class="inline-block px-6 font-syne py-2.5 bg-blue-600 text-white md:text-buttonText_Desktop text-Mobile leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                  onClick={() => handlePaymentUpload()}>
                  Upload
                </button>
              </div>
            }
          </div>
        </div>
      </Modal>

      <div class="w-fit bg-NAFBlue border-black border-4 rounded-lg pl-5 pr-5 pt-1 pb-1 mb-5 shadow-[10px_10px_0_0_rgba(0,0,0)]  md:min-w-[40%] z-10" >
        <p class="text-subheader font-syneExtraBold text-white mb-2 text-center">
          CONFIRMED WORKSHOPS
        </p>
        {registeredWorkshops && registeredWorkshops.length === 0 ? (
          <p class='font-syne text-white text-center md:text-paragraph_Desktop text-paragraph_Mobile'>
            You have not registered for any workshops. <br></br>Take a look at our
            available workshops{' '}
            {<Link to="/interstellar" class='text-blue-400 font-syne'>
              here
            </Link>}
            !
          </p>
        ) : (
          registeredWorkshops &&
          registeredWorkshops.map((workshop, index) => {
            let imageFile;
            let currentUser = workshop.registeredParticipants[0];
            if (workshop.images.length > 0) {
              imageFile = workshop.images[0];
            }

            return (
              <div class="mb-5 flex md:flex-row flex-col gap-5">
                <ContestCard key={index} image={imageFile} />
                <div class="flex flex-col justify-end items-center md:items-end w-full">
                  <p class='text-subheader text-white font-syne underline decoration-solid mb-2'>{workshop.name}</p>
                  <div class='flex flex-row gap-5'>
                    {currentUser.verified && currentUser.images.length > 0 && <p class="w-fit text-white font-syne border-2 bg-[#3BB800] border-black font-large rounded-lg md:text-paragraph_Desktop text-paragraph_Mobile px-3 py-2.5">Status: Verified</p>}
                    {!currentUser.verified && currentUser.images.length > 0 && <p class="w-fit text-white font-syne border-2 bg-[#FF8B13] border-black font-large rounded-lg md:text-paragraph_Desktop text-paragraph_Mobile px-3 py-2.5">Status: Verifying</p>}
                    {!currentUser.verified && !currentUser.images.length > 0 && <p class="w-fit text-white font-syne border-2 bg-[#E70A0A] border-black font-large rounded-lg md:text-paragraph_Desktop text-paragraph_Mobile px-3 py-2.5">Status: Unpaid</p>}

                    <button class="bg-NAFPurple rounded-md px-1 lg:px-2 py-3 lg:py-1 font-syne md:text-buttonText_Desktop text-buttonText_Mobile text-white z-20  hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out border-black border-2"
                      onClick={() => onClickPayment(workshop)}>
                      Make payment</button>
                    {/* <button
                      onClick={() => onClickCancelReg(workshop)}
                      disabled={promiseInProgress}
                      class="bg-NAFPink rounded-md px-1 lg:px-2 py-3 lg:py-1 font-syne md:text-buttonText_Desktop text-buttonText_Mobile text-white z-20  hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out border-black border-2"
                    >
                      Cancel
                    </button> */}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div class="w-fit bg-NAFBlue border-black border-4 rounded-lg pl-5 pr-5 pt-1 pb-1  shadow-[10px_10px_0_0_rgba(0,0,0)] md:min-w-[40%]">
        <p class="text-subheader font-syneExtraBold text-white mb-2 text-center">
          WAITLISTED WORKSHOPS
        </p>
        {waitlistedWorkshops && waitlistedWorkshops.length === 0 ? (
          <p class='font-syne text-white text-center md:text-paragraph_Desktop text-paragraph_Mobile'>
            You are not waitlisted for any workshops.
          </p>
        ) : (
          waitlistedWorkshops &&
          waitlistedWorkshops.map((workshop, index) => {
            let imageFile;
            if (workshop.images.length > 0) {
              imageFile = workshop.images[0];
            }
            return (
              <div class="mb-5 flex md:flex-row flex-col gap-5">
                <ContestCard key={index} image={imageFile} />
                <div class="flex flex-col justify-center items-center md:items-end w-full">
                  <p class='text-header text-white font-syne underline decoration-solid mb-2'>{workshop.name}</p>
                  <button
                    onClick={() => onClickCancelWait(workshop)}
                    disabled={promiseInProgress}
                    class="bg-NAFPink rounded-md px-1 lg:px-2 py-3 lg:py-1 font-syne md:text-buttonText_Desktop text-buttonText_Mobile text-white z-20  hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out border-black border-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default UserWorkshop;
