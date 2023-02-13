import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.products;

const getAllProducts = async () => {
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

const getIndivProduct = async (id) => {
  const { data } = await axiosConfig({
    method: 'get',
    url: `${baseUrl}/${id}/`,
  });
  return data;
};

const addProduct = async (newProduct) => {
  // console.log(`Product to be added${newProduct}`);
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/`,
      data: newProduct,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const checkProduct = async (addedProducts) => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/checkQuantity`,
      data: addedProducts,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const updateProduct = async (id, newProduct) => {
  try {
    const res = await axiosConfig({
      method: 'put',
      url: `${baseUrl}/${id}/`,
      data: newProduct,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const deleteProduct = async (id) => {
  try {
    const res = await axiosConfig({
      method: 'delete',
      url: `${baseUrl}/${id}/`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};
export default {
  getAllProducts,
  getIndivProduct,
  addProduct,
  checkProduct,
  updateProduct,
  deleteProduct,
};
