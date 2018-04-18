/*
 * Onboarding Actions
 */

import { createFormAction } from 'redux-form-saga';
import {
  ONBOARDING_USER_SIGNUP_BEGIN,
} from './constants';

/**
 * Create user
 */

// Submit login form (redux-form action)
export const submitCreateUserForm = createFormAction('onboardingCreateUserForm');

/**
 * Confirm Email
 */

export const submitConfirmEmailForm = createFormAction('onboardingEmailConfirmationForm');

/**
 * Create company
 */

export const submitCreateCompanyForm = createFormAction('onboardingCreateCompanyForm');