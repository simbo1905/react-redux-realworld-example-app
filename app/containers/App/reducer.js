/*
 * AppReducer
 */

import {} from './constants';

// The initial state of the App
const initialState = {
  loading: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;
