import { createSelector } from 'reselect';

/**
 * Direct selector to the billing state domain
 */
const selectBillingDomain = (state) => state.billing;

/**
 * Other specific selectors
 */


/**
 * Default selector used by billing
 */

const makeSelectBilling = () => createSelector(
  selectBillingDomain,
  (substate) => substate
);

export default makeSelectBilling;
export { selectBillingDomain };
