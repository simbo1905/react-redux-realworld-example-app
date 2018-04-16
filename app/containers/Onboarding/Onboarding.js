/**
 * Onboarding
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import LandingPageWrap from 'components/landingpage/LandingPageWrap';

import Start from './steps/Start';
import Completed from './steps/Completed';
import AcceptTerms from './steps/AcceptTerms';
import CreateDepartments from './steps/CreateDepartments';
import CreateCompany from './steps/CreateCompany';

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
        <Route path={this.childUrl('start')} component={Start} />
        <Route path={this.childUrl('accept-terms')} component={AcceptTerms} />
        <Route path={this.childUrl('create-departments')} component={CreateDepartments} />
        <Route path={this.childUrl('completed')} component={Completed} />
        <Route path={this.childUrl('create-company')} component={CreateCompany} />
        { false && <Redirect exact from="/" to={this.childUrl('start')} />}
      </LandingPageWrap>
    );
  }
}

export default Onboarding;
