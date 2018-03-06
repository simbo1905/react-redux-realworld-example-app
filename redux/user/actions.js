/**
 * User: Actions
 */

  import constants from './constants';
  import { getProfileRequest } from '@/api/requests/user';

  /**
   * Set the user in state
   */

    export const setUser = (user) => {
      return {
        type: constants.USER_SET,
        payload: user,
      };
    }

  /**
   * Fetch user profile
   */

    export const fetchUserProfile = () => dispatch => {
      return getProfileRequest().then(response => {
        dispatch(setUser(response.data));
      }).catch(error => {
        console.log('Error getting user profile: ', error);
        return error;
      });
    }
