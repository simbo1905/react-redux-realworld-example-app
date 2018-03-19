/**
 * Api Helper
 */

 import axios from 'axios';
 import config from 'config/api';
 import configureStore from 'store/configureStore';
 const { baseURL } = config;

 class ApiHelper {

   constructor(options = {}) {
     this.config = {
       shouldAttachToken: true,
       ...config,
     };

     this.shouldAttachToken = this.config.shouldAttachToken;
   }

    /**
     * Request
     */

   request() {
      // Create instance
    const request = axios.create({
        baseURL,
        validateStatus: (status) => {
          if (status >= 400) {
            return false;
          }

          return status >= 200 && status < 300; // default
        },
      });

        // Request interceptor
        request.interceptors.request.use((config) => {
        // Add auth token before request
        // We get this token directly from localStorage
        // which is based on our redux-store

        if (this.shouldAttachToken) {
          let token = null;

          try {
            token = JSON.parse(JSON.parse(localStorage['persist:uniqkey']).profile).data.access_token;
          } catch (err) {
            token = null;
          }

          if (token) {
            config.headers.common = {
                Authorization: `Bearer ${token}`,
            };
          }
        }

        return config;

        }, (error) => {
          return Promise.reject(error);
        });

        // Response interceptor
        request.interceptors.response.use(
          (response) => {
            return response;
          },
          (error) => {
            return Promise.reject(error);
          },
        );

        // Headers
        request.defaults.headers.common = {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        };

        return request;
      }
  }

  export default ApiHelper;
