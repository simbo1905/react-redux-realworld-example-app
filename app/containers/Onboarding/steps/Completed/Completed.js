/**
 * Onboarding: Completed
 */

import React, { Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FluidHeader from 'components/landingpage/FluidHeader';
import messages from './messages';

class Completed extends Component { /* eslint-disable-line */
  render() {
    return (
      <div className="fluid-content">
        <FluidHeader
          title={<FormattedMessage {...messages.title} />}
          sub={<FormattedHTMLMessage {...messages.sub} />}
        />
      </div>
    );
  }
}

export default Completed;
