/**
 * Api Helper
 */

 import axios from 'axios';
 import config from '@/config/api';
 import Cookies from 'js-cookie';
 const { baseURL } = config;

  class ApiHelper {

    constructor(options = {}) {
      this.token = Cookies.get('token');
    }

    /**
     * Authentication Token
     */

      getToken() {
        return this.token || null;
      }

      setToken(token) {
        if (token) {
          Cookies.set('token', token);
          this.token = token;
        } else {
          this.token = null
        }
      }

      refreshToken(token) {
        if (token) {
          this.token = token;
        } else {
          this.token = null
        }
      }

      removeToken() {
        Cookies.remove('token');
        this.token = null;
      }

    /**
     * Request
     */

      request() {
        const token = this.token;

        console.log('token!', token);

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
        // console.log('Attaching Authorization', `Bearer ${Cookies.get('token')}`);
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
