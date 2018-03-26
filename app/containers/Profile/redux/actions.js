/*
 *
 * Profile actions
 *
 */

import {
  PROFILE_SET_DATA,
  PROFILE_FETCH_BEGIN,
  PROFILE_FETCH_ERROR,
  PROFILE_FETCH_SUCCESS,
} from './constants';

/**
 * Set a users profile data
 */
export function setProfileData(data) {
  return {
    type: PROFILE_SET_DATA,
    data,
  };
}


/**
 * Asynchronous actions
 */

/**
 * Fetch profile (and set data)
 */
export const fetchProfile = () => ({
  type: PROFILE_FETCH_BEGIN,
});
