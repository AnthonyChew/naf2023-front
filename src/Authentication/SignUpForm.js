import React, { useReducer, useRef } from 'react';

import vendorService from '../services/vendors';
import { trackPromise } from 'react-promise-tracker';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { usePromiseTracker } from 'react-promise-tracker';
import Input from '../utils/Input';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function SignUpForm(props) {
  const [formData, setFormData] = useReducer(formReducer, {
    showPassword: false,
  });

  const { switchTabs } = props;
  const { promiseInProgress } = usePromiseTracker();
  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    delete formData['showPassword'];
    console.log(formData);
    for (let key in formData) {
      if (formData[key] === '') {
        delete formData[key];
      }
    }
    const res = await trackPromise(vendorService.vendorSignUp(formData));
    if (res.status === 200) {
      alert('Successfully signed up! Please login into your account.');
      switchTabs(1);
    } else {
      // console.log(res.data);
      if (res.data.validation) {
        alert(`${res.data.error}: ${JSON.stringify(res.data.validation)}`);
      } else {
        alert(`${res.data.error}: This email/username has been used before.`);
      }
    }
  };

  const handleClickShowPassword = () => {
    setFormData({
      name: 'showPassword',
      value: !formData.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const passwordRef = useRef();

  return (
    <form autoComplete="off" onSubmit={handleSubmit} >
      <Input
        name="username"
        label="Username"
        required
        value={formData.username}
        onChange={handleChange}
        inputProps={{ maxLength: 32 }}
      />
      <div
        class="border transition duration-150 ease-in-out"
        onClick={() => passwordRef.current.focus()}
      >
        <label
          htmlFor="password"
          className='text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5'
        >
          Password {<span class='text-red-500'>*</span>}
        </label>
        <div class="flex flex-row">
          <input
            ref={passwordRef}
            type={formData.showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            name="password"
            class='w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md'
            id="password"
            placeholder=""
          />
          <button
            type="button"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            class="w-fit h-fit"
          >
            {
              formData.showPassword ?
                <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
                </svg>
                : <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z" />
                </svg>
            }
          </button>
        </div>
      </div>
      <Input
        name="displayName"
        label="Display Name"
        required
        value={formData.displayName}
        onChange={handleChange}
        inputProps={{ maxLength: 100 }}
      />
      <Input
        name="emailAddress"
        label="Email Address"
        required
        type="email"
        //inputProps={{ pattern: '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$' }} // this pattern would allow some invalid gmails e.g. "abc"@gmail.com
        inputProps={{ maxLength: 64 }}
        value={formData.emailAddress}
        onChange={handleChange}
      />
      <Input
        name="surCharge"
        label="SurCharge"
        id="surCharge"
        type="currency"
        pattern="^-?[0-9]\d*\.?\d*$"
        className='w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md'
        placeholder="0"
        value={formData.surcharge}
        required
        onChange={event => this.setState({ surcharge: event.target.value.replace(/\D/, ''), handleChange })} />
      <Input
        name="description"
        label="Description"
        multiline
        rows={2}
        value={formData.description}
        onChange={handleChange}
      />
      <Input
        name="contactNumber"
        label="Contact Number"
        type="tel"
        inputProps={{
          pattern: '^[0-9]+$', // accepts digits only
          // maxLength: 15,
          maxLength: 8,
          minLength: 8,
        }} // max possible length of a phone number including the country code
        value={formData.contactNumber}
        onChange={handleChange}
      />

      <Input
        name="instagramAccount"
        label="Instagram Account"
        value={formData.instagramAccount}
        onChange={handleChange}
        inputProps={{ maxLength: 30 }}
      />
      <Input
        name="website"
        label="Website"
        type="url"
        value={formData.website}
        onChange={handleChange}
        inputProps={{ maxLength: 255 }}
      />

      <button
        type="submit"
        disabled={promiseInProgress}
      >
        Submit
      </button>
      <LoadingSpinnerComponent />
    </form>
  );
}
