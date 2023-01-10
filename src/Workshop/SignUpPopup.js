import React, { useState } from 'react';
import UserLogin from '../Authentication/UserLogin';
import workshopService from '../services/workshops';
import { trackPromise } from 'react-promise-tracker';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { usePromiseTracker } from 'react-promise-tracker';
import Input from '../utils/Input';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupPopup(props) {
  const { workshops, parentCallback } = props;
  const [state, setState] = useState({
    name: '',
    contactNumber: '',
    emailAddress: '',
    matricNumber: '',
  });
  const [auth, setAuth] = useState(true);
  const [acknowledgement, setAcknowledgment] = useState(false);
  const [helperText, setHelperText] = useState('');
  const { promiseInProgress } = usePromiseTracker();

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

  const signUpWorkshop = async (event) => {
    event.preventDefault();
    if (acknowledgement === false) {
      setHelperText('Please indicate acknowledgement of terms and conditions.');
    } else {
      const res = await trackPromise(
        workshopService.signUpWorkshop(workshops[0]._id, state)
      );
      if (res.status === 200) {
        handleClose(true);
        toast("Signed up for workshop! Please check your email!");
      } else if (res.status === 401) {
        setAuth(false);
      } else if (res.status === 400) {
        // console.log(res.data);
        alert(res.data.error);
      }
    }
  };

  return (
    <>
      <UserLogin isOpen={!auth} parentCallback={handleLoginClose} />
      <div class="h-full flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center bg-white p-5 border-4 border-black rounded-lg">
          <form class="" autoComplete="off" onSubmit={signUpWorkshop}>
            <p class='text-2xl font-syne underline decoration-solid mb-2'>
              {workshops[0] && workshops[0].name}
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
      <ToastContainer position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick />
    </>
  );
}
