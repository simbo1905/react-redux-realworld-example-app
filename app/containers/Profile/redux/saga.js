import { take, call, put } from 'redux-saga/effects';
import { getProfileRequest } from 'api/requests/user';
import { setProfileData } from './actions';
import { PROFILE_FETCH_BEGIN, PROFILE_FETCH_SUCCESS, PROFILE_FETCH_ERROR } from './constants';

/**
 * Fetch profile
 */

export default function* fetchProfile() {
  // Look for action to be dispatched
  yield take(PROFILE_FETCH_BEGIN);

  try {
    // Call API
    const response = yield call(getProfileRequest);

    // Request successful - Set data
    yield put(setProfileData(response.data));
    yield put({ type: PROFILE_FETCH_SUCCESS });

  // Catch any error and submit error action
  } catch (error) {
    yield put({ type: PROFILE_FETCH_ERROR, error: error.response.data });
  }
}
