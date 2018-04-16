import { take, takeEvery, call, put, select } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { replace } from 'react-router-redux';
import { signUpRequest } from 'api/requests/auth';
import { setProfileData } from 'containers/Profile/redux/actions';
import { submitCreateUserForm } from './actions';
import { } from './constants';

/**
 * Watcher
 */
export default function* watcher() {
  yield takeEvery(submitCreateUserForm.REQUEST, handleUserSignUp);
}

/**
 * Onboarding start: Sign user up
 */

function* handleUserSignUp(action) {
  console.log('action', action);
  try {
    // Start API request
    const response = yield call(signUpRequest, action.payload);
    const { user, token: { access_token } } = response.data; // eslint-disable-line

    // Save profile data for newly created user in state
    yield put(setProfileData(user));

    // Form success
    yield put(submitCreateUserForm.success());

    // Continue to next page
    yield put(replace('/onboarding/create-company'));

  } catch (err) {
    console.log('error', err);
    const formError = new SubmissionError({
      _error: 'Signup failed..', // global form error
    });

    yield put(submitCreateUserForm.failure(formError));
  }
}
