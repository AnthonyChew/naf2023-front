import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.image;

const getVerifiedImages = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/all`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const deleteImage = async (img) => {
  try {
    const res = await axiosConfig({
      method: 'delete',
      url: `${baseUrl}/delete`,
      data: img,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};


const getAllImages = async () => {
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


const addImages = async (newimg) => {
    try {
      const res = await axiosConfig({
        method: 'post',
        url: `${baseUrl}/uploadImage`,
        data: newimg,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res;
    } catch (err) {
      return err.response;
    }
  };

  const adminAddImages = async (newimg) => {
    try {
      const res = await axiosConfig({
        method: 'post',
        url: `${baseUrl}/adminUploadImage`,
        data: newimg,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res;
    } catch (err) {
      return err.response;
    }
  };

  const postVerifyImage = async (img) => {
    try {
      const res = await axiosConfig({
        method: 'put',
        url: `${baseUrl}/approve`,
        data: img,
      });
      return res;
    } catch (err) {
      return err.response;
    }
  };


  export default {
    getAllImages,
    deleteImage,
    getVerifiedImages,
    addImages,
    adminAddImages,
    postVerifyImage,
  };