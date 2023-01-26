import React, { useState } from 'react';
import workshopService from '../services/workshops';
import WaitlistedWorkshops from './WaitlistedWorkshops';
import { useNavigate } from 'react-router-dom';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from 'react-promise-tracker';
import Modal from 'react-modal';
import ContestCard from './ContestCard';
import { Link } from "react-router-dom";
import { useDropzone } from 'react-dropzone';
import QRCode from '../Marketplace/svgs/Payment/QRCode.svg'

function UserWorkshop(props) {
  const history = useNavigate();
  const { waitlistedWorkshops, registeredWorkshops, handelToastCallback , _id} = props;
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
      closeModal();
    }
    else {
      // console.log(res.data);
      alert(res.data.error);
    }
  }

  const [images, setImages] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.jpeg', '.png']
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

  return (
    <div class="flex flex-col items-center justify-center pb-5">
      {open && (
        <WaitlistedWorkshops parentCallback={handleClose} workshops={waitlistedWorkshops} />
      )}

      <Modal isOpen={confirmCancel} onRequestClose={closeModal}>
        <div class="w-full h-full" onClick={closeModal}>
          <div class="w-fit top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="text-xl font-syneBold font-medium leading-normal text-gray-800" >
                Cancel Workshop?
              </h5>
            </div>
            <div class="modal-body font-syne relative p-4">
              <p>You will be removed from this workshop. This action cannot be undone.</p>
            </div>
            <div class="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button type="button"
                class="inline-block px-6 font-syne py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                onClick={() => handleDialogResult(true)}>
                Yes
              </button>
              <button type="button"
                class="inline-block px-6 font-syne py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                onClick={() => handleDialogResult(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={payment} onRequestClose={closeModal}>
        <div class="w-full h-full">
          <div class="top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="flex items-center justify-end mb-8 mr-5 mt-5">
              <button class="navbar-close" onClick={() => closeModal()}>
                <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div class="flex flex-col md:flex-row mt-20 lg:my-12 flex-wrap gap-10 mb-10 min-h-fit max-w-full justify-around md:pl-0 md:pr-0 pl-1 pr-1">
              <img class='basis-1/3' src={QRCode}></img>
              {images.length <= 0 ?
                <div class="border-dashed border-gray-400 border-2 rounded-lg flex items-center justify-center min-h-full pl-10 pr-10" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p >
                    Drag and drop your product images here, or click to select {<br />}
                    files (Squared images are preferred)
                  </p>
                </div> :
                <div class="flex md:flex-row flex-col relative items-end min-h-full pl-10 pr-10 md:max-w-[50%]">
                  <button class="absolute self-start right-0" onClick={() => setImages([])}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" /></svg>
                  </button>
                  <img class='flex-around self-center' src={images && images[0].preview} onLoad={() => { URL.revokeObjectURL(images[0].preview) }} />
                </div>
              }
            </div>
            {
              images.length > 0 &&
              <div class="flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
                <button type="button"
                  class="inline-block px-6 font-syne py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                  onClick={() => handlePaymentUpload()}>
                  Upload
                </button>
              </div>
            }
          </div>
        </div>
      </Modal>

      <div class="w-fit bg-NAFBlue border-black border-4 rounded-lg pl-5 pr-5 pt-1 pb-1 mb-5 shadow-[10px_10px_0_0_rgba(0,0,0)]" >
        <p class="text-2xl font-syneBold text-white mb-2">
          CONFIRMED WORKSHOPS
        </p>
        {registeredWorkshops && registeredWorkshops.length === 0 ? (
          <p class='font-syne text-white text-center'>
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
              <div class="mb-5">
                <ContestCard key={index} name={workshop.name} image={imageFile} />
                <div class="flex gap-4 justify-end w-full">
                  {currentUser.verified && currentUser.images.length > 0 && <p class="w-fit text-white font-syne border-2 bg-[#3BB800] border-black font-large rounded-lg text-sm px-3 py-2.5">Status: Verified</p>}
                  {!currentUser.verified && currentUser.images.length > 0 && <p class="w-fit text-white font-syne border-2 bg-[#FF8B13] border-black font-large rounded-lg text-sm px-3 py-2.5">Status: Paid</p>}
                  {!currentUser.verified && !currentUser.images.length > 0 && <p class="w-fit text-white font-syne border-2 bg-black border-black font-large rounded-lg text-sm px-3 py-2.5">Status: Unpaid</p>}
                 
                  <button class="w-fit text-white border-2 font-syne border-black bg-purple-400 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-800 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => onClickPayment(workshop)}>
                    Make payment</button>
                  <button
                    onClick={() => onClickCancelReg(workshop)}
                    disabled={promiseInProgress}
                  >
                    <p class="w-fit text-white border-2 font-syne border-black bg-pink-400 hover:bg-pink-600 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-pink-600 dark:hover:bg-pink-800 focus:outline-none dark:focus:ring-blue-800">Cancel</p>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div class="w-fit bg-NAFBlue border-black border-4 rounded-lg pl-5 pr-5 pt-1 pb-1  shadow-[10px_10px_0_0_rgba(0,0,0)]">
        <p class="text-2xl font-syneBold text-white mb-2">
          WAITLISTED WORKSHOPS
        </p>
        {waitlistedWorkshops && waitlistedWorkshops.length === 0 ? (
          <p class='font-syne text-white text-center'>
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
              <div class="mb-5">
                <ContestCard key={index} name={workshop.name} image={imageFile} />
                <div class="flex justify-end w-full">
                  <button
                    onClick={() => onClickCancelWait(workshop)}
                    disabled={promiseInProgress}
                  >
                    <div class="flex flex-row">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="24" height="24"
                        viewBox="0 0 24 24">
                        <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                      </svg>
                      <p class='text-xl font-syne underline decoration-solid mb-2'>Cancel</p>
                    </div>
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
