import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.home;

const getWorkshops = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/workshops`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const getProducts = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/products`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export default { getWorkshops, getProducts };
