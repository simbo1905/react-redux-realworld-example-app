/*
 *
 * Profile actions
 *
 */

import {
  PROFILE_SET_DATA,
  PROFILE_RESET_DATA,
  PROFILE_FETCH_BEGIN,
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
 * Reset profile
 * (remove local data)
 */
export const resetProfile = () => ({
  type: PROFILE_RESET_DATA,
});


/**
 * Asynchronous actions
 */

/**
 * Fetch profile (and set data)
 */
export const fetchProfile = () => ({
  type: PROFILE_FETCH_BEGIN,
});
