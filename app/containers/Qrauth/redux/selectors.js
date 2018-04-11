import { createSelector } from 'reselect';

/**
 * Direct selector to the qrauth state domain
 */
const selectQrauthDomain = (state) => state.qrauth;

/**
 * Other specific selectors
 */


/**
 * Default selector used by Qrauth
 */

const makeSelectQrauth = () => createSelector(
  selectQrauthDomain,
  (substate) => substate
);

export default makeSelectQrauth;
export { selectQrauthDomain };
