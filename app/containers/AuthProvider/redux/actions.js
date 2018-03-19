/*
 *
 * Auth actions
 *
 */

import { createFormAction } from 'redux-form-saga';
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGIN_IN_PROGRESS,
} from './constants';

/**
 * Login
 */

// Submit login form
export const submitLoginForm = createFormAction('login');

// Login in progress
export const loginInProgress = () => ({
  type: LOGIN_IN_PROGRESS,
});

// Login error
export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  error,
});

// Login success
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

/**
 * Log out
 */
