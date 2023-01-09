import React, { useReducer } from 'react';
import vendorService from '../services/vendors';
import { useNavigate } from 'react-router-dom';
import Input from '../utils/Input';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function EditVendor(props) {
  const { vendor, parentCallback } = props;
  const history = useNavigate();

  const [formData, setFormData] = useReducer(formReducer, {
    //required fields in sign up were: username, password, displayName, emailAddress, surcharge(or assigned a default value)
    username: vendor.username,
    displayName: vendor.displayName,
    description:
      typeof vendor.description === 'undefined' ? '' : vendor.description,
    contactNumber:
      typeof vendor.contactNumber === 'undefined' ? '' : vendor.contactNumber,
    instagramAccount:
      typeof vendor.instagramAccount === 'undefined'
        ? ''
        : vendor.instagramAccount,
    website: typeof vendor.website === 'undefined' ? '' : vendor.website,
    surcharge: vendor.surcharge,
  });

  //DIALOG ACTIONS
  const handleClose = () => {
    parentCallback();
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const saveChanges = async (event) => {
    event.preventDefault();
    const res = await vendorService.editVendor(formData);
    if (res.status === 200) {
      history(0);
    } else if (res.status === 401) {
      alert('You are not authorized.');
    } else {
      alert(res.data.error);
    }
  };

  return (
    <div class='w-full flex flex-col justify-center items-center'>
      <div class="bg-white p-2 border-black border-2 mt-2 rounded-xl mb-2 w-fit">
        <p class='text-2xl font-syne underline decoration-solid mb-2'>
          Edit Vendor Profile
        </p>
        <form
          autoComplete="off"
          onSubmit={saveChanges}
          class="flex flex-col gap-5 items-center"
        >
          <Input
            name="username"
            label="Username"
            wrapperClassName="border-2 w-full border-black rounded-2xl"
            required
            defaultValue={formData.username}
            onChange={handleChange}
          />

          <Input
            name="displayName"
            label="Display Name"
            wrapperClassName="border-2 w-full border-black rounded-2xl"
            required
            defaultValue={formData.displayName}
            onChange={handleChange}
          />

          <Input
            name="surcharge"
            label="SurCharge"
            id="surCharge"
            wrapperClassName="border-2 w-full border-black rounded-2xl"
            type="currency"
            pattern="^-?[0-9]\d*\.?\d*$"
            className='w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md'
            placeholder="0"
            defaultValue={formData.surcharge}
            required
            onChange={handleChange} />


          <div class="border-2 border-black w-full rounded-2xl">
            <label class="float pb-0 pl-2  pointer-events-none">Description</label>
            <textarea
              class="w-full outline-none pl-2"
              name="description"
              label="Description"
              rows={5}
              defaultValue={formData.description}
              onChange={handleChange}
            />
          </div>
          <Input
            name="contactNumber"
            label="Contact Number"
            type="tel"
            wrapperClassName="border-2 border-black w-full rounded-2xl"
            pattern='^[689][0-9]{7}$'  // accepts '6', '8' or '9' as the first character, then 7 more [0-9] characters
            defaultValue={formData.contactNumber}
            onChange={handleChange}
          />

          <Input
            name="instagramAccount"
            label="Instagram Account"
            wrapperClassName="border-2 border-black w-full rounded-2xl"
            defaultValue={formData.instagramAccount}
            onChange={handleChange}
            pattern='^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)'
          />
          <Input
            name="website"
            label="Website"
            color="secondary"
            wrapperClassName="border-2 border-black w-full rounded-2xl"
            type="url"
            defaultValue={formData.website}
            onChange={handleChange}
            pattern='^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)'
          />

          <button
            type="submit"
            class="w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Save Changes
          </button>
          
        <button
          onClick={handleClose}
          type="button"
          class="w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Cancel
        </button>
        </form>
      </div>
    </div>
  );
}
