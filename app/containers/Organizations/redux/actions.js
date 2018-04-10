/*
 *
 * Organizations actions
 *
 */

import {
  ORGANIZATIONS_LIST_REQUESTED,
  ORGANIZATIONS_LIST_SUCCEDED,
  ORGANIZATIONS_LIST_FAILED,
} from './constants';

// Organizations
export const organizationsListRequested = () => ({
  type: ORGANIZATIONS_LIST_REQUESTED,
});

export const organizationsListSucceded = () => ({
  type: ORGANIZATIONS_LIST_SUCCEDED,
});

export const organizationsListFailed = (error) => ({
  type: ORGANIZATIONS_LIST_FAILED,
  error,
});

