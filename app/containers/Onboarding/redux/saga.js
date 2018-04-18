import { take, takeEvery, call, put, select } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { replace } from 'react-router-redux';
import { signUpRequest } from 'api/requests/auth';
import { confirmUserRequest } from 'api/requests/user';
import { setProfileData } from 'containers/Profile/redux/actions';
import { submitCreateUserForm, submitConfirmEmailForm } from './actions';
import { } from './constants';
import confirmationMessages from '../steps/EmailConfirmation/messages';
console.log('confirmationMessages', confirmationMessages);
/**
 * Watcher
 */
export default function* watcher() {
  yield takeEvery(submitCreateUserForm.REQUEST, handleUserSignUp);
  yield takeEvery(submitConfirmEmailForm.REQUEST, handleEmailConfirmation);
}

/**
 * Onboarding start: Sign user up
 */

function* handleUserSignUp(action) {
  try {
    // Start API request
    const response = yield call(signUpRequest, action.payload);
    const { user, token: { access_token } } = response.data; // eslint-disable-line

    // Save profile data for newly created user in state
    yield put(setProfileData(user));

    // Form success
    yield put(submitCreateUserForm.success());

    // Continue to next page
    yield put(replace('/onboarding/email-confirmation'));

  } catch (err) {
    console.log('error', err);
    const formError = new SubmissionError({
      _error: 'Signup failed..', // global form error
    });

    yield put(submitCreateUserForm.failure(formError));
  }
}

/**
 * Email confirmation
 */

function* handleEmailConfirmation(action) {
  const { user_id, confirmation_code } = action.payload; /* eslint-disable-line camelcase */

  try {
    // Submit request
    const response = yield call(confirmUserRequest, user_id, confirmation_code);

    // Wrong confirmation code
    if (response.data.message === 'Unknown confirmation code') {
      yield put(submitConfirmEmailForm.failure(new SubmissionError({
        confirmation_code: true,
        _error: confirmationMessages.formErrorWrongCode,
      })));

    // For now we just redirect if the user tries to confirm twice
    // We'ææ probably make sure this isn't possible at a later point
    } else if (response.data.message === 'User already confirmed') {
      yield put(replace('/onboarding/create-company'));
    // Success
    } else {
      yield put(replace('/onboarding/create-company'));
    }
  } catch (err) {
    const formError = new SubmissionError({
      _error: confirmationMessages.formUnknownError,
    });

    yield put(submitConfirmEmailForm.failure(formError));
  }
}
