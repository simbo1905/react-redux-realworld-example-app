/**
 * Auth Sagas
 */

import { SubmissionError } from 'redux-form';
import { call, put, takeEvery } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import AuthModel from 'models/Auth';

// Requests
import { logInRequest, logOutRequest } from 'api/requests/auth';

// Actions
import { setProfileData, resetProfile } from 'containers/Profile/redux/actions';
import { submitLoginForm } from './actions';

// Constants
import {
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_BEGIN,
  AUTH_RESET,
} from './constants';

// Setup auth model
const Auth = new AuthModel();

/**
 * Watcher
 * (Watch for action dispatches)
 */
export default function* watcher() {
  yield takeEvery(submitLoginForm.REQUEST, handleLoginSaga);
  yield takeEvery(LOGOUT_BEGIN, handleLogOut);
}

/**
 * Login
 */

// Handle the login
function* handleLoginSaga(action) {
  const { id, email, password } = action.payload;

  try {
    // Set login in progress
    yield put({ type: LOGIN_IN_PROGRESS });

    // Call login API with credentials
    const response = yield call(logInRequest, { id, email, password });

    // If we have success
    yield put(submitLoginForm.success());

    // Mark successful login
    yield put({ type: LOGIN_SUCCESS });

    // Save profile data from response
    const { user, token: { access_token } } = response.data; // eslint-disable-line
    yield put(setProfileData(user));

    // Save auth token in localStorage
    Auth.setToken(access_token);

    // Redirect user on login
    yield put(replace('/dashboard'));

  // If our request fails
  } catch (error) {
    const formError = new SubmissionError({
      _error: 'Login failed, please check your credentials and try again.',
    });

    yield put(submitLoginForm.failure(formError));
    yield put({ type: LOGIN_FAILED });
  }
}

/**
 * Log out
 */
function* handleLogOut() {
  // Clear out local data
  yield put(resetProfile());
  yield put({ type: AUTH_RESET });

  // Begin log out request
  try {
    yield call(logOutRequest);
  } catch (error) {
    console.log('Error while logging out', error.response); //eslint-disable-line
  }

  // Remove token from local storage
  Auth.removeToken();

  // Redirect to home
  yield put(replace('/login'));
}
