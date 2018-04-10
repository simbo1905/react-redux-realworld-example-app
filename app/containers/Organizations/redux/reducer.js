/*
 *
 * Organizations reducer
 *
 */


import {
  ORGANIZATIONS_LIST_REQUESTED,
  ORGANIZATIONS_LIST_SUCCEEDED,
  ORGANIZATIONS_CURRENT_CHANGED,
} from './constants';

const initialState = {
  isLoaded: false,
  list: [],
  currentId: null,
};

function organizationsReducer(state = initialState, action) {
  switch (action.type) {
    case ORGANIZATIONS_LIST_REQUESTED:
      return {
        ...state,
        isLoaded: false,
      };
    case ORGANIZATIONS_CURRENT_CHANGED:
      return {
        ...state,
        currentId: action.id,
      };
    case ORGANIZATIONS_LIST_SUCCEEDED:
      return {
        ...state,
        isLoaded: true,
        list: action.organizations,
        currentId: action.organizations.length > 0 ? action.organizations[0].id : null,
      };
    default:
      return state;
  }
}

export default organizationsReducer;
