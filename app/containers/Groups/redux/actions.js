/*
 *
 * Groups actions
 *
 */

import {
  GROUPS_LIST_REQUESTED,
  GROUPS_LIST_SUCCEEDED,
  GROUPS_LIST_FAILED,

  GROUP_CREATE_REQUESTED,
  GROUP_CREATE_SUCCEEDED,
  GROUP_CREATE_FAILED,

  GROUP_REMOVE_REQUESTED,
  GROUP_REMOVE_SUCCEEDED,
  GROUP_REMOVE_FAILED,
} from './constants';

// Groups
export const groupsListRequested = (organizationId) => ({
  type: GROUPS_LIST_REQUESTED,
  organizationId,
});

export const groupsListSucceeded = (groups) => ({
  type: GROUPS_LIST_SUCCEEDED,
  groups,
});

export const groupsListFailed = (error) => ({
  type: GROUPS_LIST_FAILED,
  error,
});

// Save
export const groupCreateRequested = (formId, group) => ({
  type: GROUP_CREATE_REQUESTED,
  formId,
  group,
});
export const groupCreateSucceeded = (group) => ({
  type: GROUP_CREATE_SUCCEEDED,
  group,
});
export const groupCreateFailed = (error) => ({
  type: GROUP_CREATE_FAILED,
  error,
});
// Remove
export const groupRemoveRequested = (group) => ({
  type: GROUP_REMOVE_REQUESTED,
  group,
});
export const groupRemoveSucceeded = (group) => ({
  type: GROUP_REMOVE_SUCCEEDED,
  group,
});
export const groupRemoveFailed = (error) => ({
  type: GROUP_REMOVE_FAILED,
  error,
});
