/*
 *
 * Auth reducer
 *
 */


import {
  LOGIN_IN_PROGRESS,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGIN_RESET,
} from './constants';

const initialState = {
  login_in_progress: false,
  login_success: false,
  login_failed: false,
};

function authProviderReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_IN_PROGRESS:
      return {
        ...state,
        login_in_progress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login_in_progress: false,
        login_success: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        login_in_progress: false,
        login_failed: true,
      };
    case LOGIN_RESET:
      return {
        ...state,
        login_failed: false,
        login_success: false,
        login_in_progress: false,
      };
    default:
      return state;
  }
}

export default authProviderReducer;
