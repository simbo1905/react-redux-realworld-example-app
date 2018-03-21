import { createSelector } from 'reselect';

/**
 * Direct selector to the passwords state domain
 */
const selectPasswordsDomain = (state) => state.passwords;

/**
 * Other specific selectors
 */


/**
 * Default selector used by passwords
 */

const makeSelectPasswords = () => createSelector(
  selectPasswordsDomain,
  (substate) => substate
);

export default makeSelectPasswords;
export {
  selectPasswordsDomain,
};
