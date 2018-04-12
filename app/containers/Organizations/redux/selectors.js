import { createSelector } from 'reselect';

/**
 * Direct selector to the organizations state domain
 */
const selectOrganizationsDomain = (state) => state.'organizations';

/**
 * Other specific selectors
 */


/**
 * Default selector used by Organizations
 */

const makeSelectOrganizations = () => createSelector(
  selectOrganizationsDomain,
  (substate) => substate
);

export default makeSelectOrganizations;
export {
  selectOrganizationsDomain,
};
