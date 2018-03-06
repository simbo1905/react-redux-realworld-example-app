/**
 * Auth Actions
 */

 import Api from '@/api/ApiHelper';
 import { signUpRequest, logInRequest, logOutRequest } from '@/api/requests/auth';
 import { setUser } from '@/redux/user/actions';
 import Router from 'next/router';

 /**
  * Log in
  */

    export const logIn = (credentials) => (dispatch) => {
      console.log('Loggin in with credentials..', credentials);
      return logInRequest(credentials).then(response => {
        // Sign in success!
        const { user, token } = response.data;

        // Set user
        dispatch(setUser(user))

        // Save token in cookie
        Api.setToken(token.access_token);

        return response;
      }).catch(error => {
        console.log('Login Error', error);
      });
    };

 /**
  * Sign Up
  */

  export const signUp = (data) => (dispatch) => {
    return signUpRequest(data).then(response => {
      console.log('signUpRequest', response);
      /**
       * Success!
       */
       if (response.status === 201) {
         // Save user in state
         dispatch(setUser(response.data.user));

         // Set token as cookie
         Api.setToken(response.data.token.access_token);

         // Return resolved promise
         return response;

       } else {
         throw new Error(response);
       }
    }).catch(error => {
      return error;
    });
  };

  /**
   * Log out
   */

    export const logOut = () => dispatch => {
      // Log out in API
      logOutRequest().then(() => {
        Api.removeToken();
      });

      // Remove user from state
      dispatch(setUser(null));

      // Redirect user to login
      Router.replace('/login');
    };
