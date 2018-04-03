/*
 *
 * Auth reducer
 *
 */


import {
  LOGIN_IN_PROGRESS,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  AUTH_RESET,
} from './constants';

const initialState = {
  // Log in
  login_in_progress: false,
  login_success: false,
  login_failed: false,
};

function authProviderReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Login
     */
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
    case AUTH_RESET:
      return {
        ...state,
        login_failed: false,
        login_success: false,
        login_in_progress: false,
      };

    /**
     * Log out
     */
    default:
      return state;
  }
}

export default authProviderReducer;
