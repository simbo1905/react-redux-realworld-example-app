/**
 * withGuard
 *
 * A higher order component for checking for authenticated users
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthModel from 'models/Auth';
import { makeSelectProfile } from 'containers/Profile/redux/selectors';
const Auth = new AuthModel();

export default function (ComposedComponent) {
  class Authentication extends Component {
      static propTypes = {
        profile: PropTypes.object,
      }

      static contextTypes = {
        router: PropTypes.object,
      }

      componentWillMount() {
        this.redirectIfNotAuthenticated();
      }

      componentWillUpdate() {
        this.redirectIfNotAuthenticated();
      }

      /**
       * Check if user can access by checking
       * if there's profile data in the store
       * and an access token in localStorage (via. Auth model)
       */
      userCanAccess = () => {
        const { profile } = this.props;
        const authenticated = Auth.isAuthenticated() === true;
        return authenticated && profile;
      };

      /**
       * Redirect if user isn't authenticated
       */
      redirectIfNotAuthenticated = () => {
        if (!this.userCanAccess()) {
          this.context.router.history.push('/login');
        }
      }

      render() {
        if (this.userCanAccess()) {
          return <ComposedComponent {...this.props} />;
        }

        return null;
      }
  }

  const mapStateToProps = (state) => {
    const getProfile = makeSelectProfile();
    return {
      profile: getProfile(state),
    };
  };

  return connect(mapStateToProps)(Authentication);
}
