import { GROUP_BRANDS, GET_BRANDS_BY_SEARCH, GET_BRANDS } from './types';

const INITIAL_STATE = {
  brands: [],
  groupedBrands: [],
  selectedBrands: [],
};

export const brands = (state = INITIAL_STATE, { type, payload }) => {
  const actionBox = {
    [GROUP_BRANDS]: { ...state, groupedBrands: payload },
    [GET_BRANDS_BY_SEARCH]: {
      ...state,
      brands: state.groupedBrands.filter(({ manufacturer }) =>
        manufacturer.toLowerCase().includes(payload),
      ),
    },
    [GET_BRANDS]: { ...state, brands: state.groupedBrands },
  };

  return actionBox[type] || state;
};
