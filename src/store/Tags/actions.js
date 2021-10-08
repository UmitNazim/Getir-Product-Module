import axios from 'utils/api';
import { GROUP_TAGS, GET_TAGS_BY_SEARCH, GET_TAGS } from './types';

export const groupTags = () => async (dispatch) => {
  await axios.get('items').then(({ data }) => {
    const tags = data
      .map(({ tags }) => tags)
      .flat()
      .reduce((cnt, cur) => ((cnt[cur] = cnt[cur] + 1 || 1), cnt), {});

    dispatch({
      type: GROUP_TAGS,
      payload: Object.keys(tags).map((tag) => ({ tag, totalCount: tags[tag] })),
    });
  });
};

export const getTagsBySearch = (key = '') => ({ type: GET_TAGS_BY_SEARCH, payload: key });
export const getTags = () => ({ type: GET_TAGS, payload: '' });
