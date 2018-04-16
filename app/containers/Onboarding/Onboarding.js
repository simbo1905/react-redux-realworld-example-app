/**
 * Onboarding
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route,  Redirect } from 'react-router-dom';

import LandingPageWrap from 'components/landingpage/LandingPageWrap';

import Start from './steps/Start';

class Onboarding extends Component {
  static propTypes = {
    match: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.childUrl = this.childUrl.bind(this);
  }

  childUrl(path) {
    return `${this.props.match.url}/${path}`;
  }

  render() {
    return (
      <LandingPageWrap gradient="blue-violet">
        <Redirect from="" to={this.childUrl('start')} />
        <Route path={this.childUrl('start')} component={Start} />
      </LandingPageWrap>
    );
  }
}

export default Onboarding;
