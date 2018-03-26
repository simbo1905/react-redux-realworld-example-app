/**
 * Auth Sagas
 */

import { SubmissionError } from 'redux-form';
import { call, put, takeEvery } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import AuthModel from 'models/Auth';
const Auth = new AuthModel();

// Requets
import { logInRequest } from 'api/requests/auth';

// Profile
import { setProfileData } from 'containers/Profile/redux/actions';

// Actions
import { submitLoginForm } from './actions';

// Constants
import {
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './constants';



/**
 * Login
 */

// Watch for login attempts
export default function* watcher() {
  yield takeEvery(submitLoginForm.REQUEST, handleLoginSaga); // see details what is REQUEST param below
}

// Handle login
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
    const { user, token: { access_token } } = response.data;
    yield put(setProfileData({
      ...user,
      access_token,
    }));

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
