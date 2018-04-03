/**
* Api Helper
*/

import axios from 'axios';
import config from 'config/api';
import AuthModel from 'models/Auth';
const Auth = new AuthModel();
const { baseURL } = config;

class ApiHelper {
  constructor(options = {}) {
    this.config = {
      shouldAttachToken: true,
      ...options,
    };

    this.shouldAttachToken = this.config.shouldAttachToken;
  }

  /**
  * Request
  */

  request() {
    // Create instance
    const request = axios.create({
      baseURL: `${baseURL}/`,
      // validateStatus: (status) => {
      //   if (status >= 400) {
      //     return false;
      //   }
      //
      //   return status >= 200 && status < 300; // default
      // },
    });

    // Request interceptor
    request.interceptors.request.use((axiosConfig) => {
      // Add auth token before request
      // We get this token directly from localStorage
      // which is based on our redux-store

      if (this.shouldAttachToken) {
        const token = Auth.getToken();

        if (token) {
          axiosConfig.headers.common = {
            Authorization: `Bearer ${token}`,
          };
        }
      }

      return axiosConfig;
    },
    (error) => Promise.reject(error)
    );

    // Response interceptor
    request.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
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
