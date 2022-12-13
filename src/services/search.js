import { axiosConfig } from '../config/axiosConfig';
import config from '../config/env';
const baseUrl = config.endpoints.search;

/**
 * @param {string} keyword
 * @return {object} products that match the keyword
 */
const searchMarketplace = async (keyword) => {
  const { data } = await axiosConfig({
    method: 'get',
    url: `${baseUrl}/products?q=${keyword}`,
  });
  return data;
};

export default {
  searchMarketplace,
};
