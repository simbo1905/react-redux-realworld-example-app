/**
 * User
 */

 import request from '@/api/request';
 import store from '@/redux/store';
 import Api from '@/api/ApiHelper';

 /**
  * Get profile
  */

    export const getProfileRequest = () => Api.request().get('/user/profile');
