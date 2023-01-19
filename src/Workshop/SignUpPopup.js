import React, { useState , useEffect } from 'react';
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

import googleSignIn from '../Marketplace/svgs/google_signin.jpg';

export default function SignupPopup(props) {
  const { workshop, parentCallback , toastCallBack} = props;
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
        toastCallBack();
        handleClose(true);
      } else if (res.status === 401) {
        setAuth(false);
      } else if (res.status === 400) {
        // console.log(res.data);
        alert(res.data.error);
      }
    }
  };
  const history = useNavigate();

  const googleUrl = `${config.backendUrl}/api/auth/google/login/`;

  function returnToPrevPage(){
    parentCallback();
    history(-1);
  }

  return (
    <>
       <Modal
        isOpen={!auth}
        onRequestClose={handleLoginClose}
      >
        <div h-full class="h-full flex flex-col items-center justify-center">
          <div class="flex flex-col items-center justify-center bg-white p-5 gap-8 border-4 border-black rounded-lg">
            <button type="button" class="w-fit text-white border-4 border-black bg-[#0071C6] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => returnToPrevPage()}>
              <p class="flex-1 text-2xl font-syne text-center"> Return to Previous Page </p>
            </button>

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
      <div class="h-full flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center bg-white p-5 border-4 border-black rounded-lg">
          <form class="" autoComplete="off" onSubmit={signUpWorkshop}>
            <p class='text-2xl font-syne underline decoration-solid mb-2'>
              {workshop && workshop.name}
            </p>

            <div>
              <Input
                name="name"
                required
                label="Full Name"
                wrapperClassName="border-2 border-black w-full rounded-2xl mb-2"
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

              <p class='text-xl font-syne mb-2'>
                *This workshop is only available for NTU students/staff. Your
                identity will be confirmed on the day of the workshop.
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
            <div class='flex flex-row justify-end' >
              <button
                type="submit"
                color="secondary"
                disabled={promiseInProgress}
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Sign Up
              </button>
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
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
  
    </>
  );
}
