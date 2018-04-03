import { createSelector } from 'reselect';

/**
 * Direct selector to the pageReports state domain
 */
const selectReportsDomain = (state) => state.reports;

/**
 * Other specific selectors
 */


/**
 * Default selector used by PageReports
 */

const makeSelectReports = () => createSelector(
  selectReportsDomain,
  (substate) => substate
);

export default makeSelectReports;
export { selectReportsDomain };
