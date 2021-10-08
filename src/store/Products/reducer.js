import { GET_PRODUCTS } from './types';

const INITIAL_STATE = { products: [] };

export const products = (state = INITIAL_STATE, { type, payload }) => {
  const actionBox = {
    [GET_PRODUCTS]: { ...state, products: payload },
  };

  return actionBox[type] || state;
};
