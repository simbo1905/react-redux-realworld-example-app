import { call, put, takeEvery } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import AuthModel from 'models/Auth';

import { qrRequest } from 'api/requests/auth';
import { setProfileData } from 'containers/Profile/redux/actions';

// Constants
import { CHECK_QR_TOKEN } from './constants';

import { LOGIN_SUCCESS } from '../../AuthProvider/redux/constants';

// Setup auth model
const Auth = new AuthModel();

/**
 * Watcher
 * (Watch for action dispatches)
 */
export default function* watcher() {
  yield takeEvery(CHECK_QR_TOKEN, handleQRCheck);
}

// Handle QR token check
function* handleQRCheck(action) {
  const { guid } = action.payload;
  try {
    // Call login API with credentials
    const response = yield call(qrRequest, { guid });

    // Mark successful login
    yield put({ type: LOGIN_SUCCESS });

    // Save profile data from response
    const { token: { access_token }, user } = response.data; // eslint-disable-line
    yield put(setProfileData(user));

    // Save auth token in localStorage
    Auth.setToken(access_token);

    // Redirect user on login
    yield put(replace('/dashboard'));

    // If our request fails
  } catch (error) {
    // console.log(error);
  }
}
