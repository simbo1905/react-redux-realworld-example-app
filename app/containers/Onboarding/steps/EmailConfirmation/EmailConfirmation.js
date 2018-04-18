/**
 * Onboarding: Email Confirmation
 */

import React, { Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FluidHeader from 'components/landingpage/FluidHeader';

import messages from './messages';
import css from './EmailConfirmation.scss';
import ConfirmEmailForm from './components/ConfirmEmailForm';

class EmailConfirmation extends Component { /* eslint-disable-line */
  render() {
    return (
      <div>
        <div className={css.section}>
          <FluidHeader
            title={<FormattedMessage {...messages.title} />}
            sub={<FormattedHTMLMessage {...messages.sub} />}
          />
        </div>
        <ConfirmEmailForm />
      </div>
    );
  }
}

export default EmailConfirmation;
