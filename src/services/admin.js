import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.admin;
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

const verifyWorkshop = async (workshop_id,data) => {
  try {
    const res = await axiosConfig({
      method: 'patch',
      url: `${baseUrl}/${workshop_id}/verify/`,
      data: data
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const verifyOrder = async (orderId) => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/${orderId}/orderVerify/`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const sendEmails = async (selfCollDate) => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/selfcollect`,
      data: { collectionDate: selfCollDate },
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const sendWorkshopReminderEmails = async (workshop_id, user) => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/reminderEmail/${workshop_id}`, 
      data: user
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const addPoints = async (newInput, emailAddress) => {
  try {
    const res = await axiosConfig({
      method: 'patch',
      url: `${baseUrl}/luckydraw/`,
      params: {
        emailAddress,
      },
      data: newInput,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const downloadLuckyDraw = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/downloadluckydraw/`,
      responseType: 'blob',
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

const downloadVotes = async () => {
  try {
    const res = await axiosConfig({
      method: 'get',
      url: `${baseUrl}/downloadvotes/`,
      responseType: 'blob',
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

// JT: added call to bumpWaitlist endpoint
const bumpWaitlist = async () => {
  try {
    const res = await axiosConfig({
      method: 'post',
      url: `${baseUrl}/bumpWaitlist/`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export default {
  getWorkshops,
  verifyWorkshop,
  sendEmails,
  verifyOrder,
  addPoints,
  sendWorkshopReminderEmails,
  downloadLuckyDraw,
  downloadVotes,
  bumpWaitlist,
};
