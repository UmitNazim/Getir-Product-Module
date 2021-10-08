import { ADD_BASKET } from './types';

export const addBasket = (item = {}) => ({
  type: ADD_BASKET,
  payload: item,
});
