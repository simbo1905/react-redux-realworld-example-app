/**
 * Onboarding: Completed
 */

import React, { Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FluidHeader from 'components/landingpage/FluidHeader';
import FluidButton from 'components/landingpage/FluidButton';
import messages from './messages';

class Completed extends Component { /* eslint-disable-line */
  render() {
    return (
      <div className="fluid-content">
        <FluidHeader
          title={<FormattedMessage {...messages.title} />}
          sub={<FormattedMessage {...messages.sub} />}
        />
        <FluidButton hasArrow>
          <FormattedMessage {...messages.buttonLabel} />
        </FluidButton>
      </div>
    );
  }
}

export default Completed;
