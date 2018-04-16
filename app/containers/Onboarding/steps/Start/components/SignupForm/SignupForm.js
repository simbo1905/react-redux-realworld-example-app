/**
 * Sign up form
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm, Form } from 'redux-form';
import FluidInput from 'components/landingpage/FluidInput';
import FluidButton from 'components/landingpage/FluidButton';
import { submitCreateUserForm } from 'containers/Onboarding/redux/actions';
import FluidFormWrap from 'components/landingpage/FluidFormWrap';
import messages from '../../messages';

const SignupForm = ({ handleSubmit }) => (
  <FluidFormWrap onSubmit={handleSubmit(submitCreateUserForm)}>
    <Field
      name="name"
      type="text"
      placeholder="Your name"
      component={FluidInput}
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
    <FluidButton hasArrow type="submit">
      <FormattedMessage {...messages.buttonFormSubmit} />
    </FluidButton>
  </FluidFormWrap>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'onboardingCreateUserForm',
})(SignupForm);
