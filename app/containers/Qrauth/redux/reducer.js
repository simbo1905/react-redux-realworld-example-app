/*
 *
 * Qrauth reducer
 *
 */


import { CHECK_QR_TOKEN } from './constants';

const initialState = {};

function qrauthReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_QR_TOKEN:
      return state;
    default:
      return state;
  }
}

export default qrauthReducer;
