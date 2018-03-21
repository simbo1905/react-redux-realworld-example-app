/**
 * User
 */

 import ApiHelper from 'api/ApiHelper';
 const Api = new ApiHelper();

 /**
  * Get profile
  */

    export const getProfileRequest = () => Api.request().get('/user/profile');
