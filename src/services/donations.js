import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.donations;

const getDonations = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: baseUrl,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const updateDonations = async (donationCategory, newDonation) => {
  try {
    const res = await axiosConfig({
      method: 'patch',
      url: `${baseUrl}?name=${donationCategory}`,
      data: newDonation,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export default { getDonations, updateDonations };
