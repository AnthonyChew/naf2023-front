import config from '../config/env';
import { axiosConfig } from '../config/axiosConfig';
const baseUrl = config.endpoints.photos;

const downloadPhotos = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/download`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const votePhoto = async (photos) => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/vote/`,
      data: photos,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const submitPhoto = async (newPhoto) => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/`,
      data: newPhoto,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const getShortlistedNTUPhotos = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/shortlisted-ntu`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const getShortlistedOpenPhotos = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/shortlisted-open`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export default {
  downloadPhotos,
  submitPhoto,
  votePhoto,
  getShortlistedNTUPhotos,
  getShortlistedOpenPhotos,
};
