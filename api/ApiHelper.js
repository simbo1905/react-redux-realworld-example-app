/**
 * Api Helper
 */

 import axios from 'axios';
 import config from '@/config/api';
 import Auth from '@/models/Auth';
 import Cookies from 'js-cookie';
 const { baseURL } = config;

  class ApiHelper {

    /**
     * Request
     */

      request() {
        // Create instance
        const request = axios.create({
          baseURL,
          validateStatus: function (status) {
            if (status >= 400) {
              return false;
            }

            return status >= 200 && status < 300; // default
          },
        });

        // Request interceptor
        request.interceptors.request.use((config) => {
        // Add auth token before request
        const token = Auth.getToken();
        config.headers.common = {
            Authorization: `Bearer ${token}`,
        };
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

  export default new ApiHelper();
