import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.image;

const getAllImages = async () => {
  // console.log(`Product to be added${newProduct}`);
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
    // console.log(`Product to be added${newProduct}`);
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


  export default {
    getAllImages,
    addImages
  };