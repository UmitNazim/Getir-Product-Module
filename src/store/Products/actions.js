/* eslint-disable prettier/prettier */
import axios from 'utils/api';
import { GET_PRODUCTS } from './types';

export const getProducts = ({ page = 1, limit = 16, sort = 'price', order = 'asc' } = {}) => async (
  dispatch,
) => {
  await axios
    .get(`items?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`)
    .then(({ data }) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    });
};
