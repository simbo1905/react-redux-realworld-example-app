/*
 *
 * Organizations reducer
 *
 */


import {
  ORGANIZATIONS_LIST_SUCCEDED,
} from './constants';

const initialState = {
  list: [],
};

function organizationsReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ORGANIZATIONS_LIST_SUCCEDED:
      console.log(state);
      return {
        ...state,
        list: action.organizations,
      };
    default:
      return state;
  }
}

export default organizationsReducer;
