import { GROUP_TAGS, GET_TAGS_BY_SEARCH, GET_TAGS } from './types';

const INITIAL_STATE = { groupedTags: [], tags: [], selectedTags: [] };

export const tags = (state = INITIAL_STATE, { type, payload }) => {
  const actionBox = {
    [GROUP_TAGS]: { ...state, groupedTags: payload },
    [GET_TAGS_BY_SEARCH]: {
      ...state,
      tags: state.groupedTags.filter(({ tag }) => tag.toLowerCase().includes(payload)),
    },
    [GET_TAGS]: { ...state, tags: state.groupedTags },
  };

  return actionBox[type] || state;
};
