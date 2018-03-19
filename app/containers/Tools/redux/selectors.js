import { createSelector } from 'reselect';

/**
 * Direct selector to the pageTools state domain
 */
const selectToolsDomain = (state) => state.tools;

/**
 * Other specific selectors
 */


/**
 * Default selector used by PageTools
 */

const makeSelectTools = () => createSelector(
  selectToolsDomain,
  (substate) => substate
);

export default makeSelectTools;
export {
  selectToolsDomain,
};
