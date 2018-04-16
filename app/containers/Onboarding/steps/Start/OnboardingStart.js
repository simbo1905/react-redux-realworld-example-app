/**
 * Onboarding: Start
 */

import React, { Component } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FluidHeader from 'components/landingpage/FluidHeader';
import FluidButton from 'components/landingpage/FluidButton';
import messages from './messages';
import css from './OnboardingStart.scss';
import FormWrap from '../../components/FormWrap';

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
              <FormWrap>
                <FluidButton hasArrow onClick={this.toggleForm}>
                  <FormattedMessage {...messages.buttonGetStarted} />
                </FluidButton>
              </FormWrap>
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
              <FormWrap>
                <FluidButton hasArrow onClick={this.toggleForm}>
                  <FormattedMessage {...messages.buttonFormSubmit} />
                </FluidButton>
              </FormWrap>
            </div>
          )
        }
      </div>
    );
  }
}

export default OnboardingStart;
