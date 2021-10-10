import axios from 'utils/api';
import groupBy from 'lodash/groupBy';
import { GROUP_BRANDS, GET_BRANDS_BY_SEARCH, GET_BRANDS } from './types';

export const groupBrands = () => async (dispatch) => {
  const { data } = await axios.get('items');
  const brands = groupBy(data, 'manufacturer');
  dispatch({
    type: GROUP_BRANDS,
    payload: Object.keys(brands).map((key) => ({
      manufacturer: key,
      totalCount: brands[key].length,
    })),
  });
};

export const getBrandsBySearch = (key = '') => ({ type: GET_BRANDS_BY_SEARCH, payload: key });
export const getBrands = () => ({ type: GET_BRANDS, payload: '' });
