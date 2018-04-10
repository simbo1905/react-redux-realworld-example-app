import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchOrganizationsRequest
} from 'api/requests/organization';

// Constants
import {
  ORGANIZATIONS_LIST_REQUESTED,
  ORGANIZATIONS_LIST_SUCCEEDED,
  ORGANIZATIONS_LIST_FAILED,
} from './constants';

/**
 * Watcher
 * (Watch for action dispatches)
 */
export default function* watcher() {
  yield takeLatest(ORGANIZATIONS_LIST_REQUESTED, fetchOrganizations);
}

function* fetchOrganizations() {
  try {
    const response = yield call(fetchOrganizationsRequest);
    const organizations = response.data;
    yield put({ type: ORGANIZATIONS_LIST_SUCCEEDED, organizations });
  } catch (e) {
    yield put({ type: ORGANIZATIONS_LIST_FAILED, message: e.message });
  }
}
