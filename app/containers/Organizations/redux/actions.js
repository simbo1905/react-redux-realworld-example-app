/*
 *
 * Organizations actions
 *
 */

import {
  ORGANIZATIONS_LIST_REQUESTED,
  ORGANIZATIONS_LIST_SUCCEEDED,
  ORGANIZATIONS_LIST_FAILED,
  ORGANIZATIONS_CURRENT_CHANGED,
} from './constants';

// Organizations
export const organizationsListRequested = () => ({
  type: ORGANIZATIONS_LIST_REQUESTED,
});

export const organizationsListSucceeded = () => ({
  type: ORGANIZATIONS_LIST_SUCCEEDED,
});

export const organizationsListFailed = (error) => ({
  type: ORGANIZATIONS_LIST_FAILED,
  error,
});

export const organizationsCurrentChangeRequested = (id) => ({
  type: ORGANIZATIONS_CURRENT_CHANGED,
  id,
});

