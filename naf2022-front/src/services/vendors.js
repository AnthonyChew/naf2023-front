import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.vendors;

const vendorSignUp = async (newVendor) => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/`,
      data: newVendor,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};
const getVendor = async (vendor_id) => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/${vendor_id}/`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const getVendorProfile = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/profile/`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const getAllVendors = async () => {
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

const editVendor = async (newVendor) => {
  // console.log(newVendor);
  try {
    const res = await axiosConfig({
      method: 'patch',
      url: baseUrl,
      data: newVendor,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export default {
  vendorSignUp,
  getAllVendors,
  getVendorProfile,
  getVendor,
  editVendor,
};
