import { createSelector } from 'reselect';

/**
 * Direct selector to the Groups state domain
 */
const selectGroupsDomain = (state) => state.groups;
const selectOrganizationsDomain = (state) => state.organizations;

/**
 * Other specific selectors
 */


/**
 * Default selector used by Groups
 */

const makeSelectGroups = () => createSelector(
  selectGroupsDomain,
  (substate) => substate
);

const makeSelectOrganizations = () => createSelector(
  selectOrganizationsDomain,
  (substate) => substate
);

export {
  selectGroupsDomain,
  makeSelectGroups,
  makeSelectOrganizations,
};
