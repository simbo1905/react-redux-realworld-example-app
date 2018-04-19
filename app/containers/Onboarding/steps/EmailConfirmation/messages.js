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
    defaultMessage: 'We sent you an email with a confirmation code. <br />Please enter the 8 digit code in the field below to confirm your email.',
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
  formConfirmationErrorDigits: {
    id: 'app.containers.onboarding.email_confirmation.error.wrong_digit_count',
    defaultMessage: 'The confirmation code must be 8 digits in total.',
  },
  formConfirmationErrorNoCode: {
    id: 'app.containers.onboarding.email_confirmation.error.no_code_entered',
    defaultMessage: 'You must enter the 8 digit confirmation number you received by email.',
  },
});
