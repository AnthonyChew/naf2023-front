import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.events;

const getAll = async () => {
  try {
    const { data } = await axiosConfig({
      method: 'get',
      url: baseUrl,
    });
    return data;
  } catch (err) {
    return err.response;
  }
};

export default { getAll };
