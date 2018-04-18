/**
 * Create Company Form
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import FluidCheckbox from 'components/landingpage/FluidCheckbox';
import FluidInput from 'components/landingpage/FluidInput';
import FluidButton from 'components/landingpage/FluidButton';
import FluidMessage from 'components/landingpage/FluidMessage';
import { submitCreateCompanyForm } from 'containers/Onboarding/redux/actions';
import FluidFormWrap from 'components/landingpage/FluidFormWrap';
import messages from '../../messages';

const ConfirmationForm = ({
  handleSubmit,
  submitFailed,
  submitting,
  error,
  intl,
}) => {
  const { formatMessage } = intl;
  const checkboxLabel = (
    <span>
      I agree to the <a tabIndex="-1" href="https://uniqkey.eu/terms-and-conditions" target="_blank">Terms and Conditions</a>
    </span>
  );
  return (
    <FluidFormWrap method="post" onSubmit={handleSubmit(submitCreateCompanyForm)}>
      <Field
        name="companyName"
        type="text"
        placeholder={formatMessage(messages.inputPlaceholder)}
        component={FluidInput}
        autoFocus
      />
      <Field
        name="acceptTerms"
        id="accept-terms-and-conditions"
        label={checkboxLabel}
        component={FluidCheckbox}
      />
      { (error && submitFailed) && <FluidMessage translationObject={error} />}
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
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  intl: intlShape.isRequired,
};

/**
 * Connect redux form
 */

const withReduxForm = reduxForm({
  form: 'onboardingCreateCompanyForm',
  validate(values) {
    const errors = {};

    if (!values.companyName) {
      errors.companyName = true;
    }

    if (!values.acceptTerms) {
      errors.acceptTerms = true;
    }

    return errors;
  },
});


export default compose(
  injectIntl,
  withReduxForm
)(ConfirmationForm);
