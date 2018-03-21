import { createSelector } from 'reselect';

/**
 * Direct selector to the Groups state domain
 */
const selectGroupsDomain = (state) => state.groups;

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

export default makeSelectGroups;
export {
  selectGroupsDomain,
};
