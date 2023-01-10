import React, { useState } from 'react';
import workshopService from '../services/workshops';
import WaitlistedWorkshops from './WaitlistedWorkshops';
import { useNavigate } from 'react-router-dom';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from 'react-promise-tracker';
import Modal from 'react-modal';
import ContestCard from './ContestCard';

function UserWorkshop(props) {
  const history = useNavigate();
  const { waitlistedWorkshops, registeredWorkshops } = props;
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
          selectedWorkshop.name.substring(0, 24) ===
          'Arts Community Open Talk' ||
          !waitlistedWorkshops.find(
            (workshop) => workshop.numRegistered < workshop.maxParticipants
          )
        ) {
          cancelRegisteredWorkshop(selectedWorkshop._id, null);
        } else {
          handleClickOpen(selectedWorkshop._id);
        }
      } else {
        cancelWaitlistedWorkshop(selectedWorkshop._id);
      }
    }
  };

  function closeModal() {
    setConfirmCancel(false);
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

  return (
    <div class="flex flex-col items-center justify-center pb-5 w-1/2">
      {open && (
        <WaitlistedWorkshops parentCallback={handleClose} workshops={waitlistedWorkshops} />
      )}

      <Modal isOpen={confirmCancel} onRequestClose={closeModal}>
        <div class="w-full h-full" onClick={closeModal}>
          <div class="w-fit top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="text-xl font-medium leading-normal text-gray-800" >
                Cancel Workshop?
              </h5>
            </div>
            <div class="modal-body relative p-4">
              <p>You will be removed from this workshop. This action cannot be undone.</p>
            </div>
            <div class="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                onClick={() => handleDialogResult(true)}>
                Yes
              </button>
              <button type="button"
                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                onClick={() => handleDialogResult(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <div class="w-fit bg-NAFBlue border-black border-4 rounded-lg pl-5 pr-5 pt-1 pb-1 mb-5">
        <p class="text-2xl text-white mb-2">
          CONFIRMED WORKSHOPS:
        </p>
        {registeredWorkshops && registeredWorkshops.length === 0 ? (
          <p>
            You have not registered for any workshops. <br></br>Take a look at our
            available workshops{' '}
            {/* <Link to="/Oasis" variant="contained">
            here
          </Link> */}
            !
          </p>
        ) : (
          registeredWorkshops &&
          registeredWorkshops.map((workshop, index) => {
            let imageFile;
            if (workshop.images.length > 0) {
              imageFile = workshop.images[0];
            }
            return (
              <div class="mb-5">
                <ContestCard key={index} name={workshop.name} image={imageFile} />
                <div class="flex justify-end w-full">
                  <button
                    onClick={() => onClickCancelReg(workshop)}
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

      <div class="w-fit bg-NAFBlue border-black border-4 rounded-lg pl-5 pr-5 pt-1 pb-1">
        <p class="text-2xl text-white mb-2">
          WAITLISTED WORKSHOPS
        </p>
        {waitlistedWorkshops && waitlistedWorkshops.length === 0 ? (
          <p >
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
