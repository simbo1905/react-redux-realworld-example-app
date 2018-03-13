/**
 * Auth Model
 */

 import Cookies from 'js-cookie';

  class AuthModel {

    constructor(options = {}) {
      this.token = Cookies.get('token');
    }

    /**
     * Authentication Token
     */

      getToken() {
        const token = Cookies.get('token');
        return token || this.token || null;
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
  }

  export default new AuthModel();
