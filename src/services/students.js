import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.students;

const getUser = async () => {
  console.log(`${baseUrl}/profile/`)
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/profile/`,
    });
    // console.log(res);
    return res;
  } catch (err) {
    return err.response;
  }
};

export default { getUser };
