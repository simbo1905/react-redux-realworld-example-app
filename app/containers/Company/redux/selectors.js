import { createSelector } from 'reselect';

/**
 * Direct selector to the pageCompany state domain
 */
const selectCompanyDomain = (state) => state.company;

/**
 * Other specific selectors
 */


/**
 * Default selector used by PageCompany
 */

const makeSelectCompany = () => createSelector(
  selectCompanyDomain,
  (substate) => substate
);

export default makeSelectCompany;
export { selectCompanyDomain };
