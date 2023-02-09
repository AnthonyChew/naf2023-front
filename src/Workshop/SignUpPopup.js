import React, { useState, useEffect } from 'react';
import UserLogin from '../Authentication/UserLogin';
import workshopService from '../services/workshops';
import { trackPromise } from 'react-promise-tracker';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { usePromiseTracker } from 'react-promise-tracker';
import Modal from 'react-modal';
import config from '../config/env';
import studentSevice from '../services/students';
import Input from '../utils/Input';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import googleSignIn from '../Marketplace/svgs/google_signin.jpg';

export default function SignupPopup(props) {
  const { workshop, parentCallback, toastCallBack } = props;
  const [state, setState] = useState({
    name: '',
    contactNumber: '',
    emailAddress: '',
    matricNumber: '',
  });
  const [auth, setAuth] = useState(null);
  const [acknowledgement, setAcknowledgment] = useState(false);
  const [helperText, setHelperText] = useState('');
  const { promiseInProgress } = usePromiseTracker();
  const [profile, setProfile] = useState(null);

  //DIALOG ACTIONS
  const handleClose = (isSuccess) => {
    parentCallback(isSuccess);
  };

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleLoginClose = () => {
    setAuth(true);
  };

  useEffect(() => {
    async function fetchProfileData() {
      const res = await trackPromise(studentSevice.getUser());
      if (res.status === 200) {
        setProfile(res.data);
        setAuth(true);
      }
      else {
        setAuth(false);
      }
    }
    fetchProfileData();
  }, [auth]);

  const signUpWorkshop = async (event) => {

    event.preventDefault();
    if (acknowledgement === false) {
      setHelperText('Please indicate acknowledgement of terms and conditions.');
    } else {
      const res = await trackPromise(
        workshopService.signUpWorkshop(workshop._id, state)
      );
      if (res.status === 200) {
        openConfirmedModal();
        toastCallBack();
      } else if (res.status === 401) {
        setAuth(false);
      } else if (res.status === 400) {
        // console.log(res.data);
        alert(res.data.error);
      }
    }
  };


  useEffect(() => {
    function signUp(workshop) {
      const workshopDate = moment(workshop.date).format('YYYY-MM-DD');
      const current_date = moment().format('YYYY-MM-DD');

      //console.log(workshop);
      if (workshopDate <= current_date) {
        alert('Event ended!');
        returnToPrevPage();
      }
    }

    if (workshop) signUp(workshop);
  }, [workshop]);

  const history = useNavigate();

  const googleUrl = `${config.backendUrl}/api/auth/google/login/`;

  function returnToPrevPage() {
    parentCallback();
    history(-1);
  }

  const [confirm, setConfirmed] = useState(false);

  function closeConfirmedModal() {
    setConfirmed(false);
  }

  function openConfirmedModal() {
    setConfirmed(true);
  }


  return (
    <>
      <Modal
        isOpen={!auth}
        onRequestClose={handleLoginClose}
      >
        <div h-full class="h-full flex flex-col items-center justify-center ">
          <div class="flex flex-col items-center justify-center bg-white p-5 gap-8 border-4 border-black rounded-lg">
            {
              props.close &&
              <button class="self-end" onClick={() => parentCallback()}>
                <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            }
            {
              !props.close &&
              <button type="button" class="w-fit text-white border-4 border-black bg-[#0071C6] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => returnToPrevPage()}>
                <p class="flex-1 text-base md:text-2xl font-syne text-center whitespace-nowrap"> Return to Previous Page </p>
              </button>
            }

            <a href={googleUrl}>
              <img
                src={googleSignIn}

                alt="Sign up and Login with Google"
                class="max-w-[300px] w-full text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              />
            </a>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={confirm}
        onRequestClose={() => closeConfirmedModal()}
      >
        <div h-full class="h-full flex flex-col items-center justify-center">
          <div class="flex flex-col items-center justify-center bg-white p-5 gap-8 border-4 border-black rounded-lg  py-10 ">
            {
              profile && profile.registeredWorkshops <= 0 ?
                <>
                  <p class='font-syneBold md:text-4xl text-2xl'>PLEASE MAKE PAYMENT TO CONFIRM YOUR SIGN UP!</p>

                  <div class='flex flex-col md:flex-row gap-5'>
                    <button class='bg-NAFPurple border-2 lg:border-4 border-black rounded-md px-1 lg:px-2 py-3 lg:py-2 font-syneBold md:text-buttonText_Desktop text-buttonText_Mobile text-white z-20' onClick={() => closeConfirmedModal()}>
                      CONTINUE BROWSING
                    </button>
                    <button class='bg-NAFPink border-2 lg:border-4 border-black rounded-md px-1 lg:px-2 py-3 lg:py-2 font-syneBold md:text-buttonText_Desktop text-buttonText_Mobile text-white z-20' onClick={() => history('/profile')}>
                      MAKA PAYMENT NOW
                    </button>
                  </div>
                </>
                :
                <>
                  <p class='font-syneBold md:text-4xl text-2xl'>YOU HAVE BEEN WAITLISTED! YOU WILL BE NOTIFIED VIA EMAIL IF YOUR SLOT IS CONFIRMED TO MAKE PAYMENT!</p>
                  <button class='bg-NAFPink border-2 lg:border-4 border-black rounded-md px-1 lg:px-2 py-3 lg:py-2 font-syneBold md:text-buttonText_Desktop text-buttonText_Mobile text-white z-20' onClick={() => closeConfirmedModal()}>
                    CONTINUE BROWSING
                  </button>
                </>

            }
          </div>
        </div>
      </Modal>
      {auth && <div class="h-full flex flex-col items-center justify-center">
        <div class="fitems-center justify-center bg-white md:p-5 px-1 border-4 border-black rounded-lg overflow-y-auto">
          <form class="h-full" autoComplete="off" onSubmit={signUpWorkshop}>
            <p class='md:text-2xl text-lg font-syne underline decoration-solid mb-2'>
              {workshop && workshop.name}
            </p>

            <div>
              <Input
                name="name"
                required
                label="Full Name"
                wrapperClassName="border-2  border-black w-full rounded-2xl mb-2"
                id="component-simple"
                value={state.name}
                onChange={handleChange('name')}
              />

              <Input
                id="component-simple"
                type="tel"
                required
                pattern='^[0-9]+$'
                maxLength='15'
                label="Contact No."
                value={state.contactNumber}
                wrapperClassName="border-2 border-black w-full rounded-2xl mb-2"
                onChange={handleChange('contactNumber')}
              />

              <Input
                id="component-simple"
                type="email"
                required
                label="Email Address"
                //inputProps={{ pattern: '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$' }} // this pattern would allow some invalid gmails e.g. "abc"@gmail.com
                inputProps={{ maxLength: 64 }}
                wrapperClassName="border-2 border-black w-full rounded-2xl mb-2"
                value={state.emailAddress}
                onChange={handleChange('emailAddress')}
              />

              <Input
                id="component-simple"
                label="Matriculation Number/Staff ID"
                required
                wrapperClassName="border-2 border-black w-full rounded-2xl mb-2"
                //inputProps={{ pattern: '^U[0-9]{7}[A-Z]$' }} // accepts 'U' as the first character, then 7 [0-9] characters, then a character
                pattern='^[a-zA-Z0-9]+$'
                maxLength='15'
                value={state.matricNumber}
                onChange={handleChange('matricNumber')}
              />
              <p class='md:text-xl font-syne mb-2 text-red-600'>
                *This workshop is only available for NTU students/staff. Your
                identity will be confirmed on the day of the workshop.
              </p>
              <p class='md:text-xl font-syne mb-2 text-red-600'>
                *Do remember to make a payment at the profile page.
              </p>
            </div>

            <div class='flex flex-row mb-2'>
              <input type="checkbox"
                checked={acknowledgement}
                class='mr-2'
                onChange={() => setAcknowledgment(!acknowledgement)}
              />
              <p class='text-sm font-syne self-center cursor-default' onClick={() => setAcknowledgment(!acknowledgement)}>
                By submitting this form, I hereby agree that NTU Arts
                Festival may collect, obtain, store, process and share (with
                relevant third party) my personal data, that I provide in
                this form, for the purpose of their event.
              </p>
            </div>
            <p style={{ color: 'red' }}>
              {helperText}
            </p>
            <div class='flex flex-row justify-around md:justify-end' >
              <button
                type="submit"
                color="secondary"
                disabled={promiseInProgress}
                class="inline-block px-6 py-2.5 font-syne bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Sign Up
              </button>
              <button
                type="button"
                class="inline-block px-6 py-2.5 font-syne bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                onClick={() => handleClose(false)}
                disabled={promiseInProgress}
              >
                Cancel
              </button>
              <LoadingSpinnerComponent />
            </div>
          </form>
          <div>
          </div>
        </div>
      </div>
      }

    </>
  );
}
