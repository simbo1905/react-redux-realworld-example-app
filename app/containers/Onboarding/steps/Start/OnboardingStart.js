/**
 * Onboarding: Start
 */

import React, { Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FluidHeader from 'components/landingpage/FluidHeader';
import FluidButton from 'components/landingpage/FluidButton';
import FluidFormWrap from 'components/landingpage/FluidFormWrap';
import messages from './messages';
import css from './OnboardingStart.scss';
import SignupForm from './components/SignupForm';

class OnboardingStart extends Component { /* eslint-disable-line */
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({ showForm: true });
  }

  render() {
    const { showForm } = this.state;
    return (
      <div>
        { !showForm &&
          (
            <div className={css.section}>
              <FluidHeader title={<FormattedHTMLMessage {...messages.title} />} />
              <FluidFormWrap>
                <FluidButton rounded hasArrow onClick={this.toggleForm}>
                  <FormattedMessage {...messages.buttonGetStarted} />
                </FluidButton>
              </FluidFormWrap>
            </div>
          )
        }
        { showForm &&
          (
            <div className={css.section}>
              <FluidHeader
                title={<FormattedHTMLMessage {...messages.title2} />}
                sub={<FormattedHTMLMessage {...messages.sub} />}
              />
              <SignupForm />
            </div>
          )
        }
      </div>
    );
  }
}

export default OnboardingStart;
