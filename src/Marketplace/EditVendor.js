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
    <div class="bg-white p-2">
      <div>
        <p>
          Edit Vendor Profile
        </p>
        <form
          autoComplete="off"
          onSubmit={saveChanges}
          class="flex flex-col gap-5"
        >
          <Input
            name="username"
            label="Username"
            color="secondary"
            required
            defaultValue={formData.username}
            onChange={handleChange}
          />

          <Input
            name="displayName"
            label="Display Name"
            color="secondary"
            required
            defaultValue={formData.displayName}
            onChange={handleChange}
          />

          <Input
            name="surcharge"
            label="SurCharge"
            id="surCharge"
            type="currency"
            pattern="^-?[0-9]\d*\.?\d*$"
            className='w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md'
            placeholder="0"
            defaultValue={formData.surcharge}
            required
            onChange={handleChange} />


          <div class='border transition duration-150 ease-in-out'>
            <label class="float pb-0 pl-2 pointer-events-none">Description</label>
            <textarea
              class="w-full outline-none pl-2"
              name="description"
              label="Description"
              rows={2}
              defaultValue={formData.description}
              onChange={handleChange}
            />
          </div>
          <Input
            name="contactNumber"
            label="Contact Number"
            type="tel"
            pattern='^[689][0-9]{7}$'  // accepts '6', '8' or '9' as the first character, then 7 more [0-9] characters
            defaultValue={formData.contactNumber}
            onChange={handleChange}
          />

          <Input
            name="instagramAccount"
            label="Instagram Account"
            defaultValue={formData.instagramAccount}
            onChange={handleChange}
            pattern='^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)'
          />
          <Input
            name="website"
            label="Website"
            color="secondary"
            type="url"
            defaultValue={formData.website}
            onChange={handleChange}
            pattern='^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)'
          />
          <button
            type="submit"
          >
            Save Changes
          </button>
          
        <button
          onClick={handleClose}
          type="button"
        >
          Cancel
        </button>
        </form>
      </div>
    </div>
  );
}
