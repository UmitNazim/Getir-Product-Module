import { ADD_BASKET } from './types';

const INITIAL_STATE = {
  basket: {},
  basketTotalPrice: 0,
};

export const basket = (state = INITIAL_STATE, { type, payload }) => {
  const actionBox = {
    [ADD_BASKET]: {
      ...state,
      basket: payload,
      basketTotalPrice: Object.keys({ ...payload }).reduce((prev, cur) => {
        return prev + payload[cur].price * payload[cur].count;
      }, 0),
    },
  };

  return actionBox[type] || state;
};
