/**
 * Sign up form
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import isEmail from 'validator/lib/isEmail';
import FluidInput from 'components/landingpage/FluidInput';
import FluidButton from 'components/landingpage/FluidButton';
import { submitCreateUserForm } from 'containers/Onboarding/redux/actions';
import FluidFormWrap from 'components/landingpage/FluidFormWrap';
import messages from '../../messages';

const SignupForm = ({
  handleSubmit,
  submitFailed,
  submitting,
  error,
}) => (
  <FluidFormWrap method="post" onSubmit={handleSubmit(submitCreateUserForm)}>
    <Field
      name="name"
      type="text"
      placeholder="Your name"
      component={FluidInput}
      autoFocus
    />
    <Field
      name="email"
      type="email"
      placeholder="Your email"
      component={FluidInput}
    />
    <Field
      name="password"
      type="password"
      placeholder="Your password"
      component={FluidInput}
    />
    { (false && error && submitFailed) && <div className="alert alert-danger">{ error }</div>}
    <FluidButton hasArrow type="submit" loading={submitting}>
      <FormattedMessage {...messages.buttonFormSubmit} />
    </FluidButton>
  </FluidFormWrap>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitFailed: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string,
};

export default reduxForm({
  form: 'onboardingCreateUserForm',
  validate(values) {
    const errors = {};

    if (!values.name) {
      errors.name = 'Your name is required';
    }

    if (!values.email || !isEmail(values.email)) {
      errors.email = 'You must provide a valid email';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length) {
      errors._error = 'Some errors needs to be fixed.'; /* eslint-disable-line */
    }

    return errors;
  },
})(SignupForm);
