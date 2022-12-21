import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.auth;

const checkAuthStudent = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/checkAuthStudent/`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const vendorLogin = async (username, password) => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/vendor/login/`,
      data: {
        username,
        password,
      },
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const adminLogin = async (username, password) => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/admin/login/`,
      data: {
        username,
        password,
      },
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const userLogout = async () => {
  try {
    await axiosConfig({
      method: 'get',
      url: `${baseUrl}/logout/`,
    });
  } catch (err) {
    alert(err.response);
  }
};

export default { checkAuthStudent, vendorLogin, adminLogin, userLogout };
