/*
 *
 * Profile reducer
 *
 */


import {
  PROFILE_SET_DATA,
} from './constants';

const initialState = {
  data: null,
};

function profile(state = initialState, action) {
  switch (action.type) {
    case PROFILE_SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}

export default profile;
