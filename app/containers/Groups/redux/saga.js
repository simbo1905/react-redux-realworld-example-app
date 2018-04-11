import { call, put, takeLatest } from 'redux-saga/effects';
import { startSubmit, stopSubmit, setSubmitSucceeded } from 'redux-form';

import {
  fetchGroupsRequest,
  createGroupRequest,
  removeGroupRequest,
} from 'api/requests/groups';

import {
  groupsListSucceeded,
  groupsListFailed,
  groupCreateSucceeded,
  groupCreateFailed,
  groupRemoveSucceeded,
  groupRemoveFailed,
} from './actions';

// Constants
import {
  GROUPS_LIST_REQUESTED,
  GROUP_CREATE_REQUESTED,
  GROUP_REMOVE_REQUESTED,
} from './constants';


import { ORGANIZATIONS_LIST_SUCCEEDED } from '../../Organizations/redux/constants';
/**
 * Watcher
 * (Watch for action dispatches)
 */
export default function* watcher() {
  yield takeLatest(GROUPS_LIST_REQUESTED, fetchGroups);
  yield takeLatest(ORGANIZATIONS_LIST_SUCCEEDED, fetchGroupsAfterOrganizationsLoaded);
  yield takeLatest(GROUP_CREATE_REQUESTED, createGroup);
  yield takeLatest(GROUP_REMOVE_REQUESTED, removeGroup);
}

function* fetchGroupsAfterOrganizationsLoaded(action) {
  const { organizations } = action;
  if (organizations.length) {
    yield fetchGroups({ organizationId: organizations[0].id });
  }
}

function* fetchGroups(action) {
  try {
    const response = yield call(fetchGroupsRequest, action.organizationId);
    const groups = response.data;
    yield put(groupsListSucceeded(groups));
  } catch (e) {
    yield put(groupsListFailed(e));
  }
}

function* createGroup(action) {
  try {
    yield put(startSubmit(action.formId));
    const response = yield call(createGroupRequest, action.group);
    const group = response.data;
    yield put(groupCreateSucceeded(group));
    yield put(stopSubmit(action.formId));
    yield put(setSubmitSucceeded(action.formId));
  } catch (error) {
    yield put(groupCreateFailed(error));
    yield put(stopSubmit(action.formId, error));
  }
}

function* removeGroup(action) {
  try {
    yield call(removeGroupRequest, action.group.id);
    yield put(groupRemoveSucceeded(action.group));
    yield put({ type: GROUPS_LIST_REQUESTED, organizationId: action.group.organization_id });
  } catch (error) {
    yield put(groupRemoveFailed(error));
  }
}
