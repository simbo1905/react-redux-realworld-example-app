import { createSelector } from 'reselect';

/**
 * Direct selector to the authProvider state domain
 */
const selectAuthProviderDomain = (state) => state.auth;

/**
 * Other specific selectors
 */


/**
 * Default selector used by AuthProvider
 */

const makeSelectAuthProvider = () => createSelector(
  selectAuthProviderDomain,
  (substate) => substate
);

export default makeSelectAuthProvider;
export {
  selectAuthProviderDomain,
};
