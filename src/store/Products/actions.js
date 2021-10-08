import axios from 'utils/api';
import { GET_PRODUCTS } from './types';

export const getProducts = () => async (dispatch) => {
  await axios.get('items').then(({ data }) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  });
};
