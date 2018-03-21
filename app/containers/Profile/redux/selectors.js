import { createSelector } from 'reselect';

/**
 * Direct selector to the pageProfile state domain
 */
const selectProfileDomain = (state) => state.profile;

/**
 * Other specific selectors
 */


/**
 * Default selector used by PageProfile
 */

const makeSelectProfile = () => createSelector(
  selectProfileDomain,
  (substate) => substate.data
);

export default makeSelectProfile;
export {
  selectProfileDomain,
  makeSelectProfile,
};
