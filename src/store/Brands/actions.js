import { GROUP_BRANDS, GET_BRANDS_BY_SEARCH, GET_BRANDS } from './types';
import groupBy from 'lodash/groupBy';
import axios from 'utils/api';

export const groupBrands = () => async (dispatch) => {
  await axios.get('items').then(({ data }) => {
    const brands = groupBy(data, 'manufacturer');
    dispatch({
      type: GROUP_BRANDS,
      payload: Object.keys(brands).map((key) => ({
        manufacturer: key,
        totalCount: brands[key].length,
      })),
    });
  });
};

export const getBrandsBySearch = (key = '') => ({ type: GET_BRANDS_BY_SEARCH, payload: key });
export const getBrands = () => ({ type: GET_BRANDS, payload: '' });
