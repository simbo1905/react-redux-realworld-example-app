/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

// import storage from 'redux-persist/lib/storage';
//
// const persistConfig = {
//   key: 'uniqkey',
//   storage,
// };

/**
 * Import reducers
 */
import { reducer as formReducer } from 'redux-form';
import appReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import authProvderReducer from 'containers/AuthProvider/redux/reducer';
import qrauthReducer from 'containers/Qrauth/redux/reducer';
import profileReducer from 'containers/Profile/redux/reducer';
import usersReducer from 'containers/Users/redux/reducer';
import reportsReducer from 'containers/Reports/redux/reducer';
import passwordsReducer from 'containers/Passwords/redux/reducer';
import billingReducer from 'containers/Billing/redux/reducer';
import toolsReducer from 'containers/Tools/redux/reducer';
import groupsReducer from 'containers/Groups/redux/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
const routeInitialState = {
  location: null,
};

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return Object.assign(state, {
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
const rootReducer = combineReducers({
  groups: groupsReducer,
  tools: toolsReducer,
  billing: billingReducer,
  reports: reportsReducer,
  passwords: passwordsReducer,
  users: usersReducer,
  auth: authProvderReducer,
  qrauth: qrauthReducer,
  profile: profileReducer,
  form: formReducer,
  route: routeReducer,
  app: appReducer,
  language: languageProviderReducer,
  // ...injectedReducers,
});

export default rootReducer;
