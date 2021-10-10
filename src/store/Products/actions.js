/* eslint-disable prettier/prettier */
import axios from 'utils/api';
import { GET_PRODUCTS } from './types';

export const getProducts = ({
  _page = 1,
  _limit = 16,
  _sort = null,
  _order = 'asc',
} = {}) => async (dispatch) => {
  const { data: products, headers } = await axios.get(`items`, {
    params: { _page, _limit, _sort, _order },
  });

  dispatch({
    type: GET_PRODUCTS,
    payload: {
      products,
      totalProductCount: headers['x-total-count'],
    },
  });
};
