/**
 * Sign up form
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import FluidInput from 'components/landingpage/FluidInput';
import FluidButton from 'components/landingpage/FluidButton';
import { submitConfirmEmailForm } from 'containers/Onboarding/redux/actions';
import FluidFormWrap from 'components/landingpage/FluidFormWrap';
import messages from '../../messages';
import css from './ConfirmEmailForm.scss';

/**
 * Adjust confirmation input a bit if it has values
 */
/* eslint-disable */
const ConfirmationInput = (props) => {
  const className = classnames(
    props.className,
    css.confirmationInput,
    { [css.inputHasValues]: !!props.input.value }
  );
  return (
    <FluidInput {...props} className={className} autoFocus />
  );
};
/* eslint-enable */

const ConfirmationForm = ({
  handleSubmit,
  submitFailed,
  submitting,
  error,
  intl,
}) => {
  const { formatMessage } = intl;

  return (
    <FluidFormWrap method="post" onSubmit={handleSubmit(submitConfirmEmailForm)}>
      <Field
        name="confirmation_code"
        type="number"
        normalize={(value) => value.length <= 8 ? value : value.substr(0, 8)}
        placeholder={formatMessage(messages.inputPlaceholder)}
        component={ConfirmationInput}
      />
      { (error && submitFailed) && <div className="alert alert-danger">{ error }</div>}
      <FluidButton hasArrow type="submit" loading={submitting}>
        <FormattedMessage {...messages.buttonLabel} />
      </FluidButton>
    </FluidFormWrap>
  );
};

ConfirmationForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitFailed: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  intl: intlShape.isRequired,
  profile: PropTypes.object,
};

/**
 * Connect redux form
 */

const withReduxForm = reduxForm({
  form: 'onboardingEmailConfirmationForm',
  validate(values) {
    const errors = {};

    if (!values.confirmation_code) {
      errors.confirmation_code = 'app.containers.onboarding.email_confirmation.error.no_code_entered';
    }

    if (values.confirmation_code && values.confirmation_code.length !== 8) {
      errors.confirmation_code = 'app.containers.onboarding.email_confirmation.error.wrong_digit_count';
      errors._error = 'app.containers.onboarding.email_confirmation.error.wrong_digit_count'; /* eslint-disable-line */
    }

    return errors;
  },
});

/**
 * User ID in inital values so we can
 * use the ID when sending the request
 */
const mapStateToProps = (state) => {
  const profile = state.profile.data;
  return {
    profile,
    initialValues: {
      user_id: profile.id,
      confirmation_code: profile.confirmation_code,
    },
  };
};

const withRedux = connect(mapStateToProps);

export default compose(
  injectIntl,
  withRedux,
  withReduxForm
)(ConfirmationForm);
