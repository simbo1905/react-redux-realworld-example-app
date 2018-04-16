/**
 * Onboarding: Start
 */

import React, { Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FluidHeader from 'components/landingpage/FluidHeader';
import FluidButton from 'components/landingpage/FluidButton';
import messages from './messages';

class OnboardingStart extends Component { /* eslint-disable-line */
  render() {
    return [
      <FluidHeader
        key="header"
        title={<FormattedHTMLMessage {...messages.title} />}
      />,
      <FluidButton key="button" hasArrow>
        <FormattedMessage {...messages.buttonGetStarted} />
      </FluidButton>,
    ];
  }
}

export default OnboardingStart;
