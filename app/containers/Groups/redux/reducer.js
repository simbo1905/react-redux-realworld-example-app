/*
 *
 * Groups reducer
 *
 */

import { SubmissionError } from 'redux-form'

import {
  GROUPS_LIST_SUCCEEDED,
  GROUP_CREATE_SUCCEEDED,
  GROUP_CREATE_FAILED, GROUP_INVITE_SUCCEEDED, GROUP_DEATTACH_SUCCEEDED,
} from './constants';

const initialState = {
  list: [],
  current: null,
};

function groupsReducer(state = initialState, action) {
  switch (action.type) {
    case GROUPS_LIST_SUCCEEDED:
      return {
        ...state,
        list: action.groups,
      };
    case GROUP_CREATE_FAILED:
      throw new SubmissionError(action.error);
    default:
      return state;
  }
}

export default groupsReducer;
