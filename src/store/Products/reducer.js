import { GET_PRODUCTS } from './types';

const INITIAL_STATE = { products: [], totalProductCount: 0 };

export const products = (state = INITIAL_STATE, { type, payload }) => {
  const actionBox = {
    [GET_PRODUCTS]: {
      ...state,
      products: payload?.products,
      totalProductCount: payload?.totalProductCount,
    },
  };
  return actionBox[type] || state;
};
