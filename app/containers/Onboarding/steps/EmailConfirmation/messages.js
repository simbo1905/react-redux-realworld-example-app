/*
 * Onboarding Start translations
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.containers.onboarding.email_confirmation.title',
    defaultMessage: 'Please confirm your email address',
  },
  sub: {
    id: 'app.containers.onboarding.email_confirmation.sub',
    defaultMessage: 'We sent you an email with a confirmation code. Please enter the 8 digit code here to confirm your email.',
  },
  buttonLabel: {
    id: 'app.containers.onboarding.email_confirmation.buttonLabel',
    defaultMessage: 'Confirm Email',
  },
  inputPlaceholder: {
    id: 'app.containers.onboarding.email_confirmation.buttonLabel',
    defaultMessage: 'Enter 8 digit confirmation code',
  },
  formErrorWrongCode: {
    id: 'app.containers.onboarding.email_confirmation.error.invalid_code',
    defaultMessage: 'The confirmation code was not correct',
  },
  formUnknownError: {
    id: 'app.containers.onboarding.email_confirmation.error.unknown_error',
    defaultMessage: 'An unknown error occurred. Please try again later or contact us by email. Sorry for the inconvenience.',
  },
});
