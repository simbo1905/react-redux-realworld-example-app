/**
 * Onboarding
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import injectSaga from 'utils/injectSaga';

import LandingPageWrap from 'components/landingpage/LandingPageWrap';

import Start from './steps/Start';
import EmailConfirmation from './steps/EmailConfirmation';
import Completed from './steps/Completed';
import CreateDepartments from './steps/CreateDepartments';
import CreateCompany from './steps/CreateCompany';

import saga from './redux/saga';

class Onboarding extends Component {
  static propTypes = {
    match: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.childUrl = this.childUrl.bind(this);
    this.redirectRoute = this.redirectRoute.bind(this);
  }

  childUrl(path) {
    return `${this.props.match.url}/${path}`;
  }

  /**
   * Determine which page to redirect page to on mount
   * or on invalid routes
   */
  redirectRoute() {
    return this.childUrl('start');
  }

  render() {
    return (
      <LandingPageWrap gradient="blue-violet">
        <Route path={this.childUrl('start')} component={Start} />
        <Route path={this.childUrl('email-confirmation')} component={EmailConfirmation} />
        <Route path={this.childUrl('create-departments')} component={CreateDepartments} />
        <Route path={this.childUrl('create-company')} component={CreateCompany} />
        <Route path={this.childUrl('completed')} component={Completed} />
        <Route exact path="/onboarding/" component={() => <Redirect to={this.redirectRoute()} />} />
      </LandingPageWrap>
    );
  }
}


const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'onboarding', saga });

export default compose(
  withSaga,
  withConnect,
)(Onboarding);
