import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.workshops;

/**
 * @param {string} workshop_id - id of the workshop the user signed up for
 */
const signUpWorkshop = async (workshop_id, user) => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/${workshop_id}/signup/`,
      data: user,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const uploadPaymentWorkshop = async (workshop_id, image) => {
  try {
    const res = await axiosConfig({
      method: 'patch',
      url: `${baseUrl}/${workshop_id}/uploadImage/`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: image,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const getAll = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const downloadWorkshops = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/download/`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const downloadIndivWorkshop = async (workshopId) => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/download/${workshopId}/`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

/**
 * @param {string} workshop_id - id of the workshop the user signed up for
 */
const unregisterWaitlistWorkshop = async (workshop_id) => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/${workshop_id}/cancel?bump_waitlist=false`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const unregisterRegisterWorkshop = async (workshop_id, bumped_workshop) => {
  const bump_waitlist = bumped_workshop === null ? false : true;
  const params =
    bump_waitlist === true
      ? { bump_waitlist, bumped_workshop }
      : { bump_waitlist };
  try {
    const res = await axiosConfig({
      method: 'post',
      params: params,
      url: `${baseUrl}/${workshop_id}/cancel/`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

/**
 * @param {string} id - id of the post to be deleted
 * @return {object} The deleted post object
 */
const createWorkshop = async () => {
  const { data } = await axiosConfig({
    method: 'post',
    url: baseUrl,
  });
  return data;
};

export default {
  signUpWorkshop,
  createWorkshop,
  downloadWorkshops,
  downloadIndivWorkshop,
  unregisterWaitlistWorkshop,
  unregisterRegisterWorkshop,
  getAll,
  uploadPaymentWorkshop,
};
