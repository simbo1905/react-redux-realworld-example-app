/*
 *
 * Profile reducer
 *
 */


import { PROFILE_SET_DATA, PROFILE_FETCH_SUCCESS, PROFILE_FETCH_ERROR, PROFILE_FETCH_BEGIN } from './constants';

const initialState = {
  data: null,
  error: null,
  fetching: false,
};

function profile(state = initialState, action) {
  switch (action.type) {
    case PROFILE_SET_DATA: return { ...state, data: action.data };
    case PROFILE_FETCH_BEGIN: return { ...state, fetching: true };
    case PROFILE_FETCH_SUCCESS: return { ...state, fetching: false, error: null };
    case PROFILE_FETCH_ERROR: return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
}

export default profile;
