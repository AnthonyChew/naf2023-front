import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.orders;

const getOrders = async (verified = null) => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/`,
      params: {
        verified,
      },
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const downloadOrdersAdmin = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/admindownload/`,
      responseType: 'blob',
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const downloadOrdersVendor = async (vendor_id) => {
  console.log(`${baseUrl}/vendordownload/${vendor_id}`);
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/vendordownload/${vendor_id}`,
      responseType: 'blob',
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const getIndivOrder = async (order_id) => {
  const { data } = await axiosConfig({
    method: 'get',
    url: `${baseUrl}/${order_id}/`,
  });
  return data;
};

const postOrder = async (newOrder) => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/`,
      data: newOrder,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const downloadOrders = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/download/`,
      responseType: 'blob',
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const deleteOrder = async (order_id) => {
  try {
    const res = await axiosConfig({
      method: 'delete',
      url: `${baseUrl}/${order_id}/`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export default {
  getOrders,
  getIndivOrder,
  postOrder,
  downloadOrders,
  downloadOrdersAdmin,
  downloadOrdersVendor,
  deleteOrder,
};
