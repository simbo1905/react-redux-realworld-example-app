/**
 * User
 */

import ApiHelper from 'api/ApiHelper';
const Api = new ApiHelper();

/**
  * Get profile
  */

export const getProfileRequest = () => Api.request().get('/user/profile');

/**
 * Confirm user
 */

export const confirmUserRequest = (userId, code) => Api.request().put(`/user/confirm/${userId}?code=${code}`);
