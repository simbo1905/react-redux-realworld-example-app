/*
 *
 * Profile actions
 *
 */

import {
  PROFILE_SET_DATA,
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
