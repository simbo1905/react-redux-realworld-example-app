import { createSelector } from 'reselect';

/**
 * Direct selector to the pageOnboarding state domain
 */
const selectOnboardingDomain = (state) => state.company;

/**
 * Other specific selectors
 */


/**
 * Default selector used by PageOnboarding
 */

const makeSelectOnboarding = () => createSelector(
  selectOnboardingDomain,
  (substate) => substate
);

export default makeSelectOnboarding;
export { selectOnboardingDomain };
