/**
 * Auth Model
 */

export default class Auth {
  constructor() {
    this.accessTokenKey = 'uniqkey_access_token';
    this.token = null;
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  /**
   * Access Token
   */
  getToken() {
    return this.token || localStorage.getItem(this.accessTokenKey);
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem(this.accessTokenKey, token);
  }

  removeToken() {
    localStorage.removeItem(this.accessTokenKey);
  }
}
