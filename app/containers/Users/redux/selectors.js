import { createSelector } from 'reselect';

/**
 * Direct selector to the users state domain
 */
const selectUsersDomain = (state) => state.users;

/**
 * Other specific selectors
 */


/**
 * Default selector used by users
 */

const makeSelectUsers = () => createSelector(
  selectUsersDomain,
  (substate) => substate
);

export default makeSelectUsers;
export {
  makeSelectUsers,
};
