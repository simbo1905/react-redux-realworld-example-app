/**
 * Onboarding: Start
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FluidHeader from 'components/landingpage/FluidHeader';
import FluidButton from 'components/landingpage/FluidButton';
import FluidFormWrap from 'components/landingpage/FluidFormWrap';

import { connect } from 'react-redux';

import messages from './messages';
import css from './OnboardingStart.scss';
import SignupForm from './components/SignupForm';

class OnboardingStart extends Component { /* eslint-disable-line */
  static propTypes = {
    loading: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
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
              <SignupForm
                loading={this.props.loading}
              />
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.onboarding.loading,
});

export default connect(mapStateToProps)(OnboardingStart);
