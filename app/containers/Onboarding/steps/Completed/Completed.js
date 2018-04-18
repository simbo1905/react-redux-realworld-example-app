/**
 * Onboarding: Completed
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FluidHeader from 'components/landingpage/FluidHeader';
import FluidButton from 'components/landingpage/FluidButton';
import FluidFormWrap from 'components/landingpage/FluidFormWrap';
import messages from './messages';

class Completed extends Component { /* eslint-disable-line */
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.goToDashboard = this.goToDashboard.bind(this);
  }

  goToDashboard() {
    this.context.router.history.replace('/dashboard');
  }

  render() {
    return (
      <div className="fluid-content">
        <FluidHeader
          title={<FormattedMessage {...messages.title} />}
          sub={<FormattedHTMLMessage {...messages.sub} />}
        />
        <FluidFormWrap>
          <FluidButton onClick={this.goToDashboard} hasArrow>
            <FormattedMessage {...messages.buttonLabel} />
          </FluidButton>
        </FluidFormWrap>
      </div>
    );
  }
}

export default Completed;
