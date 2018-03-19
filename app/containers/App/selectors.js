/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.app;

const selectRoute = (state) => state.route;

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location,
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectLocation,
};
