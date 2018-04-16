import { take, takeEvery, call, put, select } from 'redux-saga/effects';
import { submitCreateUserForm } from './actions';

/**
 * Watcher
 */
export default function* watcher() {
  yield takeEvery(submitCreateUserForm.REQUEST, handleUserSignUp);
}

/**
 * User sign up
 */

function* handleUserSignUp(action) {
console.log('yo!', action);
}
